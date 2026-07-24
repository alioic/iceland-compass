/* ============================================================
   Ísland · leiðsögn — virkni
   Notar raunverulegar útlínur landshluta úr mapdata.js
   ============================================================ */

// Röð landshluta (frá suðvestri, réttsælis)
const REGION_ORDER = [
  "hofudborg", "reykjanes", "vesturland", "vestfirdir",
  "nordvestur", "nordaustur", "austurland", "sudurland",
];

// Stutt heiti fyrir merkimiða á korti
const SHORT_LABELS = {
  hofudborg: "Höfuðborg",
  reykjanes: "Reykjanes",
  vesturland: "Vesturland",
  vestfirdir: "Vestfirðir",
  nordvestur: "Norðurl. vestra",
  nordaustur: "Norðurl. eystra",
  austurland: "Austurland",
  sudurland: "Suðurland",
};

// Handvirkar leiðréttingar á staðsetningu merkimiða (svæði sem skarast/eru lítil)
const LABEL_OFFSET = {
  hofudborg: [70, -6],   // færa frá Reykjanesi
  reykjanes: [-40, 34],  // niður á skagann
  nordvestur: [10, 26],
  vesturland: [-6, 30],
};

const state = { activeRegion: null, filterRegion: "allt", filterCategory: "allt", search: "" };

// ------------------------------ TUNGUMÁL / i18n ------------------------------
const LANG = document.documentElement.lang === "en" ? "en" : "is";
const STR = {
  is: {
    hint: "Smelltu á landshluta til að sjá staði á svæðinu",
    onArea: "Á svæðinu", statArea: "Flæmi", statPop: "Íbúar", statTown: "Þéttbýli",
    cat: { allt: "Allt", stadur: "Staðir", ganga: "Gönguleiðir", bod: "Sundlaugar & böð", veitingar: "Veitingastaðir", kaffi: "Kaffihús" },
    allCountry: "Allt landið", highlands: "Hálendi",
    placesWord: (n) => `${n} ${n === 1 ? "staður" : "staðir"}`,
    resultsWord: (n) => `${n} ${n === 1 ? "niðurstaða" : "niðurstöður"}`,
    seeMore: "Skoða nánar →", accomN: "Gisting", activN: "Afþreying",
    mHighlights: "Hápunktar", mRoute: "Á leiðinni", mKnown: "Þekkt fyrir",
    mAccom: "Gisting", mActiv: "Afþreying",
    sDist: "Vegalengd", sDur: "Tími", sDiff: "Erfiðleiki",
    sCuisine: "Tegund", sPrice: "Verðflokkur", sLoc: "Staðsetning",
    btnBook: "Bóka gistingu í nágrenni", btnTours: "Skoða ferðir og afþreyingu", btnMap: "Finna á korti",
    fullPage: (n) => `Lestu meira um ${n} →`, near: "Ísland",
    badgeGem: "Falin perla", badgePop: "Vinsælt", badgeFree: "Ókeypis",
    surprise: "Komdu mér á óvart",
  },
  en: {
    hint: "Click a region to see places in that area",
    onArea: "In this area", statArea: "Area", statPop: "Population", statTown: "Main town",
    cat: { allt: "All", stadur: "Places", ganga: "Hiking trails", bod: "Pools & baths", veitingar: "Restaurants", kaffi: "Cafés" },
    allCountry: "Whole country", highlands: "Highlands",
    placesWord: (n) => `${n} ${n === 1 ? "place" : "places"}`,
    resultsWord: (n) => `${n} ${n === 1 ? "result" : "results"}`,
    seeMore: "View details →", accomN: "Stays", activN: "Activities",
    mHighlights: "Highlights", mRoute: "On the route", mKnown: "Known for",
    mAccom: "Nearby accommodation", mActiv: "Activities",
    sDist: "Distance", sDur: "Duration", sDiff: "Difficulty",
    sCuisine: "Cuisine", sPrice: "Price", sLoc: "Location",
    btnBook: "Book nearby accommodation", btnTours: "Browse tours & activities", btnMap: "Find on map",
    fullPage: (n) => `Read more about ${n} →`, near: "Iceland",
    badgeGem: "Hidden gem", badgePop: "Popular", badgeFree: "Free",
    surprise: "Surprise me",
  },
};
const t = STR[LANG];
const placeHref  = (id) => (LANG === "en" ? `/en/place/${id}/`  : `/stadur/${id}/`);
const regionHref = (id) => (LANG === "en" ? `/en/region/${id}/` : `/landshluti/${id}/`);
const isHighland = (p) => p.tags.includes("Hálendi") || p.tags.includes("Highlands");
const isDining = (c) => c === "veitingar" || c === "kaffi";
const hasLoc = (c) => c === "veitingar" || c === "kaffi" || c === "bod"; // sýnir staðsetningu + kortatengil

