#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Tvítyngdur SEO-byggari fyrir Iceland Compass
----------------------------------------------
Les js/data.js (íslensku) og js/data.en.js (ensku) og býr til
kyrrstæðar, leitarhæfar síður á báðum tungumálum:

  Íslenska (rót):        /stadur/<id>/  /landshluti/<id>/  /stadir/
  Enska (/en/):          /en/place/<id>/  /en/region/<id>/  /en/places/

Auk þess: sitemap.xml (báðar útgáfur), robots.txt, css/doc.css, og-image.svg,
hreflang-tengsl og tungumálarofa á hverri síðu.

Forsíðurnar (index.html og en/index.html) eru handgerðar og ekki snertar hér.
Keyrsla:   python3 build.py   (þarf `json5`: python3 -m pip install json5)
"""
import json5, json, os, re, html, datetime

# ----------------------------------------------------------------------
SITE_URL  = "https://icelandcompass.com"   # <-- BREYTTU í þitt lén (líka í index.html og en/index.html)
SITE_NAME = "Iceland Compass"
ROOT = os.path.dirname(os.path.abspath(__file__))
TODAY = datetime.date.today().isoformat()

# Ítarlegt SEO-efni (kaflar) — { "<id>": { "is": [{title,text}], "en": [...] } }
def load_seo():
    path = os.path.join(ROOT, "seo-content.json")
    return json.load(open(path, encoding="utf-8")) if os.path.exists(path) else {}
SEO = {}

# Ítarlegt SEO-efni fyrir landshluta — { "<regionid>": { "is": [{title,text}], "en": [...] } }
def load_region_seo():
    path = os.path.join(ROOT, "region-content.json")
    return json.load(open(path, encoding="utf-8")) if os.path.exists(path) else {}
REGION_SEO = {}

# IMAGES — hero-myndir (deilt með app.js úr js/images.js)
def load_images():
    path = os.path.join(ROOT, "js", "images.js")
    if not os.path.exists(path):
        return {}
    s = open(path, encoding="utf-8").read()
    obj = s[s.index("const IMAGES =") + len("const IMAGES ="):]
    obj = obj[:obj.index("if (typeof module")]
    obj = obj[:obj.rindex("}") + 1].strip()
    return json5.loads(obj)
IMAGES = {}

# MAPDATA — kortið sjálft (deilt með app.js úr js/mapdata.js)
def load_mapdata():
    path = os.path.join(ROOT, "js", "mapdata.js")
    src = open(path, encoding="utf-8").read()
    def grab(name):
        seg = src[src.index(f"const {name} =") + len(f"const {name} ="):]
        seg = seg[:seg.index(";\n")]
        return json5.loads(seg)
    meta_seg = src[src.index("const MAP_META =") + len("const MAP_META ="):]
    meta = json5.loads(meta_seg[:meta_seg.index(";")])
    return meta, grab("REGION_PATHS"), src

MAPDATA = None

# COORDS — hnit staða (deilt með app.js úr js/coords.js)
def load_coords():
    path = os.path.join(ROOT, "js", "coords.js")
    if not os.path.exists(path):
        return {}
    src = open(path, encoding="utf-8").read()
    obj = src[src.index("const COORDS =") + len("const COORDS ="):]
    obj = obj[:obj.index(";")]
    return json5.loads(obj)
COORDS = {}
RVK = (64.1466, -21.9426)

def km_from_rvk(pid):
    import math as _m
    c = COORDS.get(pid)
    if not c:
        return None
    la1, lo1 = _m.radians(RVK[0]), _m.radians(RVK[1])
    la2, lo2 = _m.radians(c[0]), _m.radians(c[1])
    a = _m.sin((la2-la1)/2)**2 + _m.cos(la1)*_m.cos(la2)*_m.sin((lo2-lo1)/2)**2
    return round(6371 * 2 * _m.asin(_m.sqrt(a)))

# STAY_HUB — næsti gistibær fyrir náttúrustaði (deilt með app.js úr js/staymap.js)
def load_stay_hub():
    path = os.path.join(ROOT, "js", "staymap.js")
    if not os.path.exists(path):
        return {}
    src = open(path, encoding="utf-8").read()
    obj = src[src.index("const STAY_HUB =") + len("const STAY_HUB ="):]
    obj = obj[:obj.index("};") + 1].strip()
    return json5.loads(obj)
STAY_HUB = {}

# Þemalistar / ferðaleiðir — collections.json
def load_collections():
    path = os.path.join(ROOT, "collections.json")
    return json.load(open(path, encoding="utf-8")) if os.path.exists(path) else {}
COLLECTIONS = {}

# Hagnýtar leiðsögugreinar — guides.json
def load_guides():
    path = os.path.join(ROOT, "guides.json")
    return json.load(open(path, encoding="utf-8")) if os.path.exists(path) else {}
GUIDES = {}

REGION_ORDER = ["hofudborg","reykjanes","vesturland","vestfirdir",
                "nordvestur","nordaustur","austurland","sudurland"]

LANGS = {
  "is": {
    "code": "is", "og_locale": "is_IS", "data": "js/data.js", "prefix": "",
    "seg": {"place": "stadur", "region": "landshluti", "all": "stadir", "coll": "leidir", "pools": "laugar", "guide": "leidsogn"},
    "country": "Ísland",
    "ui": {
      "nav_map":"Kort","nav_all":"Allir staðir","nav_about":"Um vefinn","crumb_home":"Heim",
      "kicker_place":{"stadur":"Staður","ganga":"Gönguleið","bod":"Sundlaug & böð","veitingar":"Veitingastaður","kaffi":"Kaffihús"},
      "kicker_region":"Landshluti","kicker_overview":"Yfirlit",
      "h_highlights":"Hápunktar","h_route":"Á leiðinni","h_known":"Þekkt fyrir",
      "h_accom":"Gisting í nágrenni","h_activities":"Afþreying",
      "stat_area":"Flæmi","stat_pop":"Íbúar","stat_town":"Þéttbýli",
      "stat_dist":"Vegalengd","stat_dur":"Tími","stat_diff":"Erfiðleiki",
      "stat_cuisine":"Tegund","stat_price":"Verðflokkur","stat_loc":"Staðsetning","stat_dist_rvk":"Loftlína frá Reykjavík",
      "btn_book":"Bóka gistingu í nágrenni","btn_tours":"Skoða ferðir og afþreyingu","btn_find":"Sjá á korti",
      "more_in":"Fleiri á {r}","all_in":"Allt á {r} →","view_map":"Skoða á gagnvirku korti →",
      "region_groups":{"stadur":"Staðir og náttúra","ganga":"Gönguleiðir","bod":"Sundlaugar & böð","veitingar":"Veitingastaðir","kaffi":"Kaffihús"},
      "dir_h1":"Allir staðir á Íslandi","all_places":"Allir staðir","lang_label":"EN",
      "place_title":"{name} — {type}, {rname} | {site}",
      "region_title":"{rname} — staðir, gisting og afþreyging | {site}",
      "dir_title":"Allir staðir, gönguleiðir og veitingar á Íslandi | {site}",
      "dir_desc":"Leiðsögn um Ísland — staðir, gönguleiðir, gisting og afþreyging í öllum landshlutum.",
      "nav_coll":"Leiðir","kicker_coll":"Þemaleið","colls_kicker":"Yfirlit",
      "nav_guide":"Leiðsögn","kicker_guide":"Leiðsögn","guides_kicker":"Hagnýtt",
      "guides_h1":"Hagnýt leiðsögn um Ísland","guides_desc":"Allt sem þú þarft að vita fyrir Íslandsferðina — hvenær á að fara, hvernig á að keyra, norðurljós og fleira.",
      "guides_title":"Hagnýt ferðaleiðsögn um Ísland | {site}","guide_title":"{title} | {site}",
      "guide_faq":"Algengar spurningar","guide_more":"Fleiri leiðsögugreinar →",
      "cta_car":"Bera saman bílaleigur","cta_tours":"Skoða ferðir og afþreyingu","cta_hotel":"Finna gistingu",
      "cta_car_lead":"Bíll er lykillinn að því að sjá landið á eigin hraða.",
      "cta_tours_lead":"Skoðaðu skipulagðar ferðir með leiðsögn.",
      "cta_hotel_lead":"Finndu gistingu um allt land.",
      "colls_h1":"Ferðaleiðir & þemalistar","colls_desc":"Tilbúnar leiðir og listar — Gullni hringurinn, Demantshringurinn, bestu laugarnar og fleira.",
      "colls_title":"Ferðaleiðir og þemalistar á Íslandi | {site}",
      "coll_title":"{name} — {tagline} | {site}","places_in":"Staðir á leiðinni",
      "pools_title":"Sundlaugakort Íslands — allar laugar og böð á korti | {site}",
      "pools_h1":"Sundlaugakort Íslands","pools_kicker":"Laugar og böð",
      "pools_lead":"{n} laugar, böð og heitir pottar um allt land — smelltu á punkt til að lesa meira.",
      "pools_chips":{"all":"Allt","spa":"Jarðböð & lón","pool":"Sundlaugar","natural":"Náttúrulaugar","pots":"Heitir pottar"},
      "pools_map_link":"Sjá allar laugar á Íslandskorti →",
    },
  },
  "en": {
    "code": "en", "og_locale": "en", "data": "js/data.en.js", "prefix": "/en",
    "seg": {"place": "place", "region": "region", "all": "places", "coll": "routes", "pools": "pools", "guide": "guide"},
    "country": "Iceland",
    "ui": {
      "nav_map":"Map","nav_all":"All places","nav_about":"About","crumb_home":"Home",
      "kicker_place":{"stadur":"Place","ganga":"Hiking trail","bod":"Pool & baths","veitingar":"Restaurant","kaffi":"Café"},
      "kicker_region":"Region","kicker_overview":"Overview",
      "h_highlights":"Highlights","h_route":"On the route","h_known":"Known for",
      "h_accom":"Nearby accommodation","h_activities":"Activities",
      "stat_area":"Area","stat_pop":"Population","stat_town":"Main town",
      "stat_dist":"Distance","stat_dur":"Duration","stat_diff":"Difficulty",
      "stat_cuisine":"Cuisine","stat_price":"Price","stat_loc":"Location","stat_dist_rvk":"Straight line from Reykjavík",
      "btn_book":"Book nearby accommodation","btn_tours":"Browse tours & activities","btn_find":"Find on map",
      "more_in":"More in {r}","all_in":"All of {r} →","view_map":"View on the interactive map →",
      "region_groups":{"stadur":"Places & nature","ganga":"Hiking trails","bod":"Pools & baths","veitingar":"Restaurants","kaffi":"Cafés"},
      "dir_h1":"All places in Iceland","all_places":"All places","lang_label":"IS",
      "place_title":"{name} — {type} in {rname} | {site}",
      "region_title":"{rname} — places, accommodation & activities | {site}",
      "dir_title":"All places, hiking trails & restaurants in Iceland | {site}",
      "dir_desc":"A guide to Iceland — places, hiking trails, accommodation and activities in every region.",
      "nav_coll":"Routes","kicker_coll":"Route","colls_kicker":"Overview",
      "nav_guide":"Guides","kicker_guide":"Guide","guides_kicker":"Practical",
      "guides_h1":"Practical Iceland travel guides","guides_desc":"Everything you need for your Iceland trip — when to go, how to drive, the northern lights and more.",
      "guides_title":"Practical Iceland travel guides | {site}","guide_title":"{title} | {site}",
      "guide_faq":"Frequently asked questions","guide_more":"More travel guides →",
      "cta_car":"Compare car rentals","cta_tours":"Browse tours & activities","cta_hotel":"Find accommodation",
      "cta_car_lead":"A car is the key to seeing the country at your own pace.",
      "cta_tours_lead":"Browse guided tours and day trips.",
      "cta_hotel_lead":"Find places to stay around the country.",
      "colls_h1":"Travel routes & themed lists","colls_desc":"Ready-made routes and lists — the Golden Circle, Diamond Circle, best baths and more.",
      "colls_title":"Iceland travel routes & themed lists | {site}",
      "coll_title":"{name} — {tagline} | {site}","places_in":"Places on this route",
      "pools_title":"Iceland pools map — every swimming pool, lagoon & hot spring | {site}",
      "pools_h1":"Iceland Pools Map","pools_kicker":"Pools & baths",
      "pools_lead":"{n} pools, lagoons and hot pots across the country — click a dot to read more.",
      "pools_chips":{"all":"All","spa":"Geothermal baths","pool":"Swimming pools","natural":"Natural hot springs","pots":"Hot pots"},
      "pools_map_link":"See every pool on the Iceland map →",
    },
  },
}

# ----------------------------------------------------------------------
def load(datafile):
    src = open(os.path.join(ROOT, datafile), encoding="utf-8").read()
    r0 = src.index("const REGIONS =") + len("const REGIONS =")
    p0 = src.index("const PLACES =")
    regions = json5.loads(src[r0:p0].rstrip().rstrip(";").strip())
    p1 = src.index("const PLACES =") + len("const PLACES =")
    end = src.index("if (typeof module")
    places = json5.loads(src[p1:end].rstrip().rstrip(";").strip())
    return regions, places

def e(s):  return html.escape(str(s), quote=True)
def cat_of(p): return p.get("category", "stadur")
def trunc(s, n=155):
    s = re.sub(r"\s+", " ", s).strip()
    return s if len(s) <= n else s[:n-1].rsplit(" ", 1)[0] + "…"
def write(path, content):
    full = os.path.join(ROOT, path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    open(full, "w", encoding="utf-8").write(content)
def jsonld_block(obj):
    return '<script type="application/ld+json">' + json.dumps(obj, ensure_ascii=False) + '</script>'

def hero_figure(key, lang):
    """Skilar (html, ogimg_url) fyrir hero-mynd ef til, annars ("", None)."""
    img = IMAGES.get(key)
    if not img:
        return "", None
    alt = img.get("alt_" + lang) or img.get("alt_en") or ""
    cap = " / ".join(x for x in (img.get("credit"), (img.get("source") or "").capitalize()) if x)
    html_ = (f'<figure class="doc-hero"><img src="{e(img["src"])}" alt="{e(alt)}" loading="lazy">'
             + (f'<figcaption>{e(cap)}</figcaption>' if cap else '') + '</figure>')
    return html_, SITE_URL + img["src"]

# ---- URL-smiðir ----
def home_url(lang):   return f"{SITE_URL}{LANGS[lang]['prefix']}/"
def all_url(lang):    return f"{SITE_URL}{LANGS[lang]['prefix']}/{LANGS[lang]['seg']['all']}/"
def place_url(lang, pid): return f"{SITE_URL}{LANGS[lang]['prefix']}/{LANGS[lang]['seg']['place']}/{pid}/"
def region_url(lang, rid): return f"{SITE_URL}{LANGS[lang]['prefix']}/{LANGS[lang]['seg']['region']}/{rid}/"
def coll_url(lang, cid): return f"{SITE_URL}{LANGS[lang]['prefix']}/{LANGS[lang]['seg']['coll']}/{cid}/"
def coll_index_url(lang): return f"{SITE_URL}{LANGS[lang]['prefix']}/{LANGS[lang]['seg']['coll']}/"
def pools_url(lang): return f"{SITE_URL}{LANGS[lang]['prefix']}/{LANGS[lang]['seg']['pools']}/"
def guide_url(lang, gid): return f"{SITE_URL}{LANGS[lang]['prefix']}/{LANGS[lang]['seg']['guide']}/{gid}/"
def guides_index_url(lang): return f"{SITE_URL}{LANGS[lang]['prefix']}/{LANGS[lang]['seg']['guide']}/"
def colls_url(lang):     return f"{SITE_URL}{LANGS[lang]['prefix']}/{LANGS[lang]['seg']['coll']}/"
def out_path(url):
    return url.replace(SITE_URL + "/", "") + "index.html"

def kind_url(lang, kind, ident):
    if kind == "place":  return place_url(lang, ident)
    if kind == "region": return region_url(lang, ident)
    if kind == "all":    return all_url(lang)
    if kind == "coll":   return coll_url(lang, ident)
    if kind == "colls":  return coll_index_url(lang)
    if kind == "pools":  return pools_url(lang)
    if kind == "guide":  return guide_url(lang, ident)
    if kind == "guides": return guides_index_url(lang)
    return home_url(lang)

def alternates(kind, ident):
    return "\n".join([
        f'<link rel="alternate" hreflang="is" href="{kind_url("is",kind,ident)}">',
        f'<link rel="alternate" hreflang="en" href="{kind_url("en",kind,ident)}">',
        f'<link rel="alternate" hreflang="x-default" href="{kind_url("is",kind,ident)}">',
    ])

# ----------------------------------------------------------------------
HEAD = """<!DOCTYPE html>
<html lang="{lc}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title}</title>
<meta name="description" content="{desc}">
<link rel="canonical" href="{url}">
<meta name="robots" content="index, follow">
{alts}
<meta property="og:type" content="{ogtype}">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{desc}">
<meta property="og:url" content="{url}">
<meta property="og:site_name" content="{site}">
<meta property="og:locale" content="{oglocale}">
<meta property="og:image" content="{ogimg}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{title}">
<meta name="twitter:image" content="{ogimg}">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/css/styles.css">
<link rel="stylesheet" href="/css/doc.css">
{jsonld}
</head>
<body>
<header class="site-header scrolled">
  <a href="{home}" class="logo"><span class="logo-text">{logo}</span><span class="logo-sub">{logosub}</span></a>
  <nav class="main-nav">
    <a href="{home}#kort">{nav_map}</a>
    <a href="{coll_index}">{nav_coll}</a>
    <a href="{guides_index}">{nav_guide}</a>
    <a href="{all}">{nav_all}</a>
    <a href="{home}#um">{nav_about}</a>
    <a href="{lang_href}" class="lang-switch">{lang_label}</a>
  </nav>
