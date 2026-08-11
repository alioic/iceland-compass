"""Instagram profile picture from the gold compass rose.
IG crops to a circle — the mark is sized to sit safely inside it.
Outputs 3 background options at 800x800.
"""
import os
from PIL import Image, ImageDraw

HOME=os.path.expanduser("~")
LOGO=f"{HOME}/island-vefur/scratchpad/logo_new_transparent.png"
OUTDIR=f"{HOME}/Downloads/iceland-compass-avatar"
os.makedirs(OUTDIR,exist_ok=True)
S=800

BGS={
  "green":  (31,78,70),    # site brand green
  "deep":   (15,43,38),    # deeper forest green
  "ink":    (24,23,21),    # near-black
}

def build(name,bg,mark_frac=0.84):
    canvas=Image.new("RGBA",(S,S),bg+(255,))
    logo=Image.open(LOGO).convert("RGBA")
    w=int(S*mark_frac)
    logo=logo.resize((w,int(logo.height*w/logo.width)),Image.LANCZOS)
    canvas.alpha_composite(logo,((S-logo.width)//2,(S-logo.height)//2))
    canvas.convert("RGB").save(f"{OUTDIR}/avatar-{name}.png")
    # circle-crop preview (how IG actually shows it)
    prev=canvas.copy()
    mask=Image.new("L",(S,S),0); ImageDraw.Draw(mask).ellipse([0,0,S-1,S-1],fill=255)
    circ=Image.new("RGBA",(S,S),(0,0,0,0))
    circ.paste(prev,(0,0),mask)
    out=Image.new("RGB",(S,S),(255,255,255)); out.paste(circ,(0,0),circ)
    out.save(f"{OUTDIR}/preview-circle-{name}.png")
    print("built",name)

if __name__=="__main__":
    for n,c in BGS.items(): build(n,c)
    # contact sheet of the 3 circle previews
    sheet=Image.new("RGB",(S*3+80,S+40),(250,250,248))
    for i,n in enumerate(BGS):
        im=Image.open(f"{OUTDIR}/preview-circle-{n}.png")
        sheet.paste(im,(20+i*(S+20),20))
    sheet.resize((sheet.width//2,sheet.height//2),Image.LANCZOS).save(f"{HOME}/Downloads/avatar-options.jpg",quality=92)
    print("sheet saved")
