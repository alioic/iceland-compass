"""Iceland Compass — Instagram photo pipeline.
Warm 'brand' grade + recreated circular ICELAND COMPASS / DISCOVER MORE badge.
Reusable: grade(im), make_badge(D), stamp(im).  Output 1080x1350 (4:5).
"""
import os, math
from PIL import Image, ImageEnhance, ImageDraw, ImageFont, ImageFilter

HOME = os.path.expanduser("~")
SRC  = f"{HOME}/Downloads/Kirkjufell.jpg"
STAMP = f"{HOME}/island-vefur/brand/iceland-compass-stamp.png"
# Rebuilt badge: true circle, exact point placement, no bottom lettering (that
# line was illegible mush at stamp size). Built by scratchpad/rebuild_badge.py
# from the user's original artwork — mountain and points lifted unchanged.
EMBLEM = f"{HOME}/Downloads/Iceland-Compass-emblem-white-transparent-2048.png"
FONT = f"{HOME}/island-vefur/scratchpad/pinfonts/Inter.ttf"
OUT  = f"{HOME}/Downloads/Kirkjufell-compass-edit.jpg"
W,H = 1080,1350

# ---------- 1. warm brand grade ----------
def _lut(mult, lift=0, gamma=1.0):
    t=[]
    for i in range(256):
        v=(i/255.0)**gamma
        v=v*mult + lift/255.0
        t.append(max(0,min(255,int(v*255))))
    return t

def _tone_stats(im):
    """How warm and how contrasty the photo already is."""
    s=im.convert("RGB").resize((64,64),Image.BILINEAR)
    px=list(s.getdata()); n=len(px)
    warmth=(sum(p[0] for p in px)-sum(p[2] for p in px))/n   # red minus blue
    lum=[0.299*p[0]+0.587*p[1]+0.114*p[2] for p in px]
    mean=sum(lum)/n
    spread=(sum((v-mean)**2 for v in lum)/n)**0.5
    return warmth, spread

def grade(im):
    """Warm editorial grade that adapts to the photo it is given.

    A golden wash flatters a sunlit shot but does nothing for a grey winter
    one — those need contrast, not warmth, or they land in the feed looking
    washed out next to everything else. So the wash fades out as the photo
    gets colder, and contrast comes up as it gets flatter.
    """
    im=im.convert("RGB")
    warmth,spread=_tone_stats(im)
    cold = max(0.0, min(1.0, (14.0-warmth)/22.0))    # 0 = warm photo, 1 = cold
    flat = max(0.0, min(1.0, (46.0-spread)/22.0))    # 0 = punchy,     1 = flat

    r,g,b=im.split()
    r=r.point(_lut(1.055, lift=5))          # warm reds + lift shadows a touch
    g=g.point(_lut(1.005, lift=3))
    b=b.point(_lut(0.925 + 0.055*cold, lift=3, gamma=1.03))  # keep the blues on cold shots
    im=Image.merge("RGB",(r,g,b))
    im=ImageEnhance.Contrast(im).enhance(1.05 + 0.10*flat + 0.04*cold)
    im=ImageEnhance.Color(im).enhance(0.92 + 0.06*cold)
    im=ImageEnhance.Brightness(im).enhance(1.015 + 0.02*flat)
    glow=Image.new("RGB",im.size,(255,211,150))
    im=Image.blend(im,glow,0.04*(1.0-0.75*cold))     # wash fades out on cold photos
    # subtle vignette
    vig=Image.new("L",im.size,0); vd=ImageDraw.Draw(vig)
    vd.ellipse([-im.width*0.18,-im.height*0.18,im.width*1.18,im.height*1.18],fill=255)
    vig=vig.filter(ImageFilter.GaussianBlur(im.width*0.18))
    dark=ImageEnhance.Brightness(im).enhance(0.86)
    im=Image.composite(im,dark,vig)
    return im

def cover_45(im):
    im=im.convert("RGB"); r=W/H
    iw,ih=im.size; ir=iw/ih
    if ir>r:  # too wide → crop width
        nw=int(ih*r); x=(iw-nw)//2; im=im.crop((x,0,x+nw,ih))
    else:     # too tall → crop height (centered)
        nh=int(iw/r); y=(ih-nh)//2; im=im.crop((0,y,iw,y+nh))
    return im.resize((W,H),Image.LANCZOS)