// Flokkar
const CATEGORIES = [
  { id: "allt", label: t.cat.allt },
  { id: "stadur", label: t.cat.stadur },
  { id: "ganga", label: t.cat.ganga },
  { id: "bod", label: t.cat.bod },
  { id: "veitingar", label: t.cat.veitingar },
  { id: "kaffi", label: t.cat.kaffi },
];
const catOf = (p) => p.category || "stadur";

// ---------------- MERKI Á SPJÖLD ----------------
// Falin perla: minna þekktir staðir sem koma á óvart
const GEM_IDS = new Set([
  "kalfshamarsvik", "kolugljufur", "storurd", "hljodaklettar", "drangey",
  "hellulaug", "krossneslaug", "pollurinn_talknafjordur", "landbrotalaug",
  "gudrunarlaug", "franska_kaffihusid_raudasandi", "simbahollin",
  "fjoruhusid_hellnar", "gilbakki_kaffihus_hellissandur", "aldeyjarfoss",
  "kaffi_lara", "grettislaug", "laugarfell", "arctic_henge", "hrunalaug",
]);
// Vinsælt: frægustu staðirnir
const POP_IDS = new Set([
  "blaalonid", "sky_lagoon", "thingvellir", "geysir", "gullfoss",
  "jokulsarlon", "reynisfjara", "kirkjufell", "skogafoss", "myvatn",
  "jardbodin_myvatn", "husavik", "landmannalaugar", "fridheimar",
]);
// Ókeypis: náttúruperlur án aðgangseyris (sami listi og þemaleiðin)
const FREE_IDS = new Set([
  "godafoss", "gullfoss", "skogafoss", "dynjandi", "hraunfossar",
  "aldeyjarfoss", "kolugljufur", "reynisfjara", "kirkjufell", "namaskard",
  "brimketill", "hljodaklettar", "studlagil", "hvitserkur",
]);
function badgeFor(p) {
  if (GEM_IDS.has(p.id)) return { label: t.badgeGem, cls: "gem" };
  if (POP_IDS.has(p.id)) return { label: t.badgePop, cls: "pop" };
  if (FREE_IDS.has(p.id)) return { label: t.badgeFree, cls: "free" };
  return null;
}

/* ------------------------------------------------------------------
   TEKJUR / AFFILIATE
   Settu inn þín eigin auðkenni hér til að fá þóknun af bókunum.
   Hlekkirnir virka strax; þóknun skráist þegar auðkenni eru komin.
   - booking : Booking.com Partner „aid"
   - gyg     : GetYourGuide partner_id
   Skráning: partner.booking.com, partner.getyourguide.com,
             eða safnþjónusta eins og travelpayouts.com
------------------------------------------------------------------ */
const AFFILIATE = { booking: "", gyg: "" };

function bookingLink(q) {
  const aid = AFFILIATE.booking ? `&aid=${AFFILIATE.booking}` : "";
  return `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(q + ", " + t.near)}${aid}`;
}
function tourLink(q) {
  const pid = AFFILIATE.gyg ? `&partner_id=${AFFILIATE.gyg}` : "";
  return `https://www.getyourguide.com/s/?q=${encodeURIComponent(q)}${pid}`;
}
function mapLink(q) {
  return `https://www.google.com/maps/search/${encodeURIComponent(q + ", " + t.near)}`;
}