</header>
<main class="doc">
"""
FOOT = """</main>
<footer class="site-footer">
  <div class="footer-inner">
    <span class="footer-logo">Iceland Compass</span>
    <span class="footer-small"><a href="{all}">{nav_all}</a></span>
  </div>
</footer>
</body>
</html>
"""

def page(lang, kind, ident, title, desc, url, ogtype, jsonld, body, ogimg=None):
    ui = LANGS[lang]["ui"]
    other = "en" if lang == "is" else "is"
    logo, logosub = ("Iceland", "Compass")
    head = HEAD.format(
        lc=LANGS[lang]["code"], title=e(title), desc=e(desc), url=e(url), ogtype=ogtype,
        site=e(SITE_NAME), oglocale=LANGS[lang]["og_locale"], siteurl=SITE_URL,
        ogimg=e(ogimg or f"{SITE_URL}/og-image.svg"),
        alts=alternates(kind, ident), jsonld="\n".join(jsonld),
        home=home_url(lang), all=all_url(lang), logo=logo, logosub=logosub,
        nav_map=ui["nav_map"], nav_all=ui["nav_all"], nav_about=ui["nav_about"],
        coll_index=coll_index_url(lang), nav_coll=ui["nav_coll"],
        guides_index=guides_index_url(lang), nav_guide=ui["nav_guide"],
        lang_href=kind_url(other, kind, ident), lang_label=ui["lang_label"])
    full = head + body + FOOT.format(all=all_url(lang), nav_all=ui["nav_all"])
    # Innri <a>-tenglar afstæðir svo síðan virki á hvaða léni sem er
    # (canonical/hreflang/og halda áfram að vera algildir — það á að vera svo)
    return full.replace('<a href="' + SITE_URL, '<a href="')

def breadcrumbs(items):
    ol, crumbs = [], []
    for i, (name, url) in enumerate(items):
        crumbs.append({"@type":"ListItem","position":i+1,"name":name, **({"item":url} if url else {})})
        ol.append(f'<a href="{e(url)}">{e(name)}</a>' if url and i < len(items)-1 else f'<span>{e(name)}</span>')
    nav = '<nav class="crumbs" aria-label="Breadcrumb">' + ' / '.join(ol) + '</nav>'
    ld = jsonld_block({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":crumbs})
    return nav, ld

# ----------------------------------------------------------------------
def build_place(lang, p, regions, places):
    ui = LANGS[lang]["ui"]
    rid = p["region"]; region = regions[rid]; rname = region["name"]; cat = cat_of(p); pid = p["id"]
    url = place_url(lang, pid)
    title = ui["place_title"].format(name=p["name"], type=p["type"], rname=rname, site=SITE_NAME)
    desc = trunc(p.get("blurb") or p.get("description",""))

    crumb_nav, crumb_ld = breadcrumbs([(ui["crumb_home"], home_url(lang)),
                                       (rname, region_url(lang, rid)), (p["name"], url)])
    parts = [crumb_nav,
        f'<p class="doc-kicker">{e(ui["kicker_place"][cat])} · <a href="{region_url(lang,rid)}">{e(rname)}</a></p>',
        f'<h1>{e(p["name"])}</h1>',
        f'<p class="doc-lead">{e(p.get("blurb",""))}</p>',
        f'<div class="doc-band" style="background:{e(region["color"])}"></div>',
        f'<p class="doc-body">{e(p["description"])}</p>']

    hero_html, hero_og = hero_figure(pid, lang)
    if hero_html:
        parts.insert(5, hero_html)

    # Ítarlegt SEO-efni (kaflar með undirfyrirsögnum)
    for sec in SEO.get(pid, {}).get(lang, []):
        txt = sec.get("text") or sec.get("body") or ""
        parts.append(f'<h2>{e(sec.get("title",""))}</h2><p class="doc-body">{e(txt)}</p>')

    dist = km_from_rvk(pid) if pid != "reykjavik" else None
    dist_stat = (ui["stat_dist_rvk"], f"{dist} km") if dist is not None else None
    if cat in ("ganga","veitingar","kaffi","bod"):
        if cat == "ganga":
            stats = [(ui["stat_dist"],p.get("length")),(ui["stat_dur"],p.get("duration")),(ui["stat_diff"],p.get("difficulty"))]
        elif cat == "bod":
            stats = [(ui["stat_price"],p.get("price")),(ui["stat_loc"],p.get("location"))]
        else:
            stats = [(ui["stat_cuisine"],p.get("cuisine")),(ui["stat_price"],p.get("price")),(ui["stat_loc"],p.get("location"))]
        if dist_stat:
            stats.append(dist_stat)
        parts.append('<div class="doc-stats">' +
            "".join(f'<div class="doc-stat"><strong>{e(v)}</strong><span>{e(l)}</span></div>' for l,v in stats if v) + '</div>')
    elif dist_stat:
        parts.append('<div class="doc-stats">' +
            f'<div class="doc-stat"><strong>{e(dist_stat[1])}</strong><span>{e(dist_stat[0])}</span></div></div>')

    if p.get("highlights"):
        ht = ui["h_route"] if cat=="ganga" else (ui["h_known"] if cat in ("veitingar","kaffi") else ui["h_highlights"])
        parts.append(f'<h2>{e(ht)}</h2><ul class="doc-tags">' +
                     "".join(f'<li>{e(h)}</li>' for h in p["highlights"]) + '</ul>')

    if cat in ("stadur","ganga") and p.get("accommodation"):
        parts.append(f'<h2>{e(ui["h_accom"])}</h2><ul class="doc-list">' +
            "".join(f'<li><span>{e(a["name"])} <em>{e(a["type"])}</em></span><b>{e(a["price"])}</b></li>'
                    for a in p["accommodation"]) + '</ul>')
    if cat == "stadur" and p.get("activities"):
        parts.append(f'<h2>{e(ui["h_activities"])}</h2><ul class="doc-list">' +
            "".join(f'<li><span>{e(a)}</span></li>' for a in p["activities"]) + '</ul>')

    q = STAY_HUB.get(pid) or p.get("location") or f'{p["name"]} {rname}'
    booking = f'https://www.booking.com/searchresults.html?ss={e(q)}, {LANGS[lang]["country"]}'
    if cat in ("veitingar","kaffi","bod"):
        mapq = f'{p["name"]} {p.get("location") or rname}'
        maplink = f'https://www.google.com/maps/search/{e(mapq)}, {LANGS[lang]["country"]}'
        parts.append(f'''<div class="doc-cta">
      <a class="doc-btn primary" href="{maplink}" target="_blank" rel="noopener nofollow">{e(ui["btn_find"])}</a>
      <a class="doc-btn" href="{booking}" target="_blank" rel="noopener sponsored nofollow">{e(ui["btn_book"])}</a></div>''')
    else:
        tours = f'https://www.getyourguide.com/s/?q={e(p["name"])}'
        parts.append(f'''<div class="doc-cta">
      <a class="doc-btn primary" href="{booking}" target="_blank" rel="noopener sponsored nofollow">{e(ui["btn_book"])}</a>
      <a class="doc-btn" href="{tours}" target="_blank" rel="noopener sponsored nofollow">{e(ui["btn_tours"])}</a></div>''')

    siblings = [x for x in places if x["region"]==rid and x["id"]!=pid][:8]
    if siblings:
        parts.append(f'<h2>{e(ui["more_in"].format(r=rname))}</h2><ul class="doc-links">' +
            "".join(f'<li><a href="{place_url(lang,s["id"])}">{e(s["name"])}</a> <span>{e(s["type"])}</span></li>'
                    for s in siblings) + '</ul>')
    parts.append(f'<p class="doc-more"><a href="{region_url(lang,rid)}">{e(ui["all_in"].format(r=rname))}</a> · '
                 f'<a href="{home_url(lang)}#kort">{e(ui["view_map"])}</a></p>')

    if cat in ("veitingar","kaffi"):
        schema = {"@context":"https://schema.org","@type":"CafeOrCoffeeShop" if cat=="kaffi" else "Restaurant",
                  "name":p["name"],
                  "description":p["description"],"servesCuisine":p.get("cuisine"),"priceRange":p.get("price"),
                  "address":{"@type":"PostalAddress","addressLocality":p.get("location",rname),
                             "addressRegion":rname,"addressCountry":"IS"},
                  "url":url,"image":f"{SITE_URL}/og-image.svg"}
    else:
        schema = {"@context":"https://schema.org","@type":"TouristAttraction","name":p["name"],
                  "description":p["description"],"touristType":list(p.get("tags",[])),
                  "address":{"@type":"PostalAddress","addressRegion":rname,"addressCountry":"IS"},
                  "isAccessibleForFree":True,"url":url,"image":f"{SITE_URL}/og-image.svg"}

    write(out_path(url), page(lang,"place",pid,title,desc,url,"article",[crumb_ld,jsonld_block(schema)], crumb_nav and "\n".join(parts), ogimg=hero_og))
    return url

def build_region(lang, rid, regions, places):
    ui = LANGS[lang]["ui"]; region = regions[rid]; rname = region["name"]
    url = region_url(lang, rid)
    title = ui["region_title"].format(rname=rname, site=SITE_NAME)
    desc = trunc(region.get("intro",""))
    rplaces = [p for p in places if p["region"]==rid]
    crumb_nav, crumb_ld = breadcrumbs([(ui["crumb_home"], home_url(lang)),(rname, url)])
    parts = [crumb_nav,
        f'<p class="doc-kicker">{e(ui["kicker_region"])} · {e(region.get("tagline",""))}</p>',
        f'<h1>{e(rname)}</h1>',
        f'<div class="doc-band" style="background:{e(region["color"])}"></div>',
        f'<p class="doc-body">{e(region.get("intro",""))}</p>']
    hero_html, hero_og = hero_figure(rid, lang)
    if hero_html:
        parts.insert(4, hero_html)
    s = region.get("stats",{})
    if s:
        parts.append('<div class="doc-stats">' +
            f'<div class="doc-stat"><strong>{e(s.get("flaemi",""))}</strong><span>{e(ui["stat_area"])}</span></div>' +
            f'<div class="doc-stat"><strong>{e(s.get("ibuar",""))}</strong><span>{e(ui["stat_pop"])}</span></div>' +
            f'<div class="doc-stat"><strong>{e(s.get("saeti",""))}</strong><span>{e(ui["stat_town"])}</span></div></div>')
    # Ítarlegt landshlutaefni (kaflar með undirfyrirsögnum)
    for sec in REGION_SEO.get(rid, {}).get(lang, []):
        txt = sec.get("text") or sec.get("body") or ""
        parts.append(f'<h2>{e(sec.get("title",""))}</h2><p class="doc-body">{e(txt)}</p>')
    for cat in ("stadur","ganga","bod","veitingar","kaffi"):
        group = [p for p in rplaces if cat_of(p)==cat]
        if not group: continue
        parts.append(f'<h2>{e(ui["region_groups"][cat])}</h2><ul class="doc-links">' +
            "".join(f'<li><a href="{place_url(lang,p["id"])}">{e(p["name"])}</a> <span>{e(p.get("blurb",""))}</span></li>'
                    for p in group) + '</ul>')
    item_list = {"@context":"https://schema.org","@type":"ItemList",
                 "itemListElement":[{"@type":"ListItem","position":i+1,"url":place_url(lang,p["id"]),"name":p["name"]}
                                    for i,p in enumerate(rplaces)]}
    dest = {"@context":"https://schema.org","@type":"TouristDestination","name":rname,
            "description":region.get("intro",""),"url":url,"image":f"{SITE_URL}/og-image.svg","addressCountry":"IS"}
    write(out_path(url), page(lang,"region",rid,title,desc,url,"website",[crumb_ld,jsonld_block(dest),jsonld_block(item_list)], "\n".join(parts), ogimg=hero_og))
    return url

def build_directory(lang, regions, places):
    ui = LANGS[lang]["ui"]; url = all_url(lang)
    title = ui["dir_title"].format(site=SITE_NAME); desc = trunc(ui["dir_desc"])
    crumb_nav, crumb_ld = breadcrumbs([(ui["crumb_home"], home_url(lang)),(ui["all_places"], url)])
    parts = [crumb_nav, f'<p class="doc-kicker">{e(ui["kicker_overview"])}</p>',
             f'<h1>{e(ui["dir_h1"])}</h1>', f'<p class="doc-lead">{e(ui["dir_desc"])}</p>']
    for rid in REGION_ORDER:
        if rid not in regions: continue
        rplaces = [p for p in places if p["region"]==rid]
        if not rplaces: continue
        parts.append(f'<h2><a href="{region_url(lang,rid)}">{e(regions[rid]["name"])}</a></h2>')
        parts.append('<ul class="doc-links">' +
            "".join(f'<li><a href="{place_url(lang,p["id"])}">{e(p["name"])}</a> <span>{e(p["type"])}</span></li>'
                    for p in rplaces) + '</ul>')
    write(out_path(url), page(lang,"all",None,title,desc,url,"website",[crumb_ld], "\n".join(parts)))
    return url

# ----------------------------------------------------------------------
def build_collection(lang, cid, coll, places_by_id):
    ui = LANGS[lang]["ui"]
    c = coll[lang]
    url = coll_url(lang, cid)
    title = ui["coll_title"].format(name=c["name"], tagline=c["tagline"], site=SITE_NAME)
    desc = trunc(c.get("intro") or c["tagline"])
    color = coll.get("color", "#1f4e46")

    crumb_nav, crumb_ld = breadcrumbs([(ui["crumb_home"], home_url(lang)),
                                       (ui["nav_coll"], coll_index_url(lang)),
                                       (c["name"], url)])
    parts = [crumb_nav,
        f'<p class="doc-kicker">{e(ui["kicker_coll"])}</p>',
        f'<h1>{e(c["name"])}</h1>',
        f'<p class="doc-lead">{e(c["tagline"])}</p>',
        f'<div class="doc-band" style="background:{e(color)}"></div>']
    hero_html, hero_og = hero_figure(cid, lang)
    if hero_html:
        parts.append(hero_html)
    if c.get("intro"):
        parts.append(f'<p class="doc-body">{e(c["intro"])}</p>')
    if cid == "bestu-baudin":
        parts.append(f'<p class="doc-more"><a href="{pools_url(lang)}">{e(ui["pools_map_link"])}</a></p>')
    # Ítarlegir kaflar (frá textahöfundum) ef til
    for sec in c.get("sections", []):
        txt = sec.get("text") or sec.get("body") or ""
        parts.append(f'<h2>{e(sec.get("title",""))}</h2><p class="doc-body">{e(txt)}</p>')

    # Viðkomustaðir í röð
    items = [places_by_id[pid] for pid in coll["places"] if pid in places_by_id]
    parts.append(f'<h2>{e(ui["places_in"])}</h2><ul class="doc-links">' +
        "".join(f'<li><a href="{place_url(lang, p["id"])}">{e(p["name"])}</a> <span>{e(p.get("blurb") or p["type"])}</span></li>'
                for p in items) + '</ul>')
    parts.append(f'<p class="doc-more"><a href="{coll_index_url(lang)}">{e(ui["colls_h1"])} →</a> · '
                 f'<a href="{home_url(lang)}#kort">{e(ui["view_map"])}</a></p>')

    item_list = {"@context":"https://schema.org","@type":"ItemList","name":c["name"],
                 "itemListElement":[{"@type":"ListItem","position":i+1,"url":place_url(lang,p["id"]),"name":p["name"]}
                                    for i,p in enumerate(items)]}
    ld = [crumb_ld, jsonld_block(item_list)]
    write(out_path(url), page(lang,"coll",cid,title,desc,url,"website",ld,"\n".join(parts), ogimg=hero_og))
    return url

def build_collections_index(lang, collections):
    ui = LANGS[lang]["ui"]
    url = coll_index_url(lang)
    title = ui["colls_title"].format(site=SITE_NAME)
    desc = trunc(ui["colls_desc"])
    crumb_nav, crumb_ld = breadcrumbs([(ui["crumb_home"], home_url(lang)),(ui["nav_coll"], url)])
    ordered = sorted(collections.items(), key=lambda kv: kv[1].get("order", 99))
    parts = [crumb_nav,
        f'<p class="doc-kicker">{e(ui["colls_kicker"])}</p>',
        f'<h1>{e(ui["colls_h1"])}</h1>',
        f'<p class="doc-lead">{e(ui["colls_desc"])}</p>',
        '<ul class="doc-links">' +
        "".join(f'<li><a href="{coll_url(lang,cid)}">{e(coll[lang]["name"])}</a> <span>{e(coll[lang]["tagline"])}</span></li>'
                for cid, coll in ordered) + '</ul>']
    write(out_path(url), page(lang,"colls",None,title,desc,url,"website",[crumb_ld],"\n".join(parts)))
    return url

# ----------------------------------------------------------------------
def pool_bucket(p):
    ty = (p.get("type") or "").lower()
    if "jarðböð" in ty or "geothermal bath" in ty or "lón" in ty or "lagoon" in ty or "sea bath" in ty or "sjóböð" in ty:
        return "spa"
    if "pottar" in ty or "pots" in ty or "hot tub" in ty:
        return "pots"
    if "náttúrulaug" in ty or "natural" in ty or "hot spring" in ty:
        return "natural"
    return "pool"

def build_pools_page(lang, regions, places):
    ui = LANGS[lang]["ui"]
    url = pools_url(lang)
    pools = [p for p in places if cat_of(p) == "bod"]
    title = ui["pools_title"].format(site=SITE_NAME)
    desc = trunc(ui["pools_lead"].format(n=len(pools)))
    crumb_nav, crumb_ld = breadcrumbs([(ui["crumb_home"], home_url(lang)), (ui["pools_h1"], url)])

    meta, region_paths, mapsrc = MAPDATA
    # jöklar
    gseg = mapsrc[mapsrc.index("const GLACIER_PATH =") + len("const GLACIER_PATH ="):]
    glacier = json5.loads(gseg[:gseg.index(";")])

    svg = [f'<svg viewBox="{meta["viewBox"]}" role="img" aria-label="{e(ui["pools_h1"])}">']
    for rid in REGION_ORDER:
        d = region_paths.get(rid)
        if d:
            svg.append(f'<path d="{d}" fill="{regions[rid]["color"]}" fill-rule="evenodd" class="pm-region"/>')
    svg.append(f'<path d="{glacier}" class="pm-glacier"/>')
    for p in pools:
        c = COORDS.get(p["id"])
        if not c:
            continue
        x = (c[1] * 0.424199 - (-10.406353)) * 213.595734
        y = (66.566417 - c[0]) * 213.595734
        b = pool_bucket(p)
        svg.append(
            f'<a href="{place_url(lang, p["id"])}" class="pm-dot" data-t="{b}">'
            f'<circle cx="{x:.1f}" cy="{y:.1f}" r="5"><title>{e(p["name"])} — {e(p.get("location",""))}</title></circle></a>')
    svg.append("</svg>")

    chips = ui["pools_chips"]
    chip_html = "".join(
        f'<button class="cat-tab{" active" if k == "all" else ""}" data-pt="{k}" type="button">{e(v)}</button>'
        for k, v in chips.items())

    rows = []
    for rid in REGION_ORDER:
        rpools = [p for p in pools if p["region"] == rid]
        if not rpools:
            continue
        rows.append(f'<h2>{e(regions[rid]["name"])}</h2><ul class="doc-links">')
        for p in rpools:
            b = pool_bucket(p)
            loc = p.get("location", "")
            rows.append(
                f'<li data-t="{b}"><a href="{place_url(lang, p["id"])}">{e(p["name"])}</a> '
                f'<span>{e(p["type"])}{" · " + e(loc) if loc else ""} · {e(p.get("price",""))}</span></li>')
        rows.append("</ul>")

    script = """<script>
