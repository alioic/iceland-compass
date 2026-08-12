"""Web versions of the Iceland Compass mark: favicon + header lockup.

A favicon is rendered at 16px. The full badge (ring + four points + mountain)
has far too much detail to survive that, so the favicon uses the single most
recognisable element — the mountain — on the brand green disc. The header mark
sits on cream, where the badge's white mountain would vanish, so it is recoloured
to a single brand green.
"""
import os, math, base64, io
from PIL import Image, ImageDraw

HOME=os.path.expanduser("~")
BRAND=f"{HOME}/island-vefur/brand"
GREEN=(31,78,70); CREAM=(244,241,234); DEEPGREEN=(15,43,38)

def mark():          # ring + points + mountain, transparent
    return Image.open(f"{BRAND}/iceland-compass-stamp-markonly.png").convert("RGBA")

def mountain_only():
    """Just the white mountain, lifted from the stamp's interior."""
    im=Image.open(f"{BRAND}/iceland-compass-stamp.png").convert("RGBA")
    S=im.size[0]; C=S/2; px=im.load()
    out=Image.new("RGBA",(S,S),(0,0,0,0)); op=out.load()
    for y in range(S):
        for x in range(S):
            r,g,b,a=px[x,y]
            if a<40: continue
            if math.hypot(x-C,y-C)>S*0.215: continue     # inside the ring only
            if r>170 and g>170 and b>160: op[x,y]=px[x,y]
    return out.crop(out.getbbox())

def recolour(im,rgb):
    """Flatten artwork to one colour, keeping its alpha (and antialiasing)."""
    out=Image.new("RGBA",im.size,rgb+(0,))
    out.putalpha(im.split()[3])
    return out

def disc(fg,bg,frac,S=512,round_mark=None):
    c=Image.new("RGBA",(S,S),(0,0,0,0))
    ImageDraw.Draw(c).ellipse([0,0,S-1,S-1],fill=bg+(255,))
    m=round_mark if round_mark is not None else fg
    w=int(S*frac); m=m.resize((w,max(1,int(m.height*w/m.width))),Image.LANCZOS)
    c.alpha_composite(m,((S-m.width)//2,(S-m.height)//2))
    return c

if __name__=="__main__":
    mt=mountain_only()
    print("mountain tile",mt.size)
    cream_mt=recolour(mt,CREAM)
    green_mt=recolour(mt,GREEN)

    cands={
      "1 fjall a graenum":  disc(cream_mt,GREEN,0.62),
      "2 fjall a djupgraen":disc(cream_mt,DEEPGREEN,0.62),
      "3 graent a cream":   disc(green_mt,CREAM,0.62),
      "4 fullt merki":      disc(Image.open(f"{BRAND}/iceland-compass-stamp.png").convert("RGBA"),GREEN,0.92),
    }
    sizes=[("stor",128),("32px",32),("16px",16)]
    W=230+len(sizes)*170; H=40+len(cands)*150
    sh=Image.new("RGB",(W,H),(255,255,255)); d=ImageDraw.Draw(sh)
    for j,(sl,S) in enumerate(sizes): d.text((230+j*170,14),sl,fill=(120,120,120))
    for i,(n,im) in enumerate(cands.items()):
        y=40+i*150; d.text((16,y+60),n,fill=(20,20,20))
        for j,(sl,S) in enumerate(sizes):
            t=im.convert("RGB").resize((S,S),Image.LANCZOS)
            sh.paste(t,(230+j*170,y+(128-S)//2))
    sh.save(f"{HOME}/Downloads/favicon-test.png")
    print("saved favicon-test.png")
