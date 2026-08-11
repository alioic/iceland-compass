"""Move the N/S compass points outward into the text band.

The diamonds currently sit on the gold ring. This lifts them radially so they
fill the gap between the words, redrawing the ring arc they leave behind.
"""
import sys, os, math
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from PIL import Image, ImageDraw
from ig_edit import load_stamp

RING_IN, RING_OUT = 311, 319
DIA_CENTRE = 322                     # current radial centre of the diamonds
WEDGE = 15                           # degrees each side of the axis to process

def isgold(p):
    r,g,b,a=p; return a>40 and r>150 and g>110 and b<150 and (r-b)>45

def diamond_mask(px,S,C,axis):
    """Dense mask of the diamond only.

    The ring is a thin 9px band; the diamond is a fat blob. Eroding the gold
    silhouette dissolves the ring but leaves the diamond's core, which is then
    dilated back and intersected with the original gold — so we recover the
    diamond at full fidelity and never touch the ring.
    """
    from PIL import ImageFilter
    gold=Image.new("L",(S,S),0); gp=gold.load()
    for y in range(S):
        for x in range(S):
            if isgold(px[x,y]): gp[x,y]=255
    core=gold.filter(ImageFilter.MinFilter(13))       # erode ~6px → ring gone
    grown=core.filter(ImageFilter.MaxFilter(19))      # dilate back ~9px
    gr=grown.load()
    m=Image.new("L",(S,S),0); mp=m.load()
    for y in range(S):
        for x in range(S):
            if gr[x,y] and gp[x,y]:
                da=(math.degrees(math.atan2(y-C,x-C))-axis+180)%360-180
                if abs(da)<=WEDGE+2: mp[x,y]=255
    return m

def ring_colour(px,S,C):
    tot=[0,0,0,0]; n=0
    for adeg in range(30,60):
        a=math.radians(adeg)
        for R in range(RING_IN,RING_OUT+1):
            x=int(C+R*math.cos(a)); y=int(C+R*math.sin(a))
            if 0<=x<S and 0<=y<S and isgold(px[x,y]):
                p=px[x,y]
                for i in range(4): tot[i]+=p[i]
                n+=1
    return tuple(t//n for t in tot) if n else (208,164,86,255)

def move_points(img, new_centre, scale=1.0, axes=(-90,90)):
    S=img.size[0]; C=S/2
    src=img.copy(); spx=src.load()
    out=img.copy(); opx=out.load()
    col=ring_colour(spx,S,C)

    for axis in axes:
        mask=diamond_mask(spx,S,C,axis); mk=mask.load()
        # 1. erase the old diamond
        for y in range(S):
            for x in range(S):
                if mk[x,y]: opx[x,y]=(0,0,0,0)
        # 2. redraw the ring arc through the cleared wedge.
        #    PIL draws the band inward from the bbox, so the bbox is the OUTER radius.
        d=ImageDraw.Draw(out)
        d.arc([C-RING_OUT,C-RING_OUT,C+RING_OUT,C+RING_OUT],
              axis-WEDGE-2,axis+WEDGE+2,fill=col,width=RING_OUT-RING_IN+1)

        # 3. repaint the diamond at the new radius.
        #    Iterate over TARGET PIXELS (not polar steps) so nothing is left frayed.
        reach=int(150*scale)+6
        x0=int(C-reach+ (new_centre)*math.cos(math.radians(axis)))
        y0=int(C-reach+ (new_centre)*math.sin(math.radians(axis)))
        for yt in range(max(0,y0), min(S, y0+2*reach)):
            for xt in range(max(0,x0), min(S, x0+2*reach)):
                dx=xt-C; dy=yt-C
                r_t=math.hypot(dx,dy)
                if r_t<1: continue
                a_t=math.degrees(math.atan2(dy,dx))
                da=(a_t-axis+180)%360-180                 # signed offset from the axis
                if abs(da)>WEDGE+2: continue
                r_s=DIA_CENTRE+(r_t-new_centre)/scale      # inverse radial map
                a_s=axis+da/scale                          # inverse angular map
                xs=int(round(C+r_s*math.cos(math.radians(a_s))))
                ys=int(round(C+r_s*math.sin(math.radians(a_s))))
                if 0<=xs<S and 0<=ys<S and mk[xs,ys]:
                    opx[xt,yt]=spx[xs,ys]
    return out

if __name__=="__main__":
    HOME=os.path.expanduser("~")
    base=load_stamp()
    variants={
      "A-current":  None,
      "B-text":     (379,0.82),   # centred in the text band, trimmed to fit the gap
      "C-between":  (352,1.00),   # lifted off the ring, sitting under the text
    }
    outs={}
    for name,v in variants.items():
        img = base.copy() if v is None else move_points(base,v[0],v[1])
        outs[name]=img
        img.save(f"scratchpad/stamp_{name}.png")
        print("built",name)

    # contact sheet on dark
    S=base.size[0]; T=460
    sheet=Image.new("RGB",(T*3+40,T+56),(22,34,30))
    d=ImageDraw.Draw(sheet)
    for i,(name,img) in enumerate(outs.items()):
        bg=Image.new("RGBA",(S,S),(22,34,30,255)); bg.alpha_composite(img)
        sheet.paste(bg.convert("RGB").resize((T,T),Image.LANCZOS),(10+i*(T+10),46))
        d.text((16+i*(T+10),18),name,fill=(255,255,255))
    sheet.save(f"{HOME}/Downloads/stamp-point-options.png")
    print("sheet saved")