(function(){
  var chips=document.querySelectorAll('[data-pt]');
  function apply(t){
    chips.forEach(function(c){c.classList.toggle('active',c.dataset.pt===t);});
    document.querySelectorAll('.pm-dot,[data-t]').forEach(function(el){
      if(el.dataset.pt!==undefined)return;
      el.style.display=(t==='all'||el.dataset.t===t)?'':'none';
    });
  }
  chips.forEach(function(c){c.addEventListener('click',function(){apply(c.dataset.pt);});});
})();
</script>"""

    parts = [crumb_nav,
        f'<p class="doc-kicker">{e(ui["pools_kicker"])}</p>',
        f'<h1>{e(ui["pools_h1"])}</h1>',
        f'<p class="doc-lead">{e(ui["pools_lead"].format(n=len(pools)))}</p>',
        f'<div class="filter-cats pools-chips">{chip_html}</div>',
        f'<div class="pools-map">{"".join(svg)}</div>',
        "".join(rows),
        f'<p class="doc-more"><a href="{home_url(lang)}#kort">{e(ui["view_map"])}</a></p>',
        script]

    item_list = {"@context":"https://schema.org","@type":"ItemList","name":ui["pools_h1"],
                 "itemListElement":[{"@type":"ListItem","position":i+1,"url":place_url(lang,p["id"]),"name":p["name"]}
                                    for i,p in enumerate(pools)]}
    write(out_path(url), page(lang,"pools",None,title,desc,url,"website",[crumb_ld,jsonld_block(item_list)], "\n".join(parts)))
    return url

# ----------------------------------------------------------------------
def guide_cta(lang, cta):
    if not cta:
        return ""
    ui = LANGS[lang]["ui"]
    label = ui.get(f"cta_{cta}"); lead = ui.get(f"cta_{cta}_lead")
    if not label:
        return ""
    # Bókunarhlekkur — nýtir sömu affiliate-slóðir og staðasíður (ID bætt við síðar)
    country = LANGS[lang]["country"]
    if cta == "car":
        href = "https://www.booking.com/cars/index.html"
    elif cta == "tours":
        href = f"https://www.getyourguide.com/s/?q={e(country)}"
    else:
        href = f"https://www.booking.com/searchresults.html?ss={e(country)}"
    return (f'<div class="guide-cta"><p>{e(lead)}</p>'
            f'<a class="btn-doc" href="{href}" target="_blank" rel="sponsored noopener">{e(label)} →</a></div>')

def build_guide(lang, gid, g):
    ui = LANGS[lang]["ui"]
    c = g[lang]
    url = guide_url(lang, gid)
    title = ui["guide_title"].format(title=c["title"], site=SITE_NAME)
    desc = trunc(c.get("excerpt") or c["title"])

    crumb_nav, crumb_ld = breadcrumbs([(ui["crumb_home"], home_url(lang)),
                                       (ui["nav_guide"], guides_index_url(lang)),
                                       (c["title"], url)])
    hero_html, hero_og = hero_figure(gid, lang)
    parts = [crumb_nav,
        f'<p class="doc-kicker">{e(ui["kicker_guide"])}</p>',
        f'<h1>{e(c["title"])}</h1>',
        f'<p class="doc-lead">{e(c.get("excerpt",""))}</p>']
    if hero_html:
        parts.append(hero_html)
    if g.get("cta"):
        parts.append(guide_cta(lang, g["cta"]))
    for sec in c.get("sections", []):
        body = "".join(f'<p>{e(par)}</p>' for par in (sec.get("body") or "").split("\n\n") if par.strip())
        parts.append(f'<h2>{e(sec.get("heading",""))}</h2>{body}')

    # FAQ + FAQPage skema
    faq = c.get("faq", [])
    faq_ld = None
    if faq:
        parts.append(f'<h2>{e(ui["guide_faq"])}</h2><div class="doc-faq">' +
            "".join(f'<details><summary>{e(q["q"])}</summary><p>{e(q["a"])}</p></details>' for q in faq) + '</div>')
        faq_ld = jsonld_block({"@context":"https://schema.org","@type":"FAQPage",
            "mainEntity":[{"@type":"Question","name":q["q"],
                "acceptedAnswer":{"@type":"Answer","text":q["a"]}} for q in faq]})

    if g.get("cta"):
        parts.append(guide_cta(lang, g["cta"]))
    parts.append(f'<p class="doc-more"><a href="{guides_index_url(lang)}">{e(ui["guide_more"])}</a></p>')

    article_ld = jsonld_block({"@context":"https://schema.org","@type":"Article",
        "headline":c["title"], "description":desc, "inLanguage":LANGS[lang]["code"],
        "publisher":{"@type":"Organization","name":SITE_NAME},
        "mainEntityOfPage":url})
    ld = [crumb_ld, article_ld] + ([faq_ld] if faq_ld else [])
    write(out_path(url), page(lang,"guide",gid,title,desc,url,"article",ld,"\n".join(parts), ogimg=hero_og))
    return url

def build_guides_index(lang, guides):
    ui = LANGS[lang]["ui"]
    url = guides_index_url(lang)
    title = ui["guides_title"].format(site=SITE_NAME)
    desc = trunc(ui["guides_desc"])
    crumb_nav, crumb_ld = breadcrumbs([(ui["crumb_home"], home_url(lang)),(ui["nav_guide"], url)])
    ordered = sorted(guides.items(), key=lambda kv: kv[1].get("order", 99))
    cards = []
    for gid, g in ordered:
        c = g[lang]
        img = IMAGES.get(gid)
        thumb = (f'<span class="gc-thumb" style="background-image:url(\'{img["src"]}\')"></span>' if img else '<span class="gc-thumb gc-thumb-plain"></span>')
        cards.append(
            f'<a class="guide-card" href="{guide_url(lang, gid)}">{thumb}'
            f'<span class="gc-body"><strong>{e(c["title"])}</strong><span>{e(c.get("excerpt",""))}</span></span></a>')
    parts = [crumb_nav,
        f'<p class="doc-kicker">{e(ui["guides_kicker"])}</p>',
        f'<h1>{e(ui["guides_h1"])}</h1>',
        f'<p class="doc-lead">{e(ui["guides_desc"])}</p>',
        f'<div class="guide-grid">{"".join(cards)}</div>']
    item_list = {"@context":"https://schema.org","@type":"ItemList","name":ui["guides_h1"],
                 "itemListElement":[{"@type":"ListItem","position":i+1,"url":guide_url(lang,gid),"name":g[lang]["title"]}
                                    for i,(gid,g) in enumerate(ordered)]}
    write(out_path(url), page(lang,"guides",None,title,desc,url,"website",[crumb_ld,jsonld_block(item_list)],"\n".join(parts)))
    return url

# ----------------------------------------------------------------------
def build_sitemap(urls):
    items = "".join(
        f"<url><loc>{u}</loc><lastmod>{TODAY}</lastmod><changefreq>monthly</changefreq><priority>{pr}</priority></url>\n"
        for u,pr in urls)
    write("sitemap.xml", '<?xml version="1.0" encoding="UTF-8"?>\n'
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + items + '</urlset>\n')

def build_robots():
    write("robots.txt", f"User-agent: *\nAllow: /\n\nSitemap: {SITE_URL}/sitemap.xml\n")

def build_og_image():
    write("og-image.svg", '''<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#f4f1ea"/>
  <rect width="1200" height="10" fill="#1f4e46"/>
  <text x="90" y="300" font-family="Georgia, serif" font-size="90" font-weight="600" fill="#1c1b19">Iceland Compass</text>
  <text x="90" y="380" font-family="Georgia, serif" font-size="44" fill="#57534c">your travel guide to Iceland</text>
  <text x="90" y="470" font-family="Inter, sans-serif" font-size="27" fill="#8c877d">Places · baths · hiking · food · in every region</text>
</svg>''')

def build_doc_css():
    write("css/doc.css", """/* Stílar fyrir kyrrstæðu SEO-síðurnar (byggðar af build.py) */