/* ---------------- BYGGJA KORT ---------------- */
function buildMap() {
  const ns = "http://www.w3.org/2000/svg";
  const container = document.getElementById("mapContainer");
  const svg = document.createElementNS(ns, "svg");
  svg.setAttribute("viewBox", MAP_META.viewBox);
  svg.setAttribute("role", "img");
  svg.setAttribute("aria-label", "Kort af Íslandi eftir landshlutum");

  // Nafnamiði sem birtist við hover
  const tooltip = document.createElement("div");
  tooltip.className = "map-tooltip";
  tooltip.id = "mapTooltip";
  container.appendChild(tooltip);

  function moveTip(e, name) {
    const r = container.getBoundingClientRect();
    tooltip.style.left = e.clientX - r.left + "px";
    tooltip.style.top = e.clientY - r.top + "px";
    tooltip.textContent = name;
    tooltip.classList.add("show");
  }
  function hideTip() { tooltip.classList.remove("show"); }

  // Landshlutar
  REGION_ORDER.forEach((id) => {
    if (!REGION_PATHS[id]) return;
    const region = REGIONS[id];
    const path = document.createElementNS(ns, "path");
    path.setAttribute("d", REGION_PATHS[id]);
    path.setAttribute("fill", region.color);
    path.setAttribute("fill-rule", "evenodd");
    path.setAttribute("class", "region-path");
    path.dataset.region = id;
    path.addEventListener("click", () => selectRegion(id));
    path.addEventListener("mouseenter", (e) => moveTip(e, region.name));
    path.addEventListener("mousemove", (e) => moveTip(e, region.name));
    path.addEventListener("mouseleave", hideTip);
    const t = document.createElementNS(ns, "title");
    t.textContent = region.name;
    path.appendChild(t);
    svg.appendChild(path);
  });

  // Jöklar (ofan á fyllingu, en hleypa smellum í gegn á landshlutann undir)
  if (typeof GLACIER_PATH === "string" && GLACIER_PATH) {
    const glac = document.createElementNS(ns, "path");
    glac.setAttribute("d", GLACIER_PATH);
    glac.setAttribute("class", "glacier-path");
    svg.appendChild(glac);
  }

  // Merkimiðar (efst)
  REGION_ORDER.forEach((id) => {
    if (!REGION_LABELS[id]) return;
    let [x, y] = REGION_LABELS[id];
    if (LABEL_OFFSET[id]) { x += LABEL_OFFSET[id][0]; y += LABEL_OFFSET[id][1]; }
    const text = document.createElementNS(ns, "text");
    text.setAttribute("x", x);
    text.setAttribute("y", y);
    text.setAttribute("class", "map-label");
    text.setAttribute("font-size", "21");
    text.dataset.label = id;
    text.textContent = SHORT_LABELS[id];
    svg.appendChild(text);
  });

  container.appendChild(svg);

  const hint = document.createElement("p");
  hint.className = "map-hint";
  hint.textContent = t.hint;
  container.after(hint);
}

/* ---------------- HRAÐLISTI Í TÓMU SPJALDI ---------------- */
function buildFooterNav() {
  const nav = document.getElementById("footerNav");
  if (!nav) return;
  REGION_ORDER.forEach((id) => {
    const a = document.createElement("a");
    a.href = regionHref(id);
    a.textContent = REGIONS[id].name;
    nav.appendChild(a);
  });
}

function buildQuicklist() {
  const ul = document.getElementById("regionQuicklist");
  REGION_ORDER.forEach((id) => {
    const r = REGIONS[id];
    const count = PLACES.filter((p) => p.region === id).length;
    const li = document.createElement("li");
    li.innerHTML = `
      <span class="ql-swatch" style="background:${r.color}"></span>
      <span>${r.name}</span>
      <span class="ql-count">${count}</span>`;
    li.addEventListener("click", () => selectRegion(id));
    ul.appendChild(li);
  });
}