# ---------- 2. circular badge (matched to user's original) ----------
def make_badge(D=680):
    img=Image.new("RGBA",(D,D),(0,0,0,0))
    d=ImageDraw.Draw(img); cx=cy=D/2
    white=(255,255,255,244)
    gold=(203,172,112,236)
    lw=max(2,int(D*0.0060))
    rr=D*0.470
    # gold ring
    d.ellipse([cx-rr,cy-rr,cx+rr,cy+rr],outline=gold,width=lw)
    # tiny gold tick at 12 o'clock
    d.line([cx,cy-rr-D*0.003,cx,cy-rr+D*0.030],fill=gold,width=lw)
    # white twin side-ticks at 3 & 9 o'clock (sit between the two text arcs)
    for side in (-1,1):
        bx=cx+side*D*0.410
        for off in (-D*0.017,D*0.017):
            d.line([bx,cy+off-D*0.019,bx,cy+off+D*0.019],fill=white,width=max(2,int(D*0.0050)))
    # arced white text — single space, tighter tracking so words read as units
    f=ImageFont.truetype(FONT,int(D*0.049))
    try: f.set_variation_by_axes([18,600])
    except: pass
    def arc(text,radius,center_deg,gap,bottom=False):
        n=len(text); span=gap*(n-1); s=int(f.size*2.6)
        for i,ch in enumerate(text):
            ang=(center_deg-span/2+i*gap) if not bottom else (center_deg+span/2-i*gap)
            rot=-(ang+90) if not bottom else -(ang-90)
            a=math.radians(ang); x=cx+radius*math.cos(a); y=cy+radius*math.sin(a)
            tile=Image.new("RGBA",(s,s),(0,0,0,0)); td=ImageDraw.Draw(tile)
            w=td.textlength(ch,font=f)
            td.text(((s-w)/2,(s-f.size)/2-f.size*0.12),ch,font=f,fill=white)
            tile=tile.rotate(rot,resample=Image.BICUBIC,center=(s/2,s/2))
            img.alpha_composite(tile,(int(x-s/2),int(y-s/2)))
    arc("ICELAND COMPASS", D*0.392, -90, 9.0, bottom=False)
    arc("DISCOVER MORE",   D*0.392,  90, 9.4, bottom=True)
    # center twin white mountains (bold, simple — like the original)
    by=cy+D*0.082
    poly=[(cx-D*0.190,by),(cx-D*0.052,cy-D*0.172),(cx+D*0.004,cy-D*0.040),
          (cx+D*0.098,cy-D*0.094),(cx+D*0.198,by)]
    d.polygon(poly,fill=white)
    return img

_STAMP_CACHE=None
def load_stamp():
    """Badge PNG → squared on its OPTICAL centre (the gold ring), not the bbox.

    The artwork's bounding box is wider on one side than the other, so centring
    the box makes the mark look off-centre. Centring on the gold ring's centroid
    puts the compass exactly in the middle of the square.
    """
    global _STAMP_CACHE
    if _STAMP_CACHE is not None: return _STAMP_CACHE.copy()
    b=Image.open(STAMP).convert("RGBA").crop(Image.open(STAMP).convert("RGBA").getbbox())
    w,h=b.size; px=b.load()
    gx=gy=gn=0
    for y in range(0,h,2):
        for x in range(0,w,2):
            r,g,bl,a=px[x,y]
            if a>40 and r>150 and g>110 and bl<150 and (r-bl)>45:
                gx+=x; gy+=y; gn+=1
    cx,cy=(gx/gn,gy/gn) if gn else (w/2,h/2)
    # radius that holds virtually all the ink (99.7 pct — ignores stray specks)
    radii=[]
    for y in range(0,h,2):
        for x in range(0,w,2):
            if px[x,y][3]>60:
                radii.append(math.hypot(x-cx,y-cy))
    radii.sort()
    R=radii[int(len(radii)*0.997)] if radii else max(w,h)/2
    half=int(R*1.04)+2                      # tiny breathing room
    s=half*2
    sq=Image.new("RGBA",(s,s),(0,0,0,0))
    sq.alpha_composite(b,(int(half-cx),int(half-cy)))
    _STAMP_CACHE=sq
    return sq.copy()