.doc { max-width: 760px; margin: 0 auto; padding: 120px 24px 80px; }
.crumbs { font-size: .84rem; color: var(--ink-faint); margin-bottom: 28px; }
.crumbs a { color: var(--ink-soft); } .crumbs a:hover { color: var(--accent); }
.doc-kicker { text-transform: uppercase; letter-spacing: .16em; font-size: .74rem; font-weight: 600; color: var(--accent); margin-bottom: 14px; }
.doc-kicker a { color: var(--accent); }
.doc h1 { font-size: clamp(2.2rem, 5vw, 3.2rem); margin-bottom: 16px; }
.doc-lead { font-size: 1.2rem; color: var(--ink-soft); margin-bottom: 24px; }
.doc-band { height: 8px; border-radius: 6px; margin-bottom: 28px; }
.doc-hero { margin: 0 0 28px; }
.doc-hero img { width: 100%; max-height: 400px; object-fit: cover; border-radius: 10px; display: block; }
.doc-hero figcaption { font-size: .72rem; color: var(--ink-faint); margin-top: 6px; text-align: right; }
.doc-body { font-size: 1.05rem; color: var(--ink-soft); margin-bottom: 8px; }
.doc h2 { font-size: 1.4rem; margin: 38px 0 16px; padding-bottom: 8px; border-bottom: 1px solid var(--line); }
.doc h2 a { color: var(--ink); } .doc h2 a:hover { color: var(--accent); }
.doc-stats { display: flex; border: 1px solid var(--line); border-radius: 8px; overflow: hidden; margin: 4px 0 8px; }
.doc-stat { flex: 1; padding: 16px 12px; text-align: center; }
.doc-stat + .doc-stat { border-left: 1px solid var(--line); }
.doc-stat strong { display: block; font-family: var(--font-display); font-size: 1.05rem; }
.doc-stat span { font-size: .7rem; text-transform: uppercase; letter-spacing: .08em; color: var(--ink-faint); }
.doc-tags { list-style: none; display: flex; flex-wrap: wrap; gap: 8px; padding: 0; }
.doc-tags li { background: var(--card); border: 1px solid var(--line); border-radius: 100px; padding: 7px 14px; font-size: .9rem; }
.doc-list { list-style: none; padding: 0; }
.doc-list li { display: flex; justify-content: space-between; gap: 12px; padding: 12px 2px; border-bottom: 1px solid var(--line-soft); }
.doc-list em { color: var(--ink-faint); font-style: normal; font-size: .82rem; display: block; }
.doc-list b { color: var(--accent); }
.doc-links { list-style: none; padding: 0; }
.doc-links li { padding: 12px 2px; border-bottom: 1px solid var(--line-soft); }
.doc-links a { font-weight: 600; }
.doc-links a:hover { color: var(--accent); }
.doc-links span { color: var(--ink-faint); font-size: .88rem; display: block; }
.doc-cta { display: flex; gap: 12px; flex-wrap: wrap; margin: 32px 0; padding-top: 26px; border-top: 1px solid var(--line); }
.doc-btn { flex: 1; min-width: 200px; text-align: center; padding: 14px 20px; border-radius: 6px; font-weight: 600; border: 1px solid var(--line); }
.doc-btn.primary { background: var(--accent); color: var(--paper); border-color: var(--accent); }
.doc-btn:hover { transform: translateY(-2px); }
.pools-chips { margin: 6px 0 20px; flex-wrap: wrap; display: inline-flex; }
.pools-map { margin: 0 0 34px; }
.pools-map svg { width: 100%; height: auto; display: block; filter: drop-shadow(0 12px 30px rgba(28,27,25,0.12)); }
.pm-region { fill-opacity: 0.3; stroke: var(--paper); stroke-width: 1.2; }
.pm-glacier { fill: #fbfcfd; fill-opacity: 0.9; stroke: #cdd8de; stroke-width: 0.8; }
.pm-dot circle { fill: var(--accent); stroke: #fff; stroke-width: 1.6; cursor: pointer; transition: fill 0.15s; }
.pm-dot:hover circle { fill: #b05750; }
.doc-more { margin-top: 30px; color: var(--ink-faint); }

/* Hagnýtar leiðsögugreinar */
.guide-cta {
  background: var(--paper-2, #ece7dd);
  border: 1px solid var(--line);
  border-radius: 10px;
  padding: 20px 24px;
  margin: 30px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px 20px;
  justify-content: space-between;
}
.guide-cta p { margin: 0; color: var(--ink-soft); font-weight: 500; }
.btn-doc {
  display: inline-block;
  background: var(--accent);
  color: var(--paper);
  padding: 11px 22px;
  border-radius: 100px;
  font-weight: 600;
  white-space: nowrap;
}
.btn-doc:hover { background: var(--accent-soft, #2f6a5f); }
.doc-faq { margin: 6px 0 8px; }
.doc-faq details {
  border-bottom: 1px solid var(--line);
  padding: 4px 0;
}
.doc-faq summary {
  cursor: pointer;
  font-weight: 600;
  padding: 12px 0;
  list-style: none;
  position: relative;
  padding-right: 28px;
}
.doc-faq summary::-webkit-details-marker { display: none; }
.doc-faq summary::after {
  content: "+";
  position: absolute;
  right: 6px; top: 10px;
  font-size: 1.3rem;
  color: var(--ink-faint);
}
.doc-faq details[open] summary::after { content: "−"; }
.doc-faq details p { padding: 0 0 14px; color: var(--ink-soft); }

.guide-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; margin-top: 10px; }
.guide-card {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--line);
  border-radius: 10px;
  overflow: hidden;
  background: var(--card, #fbfaf6);
  transition: transform 0.2s, box-shadow 0.2s;
}
.guide-card:hover { transform: translateY(-3px); box-shadow: 0 18px 40px -22px rgba(28,27,25,0.4); }
.gc-thumb { display: block; height: 150px; background-size: cover; background-position: center; }
.gc-thumb-plain { background: linear-gradient(135deg, var(--accent), #2f6a5f); }
.gc-body { padding: 16px 18px; display: flex; flex-direction: column; gap: 6px; }
.gc-body strong { font-family: var(--font-display, Georgia, serif); font-size: 1.1rem; }
.gc-body span { color: var(--ink-soft); font-size: 0.9rem; }
.doc-more a { color: var(--accent); font-weight: 600; }
""")

# ----------------------------------------------------------------------
def main():
    global SEO, REGION_SEO, STAY_HUB, COLLECTIONS, IMAGES, COORDS, MAPDATA, GUIDES
    SEO = load_seo()
    REGION_SEO = load_region_seo()
    STAY_HUB = load_stay_hub()
    IMAGES = load_images()
    COORDS = load_coords()
    MAPDATA = load_mapdata()
    GUIDES = load_guides()
    COLLECTIONS = load_collections()
    build_og_image(); build_doc_css(); build_robots()
    urls = [(home_url("is"), "1.0"), (home_url("en"), "1.0")]
    counts = {}
    for lang, cfg in LANGS.items():
        regions, places = load(cfg["data"])
        counts[lang] = len(places)
        urls.append((build_directory(lang, regions, places), "0.8"))
        for rid in REGION_ORDER:
            if rid in regions:
                urls.append((build_region(lang, rid, regions, places), "0.7"))
        for p in places:
            urls.append((build_place(lang, p, regions, places), "0.6"))
        urls.append((build_pools_page(lang, regions, places), "0.8"))
        if GUIDES:
            urls.append((build_guides_index(lang, GUIDES), "0.8"))
            for gid, g in GUIDES.items():
                urls.append((build_guide(lang, gid, g), "0.7"))
        if COLLECTIONS:
            places_by_id = {p["id"]: p for p in places}
            urls.append((build_collections_index(lang, COLLECTIONS), "0.8"))
            for cid, coll in COLLECTIONS.items():
                urls.append((build_collection(lang, cid, coll, places_by_id), "0.8"))
    build_sitemap(urls)
    print(f"✔ Byggt á 2 tungumálum — is: {counts['is']} staðir, en: {counts['en']} staðir")
    print(f"✔ {len(COLLECTIONS)} þemaleiðir · {len(GUIDES)} leiðsögugreinar")
    print(f"✔ {len(urls)} slóðir í sitemap.xml")
    print(f"⚠ Stilltu SITE_URL (nú: {SITE_URL}) — líka í index.html og en/index.html")

if __name__ == "__main__":
    main()
