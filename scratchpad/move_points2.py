"""Move the N/S compass points out into the text band — seam-free.

Key idea vs the first attempt: never *draw* the ring back. The ring is a smooth
gold band with a gentle top-to-bottom gradient, so a redrawn arc always shows a
seam. Instead we copy the ring from the angle immediately next to the gap and
rotate it in — at 6-10 degrees away the colour is identical, so the repair is
invisible. Everything is sampled bilinearly in polar space.
"""
import sys, os, math
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from PIL import Image, ImageFilter
from ig_edit import load_stamp

RING_IN, RING_OUT = 311, 319
DIA_CENTRE = 322

def isgold(p):
    r,g,b,a=p; return a>40 and r>150 and g>110 and b<150 and (r-b)>45

def sample(px,S,x,y):
    """Bilinear RGBA sample."""
    if x<0 or y<0 or x>=S-1 or y>=S-1: return (0,0,0,0)
    x0,y0=int(x),int(y); fx,fy=x-x0,y-y0
    out=[]
    for i in range(4):
        a=px[x0,y0][i]*(1-fx)+px[x0+1,y0][i]*fx
        b=px[x0,y0+1][i]*(1-fx)+px[x0+1,y0+1][i]*fx
        out.append(int(round(a*(1-fy)+b*fy)))
    return tuple(out)

def sample_L(px,S,x,y):
    if x<0 or y<0 or x>=S-1 or y>=S-1: return 0
    x0,y0=int(x),int(y); fx,fy=x-x0,y-y0
    a=px[x0,y0]*(1-fx)+px[x0+1,y0]*fx
    b=px[x0,y0+1]*(1-fx)+px[x0+1,y0+1]*fx
    return a*(1-fy)+b*fy

def build_masks(px,S):
    """Diamond-only mask: erode away the thin ring, keep the fat points."""
    gold=Image.new("L",(S,S),0); gp=gold.load()
    for y in range(S):
        for x in range(S):
            if isgold(px[x,y]): gp[x,y]=255
    core =gold.filter(ImageFilter.MinFilter(11))
    grown=core.filter(ImageFilter.MaxFilter(17))
    gr=grown.load()
    m=Image.new("L",(S,S),0); mp=m.load()
    for y in range(S):
        for x in range(S):
            if gr[x,y] and gp[x,y]: mp[x,y]=255
    return m.filter(ImageFilter.GaussianBlur(0.6))

def diamond_halfwidth(mk,S,C,axis,r_lo,r_hi):
    """How many degrees each side of the axis the point occupies."""
    w=0.0
    off=0.0
    while off<25:
        hit=False
        for R in range(r_lo,r_hi):
            a=math.radians(axis+off)
            if sample_L(mk,S,C+R*math.cos(a),C+R*math.sin(a))>40: hit=True; break
        if hit: w=off
        off+=0.25
    return w

