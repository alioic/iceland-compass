"""Iceland Compass — Pinterest pin generator (alvöru hvíta logo-ið).

1000x1500, mynd-drifið: heil Íslandsmynd + dökkur halli + hvítt logo (áttaviti+ICELAND COMPASS)
efst, kicker + Fraunces-titill neðst + icelandcompass.com.

Keyrsla:  python3 scratchpad/make_pins.py
Úttak:    scratchpad/pins/<slug>.png
"""
import os
from PIL import Image, ImageDraw, ImageFont

ROOT = "/Users/alexanderhelgason/island-vefur"
FONTS = os.path.join(ROOT, "scratchpad/pinfonts")
LOGO  = os.path.join(ROOT, "scratchpad/logo_white_real.png")   # iceland-compass-logo-white.png
OUT   = os.path.join(ROOT, "scratchpad/pins")
os.makedirs(OUT, exist_ok=True)
W, H = 1000, 1500
CREAM=(244,241,234); WHITE=(252,250,246); INK=(16,20,20)

def fr(sz, wght=580, opsz=144):
    f=ImageFont.truetype(f"{FONTS}/Fraunces.ttf", sz)
    try: f.set_variation_by_axes([opsz, wght, 0, 0])
    except: pass
    return f
def inter(sz, wght=500):
    f=ImageFont.truetype(f"{FONTS}/Inter.ttf", sz)
    try: f.set_variation_by_axes([min(max(sz,14),32), wght])
    except: pass
    return f
def cover(im,w,h):
    im=im.convert("RGB"); s=max(w/im.width,h/im.height)
    im=im.resize((round(im.width*s),round(im.height*s)),Image.LANCZOS)
    x=(im.width-w)//2; y=(im.height-h)//2; return im.crop((x,y,x+w,y+h))
def vgrad(w,h,ta,ba,col=INK):
    g=Image.new("L",(1,h))
    for y in range(h): g.putpixel((0,y),int(ta+(ba-ta)*y/(h-1)))
    ov=Image.new("RGBA",(w,h),col+(0,)); ov.putalpha(g.resize((w,h))); return ov
def wrap(d,t,f,mw):
    out=[]; cur=""
    for wd in t.split():
        tt=(cur+" "+wd).strip()
        if d.textlength(tt,font=f)<=mw: cur=tt
        else:
            if cur: out.append(cur)
            cur=wd
    if cur: out.append(cur)
    return out
def tracked(d,xy,t,f,fill,tr):
    x,y=xy
    for ch in t: d.text((x,y),ch,font=f,fill=fill); x+=d.textlength(ch,font=f)+tr

_logo=None
def logo_img(width):
    global _logo
    if _logo is None:
        l=Image.open(LOGO).convert("RGBA"); _logo=l.crop(l.getbbox())
    return _logo.resize((width, round(_logo.height*width/_logo.width)), Image.LANCZOS)

def make_pin(image_key, kicker, title, slug):
    img=cover(Image.open(f"{ROOT}/img/places/{image_key}.webp"),W,H).convert("RGBA")
    img.alpha_composite(vgrad(W,int(H*0.60),0,235),(0,H-int(H*0.60)))
    img.alpha_composite(vgrad(W,int(H*0.22),150,0),(0,0))
    d=ImageDraw.Draw(img); M=84
    # logo efst: fjalla-emblem + "ICELAND / COMPASS" (Fraunces, hvítt, staflað, miðjað)
    emb=Image.open(f"{ROOT}/scratchpad/emblem_mountain_white.png").convert("RGBA")
    emb=emb.crop(emb.getbbox())
    eh=86; emb=emb.resize((round(emb.width*eh/emb.height),eh),Image.LANCZOS)
    wm_top=78; f1=fr(34,600,40); f2=fr(21,380,26); gap=40
    cy=wm_top+(gap+22)/2
    img.paste(emb,(M,round(cy-eh/2)),emb)
    tx=M+emb.width+20
    tracked(d,(tx,wm_top),"ICELAND",f1,WHITE,5)
    tracked(d,(tx+1,wm_top+gap),"COMPASS",f2,(236,232,224),8)
    # neðri blokk
    y=H-M
    d.text((M,y-34),"icelandcompass.com",font=inter(26,500),fill=CREAM)
    y-=34+30
    size=84; tf=fr(size); lines=wrap(d,title,tf,W-2*M)
    while len(lines)>3 and size>58:
        size-=6; tf=fr(size); lines=wrap(d,title,tf,W-2*M)
    lh=int(size*1.05); ty=y-lh*len(lines)
    for ln in lines: d.text((M,ty),ln,font=tf,fill=WHITE); ty+=lh
    top=y-lh*len(lines)
    d.rectangle([M,top-58,M+58,top-54],fill=CREAM)
    tracked(d,(M,top-50),kicker.upper(),inter(27,600),CREAM,3)
    img.convert("RGB").save(f"{OUT}/{slug}.png")
    print(f"  ✔ {slug}.png  ({size}px, {len(lines)} línur)")

# (mynd, kicker, titill, slug/skráarnafn -> tengir á /leidsogn/<slug> nema annað tekið fram)
BATCH=[
 ("nordurljos","Northern Lights","The Complete Guide to Iceland's Northern Lights","nordurljos"),
 ("reykjadalur","Hot Springs & Lagoons","Iceland's Best Lagoons & Hot Springs","lon-og-jardbod"),
 ("gullfoss","Golden Circle","The Golden Circle: Iceland's Best Day Trip","gullni-hringurinn"),
 ("reynisfjara","South Coast","The Ultimate Iceland South Coast Guide","sudurstrondin"),
 ("kirkjufell","Snæfellsnes","Snæfellsnes: Iceland in Miniature","snaefellsnes"),
 ("hringvegurinn","Road Trip","Iceland in 5 to 7 Days: Ring Road Itinerary","island-5-7-dagar"),
 ("blaalonid","Blue Lagoon","Blue Lagoon: Everything You Need to Know","blaa-lonid"),
 ("hvalaskodun","Whale Watching","Whale Watching in Iceland: Where & When","hvalaskodun"),
 ("hofsos_sundlaug","Iceland Pools","Every Swimming Pool in Iceland, Mapped","laugar-kort"),
 ("seljalandsfoss","Packing","What to Pack for Iceland, Every Season","hvad-a-ad-pakka"),
]
if __name__=="__main__":
    for a in BATCH: make_pin(*a)
    print(f"\n{len(BATCH)} pinnar gerðir í {OUT}")
