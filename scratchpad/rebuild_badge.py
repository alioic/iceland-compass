"""Rebuild the Iceland Compass badge as exact geometry.

The original artwork is beautiful but hand-rendered: its "circle" wanders by up
to 10px and isn't centred on the artwork's centroid, which makes any surgical
edit show a seam. So we keep the parts that are *art* — the mountain and the
compass point — lift them out at full fidelity, and rebuild everything that is
*geometry* (the ring, the four point positions, the two text arcs) from maths.
Result: whatever radius you want for the points, with nothing misaligned.

Measured from the original (in its own 902px frame, about the true ring centre):
    ring      r 316..323   (thickness 8)
    point     r 281..367   (length 86)
    text      r 374..419   (cap height 45, centre r 396)
    top arc   147.1 deg over 15 glyphs      bottom arc 138.7 deg over 13
"""
import os, math
from PIL import Image, ImageDraw, ImageFont, ImageFilter

HOME=os.path.expanduser("~")
SRC=f"{HOME}/Downloads/icelandcompassstamp.png"
FONT=f"{HOME}/island-vefur/scratchpad/pinfonts/Inter.ttf"

# --- source frame constants (902px square, true ring centre) ---
F=902.0
SCX,SCY=449.14,446.07
RING_R,RING_T = 319.5, 8.0
PT_LO,PT_HI   = 281.0, 367.0
TEXT_R, CAP   = 396.0, 45.0
DASH_LO,DASH_HI = 396.0, 438.0
DASH_W         = 6.0
MTN_DX,MTN_DY  = -6.1, -25.6      # mountain sits a little above the ring centre
TOP_SPAN, BOT_SPAN = 147.1, 138.7

OUT=1400                       # build big; it gets scaled down when stamped
K=OUT/F                        # scale from source frame to output frame
C=OUT/2.0

def isgold(p):
    r,g,b,a=p; return a>40 and r>150 and g>110 and b<150 and (r-b)>45
def iswhite(p):
    r,g,b,a=p; return a>60 and r>180 and g>180 and b>170

_SRC_CACHE=None
def load_source():
    """The ORIGINAL artwork, squared to a 902px frame.

    Deliberately self-contained: ig_edit now points at this script's output, so
    importing load_stamp() from there would make the rebuild read its own result.
    """
    global _SRC_CACHE
    if _SRC_CACHE is not None: return _SRC_CACHE.copy()
    b=Image.open(SRC).convert("RGBA")
    b=b.crop(b.getbbox())
    w,h=b.size; px=b.load()
    gx=gy=gn=0
    for y in range(0,h,2):
        for x in range(0,w,2):
            if isgold(px[x,y]): gx+=x; gy+=y; gn+=1
    cx,cy=(gx/gn,gy/gn) if gn else (w/2,h/2)
    radii=[]
    for y in range(0,h,2):
        for x in range(0,w,2):
            if px[x,y][3]>60: radii.append(math.hypot(x-cx,y-cy))
    radii.sort()
    R=radii[int(len(radii)*0.997)] if radii else max(w,h)/2
    half=int(R*1.04)+2
    sq=Image.new("RGBA",(half*2,half*2),(0,0,0,0))
    sq.alpha_composite(b,(int(half-cx),int(half-cy)))
    _SRC_CACHE=sq
    return sq.copy()

# ---------------------------------------------------------------- extraction
def extract_mountain(src):
    """White artwork inside the ring, kept exactly as drawn."""
    w,h=src.size; px=src.load()
    m=Image.new("RGBA",(w,h),(0,0,0,0)); mp=m.load()
    for y in range(h):
        for x in range(w):
            if math.hypot(x-SCX,y-SCY)<RING_R-14 and iswhite(px[x,y]):
                mp[x,y]=px[x,y]
    return m.crop(m.getbbox())   # placed via MTN_DX/MTN_DY, not centred

def extract_point(src):
    """One compass point, lifted from the E axis and squared up pointing +x."""
    w,h=src.size; px=src.load()
    m=Image.new("RGBA",(w,h),(0,0,0,0)); mp=m.load()
    for y in range(h):
        for x in range(w):
            dx,dy=x-SCX,y-SCY
            r=math.hypot(dx,dy)
            if not (PT_LO-4<=r<=PT_HI+4): continue
            if abs(math.degrees(math.atan2(dy,dx)))>9: continue
            if isgold(px[x,y]): mp[x,y]=px[x,y]
    bb=m.getbbox(); tile=m.crop(bb)
    # centre of the point along the radial axis, in tile coords
    cx_in_tile=(SCX+(PT_LO+PT_HI)/2)-bb[0]
    cy_in_tile=SCY-bb[1]
    return tile,cx_in_tile,cy_in_tile