/* ---------------- VELJA LANDSHLUTA ---------------- */
function selectRegion(id) {
  state.activeRegion = id;

  document.querySelectorAll(".region-path").forEach((p) =>
    p.classList.toggle("active", p.dataset.region === id)
  );
  document.querySelectorAll(".map-label").forEach((l) =>
    l.classList.toggle("active-label", l.dataset.label === id)
  );

  const region = REGIONS[id];
  const places = PLACES.filter((p) => p.region === id);

  const renderPlace = (p) => `
      <div class="rp-place" data-place="${p.id}">
        <span class="rp-place-bar" style="background:${region.color}"></span>
        <span class="rp-place-info">
          <strong>${p.name}</strong>
          <span>${p.type}${isHighland(p) ? " · " + t.highlands : ""}</span>
        </span>
        <span class="rp-place-arrow">→</span>
      </div>`;
  const GROUP_ORDER = ["stadur", "ganga", "bod", "veitingar", "kaffi"];
  const placesHTML = GROUP_ORDER.map((c) => {
    const items = places.filter((p) => catOf(p) === c);
    if (!items.length) return "";
    return `<p class="rp-group-title">${t.cat[c]}<span>${items.length}</span></p>` +
           items.map(renderPlace).join("");
  }).join("");

  document.getElementById("regionContent").innerHTML = `
    <p class="rp-tagline">${region.tagline}</p>
    <h3>${region.name}</h3>
    <p class="rp-intro">${region.intro}</p>
    <div class="rp-stats">
      <div class="rp-stat"><strong>${region.stats.flaemi}</strong><span>${t.statArea}</span></div>
      <div class="rp-stat"><strong>${region.stats.ibuar}</strong><span>${t.statPop}</span></div>
      <div class="rp-stat"><strong>${region.stats.saeti}</strong><span>${t.statTown}</span></div>
    </div>
    <p class="rp-places-title">${t.onArea} — ${places.length}</p>
    ${placesHTML}
  `;

  document.getElementById("regionEmpty").hidden = true;
  document.getElementById("regionContent").hidden = false;

  document.querySelectorAll("#regionContent .rp-place").forEach((el) =>
    el.addEventListener("click", () => openModal(el.dataset.place))
  );

  setFilterRegion(id);
}

/* ---------------- LANDSHLUTASPJÖLD ---------------- */
function buildRegionCards() {
  const wrap = document.getElementById("regionCards");
  REGION_ORDER.forEach((id, i) => {
    const r = REGIONS[id];
    const count = PLACES.filter((p) => p.region === id).length;
    const card = document.createElement("div");
    const img = typeof IMAGES !== "undefined" ? IMAGES[id] : null;
    card.className = "region-card" + (img ? " photo-card" : "");
    card.style.setProperty("--rc", r.color);
    if (img) {
      card.style.backgroundImage =
        `linear-gradient(180deg, rgba(16,20,20,0.08) 30%, rgba(16,20,20,0.72) 100%), url('${img.src}')`;
    }
    card.innerHTML = `
      <div class="rc-index">${String(i + 1).padStart(2, "0")}</div>
      <h3>${r.name}</h3>
      <p>${r.tagline}</p>
      <span class="rc-count">${t.placesWord(count)}</span>`;
    card.addEventListener("click", () => {
      selectRegion(id);
      document.getElementById("kort").scrollIntoView({ behavior: "smooth" });
    });
    wrap.appendChild(card);
  });
}

/* ---------------- SÍUR & STAÐASPJÖLD ---------------- */
function buildCategoryFilters() {
  const wrap = document.getElementById("categoryFilters");
  CATEGORIES.forEach((c) => {
    const b = document.createElement("button");
    b.className = "cat-tab" + (c.id === "allt" ? " active" : "");
    b.textContent = c.label;
    b.dataset.cat = c.id;
    b.addEventListener("click", () => setFilterCategory(c.id));
    wrap.appendChild(b);
  });
}

function setFilterCategory(id) {
  state.filterCategory = id;
  document.querySelectorAll("#categoryFilters .cat-tab").forEach((c) =>
    c.classList.toggle("active", c.dataset.cat === id)
  );
  renderPlaces();
}