def _patch_score(im, box):
    """Mean luminance + busyness of a region. Lower = better for a white stamp."""
    p=im.convert("RGB").crop(box)
    small=p.resize((32,32),Image.BILINEAR)
    px=list(small.getdata())
    lum=[0.299*r+0.587*g+0.114*b for r,g,b in px]
    mean=sum(lum)/len(lum)
    var=sum((v-mean)**2 for v in lum)/len(lum)
    # brightness AND busyness both hurt a fine white mark — weight them evenly.
    # (a dark but churning waterfall is a worse home than calm mid-tone rock)
    return mean + (var**0.5)*1.25

def pick_corner(im, bs, margin):
    """Bottom-right preferred; switch to bottom-left only if clearly better."""
    ry=H-bs-margin
    right=(W-bs-margin, ry, W-margin, ry+bs)
    left =(margin,      ry, margin+bs, ry+bs)
    sr=_patch_score(im,right); sl=_patch_score(im,left)
    # Right is the signature spot, so it keeps a handicap — but when the right
    # corner is already hostile (bright/busy) even a small gain is worth the move.
    need = 20 if sr < 140 else 5
    return ("left",left[0],left[1],sl,sr) if sl < sr-need else ("right",right[0],right[1],sr,sl)

def stamp(im, size_frac=0.165, margin_frac=0.055, opacity=0.9, corner="auto", verbose=True):
    badge=load_stamp()
    bs=int(W*size_frac)
    badge=badge.resize((bs,bs),Image.LANCZOS)
    # fade opacity
    a=badge.split()[3].point(lambda v:int(v*opacity)); badge.putalpha(a)
    margin=int(W*margin_frac)

    if corner=="auto":
        side,mx,my,chosen,other=pick_corner(im,bs,margin)
        if verbose:
            print(f"  stamp → {side} corner (score {chosen:.0f} vs {other:.0f})")
    else:
        side=corner
        mx = W-bs-margin if side=="right" else margin
        my = H-bs-margin

    out=im.convert("RGBA")

    # adaptive scrim: soft dark halo, only when the background is bright
    score=_patch_score(im,(mx,my,mx+bs,my+bs))
    strength=max(0.0,min(1.0,(score-95)/95.0))*0.40
    if strength>0.01:
        pad=int(bs*0.42); D=bs+pad*2
        halo=Image.new("L",(D,D),0); hd=ImageDraw.Draw(halo)
        steps=48
        for i in reversed(range(steps)):       # outer→inner so the core stays brightest
            t=i/(steps-1)                      # 0 centre → 1 edge
            r=(D/2)*(0.30+0.70*t)
            val=int(255*(1-t)**2.1)
            hd.ellipse([D/2-r,D/2-r,D/2+r,D/2+r],fill=val)
        halo=halo.filter(ImageFilter.GaussianBlur(bs*0.13))
        halo=halo.point(lambda v:int(v*strength))
        scrim=Image.new("RGBA",im.size,(0,0,0,0))
        layer=Image.new("RGBA",(D,D),(12,18,16,255)); layer.putalpha(halo)
        scrim.alpha_composite(layer,(mx-pad,my-pad))
        out=Image.alpha_composite(out,scrim)
        if verbose: print(f"    scrim {strength:.2f} (bg {score:.0f})")

    # contact shadow under the mark itself
    sh=Image.new("RGBA",im.size,(0,0,0,0))
    shadow=Image.new("RGBA",badge.size,(0,0,0,0))
    shadow.putalpha(badge.split()[3].point(lambda v:int(v*0.5)))
    sh.alpha_composite(shadow,(mx,my+3))
    sh=sh.filter(ImageFilter.GaussianBlur(4))
    out=Image.alpha_composite(out,sh)
    out.alpha_composite(badge,(mx,my))
    return out.convert("RGB")

if __name__=="__main__":
    im=Image.open(SRC)
    im=cover_45(im)
    im=grade(im)
    im=stamp(im)
    im.save(OUT,quality=92)
    print("saved",OUT, im.size)
    # also save the standalone badge (transparent) for reuse
    make_badge(1024).save(f"{HOME}/island-vefur/scratchpad/ig_badge_white.png")
    print("badge saved")