def ring_colour_at(src,adeg):
    """Sample the original ring's colour at this angle (keeps its gradient)."""
    px=src.load(); w,h=src.size
    tot=[0,0,0,0]; n=0
    for d in range(-25,26):
        a=math.radians(adeg+d/5.0)
        for R in range(int(RING_R-RING_T/2)-1,int(RING_R+RING_T/2)+2):
            x=int(round(SCX+R*math.cos(a))); y=int(round(SCY+R*math.sin(a)))
            if 0<=x<w and 0<=y<h and isgold(px[x,y]):
                p=px[x,y]
                for i in range(4): tot[i]+=p[i]
                n+=1
    if not n: return None
    return tuple(t//n for t in tot)

def text_colour(src):
    px=src.load(); w,h=src.size
    tot=[0,0,0,0]; n=0
    for y in range(h):
        for x in range(w):
            if math.hypot(x-SCX,y-SCY)>TEXT_R-20 and iswhite(px[x,y]):
                p=px[x,y]
                for i in range(4): tot[i]+=p[i]
                n+=1
    return tuple(t//n for t in tot)

# ---------------------------------------------------------------- drawing
def draw_ring(img,src,supersample=4):
    """A true circle, drawn at 4x then downsampled so the edge is glass-smooth."""
    S2=OUT*supersample
    band=Image.new("RGBA",(S2,S2),(0,0,0,0))
    d=ImageDraw.Draw(band)
    r_out=(RING_R+RING_T/2)*K*supersample
    r_in =(RING_R-RING_T/2)*K*supersample
    c2=S2/2
    # draw in 2-degree wedges so the original's colour gradient is preserved
    for a0 in range(0,360,2):
        col=ring_colour_at(src,a0+1) or (228,176,86,232)
        d.pieslice([c2-r_out,c2-r_out,c2+r_out,c2+r_out],a0-0.7,a0+2.7,fill=col)
    d.ellipse([c2-r_in,c2-r_in,c2+r_in,c2+r_in],fill=(0,0,0,0))
    img.alpha_composite(band.resize((OUT,OUT),Image.LANCZOS))

def place_points(img,tile,tcx,tcy,radius,scale=1.0,angles=(0,90,180,270)):
    w=max(1,int(tile.width*K*scale)); h=max(1,int(tile.height*K*scale))
    t=tile.resize((w,h),Image.LANCZOS)
    ax=tcx*K*scale; ay=tcy*K*scale        # anchor inside the scaled tile
    for a in angles:
        rot=t.rotate(-a,resample=Image.BICUBIC,expand=True)
        # where the anchor moved to after rotation
        ex,ey=rot.width/2,rot.height/2
        vx,vy=ax-t.width/2, ay-t.height/2
        th=math.radians(-a)
        rx=vx*math.cos(th)-vy*math.sin(th); ry=vx*math.sin(th)+vy*math.cos(th)
        ax2,ay2=ex+rx,ey+ry
        px_=C+radius*K*math.cos(math.radians(a))
        py_=C+radius*K*math.sin(math.radians(a))
        img.alpha_composite(rot,(int(round(px_-ax2)),int(round(py_-ay2))))

def draw_dashes(img,src):
    """The short horizontal ticks that sit out past the E/W points."""
    col=ring_colour_at(src,0) or (228,176,86,232)
    d=ImageDraw.Draw(img)
    for a in (0,180):
        x0=C+DASH_LO*K*math.cos(math.radians(a)); y0=C+DASH_LO*K*math.sin(math.radians(a))
        x1=C+DASH_HI*K*math.cos(math.radians(a)); y1=C+DASH_HI*K*math.sin(math.radians(a))
        d.line([x0,y0,x1,y1],fill=col,width=max(2,int(round(DASH_W*K))))

def arc_text(img,w1,w2,radius,span,centre_deg,cap,col,gap_mult=1.0,flip=False,mode='gap'):
    """Two words on a true arc, with the gap between them centred on the axis.

    The original set the whole string with one uniform step, so an uneven pair
    like DISCOVER / MORE pushed the word gap off-centre. Laying the words out
    either side of the axis fixes that, and gap_mult widens the gap when a
    compass point has to live in it.
    """
    size=int(cap*K/0.727)                       # Inter cap height ~0.727 em
    f=ImageFont.truetype(FONT,size)
    try: f.set_variation_by_axes([32,600])
    except Exception: pass
    n1,n2=len(w1),len(w2)
    # In the original the space eats a whole glyph slot, so the word gap is TWO
    # steps wide. Solve for step with that built in, then gap_mult widens it.
    step=span/((n1-1)+(n2-1)+2*gap_mult)
    gap=2*step*gap_mult
    tile=int(size*2.6)

    def put(ch,a):
        rot=-(a+90) if not flip else -(a-90)
        t=Image.new("RGBA",(tile,tile),(0,0,0,0))
        td=ImageDraw.Draw(t)
        wch=td.textlength(ch,font=f)
        td.text(((tile-wch)/2,(tile-size)/2-size*0.13),ch,font=f,fill=col)
        t=t.rotate(rot,resample=Image.BICUBIC,center=(tile/2,tile/2))
        x=C+radius*K*math.cos(math.radians(a)); y=C+radius*K*math.sin(math.radians(a))
        img.alpha_composite(t,(int(round(x-tile/2)),int(round(y-tile/2))))

    if mode=='string':
        # the original's layout: one uniform step across "W1 W2", whole string
        # centred. Balanced arc, but the word gap lands off the axis when the
        # two words differ in length.
        full=w1+" "+w2; n=len(full); st=span/(n-1)
        for i,ch in enumerate(full):
            if ch==" ": continue
            off=-span/2+i*st
            put(ch, centre_deg + off if not flip else centre_deg - off)
        return
    # 'gap' mode: words sit either side of the axis so the gap is exactly centred
    for i,ch in enumerate(w1):
        off = -(gap/2) - (n1-1-i)*step
        put(ch, centre_deg + off if not flip else centre_deg - off)
    for i,ch in enumerate(w2):
        off = (gap/2) + i*step
        put(ch, centre_deg + off if not flip else centre_deg - off)

# ---------------------------------------------------------------- compose
def build(point_radius, point_scale=1.0, n_radius=None, n_scale=None,
          s_radius=None, s_scale=None, top_mode='gap', bot_mode='gap',
          top_gap=1.0, bot_gap=1.0, bot_words=("DISCOVER","MORE"), dashes=True, top_words=("ICELAND","COMPASS")):
    src=load_source()
    img=Image.new("RGBA",(OUT,OUT),(0,0,0,0))
    draw_ring(img,src)
    if dashes: draw_dashes(img,src)

    tile,tcx,tcy=extract_point(src)
    # E/W stay put; N/S may be lifted independently
    place_points(img,tile,tcx,tcy,point_radius,point_scale,angles=(0,180))
    place_points(img,tile,tcx,tcy, n_radius or point_radius, n_scale or point_scale, angles=(270,))
    place_points(img,tile,tcx,tcy, s_radius or point_radius, s_scale or point_scale, angles=(90,))

    mt=extract_mountain(src)
    mw=int(mt.width*K); mh=int(mt.height*K)
    mt=mt.resize((mw,mh),Image.LANCZOS)
    img.alpha_composite(mt,(int(round(C+MTN_DX*K-mw/2)),int(round(C+MTN_DY*K-mh/2))))

    tc=text_colour(src)
    if top_words is None:
        return img                      # mark only — no lettering at all
    arc_text(img,top_words[0],top_words[1],TEXT_R,TOP_SPAN,-90,CAP,tc,gap_mult=top_gap,flip=False,mode=top_mode)
    if bot_words is None:
        return img                      # top arc only — no bottom lettering
    b1,b2=bot_words
    # keep the letter step the same as the top so both arcs are typographically
    # identical; the span follows from how many letters the words actually have
    top_step=TOP_SPAN/((7-1)+(7-1)+2*top_gap)
    bspan=top_step*((len(b1)-1)+(len(b2)-1)+2*bot_gap)
    arc_text(img,b1,b2,TEXT_R,bspan,90,CAP,tc,gap_mult=bot_gap,flip=True,mode=bot_mode)
    return img

if __name__=="__main__":
    src=load_source()
    print("source:",src.size,"  text colour:",text_colour(src))
    tile,tcx,tcy=extract_point(src)
    print("point tile:",tile.size,"anchor(%.0f,%.0f)"%(tcx,tcy))
    mt=extract_mountain(src); print("mountain tile:",mt.size)

    R0=(PT_LO+PT_HI)/2
    variants={
      "A-original-layout": dict(point_radius=R0, top_mode='string', bot_mode='string'),
      "B-top-in-text":     dict(point_radius=R0, n_radius=TEXT_R, n_scale=0.86,
                                top_mode='gap', top_gap=1.7, bot_mode='string'),
      "C-both-in-text":    dict(point_radius=R0, n_radius=TEXT_R, n_scale=0.86,
                                s_radius=TEXT_R, s_scale=0.86,
                                top_mode='gap', top_gap=1.7, bot_mode='gap', bot_gap=1.7),
    }
    outs={}
    for n,kw in variants.items():
        im=build(**kw); outs[n]=im
        im.save(f"scratchpad/rb_{n}.png"); print("built",n)

    # comparison sheet, original first
    from ig_edit import load_stamp
    orig=load_stamp()
    T=470
    items=[("0-ORIGINAL",orig)]+list(outs.items())
    sheet=Image.new("RGB",(T*len(items)+20*(len(items)+1),T+56),(22,34,30))
    d=ImageDraw.Draw(sheet)
    for i,(n,im) in enumerate(items):
        s=im.size[0]
        bg=Image.new("RGBA",(s,s),(22,34,30,255)); bg.alpha_composite(im)
        sheet.paste(bg.convert("RGB").resize((T,T),Image.LANCZOS),(20+i*(T+20),44))
        d.text((22+i*(T+20),18),n,fill=(255,255,255))
    sheet.save(f"{HOME}/Downloads/badge-rebuild.png")
    print("sheet saved")