function buildFilters() {
  const wrap = document.getElementById("regionFilters");
  const all = document.createElement("button");
  all.className = "chip active";
  all.textContent = t.allCountry;
  all.dataset.region = "allt";
  all.addEventListener("click", () => setFilterRegion("allt"));
  wrap.appendChild(all);

  REGION_ORDER.forEach((id) => {
    const chip = document.createElement("button");
    chip.className = "chip";
    chip.textContent = REGIONS[id].name;
    chip.dataset.region = id;
    chip.addEventListener("click", () => setFilterRegion(id));
    wrap.appendChild(chip);
  });
}

function setFilterRegion(id) {
  state.filterRegion = id;
  document.querySelectorAll("#regionFilters .chip").forEach((c) =>
    c.classList.toggle("active", c.dataset.region === id)
  );
  renderPlaces();
}

function renderPlaces() {
  const grid = document.getElementById("placeGrid");
  const q = state.search.trim().toLowerCase();

  const filtered = PLACES.filter((p) => {
    const regionOk = state.filterRegion === "allt" || p.region === state.filterRegion;
    const catOk = state.filterCategory === "allt" || catOf(p) === state.filterCategory;
    const searchOk =
      !q ||
      p.name.toLowerCase().includes(q) ||
      p.type.toLowerCase().includes(q) ||
      p.blurb.toLowerCase().includes(q) ||
      (p.location || "").toLowerCase().includes(q) ||
      p.tags.some((tg) => tg.toLowerCase().includes(q)) ||
      REGIONS[p.region].name.toLowerCase().includes(q);
    return regionOk && catOk && searchOk;
  });

  document.getElementById("noResults").hidden = filtered.length > 0;
  document.getElementById("placeCount").textContent = t.resultsWord(filtered.length);

  grid.innerHTML = filtered
    .map((p) => {
      const region = REGIONS[p.region];
      const cat = catOf(p);
      const hlnd = isHighland(p) ? `<span class="pc-hlnd">${t.highlands}</span>` : "";
      let meta;
      if (cat === "ganga") meta = `${p.length} · ${p.difficulty}`;
      else if (isDining(cat)) meta = `${p.cuisine} · ${p.price}`;
      else if (cat === "bod") meta = [p.price, p.location].filter(Boolean).join(" · ");
      else meta = `${t.accomN} ${p.accommodation.length} · ${t.activN} ${p.activities.length}`;
      const sub = hasLoc(cat) && p.location ? ` · ${p.location}` : "";
      const img = typeof IMAGES !== "undefined" ? IMAGES[p.id] : null;
      const badge = badgeFor(p);
      const bgStyle = img
        ? `background-image:url('${img.src}')`
        : `background:linear-gradient(150deg, ${region.color}, rgba(20,24,24,0.55)), linear-gradient(${region.color}, ${region.color})`;
      return `
      <article class="place-card cat-${cat}" data-place="${p.id}">
        <div class="pc-media">
          <div class="pc-media-bg${img ? "" : " no-img"}" style="${bgStyle}"></div>
          ${badge ? `<span class="pc-badge ${badge.cls}">${badge.label}</span>` : ""}
          <span class="pc-region-chip">${region.name}${sub}${isHighland(p) ? " · " + t.highlands : ""}</span>
        </div>
        <div class="place-card-body">
          <span class="pc-type">${p.type}</span>
          <h3>${p.name}</h3>
          <p>${p.blurb}</p>
          <div class="pc-tags">${p.tags.filter((tg) => tg !== "Hálendi" && tg !== "Highlands").map((tg) => `<span class="pc-tag">${tg}</span>`).join("")}</div>
          <div class="pc-footer">
            <span>${meta}</span>
            <span class="pc-more">${t.seeMore}</span>
          </div>
        </div>
      </article>`;
    })
    .join("");

  grid.querySelectorAll(".place-card").forEach((el) =>
    el.addEventListener("click", () => openModal(el.dataset.place))
  );
  observeFade(grid);
}

/* ---------------- MÓÐALGLUGGI ---------------- */
function statsRow(pairs) {
  const cells = pairs
    .filter(([, v]) => v)
    .map(([label, v]) => `<div class="mc-stat"><strong>${v}</strong><span>${label}</span></div>`)
    .join("");
  return `<div class="mc-stats">${cells}</div>`;
}