def move_points(img,new_centre,scale=1.0,axes=(-90,90)):
    S=img.size[0]; C=S/2
    src=img.copy(); spx=src.load()
    out=img.copy(); opx=out.load()
    mask=build_masks(spx,S); mk=mask.load()

    for axis in axes:
        # how wide is the point where it crosses the ring?
        W=diamond_halfwidth(mk,S,C,axis,RING_IN-6,RING_OUT+7)
        gap=W+1.2                       # clear a hair more than the point
        shift=2*gap+3.0                 # copy the ring from just beyond the gap

        # ---- 1. clear the wedge ------------------------------------------
        # Erase GOLD only — the lettering is white, so it is never at risk.
        # Clearing everything gold (not just the mask) removes the point, its
        # thin inner tip and the ring stub in one go, so nothing is left behind.
        ERASE = 6.0
        for y in range(S):
            for x in range(S):
                p=opx[x,y]
                if p[3]<8 or not isgold(p): continue
                dx,dy=x-C,y-C
                r=math.hypot(dx,dy)
                if not (200<=r<=430): continue
                da=(math.degrees(math.atan2(dy,dx))-axis+180)%360-180
                if abs(da)<=ERASE: opx[x,y]=(0,0,0,0)

        # ---- 2. heal the ring by rotating a clean neighbouring wedge in ---
        # Repair wider than we erased so the antialiased edges are covered too.
        REPAIR = ERASE+1.5
        src_shift = 2*REPAIR+3.0
        for y in range(int(C-RING_OUT-5),int(C+RING_OUT+6)):
            for x in range(int(C-RING_OUT-5),int(C+RING_OUT+6)):
                dx,dy=x-C,y-C
                r=math.hypot(dx,dy)
                if not (RING_IN-4<=r<=RING_OUT+4): continue
                da=(math.degrees(math.atan2(dy,dx))-axis+180)%360-180
                if abs(da)>REPAIR: continue
                a_src=math.radians(axis+da+(src_shift if da>=0 else -src_shift))
                opx[x,y]=sample(spx,S,C+r*math.cos(a_src),C+r*math.sin(a_src))

        # ---- 3. set the point down at its new radius ----------------------
        span=int(150*scale)+8
        for y in range(S):
            for x in range(S):
                dx,dy=x-C,y-C
                r_t=math.hypot(dx,dy)
                if abs(r_t-new_centre)>span: continue
                da=(math.degrees(math.atan2(dy,dx))-axis+180)%360-180
                if abs(da)>20: continue
                r_s=DIA_CENTRE+(r_t-new_centre)/scale
                a_s=math.radians(axis+da/scale)
                xs=C+r_s*math.cos(a_s); ys=C+r_s*math.sin(a_s)
                al=sample_L(mk,S,xs,ys)
                if al<8: continue
                col=sample(spx,S,xs,ys)
                k=min(1.0,al/255.0)
                if k>=0.99: opx[x,y]=col
                else:                                  # feather the edge
                    old=opx[x,y]
                    opx[x,y]=tuple(int(round(col[i]*k+old[i]*(1-k))) for i in range(4))
    return out

if __name__=="__main__":
    HOME=os.path.expanduser("~")
    base=load_stamp()
    outs={"A-current":base.copy(),
          "B-in-text":move_points(base,379,0.82),
          "C-lifted": move_points(base,352,0.95)}
    for n,i in outs.items(): i.save(f"scratchpad/pt_{n}.png"); print("built",n)

    from PIL import ImageDraw
    S=base.size[0]; T=470
    sheet=Image.new("RGB",(T*3+40,T+52),(22,34,30)); d=ImageDraw.Draw(sheet)
    for i,(n,im) in enumerate(outs.items()):
        bg=Image.new("RGBA",(S,S),(22,34,30,255)); bg.alpha_composite(im)
        sheet.paste(bg.convert("RGB").resize((T,T),Image.LANCZOS),(10+i*(T+10),42))
        d.text((16+i*(T+10),16),n,fill=(255,255,255))
    sheet.save(f"{HOME}/Downloads/stamp-points-v2.png")

    # tight zoom on the top gap so the ring repair can be judged
    zs=[]
    for n,im in outs.items():
        bg=Image.new("RGBA",(S,S),(22,34,30,255)); bg.alpha_composite(im)
        c=bg.convert("RGB").crop((int(S*0.30),int(S*0.02),int(S*0.70),int(S*0.34)))
        zs.append((n,c.resize((c.width*2,c.height*2),Image.LANCZOS)))
    w=zs[0][1].width; h=zs[0][1].height
    z=Image.new("RGB",(w,h*3+40),(22,34,30)); dz=ImageDraw.Draw(z)
    for i,(n,c) in enumerate(zs):
        z.paste(c,(0,i*(h+13)+13)); dz.text((8,i*(h+13)+1),n,fill=(255,255,255))
    z.save(f"{HOME}/Downloads/stamp-points-v2-zoom.png")
    print("sheets saved")
