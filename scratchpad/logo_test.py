"""Test the new gold compass-rose logo at real Instagram stamp sizes."""
import os
from PIL import Image, ImageDraw, ImageFont
import sys
sys.path.insert(0,os.path.dirname(os.path.abspath(__file__)))
from ig_edit import grade, cover_45, W, H

HOME=os.path.expanduser("~")
LOGO=f"{HOME}/Downloads/IcelandCompass.png"
SRC =f"{HOME}/Downloads/Kirkjufell.jpg"
FONT=f"{HOME}/island-vefur/scratchpad/pinfonts/Inter.ttf"

def to_transparent(p, thresh=238):
    """Knock out the white page background (keeps interior whites reasonably)."""
    im=Image.open(p).convert("RGBA")
    im=im.crop(im.getbbox()) if im.mode=="RGBA" and im.getbbox() else im
    px=im.load()
    w,h=im.size
    # flood-fill style: mark white pixels connected to the border as transparent
    from collections import deque
    seen=[[False]*w for _ in range(h)]
    q=deque()
    for x in range(w):
        for y in (0,h-1):
            q.append((x,y))
    for y in range(h):
        for x in (0,w-1):
            q.append((x,y))
    while q:
        x,y=q.popleft()
        if x<0 or y<0 or x>=w or y>=h or seen[y][x]: continue
        r,g,b,a=px[x,y]
        if r<thresh or g<thresh or b<thresh: continue
        seen[y][x]=True
        px[x,y]=(r,g,b,0)
        q.append((x+1,y)); q.append((x-1,y)); q.append((x,y+1)); q.append((x,y-1))
    return im.crop(im.getbbox())

def square(im):
    w,h=im.size; s=max(w,h)
    out=Image.new("RGBA",(s,s),(0,0,0,0))
    out.alpha_composite(im,((s-w)//2,(s-h)//2))
    return out

if __name__=="__main__":
    logo=square(to_transparent(LOGO))
    logo.save(f"{HOME}/island-vefur/scratchpad/logo_new_transparent.png")
    print("transparent logo:",logo.size)

    base=grade(cover_45(Image.open(SRC))).convert("RGBA")

    f=ImageFont.truetype(FONT,22)
    try: f.set_variation_by_axes([20,700])
    except: pass

    # three realistic stamp sizes, placed bottom-right (light area) and mid-left (dark rock)
    sizes=[("small 120px",120),("medium 165px",165),("large 210px",210)]
    canvas=Image.new("RGB",(W*1,H),(20,20,20))
    canvas.paste(base.convert("RGB"),(0,0))
    d=ImageDraw.Draw(canvas)

    y=int(H*0.16)
    for label,s in sizes:
        lg=logo.resize((s,s),Image.LANCZOS)
        x=W-s-40
        canvas.paste(lg,(x,y),lg)
        d.text((x-150,y+s//2-12),label,font=f,fill=(255,255,255))
        y+=s+40

    # one on the dark waterfall rock (bottom-left)
    lg=logo.resize((165,165),Image.LANCZOS)
    canvas.paste(lg,(60,H-230),lg)
    d.text((60,H-260),"165px on dark",font=f,fill=(255,255,255))

    canvas.save(f"{HOME}/Downloads/logo-size-test.jpg",quality=92)
    print("saved logo-size-test.jpg")