function highlightsBlock(title, items) {
  return `
    <div class="mc-section-title">${title}</div>
    <div class="mc-highlights">
      ${items.map((h) => `<span class="mc-highlight">${h}</span>`).join("")}
    </div>`;
}

function openModal(placeId) {
  const p = PLACES.find((x) => x.id === placeId);
  if (!p) return;
  const region = REGIONS[p.region];
  const cat = catOf(p);
  const hlnd = isHighland(p) ? " · " + t.highlands : "";

  let body = "";
  if (cat === "ganga") {
    body =
      statsRow([[t.sDist, p.length], [t.sDur, p.duration], [t.sDiff, p.difficulty]]) +
      highlightsBlock(t.mRoute, p.highlights);
    if (p.accommodation && p.accommodation.length) {
      const accHTML = p.accommodation
        .map((a) => `<li><span>${a.name}<span class="mc-sub">${a.type}</span></span><span class="mc-price">${a.price}</span></li>`)
        .join("");
      body += `<div class="mc-section-title">${t.mAccom}</div><ul class="mc-list">${accHTML}</ul>`;
    }
  } else if (isDining(cat)) {
    body =
      statsRow([[t.sCuisine, p.cuisine], [t.sPrice, p.price], [t.sLoc, p.location]]) +
      highlightsBlock(t.mKnown, p.highlights);
  } else if (cat === "bod") {
    body =
      statsRow([[t.sPrice, p.price], [t.sLoc, p.location]]) +
      highlightsBlock(t.mHighlights, p.highlights);
  } else {
    const accHTML = p.accommodation
      .map((a) => `<li><span>${a.name}<span class="mc-sub">${a.type}</span></span><span class="mc-price">${a.price}</span></li>`)
      .join("");
    const actHTML = p.activities.map((a) => `<li><span>${a}</span></li>`).join("");
    body =
      highlightsBlock(t.mHighlights, p.highlights) +
      `<div class="mc-grid">
        <div><div class="mc-section-title">${t.mAccom}</div><ul class="mc-list">${accHTML}</ul></div>
        <div><div class="mc-section-title">${t.mActiv}</div><ul class="mc-list">${actHTML}</ul></div>
      </div>`;
  }

  // Bókunarhnappar (tekjuhlekkir) — nota næsta gistibæ (STAY_HUB) fyrir náttúrustaði
  const stayHub = typeof STAY_HUB !== "undefined" ? STAY_HUB[p.id] : null;
  const searchTerm = stayHub || p.location || region.name;
  let cta;
  if (hasLoc(cat)) {
    cta = `
      <a class="mc-btn" href="${mapLink(p.name + " " + (p.location || region.name))}" target="_blank" rel="noopener nofollow">${t.btnMap}</a>
      <a class="mc-btn primary" href="${bookingLink(p.location || region.name)}" target="_blank" rel="noopener sponsored nofollow">${t.btnBook}</a>`;
  } else {
    cta = `
      <a class="mc-btn primary" href="${bookingLink(searchTerm)}" target="_blank" rel="noopener sponsored nofollow">${t.btnBook}</a>
      <a class="mc-btn" href="${tourLink(p.name)}" target="_blank" rel="noopener sponsored nofollow">${t.btnTours}</a>`;
  }

  // Hero-mynd ef til, annars litur landshlutans
  const heroImg = (typeof IMAGES !== "undefined" && IMAGES[p.id]) || null;
  const heroStyle = heroImg
    ? `background:linear-gradient(rgba(12,16,16,0.15), rgba(12,16,16,0.4)), url('${heroImg.src}') center/cover no-repeat`
    : `background:${region.color}`;

  document.getElementById("modalBody").innerHTML = `
    <div class="modal-hero${heroImg ? " has-img" : ""}" style="${heroStyle}">
      <span class="mh-region">${region.name}${hlnd}</span>
    </div>
    <div class="modal-content">
      <span class="mc-type">${p.type}</span>
      <h2>${p.name}</h2>
      <p class="mc-desc">${p.description}</p>
      ${body}
      <div class="mc-cta">${cta}</div>
      <p class="mc-fullpage"><a href="${placeHref(p.id)}">${t.fullPage(p.name)}</a></p>
    </div>
  `;

  document.getElementById("modalOverlay").hidden = false;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modalOverlay").hidden = true;
  document.body.style.overflow = "";
}

