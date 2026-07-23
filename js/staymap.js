/* ---------------------------------------------------------------
   STAY_HUB — næsti raunhæfi gististaður (bær) fyrir hvern
   náttúrustað/gönguleið. Notað í "Bóka gistingu í nágrenni"
   hlekkjum svo Booking-leitin skili alvöru niðurstöðum
   (t.d. Goðafoss -> Akureyri, ekki "Goðafoss").
   Sama skrá er lesin af build.py fyrir kyrrstæðu síðurnar.
------------------------------------------------------------------ */
const STAY_HUB = {
  /* Höfuðborgarsvæðið */
  reykjavik: "Reykjavík",
  videy: "Reykjavík",
  grotta: "Reykjavík",
  heidmork: "Reykjavík",
  esjan: "Reykjavík",

  /* Reykjanes */
  brimketill: "Reykjanesbær",
  fagradalsfjall: "Reykjanesbær",
  gardskagi: "Reykjanesbær",
  krysuvik: "Hafnarfjörður",

  /* Vesturland */
  arnarstapi_hellnar: "Arnarstapi",
  glymur: "Akranes",
  grabrok: "Borgarnes",
  hraunfossar: "Húsafell",
  kirkjufell: "Grundarfjörður",
  snaefellsjokull: "Ólafsvík",
  stykkisholmur: "Stykkishólmur",

  /* Vestfirðir */
  dynjandi: "Þingeyri",
  hornstrandir: "Ísafjörður",
  hornvik: "Ísafjörður",
  holmavik: "Hólmavík",
  latrabjarg: "Patreksfjörður",
  isafjordur: "Ísafjörður",

  /* Norðurland vestra */
  blonduos: "Blönduós",
  drangey: "Sauðárkrókur",
  glaumbaer: "Sauðárkrókur",
  hofsos: "Sauðárkrókur",
  hvitserkur: "Hvammstangi",
  kolugljufur: "Hvammstangi",
  kalfshamarsvik: "Skagaströnd",
  skagafjordur: "Sauðárkrókur",
  tindastoll: "Sauðárkrókur",

  /* Norðurland eystra */
  akureyri: "Akureyri",
  aldeyjarfoss: "Akureyri",
  askja: "Mývatn",
  oskjuvegur: "Mývatn",
  dalvik: "Dalvík",
  godafoss: "Akureyri",
  grimsey: "Akureyri",
  arctic_henge: "Húsavík",
  hljodaklettar: "Húsavík",
  hrisey: "Dalvík",
  namaskard: "Mývatn",
  husavik: "Húsavík",
  krafla: "Mývatn",
  laufas: "Akureyri",
  lofthellir: "Mývatn",
  myvatn: "Mývatn",
  siglufjordur: "Siglufjörður",
  sulur: "Akureyri",
  tjornes: "Húsavík",
  vaglaskogur: "Akureyri",
  vindbelgjarfjall: "Mývatn",
  asbyrgi: "Húsavík",
  olafsfjordur: "Ólafsfjörður",

  /* Austurland */
  borgarfjordur_eystri: "Egilsstaðir",
  djupivogur: "Djúpivogur",
  hallormsstadur: "Egilsstaðir",
  hofn: "Höfn",
  seydisfjordur: "Seyðisfjörður",
  stokksnes: "Höfn",
  studlagil: "Egilsstaðir",
  storurd: "Egilsstaðir",
  stodvarfjordur: "Egilsstaðir",

  /* Suðurland */
  fimmvorduhals: "Hvolsvöllur",
  fjadrargljufur: "Kirkjubæjarklaustur",
  geysir: "Laugarvatn",
  gullfoss: "Flúðir",
  jokulsarlon: "Höfn",
  kerid: "Selfoss",
  kerlingarfjoll: "Flúðir",
  landmannalaugar: "Hella",
  laugavegurinn: "Hella",
  reykjadalur: "Hveragerði",
  reynisfjara: "Vík í Mýrdal",
  skaftafell: "Kirkjubæjarklaustur",
  skogafoss: "Hvolsvöllur",
  solheimajokull: "Vík í Mýrdal",
  solheimasandur: "Vík í Mýrdal",
  vestmannaeyjar: "Vestmannaeyjar",
  thingvellir: "Laugarvatn",
  thorsmork: "Hvolsvöllur",
};

if (typeof module !== "undefined") {
  module.exports = { STAY_HUB };
}