/* ---------------- LEIÐAKORT MEÐ MYNDUM ---------------- */
function enhanceRouteCards() {
  if (typeof IMAGES === "undefined") return;
  document.querySelectorAll(".routes-section .region-card").forEach((card) => {
    const href = card.getAttribute("href") || "";
    const m = href.match(/\/(?:leidir|routes)\/([a-z0-9-]+)\//);
    const img = m && IMAGES[m[1]];
    if (img) {
      card.classList.add("photo-card");
      card.style.backgroundImage =
        `linear-gradient(180deg, rgba(16,20,20,0.08) 30%, rgba(16,20,20,0.72) 100%), url('${img.src}')`;
    }
  });
}

/* ---------------- FADE-UP VIÐ SKRUN ----------------
   Skrun-drifið (ekki IntersectionObserver) svo það þoli
   stökk-skrun af akkeristenglum og virki alls staðar. */
let fadeEnabled = false;
let fadePending = false;
function revealNow() {
  fadePending = false;
  const vh = window.innerHeight;
  const items = document.querySelectorAll(".fade-item:not(.in-view)");
  items.forEach((el) => {
    if (el.getBoundingClientRect().top < vh - 30) el.classList.add("in-view");
  });
}
function requestReveal() {
  if (!fadeEnabled || fadePending) return;
  fadePending = true;
  requestAnimationFrame(revealNow);
}
function initFade() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  fadeEnabled = true;
  window.addEventListener("scroll", requestReveal, { passive: true });
  window.addEventListener("resize", requestReveal);
  observeFade(document);
}
function observeFade(root) {
  if (!fadeEnabled) return;
  root.querySelectorAll(".place-card, .region-card, .section-head").forEach((el) => {
    if (!el.classList.contains("in-view")) el.classList.add("fade-item");
  });
  requestReveal();
}

/* ---------------- KOMDU MÉR Á ÓVART ---------------- */
function surpriseMe() {
  const p = PLACES[Math.floor(Math.random() * PLACES.length)];
  openModal(p.id);
}

/* ---------------- TÖLULEG HREYFING ---------------- */
function countUp(el, target, dur = 1200) {
  const start = performance.now();
  (function tick(now) {
    const t = Math.min(1, (now - start) / dur);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = Math.round(eased * target).toLocaleString("is-IS");
    if (t < 1) requestAnimationFrame(tick);
  })(start);
  // Öryggisventill: tryggja rétta lokatölu jafnvel þótt rAF sé á bið (flipi í bakgrunni)
  setTimeout(() => { el.textContent = target.toLocaleString("is-IS"); }, dur + 150);
}

/* ---------------- RÆSING ---------------- */
document.addEventListener("DOMContentLoaded", () => {
  buildMap();
  buildQuicklist();
  buildRegionCards();
  buildCategoryFilters();
  buildFilters();
  buildFooterNav();
  enhanceRouteCards();
  initFade();
  renderPlaces();

  const sb = document.getElementById("surpriseBtn");
  if (sb) {
    sb.textContent = t.surprise;
    sb.addEventListener("click", surpriseMe);
  }

  countUp(document.getElementById("statPlaces"), PLACES.length);

  document.getElementById("searchInput").addEventListener("input", (e) => {
    state.search = e.target.value;
    renderPlaces();
  });

  document.getElementById("modalClose").addEventListener("click", closeModal);
  document.getElementById("modalOverlay").addEventListener("click", (e) => {
    if (e.target.id === "modalOverlay") closeModal();
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

  const header = document.getElementById("siteHeader");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 30);
  window.addEventListener("scroll", onScroll);
  onScroll();

  document.getElementById("navToggle").addEventListener("click", () =>
    document.getElementById("mainNav").classList.toggle("open")
  );
  document.querySelectorAll(".main-nav a").forEach((a) =>
    a.addEventListener("click", () => document.getElementById("mainNav").classList.remove("open"))
  );
});
