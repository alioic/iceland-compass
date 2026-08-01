/* English data — generated. Source of truth for Icelandic is js/data.js. */
const REGIONS = {
  "hofudborg": {
    "id": "hofudborg",
    "name": "Capital Region",
    "tagline": "Culture, history and city life",
    "color": "#4a6fa5",
    "intro": "The Capital Region is the most densely populated part of Iceland, home to about two-thirds of the nation. Here city life, the arts and history meet the seafront and the surrounding mountains.",
    "stats": {
      "flaemi": "1,062 km²",
      "ibuar": "245,000",
      "saeti": "Reykjavík"
    }
  },
  "reykjanes": {
    "id": "reykjanes",
    "name": "Reykjanes Peninsula",
    "tagline": "Fire, geothermal heat and rugged lava",
    "color": "#b0674c",
    "intro": "The Reykjanes Peninsula is a young, active volcanic area right beside the international airport. Part of the UNESCO Global Geopark, it offers geothermal fields, crater rows, lava and the recent eruptions at Fagradalsfjall.",
    "stats": {
      "flaemi": "829 km²",
      "ibuar": "29,000",
      "saeti": "Reykjanesbær"
    }
  },
  "vesturland": {
    "id": "vesturland",
    "name": "West Iceland",
    "tagline": "Mountains, glaciers and saga sites",
    "color": "#5b8a72",
    "intro": "West Iceland stretches from Hvalfjörður up to the Snæfellsnes peninsula and into Borgarfjörður. It boasts varied nature — the Snæfellsjökull glacier, lava caves, waterfalls and the ancient saga sites of Egil's Saga.",
    "stats": {
      "flaemi": "9,554 km²",
      "ibuar": "17,000",
      "saeti": "Borgarnes / Akranes"
    }
  },
  "vestfirdir": {
    "id": "vestfirdir",
    "name": "Westfjords",
    "tagline": "The steepest fjords and untouched wilderness",
    "color": "#6a6ea6",
    "intro": "The Westfjords are the most remote and one of the most unspoiled parts of Iceland. Deep fjords, sheer bird cliffs, hot springs and Hornstrandir — a nature reserve where no one has lived for decades.",
    "stats": {
      "flaemi": "9,409 km²",
      "ibuar": "7,000",
      "saeti": "Ísafjörður"
    }
  },
  "nordvestur": {
    "id": "nordvestur",
    "name": "Northwest Iceland",
    "tagline": "Horses, saga heritage and wide horizons",
    "color": "#4f8a8b",
    "intro": "Northwest Iceland covers Húnaþing, Skagafjörður and the Skagi peninsula. The region is known for the Icelandic horse, river rafting on glacial rivers and a rich saga heritage from the Age of the Sturlungs.",
    "stats": {
      "flaemi": "12,737 km²",
      "ibuar": "7,300",
      "saeti": "Sauðárkrókur"
    }
  },
  "nordaustur": {
    "id": "nordaustur",
    "name": "Northeast Iceland",
    "tagline": "Capital of the north and natural wonders",
    "color": "#3f7d6e",
    "intro": "Northeast Iceland is home to Akureyri, the capital of the north, and some of the country's most spectacular natural wonders: Lake Mývatn, Dettifoss, Ásbyrgi and the whale watching at Húsavík.",
    "stats": {
      "flaemi": "21,968 km²",
      "ibuar": "30,000",
      "saeti": "Akureyri"
    }
  },
  "austurland": {
    "id": "austurland",
    "name": "East Iceland",
    "tagline": "Fjords, reindeer and art villages",
    "color": "#866a9b",
    "intro": "The East Fjords are a string of beautiful fjords with small fishing villages, steep mountains and Iceland's only wild reindeer herd. Fljótsdalshérað holds the country's largest forest and a lively cultural scene.",
    "stats": {
      "flaemi": "22,721 km²",
      "ibuar": "12,000",
      "saeti": "Egilsstaðir"
    }
  },
  "sudurland": {
    "id": "sudurland",
    "name": "South Iceland",
    "tagline": "The Golden Circle, glaciers and black beaches",
    "color": "#b05750",
    "intro": "South Iceland is the country's most visited region. Here is the Golden Circle — Þingvellir, Geysir and Gullfoss — along with black sands, glacier lagoons, volcanoes and highland gems such as Landmannalaugar and Þórsmörk.",
    "stats": {
      "flaemi": "24,526 km²",
      "ibuar": "32,000",
      "saeti": "Selfoss"
    }
  }
};

const PLACES = [
  {
    "id": "reykjavik",
    "name": "Reykjavík",
    "region": "hofudborg",
    "type": "City",
    "tags": [
      "Culture",
      "Family",
      "Food"
    ],
    "blurb": "The world's northernmost capital, buzzing with culture, design and nightlife.",
    "description": "Reykjavík is a vibrant cultural city with colourful houses, restaurants and a wealth of museums. Hallgrímskirkja towers over the town centre, and its tower offers sweeping views across the city. The Harpa concert hall, the Sun Voyager sculpture and the old harbour are among its main landmarks.",
    "highlights": [
      "Hallgrímskirkja",
      "Harpa concert hall",
      "Laugavegur",
      "Perlan",
      "Sun Voyager"
    ],
    "accommodation": [
      {
        "name": "City-centre hotels",
        "type": "Hotel",
        "price": "$$$"
      },
      {
        "name": "Design guesthouse",
        "type": "Guesthouse",
        "price": "$$"
      },
      {
        "name": "Hostel",
        "type": "Hostel",
        "price": "$"
      }
    ],
    "activities": [
      "Museum tour and Perlan",
      "City-centre food experience",
      "Northern lights tour"
    ],
    "season": "Year-round"
  },
  {
    "id": "videy",
    "name": "Viðey",
    "region": "hofudborg",
    "type": "Island",
    "tags": [
      "Nature",
      "History",
      "Hiking"
    ],
    "blurb": "A tranquil island in the sound with history, artworks and Yoko Ono's Imagine Peace Tower.",
    "description": "Viðey is a small island just off Reykjavík, only a few minutes by boat. It is home to the country's oldest stone house, Viðeyjarstofa, walking trails and Yoko Ono's Imagine Peace Tower, which lights up the winter sky.",
    "highlights": [
      "Viðeyjarstofa",
      "Imagine Peace Tower",
      "Milestones by Richard Serra",
      "Birdlife"
    ],
    "accommodation": [
      {
        "name": "Accommodation in Reykjavík",
        "type": "Various",
        "price": "$$"
      }
    ],
    "activities": [
      "Walking around the island",
      "Photography"
    ],
    "season": "May–September"
  },
  {
    "id": "grotta",
    "name": "Grótta",
    "region": "hofudborg",
    "type": "Lighthouse and nature reserve",
    "tags": [
      "Birds",
      "Northern lights",
      "Hiking"
    ],
    "blurb": "A lighthouse at the tip of Seltjarnarnes, popular for birdlife and the northern lights.",
    "description": "Grótta is a small island and lighthouse at the outermost point of Seltjarnarnes, connected to the mainland at low tide. The area is a bird reserve and one of the best northern-lights spots near the city. By the shore lies the warm foot bath Kvika.",
    "highlights": [
      "Grótta lighthouse",
      "Kvika foot bath",
      "Birdwatching",
      "Northern lights"
    ],
    "accommodation": [
      {
        "name": "Accommodation in Reykjavík",
        "type": "Various",
        "price": "$$"
      }
    ],
    "activities": [
      "Walking out to the lighthouse at low tide",
      "Northern lights viewing"
    ],
    "season": "Year-round"
  },
  {
    "id": "heidmork",
    "name": "Heiðmörk",
    "region": "hofudborg",
    "type": "Recreation area",
    "tags": [
      "Forest",
      "Hiking",
      "Family"
    ],
    "blurb": "The capital's largest recreation area, with woodland and lava formations.",
    "description": "Heiðmörk is a vast nature reserve and forestry area on the edge of Reykjavík, popular for walking, cycling and outdoor recreation. Rauðhólar, a cluster of red scoria craters, is among the area's finest natural gems.",
    "highlights": [
      "Rauðhólar",
      "Walking trails",
      "Elliðavatn",
      "Berry picking in autumn"
    ],
    "accommodation": [
      {
        "name": "Accommodation in Reykjavík",
        "type": "Various",
        "price": "$$"
      }
    ],
    "activities": [
      "Walking",
      "Cycling"
    ],
    "season": "Year-round"
  },
  {
    "id": "esjan",
    "name": "Esjan",
    "region": "hofudborg",
    "category": "ganga",
    "type": "Hiking trail",
    "length": "6.6 km there and back",
    "duration": "2–4 hrs",
    "difficulty": "Moderate",
    "tags": [
      "Day hike",
      "Views",
      "Popular"
    ],
    "blurb": "The city mountain — the most popular day hike among capital residents.",
    "description": "Esja towers over Reykjavík across Kollafjörður and is a firm favourite among city dwellers. The usual route climbs to the rock known as 'Steinn' at around 600 m; more experienced hikers can scramble on up to Þverfellshorn, with a chain to help over the final stretch.",
    "highlights": [
      "Steinn",
      "Þverfellshorn",
      "Views over Reykjavík",
      "Mosfellsbær"
    ],
    "accommodation": [
      {
        "name": "Accommodation in Reykjavík / Mosfellsbær",
        "type": "Various",
        "price": "$$"
      }
    ],
    "activities": [
      "Day hiking year-round",
      "Good preparation for bigger mountains"
    ]
  },
  {
    "id": "saegreifinn",
    "name": "Sægreifinn",
    "region": "hofudborg",
    "category": "veitingar",
    "type": "Restaurant",
    "cuisine": "Lobster soup / fish",
    "price": "$$",
    "location": "The old harbour, Reykjavík",
    "tags": [
      "Lobster soup",
      "Relaxed",
      "Harbour"
    ],
    "blurb": "The little seaside shack by the harbour, famous for its lobster soup.",
    "description": "Sægreifinn is an unpretentious seaside shack by Reykjavík's old harbour that became world-famous for its lobster soup. Guests sit on barrels and pick fresh fish and whale skewers from the ice to be grilled — a simple but authentic experience.",
    "highlights": [
      "The famous lobster soup",
      "Grilled fish skewers",
      "Harbour atmosphere"
    ]
  },
  {
    "id": "blaalonid",
    "name": "Bláa lónið",
    "region": "reykjanes",
    "type": "Geothermal baths",
    "tags": [
      "Relaxation",
      "Wellness",
      "Popular"
    ],
    "blurb": "World-renowned geothermal baths with milky-blue, mineral-rich water set in a lava field.",
    "description": "The Blue Lagoon is one of Iceland's most popular attractions - 38-40°C warm, silica-rich geothermal seawater surrounded by black lava. The water is considered good for the skin, and here you can relax, apply a silica mask and enjoy refreshments beside the lagoon.",
    "highlights": [
      "Silica mask",
      "Steam baths",
      "Lava restaurant",
      "Retreat spa"
    ],
    "accommodation": [
      {
        "name": "The Retreat Hotel",
        "type": "Luxury hotel",
        "price": "$$$$"
      },
      {
        "name": "Silica Hotel",
        "type": "Hotel",
        "price": "$$$"
      }
    ],
    "activities": [
      "Bathing and spa",
      "Skin treatment"
    ],
    "season": "Year-round",
    "category": "bod",
    "price": "$$$$",
    "location": "Grindavík"
  },
  {
    "id": "fagradalsfjall",
    "name": "Fagradalsfjall",
    "region": "reykjanes",
    "type": "Volcanic site",
    "tags": [
      "Volcano",
      "Hiking",
      "Geology"
    ],
    "blurb": "The country's newest eruption site, where lava flowed in 2021-2023.",
    "description": "Fagradalsfjall drew worldwide attention when it erupted after centuries of dormancy. A recent lava field covers the valley and marked hiking trails lead to the eruption sites. Always check conditions with the Met Office - the area is active.",
    "highlights": [
      "New lava",
      "Hiking trails",
      "Meradalir",
      "Viewing platforms"
    ],
    "accommodation": [
      {
        "name": "Accommodation in Grindavík / Reykjanesbær",
        "type": "Hotels & guesthouses",
        "price": "$$"
      }
    ],
    "activities": [
      "Hike to the eruption sites",
      "Geology viewing"
    ],
    "season": "June-September (conditions permitting)"
  },
  {
    "id": "brimketill",
    "name": "Brimketill og Gunnuhver",
    "region": "reykjanes",
    "type": "Nature",
    "tags": [
      "Coast",
      "Geothermal heat"
    ],
    "blurb": "A natural pool in the rocks by the surf and the peninsula's most powerful geothermal area.",
    "description": "Brimketill is a natural pool carved into the rock by the waves at the outermost tip of Reykjanes. Nearby is Gunnuhver, the country's largest mud pool, which spews steam. The area also features Reykjanesviti, the country's oldest lighthouse.",
    "highlights": [
      "Brimketill",
      "Gunnuhver",
      "Reykjanesviti",
      "Valahnúkur"
    ],
    "accommodation": [
      {
        "name": "Accommodation in Reykjanesbær",
        "type": "Hotel",
        "price": "$$"
      }
    ],
    "activities": [
      "Coastal walk",
      "Geothermal photography"
    ],
    "season": "Year-round"
  },
  {
    "id": "krysuvik",
    "name": "Krýsuvík og Seltún",
    "region": "reykjanes",
    "type": "Geothermal area",
    "tags": [
      "Geothermal heat",
      "Hiking",
      "Colours"
    ],
    "blurb": "A colourful high-temperature geothermal area with boiling mud pools and steam vents.",
    "description": "Seltún in Krýsuvík is an accessible high-temperature geothermal area with wooden boardwalks running past boiling mud pools, sulphur deposits and earth in shades of yellow, red and green. The lake Kleifarvatn lies close by.",
    "highlights": [
      "Seltún",
      "Steam vents",
      "Grænavatn",
      "Kleifarvatn nearby"
    ],
    "accommodation": [
      {
        "name": "Accommodation in Hafnarfjörður / Reykjanesbær",
        "type": "Hotels & guesthouses",
        "price": "$$"
      }
    ],
    "activities": [
      "Walk through the geothermal area",
      "Photography"
    ],
    "season": "Year-round"
  },
  {
    "id": "gardskagi",
    "name": "Garðskagi",
    "region": "reykjanes",
    "type": "Lighthouses and coast",
    "tags": [
      "Lighthouses",
      "Birds",
      "Sunset"
    ],
    "blurb": "Two lighthouses at the peninsula's northernmost tip, a paradise for birdwatchers.",
    "description": "At Garðskagi stand two lighthouses and a small folk museum. The area is among the country's best birdwatching spots and a wonderful place to watch the sunset and even whales off the shore.",
    "highlights": [
      "The old and new lighthouse",
      "Folk museum",
      "Birdwatching",
      "Sunset"
    ],
    "accommodation": [
      {
        "name": "Accommodation in Garður / Reykjanesbær",
        "type": "Guesthouse",
        "price": "$$"
      }
    ],
    "activities": [
      "Birdwatching",
      "Sea angling nearby"
    ],
    "season": "Year-round"
  },
  {
    "id": "snaefellsjokull",
    "name": "Snæfellsjökull",
    "region": "vesturland",
    "type": "Glacier and national park",
    "tags": [
      "Glacier",
      "National park",
      "Hiking"
    ],
    "blurb": "A mystical glacier at the tip of Snæfellsnes — Jules Verne's inspiration.",
    "description": "Snæfellsjökull is an ancient volcanic cone crowned by a glacier, the centrepiece of the national park that shares its name. Shrouded in mystery, it was the setting for Journey to the Centre of the Earth. Around it lie lava caves, black beaches and fishing villages such as Arnarstapi and Hellnar.",
    "highlights": [
      "Glacier hike",
      "Djúpalónssandur",
      "Vatnshellir",
      "Arnarstapi–Hellnar hiking trail"
    ],
    "accommodation": [
      {
        "name": "Hótel Búðir",
        "type": "Hotel",
        "price": "$$$"
      },
      {
        "name": "Guesthouse in Hellissandur",
        "type": "Guesthouse",
        "price": "$$"
      }
    ],
    "activities": [
      "Guided glacier hike",
      "Cave tour in Vatnshellir",
      "Coastal walk"
    ],
    "season": "May–September for the glacier, otherwise year-round"
  },
  {
    "id": "kirkjufell",
    "name": "Kirkjufell",
    "region": "vesturland",
    "type": "Mountain",
    "tags": [
      "Photography",
      "Landmark",
      "Waterfall"
    ],
    "blurb": "Iceland's most photographed mountain, with Kirkjufellsfoss waterfall in the foreground.",
    "description": "Kirkjufell by Grundarfjörður is the emblematic peak of Snæfellsnes — 463 m high and almost perfectly cone-shaped. The interplay of the mountain and the Kirkjufellsfoss waterfall makes it one of the country's most popular photography spots, especially under the northern lights.",
    "highlights": [
      "Kirkjufellsfoss",
      "Northern lights photography",
      "Grundarfjörður"
    ],
    "accommodation": [
      {
        "name": "Accommodation in Grundarfjörður",
        "type": "Hotels & guesthouses",
        "price": "$$"
      }
    ],
    "activities": [
      "Photography",
      "Easy walk to the waterfall"
    ],
    "season": "Year-round"
  },
  {
    "id": "hraunfossar",
    "name": "Hraunfossar og Barnafoss",
    "region": "vesturland",
    "type": "Waterfalls",
    "tags": [
      "Waterfall",
      "Nature",
      "Family"
    ],
    "blurb": "Clear springs streaming out from under a lava field over a kilometre-long bank.",
    "description": "Hraunfossar is truly unique — countless clear springs emerge from beneath the Hallmundarhraun lava field and cascade into the river Hvítá along a stretch of about a kilometre. Nearby is Barnafoss, a narrow, powerful gorge with a dramatic folk legend.",
    "highlights": [
      "Hraunfossar",
      "Barnafoss",
      "Deildartunguhver nearby"
    ],
    "accommodation": [
      {
        "name": "Húsafell hotel and cottages",
        "type": "Hotel and cottages",
        "price": "$$$"
      }
    ],
    "activities": [
      "Scenic walk",
      "Krauma geothermal baths"
    ],
    "season": "Year-round"
  },
  {
    "id": "glymur",
    "name": "Glymur",
    "region": "vesturland",
    "type": "Waterfall",
    "tags": [
      "Waterfall",
      "Hiking",
      "Adventure"
    ],
    "blurb": "One of the country's tallest waterfalls, hidden in a gorge by Hvalfjörður.",
    "description": "Glymur is 198 m high and was long considered Iceland's tallest waterfall. The hike to it is an adventure — crossing a river on a log, through a cave and up a steep slope — and takes about 3 hours there and back.",
    "highlights": [
      "View over the waterfall",
      "Þvottahellir cave",
      "Hvalfjörður"
    ],
    "accommodation": [
      {
        "name": "Accommodation in Hvalfjörður / Akranes",
        "type": "Guesthouse",
        "price": "$$"
      }
    ],
    "activities": [
      "Hike to the waterfall",
      "Photography"
    ],
    "season": "June–September"
  },
  {
    "id": "stykkisholmur",
    "name": "Stykkishólmur",
    "region": "vesturland",
    "type": "Town",
    "tags": [
      "Fishing village",
      "Culture",
      "Islands"
    ],
    "blurb": "A beautiful harbour town on Snæfellsnes with old timber houses.",
    "description": "Stykkishólmur is a picturesque seaside town with well-preserved timber houses, a colourful harbour and views over Breiðafjörður with its countless islands. From here the ferry Baldur sails across to the Westfjords.",
    "highlights": [
      "The old town",
      "Súgandisey lighthouse",
      "Breiðafjörður islands",
      "The Library of Water"
    ],
    "accommodation": [
      {
        "name": "Hótel Egilsen",
        "type": "Hotel",
        "price": "$$$"
      },
      {
        "name": "Guesthouse",
        "type": "Guesthouse",
        "price": "$$"
      }
    ],
    "activities": [
      "Island cruise on Breiðafjörður",
      "Town walk"
    ],
    "season": "Year-round"
  },
  {
    "id": "grabrok",
    "name": "Grábrók",
    "region": "vesturland",
    "type": "Crater",
    "tags": [
      "Volcano",
      "Hiking",
      "Family"
    ],
    "blurb": "An accessible scoria crater with steps and views over Norðurárdalur.",
    "description": "Grábrók is a roughly 3,400-year-old scoria crater beside the ring road in Norðurárdalur. Built-up steps and platforms lead to the rim, from which there are sweeping views over the valley and the neighbouring craters.",
    "highlights": [
      "The crater rim",
      "Views over Norðurárdalur",
      "Hreðavatn nearby"
    ],
    "accommodation": [
      {
        "name": "Accommodation in Bifröst / Borgarnes",
        "type": "Hotels & guesthouses",
        "price": "$$"
      }
    ],
    "activities": [
      "Walk up the crater"
    ],
    "season": "Year-round"
  },
  {
    "id": "arnarstapi_hellnar",
    "name": "Arnarstapi–Hellnar",
    "region": "vesturland",
    "category": "ganga",
    "type": "Hiking trail",
    "length": "5 km there and back",
    "duration": "1.5 hrs",
    "difficulty": "Easy",
    "tags": [
      "Coast",
      "Family",
      "Birds"
    ],
    "blurb": "An easy coastal walk along dramatic basalt columns beneath Snæfellsjökull.",
    "description": "This comfortable coastal route links the fishing villages of Arnarstapi and Hellnar beneath Snæfellsjökull. The path follows a protected shoreline with basalt column ravines, arches and teeming birdlife — with the glacier as a backdrop.",
    "highlights": [
      "Gatklettur arch",
      "Basalt column ravines",
      "Bárður Snæfellsás statue",
      "Birdlife"
    ],
    "accommodation": [
      {
        "name": "Accommodation in Arnarstapi / Hellnar",
        "type": "Guesthouse",
        "price": "$$"
      }
    ],
    "activities": [
      "Easy coastal walk for everyone",
      "Birdwatching"
    ]
  },
  {
    "id": "narfeyrarstofa",
    "name": "Narfeyrarstofa",
    "region": "vesturland",
    "category": "veitingar",
    "type": "Restaurant",
    "cuisine": "Seafood",
    "price": "$$$",
    "location": "Stykkishólmur",
    "tags": [
      "Fish",
      "Shellfish",
      "Historic house"
    ],
    "blurb": "Seafood in a beautifully restored timber house in Stykkishólmur.",
    "description": "Narfeyrarstofa occupies a historic timber house by the harbour in Stykkishólmur. The kitchen focuses on fresh fish and shellfish from Breiðafjörður — not least blue mussels and scallops — in a warm, old-fashioned setting across two floors.",
    "highlights": [
      "Blue mussels from Breiðafjörður",
      "Fresh fish",
      "Historic atmosphere",
      "Harbour views"
    ]
  },
  {
    "id": "budir",
    "name": "Hótel Búðir — veitingar",
    "region": "vesturland",
    "category": "veitingar",
    "type": "Restaurant",
    "cuisine": "Fine dining",
    "price": "$$$$",
    "location": "Búðir, Snæfellsnes",
    "tags": [
      "Gourmet",
      "Unique setting",
      "Romance"
    ],
    "blurb": "Fine dining at an isolated hotel by black sand and lava.",
    "description": "Hótel Búðir's restaurant stands alone amid black beaches and lava fields south of Snæfellsjökull. The setting is spectacular and remote, and the kitchen is known for refined dishes made from Icelandic ingredients — ideal for an evening far from everything.",
    "highlights": [
      "Icelandic gourmet",
      "Búðakirkja church nearby",
      "Sunset over the lava",
      "Secluded surroundings"
    ]
  },
  {
    "id": "dynjandi",
    "name": "Dynjandi",
    "region": "vestfirdir",
    "type": "Waterfall",
    "tags": [
      "Waterfall",
      "Nature",
      "Landmark"
    ],
    "blurb": "The thundering bridal veil of the Westfjords - a roughly 100 m tiered waterfall.",
    "description": "Dynjandi is the most majestic waterfall in the Westfjords, around 100 metres high and fanning out as it descends like a bridal veil. Below it are six smaller waterfalls, followed by a trail that runs alongside them. The falls are protected and one of the foremost symbols of the Westfjords.",
    "highlights": [
      "Fjallfoss at the top",
      "The waterfall steps",
      "Views over Arnarfjörður"
    ],
    "accommodation": [
      {
        "name": "Accommodation in Þingeyri / Bíldudalur",
        "type": "Guesthouse",
        "price": "$$"
      }
    ],
    "activities": [
      "Waterfall walk",
      "Photography"
    ],
    "season": "June-September"
  },
  {
    "id": "latrabjarg",
    "name": "Látrabjarg",
    "region": "vestfirdir",
    "type": "Bird cliff",
    "tags": [
      "Birds",
      "Puffin",
      "Landmark"
    ],
    "blurb": "The westernmost tip of Europe and one of the largest bird cliffs in the world.",
    "description": "Látrabjarg is a 14 km long bird cliff up to 440 m high - the westernmost point of Iceland and Europe. Millions of seabirds nest here, and the puffins are so tame you can get right up close to them. Nearby lies the golden beach of Rauðisandur.",
    "highlights": [
      "Puffin colony",
      "Rauðisandur",
      "Bjargtangar lighthouse"
    ],
    "accommodation": [
      {
        "name": "Hótel Breiðavík",
        "type": "Hotel",
        "price": "$$"
      }
    ],
    "activities": [
      "Birdwatching",
      "Beach walk on Rauðisandur"
    ],
    "season": "May-August for puffins"
  },
  {
    "id": "hornstrandir",
    "name": "Hornstrandir",
    "region": "vestfirdir",
    "type": "Nature reserve",
    "tags": [
      "Wilderness",
      "Hiking",
      "Arctic fox"
    ],
    "blurb": "A pristine, roadless nature reserve where the Arctic fox reigns supreme.",
    "description": "Hornstrandir is the northernmost part of the Westfjords - a nature reserve where no one has lived since the mid-20th century. Accessible only on foot or by boat. Here you'll find the steepest sea cliffs in the country, Hornbjarg, and the tame Arctic fox.",
    "highlights": [
      "Hornbjarg",
      "Hælavíkurbjarg",
      "Fox watching",
      "Abandoned settlements"
    ],
    "accommodation": [
      {
        "name": "Campsites and mountain huts",
        "type": "Hut / tent",
        "price": "$"
      }
    ],
    "activities": [
      "Multi-day hikes",
      "Boat trip from Ísafjörður"
    ],
    "season": "July-August"
  },
  {
    "id": "isafjordur",
    "name": "Ísafjörður",
    "region": "vestfirdir",
    "type": "Town",
    "tags": [
      "Culture",
      "Fishing village",
      "Hiking"
    ],
    "blurb": "The largest town in the Westfjords, encircled by steep mountains.",
    "description": "Ísafjörður is the capital of the Westfjords, home to some of the oldest houses in the country in Neðstikaupstaður, a lively cultural scene and a thriving music community. The town is the departure point for trips to Hornstrandir and around Jökulfirðir.",
    "highlights": [
      "Neðstikaupstaður",
      "Music festivals",
      "Naustahvilft (the Bowl)",
      "Boat trips"
    ],
    "accommodation": [
      {
        "name": "Hótel Ísafjörður",
        "type": "Hotel",
        "price": "$$$"
      },
      {
        "name": "Guesthouse",
        "type": "Guesthouse",
        "price": "$$"
      }
    ],
    "activities": [
      "Kayaking on the fjord",
      "Hike up to Naustahvilft",
      "Boat trip to Hornstrandir"
    ],
    "season": "Year-round"
  },
  {
    "id": "holmavik",
    "name": "Hólmavík",
    "region": "vestfirdir",
    "type": "Village",
    "tags": [
      "History",
      "Museums",
      "Fishing village"
    ],
    "blurb": "A fishing village in the Strandir region, known for the Museum of Sorcery and Witchcraft.",
    "description": "Hólmavík is the main village in the Strandir region and home to the Museum of Sorcery and Witchcraft, which tells the story of 17th-century witch persecutions in the Westfjords. Nearby are the swimming pool at Drangsnes and hot tubs at the water's edge.",
    "highlights": [
      "Museum of Sorcery and Witchcraft",
      "Hot tubs at Drangsnes",
      "Strandir"
    ],
    "accommodation": [
      {
        "name": "Accommodation in Hólmavík",
        "type": "Guesthouse",
        "price": "$$"
      }
    ],
    "activities": [
      "Museum visit",
      "Bathing in the shoreside tubs"
    ],
    "season": "May-September"
  },
  {
    "id": "hornvik",
    "name": "Hornvík og Hornbjarg",
    "region": "vestfirdir",
    "category": "ganga",
    "type": "Hiking trail",
    "length": "Multi-day routes",
    "duration": "3-5 days",
    "difficulty": "Challenging",
    "tags": [
      "Hornstrandir",
      "Wilderness",
      "Bird cliffs"
    ],
    "blurb": "A multi-day trek through the untouched Hornstrandir to the highest bird cliffs in the country.",
    "description": "The hike across Hornstrandir to Hornvík is among the most adventurous treks in the country - no roads, no services, just a tent, the tame fox and the sheer cliff edges of Hornbjarg and Hælavíkurbjarg. You arrive by boat from Ísafjörður at the starting point.",
    "highlights": [
      "Hornbjarg",
      "Hælavíkurbjarg",
      "Hlöðuvík",
      "Fox watching"
    ],
    "accommodation": [
      {
        "name": "Campsite on Hornstrandir",
        "type": "Tent",
        "price": "$"
      }
    ],
    "activities": [
      "Multi-day trek carrying everything on your back",
      "Boat trip from Ísafjörður"
    ]
  },
  {
    "id": "tjoruhusid",
    "name": "Tjöruhúsið",
    "region": "vestfirdir",
    "category": "veitingar",
    "type": "Restaurant",
    "cuisine": "Seafood",
    "price": "$$$",
    "location": "Ísafjörður",
    "tags": [
      "Fish",
      "Buffet",
      "Historic"
    ],
    "blurb": "A celebrated fish buffet in one of the oldest houses in Ísafjörður.",
    "description": "Tjöruhúsið in Neðstikaupstaður is a legend among fish lovers. In an old timber house from the 18th century, day-fresh fish is served straight from the boats, pan-fried and presented as a buffet where guests can go back again and again.",
    "highlights": [
      "Pan-fried catch of the day",
      "Fish buffet",
      "Atmosphere of an 18th-century house"
    ]
  },
  {
    "id": "hvitserkur",
    "name": "Hvítserkur",
    "region": "nordvestur",
    "type": "Sea stack",
    "tags": [
      "Landmark",
      "Photography",
      "Seals"
    ],
    "blurb": "A 15 m sea stack rising from the sea off the Vatnsnes peninsula.",
    "description": "Hvítserkur is a 15-metre basalt sea stack in Húnaflói, often likened to a drinking dragon. The surrounding Vatnsnes peninsula is home to one of Iceland's largest seal colonies, with excellent chances of seeing seals up close.",
    "highlights": [
      "Hvítserkur",
      "Seal watching on Vatnsnes",
      "Borgarvirki"
    ],
    "accommodation": [
      {
        "name": "Accommodation in Hvammstangi",
        "type": "Hotels & guesthouses",
        "price": "$$"
      }
    ],
    "activities": [
      "Seal watching",
      "Beach walk"
    ],
    "season": "Year-round"
  },
  {
    "id": "skagafjordur",
    "name": "Skagafjörður",
    "region": "nordvestur",
    "type": "District",
    "tags": [
      "Horses",
      "White-water rafting",
      "History"
    ],
    "blurb": "The heartland of the Icelandic horse and glacial-river rafting.",
    "description": "Skagafjörður is a lush agricultural district, renowned as the home of Icelandic horse breeding. The glacial rivers Austari- and Vestari-Jökulsá offer the country's best white-water rafting. The historic site of Hólar was a bishopric and seat of learning for centuries.",
    "highlights": [
      "White-water rafting",
      "Hólar in Hjaltadalur",
      "Glaumbær turf house",
      "Horse riding"
    ],
    "accommodation": [
      {
        "name": "Hotel in Sauðárkrókur",
        "type": "Hotel",
        "price": "$$"
      },
      {
        "name": "Country stay",
        "type": "Farm stay",
        "price": "$$"
      }
    ],
    "activities": [
      "White-water rafting",
      "Horse riding",
      "Turf house tour"
    ],
    "season": "June–September for rafting"
  },
  {
    "id": "kolugljufur",
    "name": "Kolugljúfur",
    "region": "nordvestur",
    "type": "Gorge and waterfall",
    "tags": [
      "Waterfall",
      "Gorge",
      "Folklore"
    ],
    "blurb": "A dramatic gorge with a series of waterfalls, named after the troll-woman Kola.",
    "description": "Kolugljúfur in Víðidalur is a narrow, deep gorge where the river Víðidalsá cascades down in a series of waterfalls. According to legend, the troll-woman Kola lived in the gorge. A bridge and viewing platforms make it easily accessible.",
    "highlights": [
      "Kolufossar",
      "Viewing platforms",
      "The legend of Kola"
    ],
    "accommodation": [
      {
        "name": "Accommodation in Víðidalur / Hvammstangi",
        "type": "Farm stay",
        "price": "$$"
      }
    ],
    "activities": [
      "Scenic walk",
      "Photography"
    ],
    "season": "Year-round"
  },
  {
    "id": "drangey",
    "name": "Drangey",
    "region": "nordvestur",
    "type": "Island",
    "tags": [
      "Island",
      "Birds",
      "History"
    ],
    "blurb": "A sheer tuff cliff in Skagafjörður featured in Grettis saga.",
    "description": "Drangey is an isolated tuff island with sheer cliffs in the middle of Skagafjörður, known as the hideout of Grettir Ásmundarson. The island teems with birdlife, and boat trips offer a guided climb up to the summit.",
    "highlights": [
      "Guided boat trip",
      "Bird cliffs",
      "Grettislaug on the mainland"
    ],
    "accommodation": [
      {
        "name": "Accommodation in Sauðárkrókur",
        "type": "Hotels & guesthouses",
        "price": "$$"
      }
    ],
    "activities": [
      "Boat trip and hike on the island",
      "Bathing in Grettislaug"
    ],
    "season": "June–August"
  },
  {
    "id": "hofsos",
    "name": "Hofsós",
    "region": "nordvestur",
    "type": "Village",
    "tags": [
      "Swimming pool",
      "History",
      "Fishing village"
    ],
    "blurb": "A small village by Skagafjörður with a famous swimming pool and emigration centre.",
    "description": "Hofsós is a picturesque fishing village where one of Iceland's oldest buildings, the Pakkhús warehouse from 1777, stands by the harbour. The swimming pool at Hofsós is world-renowned, appearing to merge with the fjord itself. The Icelandic Emigration Centre tells the story of Icelandic emigration to the west.",
    "highlights": [
      "The infinity-edge pool",
      "The Emigration Centre",
      "Pakkhúsið",
      "Staðarbjörg basalt columns"
    ],
    "accommodation": [
      {
        "name": "Accommodation in Hofsós",
        "type": "Guesthouse",
        "price": "$$"
      }
    ],
    "activities": [
      "Swimming with fjord views",
      "Museum visit"
    ]
  },
  {
    "id": "glaumbaer",
    "name": "Glaumbær",
    "region": "nordvestur",
    "type": "Turf house and museum",
    "tags": [
      "History",
      "Turf house",
      "Family"
    ],
    "blurb": "One of the best-preserved turf houses in the country, the Skagafjörður heritage museum.",
    "description": "Glaumbær is a splendid turf house from the 18th–19th century and one of the best-preserved examples of the traditional Icelandic gabled farmhouse. Today it houses a heritage museum showing the dwellings and way of life of past centuries. Guðríður Þorbjarnardóttir, a seafarer to Vínland, is connected to the site.",
    "highlights": [
      "The turf house",
      "The heritage museum",
      "Áskaffi café in the old house",
      "The story of Guðríður Þorbjarnardóttir"
    ],
    "accommodation": [
      {
        "name": "Accommodation in Skagafjörður",
        "type": "Hotels & farm stays",
        "price": "$$"
      }
    ],
    "activities": [
      "Museum visit",
      "Coffee and cake at Áskaffi"
    ]
  },
  {
    "id": "grettislaug",
    "name": "Grettislaug og Reykjaströnd",
    "region": "nordvestur",
    "type": "Natural hot pool",
    "tags": [
      "Bathing",
      "History",
      "Drangey"
    ],
    "blurb": "Natural hot pools by the sea with views towards Drangey.",
    "description": "On Reykjaströnd by Skagafjörður are Grettislaug and Jarlslaug, stone-built natural hot pools at the water's edge. According to Grettis saga, Grettir swam ashore here from Drangey and warmed himself in the pool. Boat trips out to Drangey also depart from here.",
    "highlights": [
      "Grettislaug and Jarlslaug",
      "Views towards Drangey",
      "Grettis saga",
      "Boat trips to Drangey"
    ],
    "accommodation": [
      {
        "name": "Campsite and accommodation at Reykjaströnd",
        "type": "Campsite / guesthouse",
        "price": "$"
      }
    ],
    "activities": [
      "Bathing in the natural pools",
      "Boat trip to Drangey"
    ],
    "category": "bod",
    "price": "$",
    "location": "Reykjaströnd, Skagafjörður"
  },
  {
    "id": "kalfshamarsvik",
    "name": "Kálfshamarsvík",
    "region": "nordvestur",
    "type": "Nature and lighthouse",
    "tags": [
      "Basalt columns",
      "Lighthouse",
      "Tranquillity"
    ],
    "blurb": "A striking basalt-column cove with a lighthouse at the tip of the Skagi peninsula.",
    "description": "Kálfshamarsvík at the tip of the Skagi peninsula is a hidden gem where regular basalt columns rise from the shore around a small lighthouse. A thriving village once stood here, now abandoned. A quiet, little-visited spot for those seeking to get off the beaten track.",
    "highlights": [
      "Basalt column formations",
      "Kálfshamar lighthouse",
      "The abandoned village",
      "Birdlife"
    ],
    "accommodation": [
      {
        "name": "Accommodation in Skagaströnd",
        "type": "Guesthouse",
        "price": "$$"
      }
    ],
    "activities": [
      "Beach walk",
      "Photography"
    ]
  },
  {
    "id": "blonduos",
    "name": "Blönduós",
    "region": "nordvestur",
    "type": "Town",
    "tags": [
      "Fishing village",
      "Museums",
      "Birds"
    ],
    "blurb": "A town at the mouth of the Blanda river, known for textiles and a distinctive church.",
    "description": "Blönduós lies where the glacial river Blanda meets the sea. The town is a centre of textile art in Iceland with a Textile Museum and guest studios, and its church is unusual, shaped like a volcano. The island of Hrútey in the river is a charming nature reserve.",
    "highlights": [
      "The Textile Museum",
      "Blönduós church",
      "Hrútey nature reserve",
      "Seal watching nearby"
    ],
    "accommodation": [
      {
        "name": "Accommodation in Blönduós",
        "type": "Hotels & guesthouses",
        "price": "$$"
      }
    ],
    "activities": [
      "Walk around Hrútey",
      "Museum and studio visit"
    ]
  },
  {
    "id": "tindastoll",
    "name": "Tindastóll",
    "region": "nordvestur",
    "category": "ganga",
    "type": "Hiking trail",
    "length": "Day hikes",
    "duration": "5–8 hrs",
    "difficulty": "Moderate / challenging",
    "tags": [
      "Views",
      "Mountain",
      "Folklore"
    ],
    "blurb": "A long tuff mountain above Skagafjörður with a tarn and folklore.",
    "description": "Tindastóll is a majestic tuff mountain stretching along Skagafjörður. From the summit there are magnificent views over the fjord, Drangey and Tröllaskagi. On the slope lies Landsendatjörn, a tarn that folklore links to wishing stones and elves.",
    "highlights": [
      "Views over Skagafjörður",
      "Landsendatjörn",
      "Drangey in the distance",
      "The Tindastóll ski area"
    ],
    "accommodation": [
      {
        "name": "Accommodation in Sauðárkrókur",
        "type": "Hotels & guesthouses",
        "price": "$$"
      }
    ],
    "activities": [
      "Day hike to the summit",
      "Skiing in winter"
    ]
  },
  {
    "id": "kaffi_krokur",
    "name": "Kaffi Krókur",
    "region": "nordvestur",
    "category": "veitingar",
    "type": "Restaurant",
    "cuisine": "Bistro / Icelandic",
    "price": "$$",
    "location": "Sauðárkrókur",
    "tags": [
      "Relaxed",
      "Family",
      "Town centre"
    ],
    "blurb": "A cosy bistro in the heart of Sauðárkrókur.",
    "description": "Kaffi Krókur is a popular, laid-back restaurant in the centre of Sauðárkrókur. The menu offers a mix of Icelandic dishes, fish from the fjord, pizzas and baked goods — a great stop on a journey through Northwest Iceland.",
    "highlights": [
      "Fish from Skagafjörður",
      "Homemade fare",
      "Relaxed atmosphere"
    ]
  },
  {
    "id": "akureyri",
    "name": "Akureyri",
    "region": "nordaustur",
    "type": "Town",
    "tags": [
      "Culture",
      "Family",
      "Food"
    ],
    "blurb": "The capital of the north, set at the head of Iceland's longest fjord.",
    "description": "Akureyri is the largest town outside the capital area, beautifully located at the head of Eyjafjörður beneath towering mountains. The town boasts a warm cultural scene, a botanical garden, swimming pools and the Hlíðarfjall ski area.",
    "highlights": [
      "Akureyrarkirkja",
      "The Botanical Garden",
      "Hlíðarfjall",
      "The town centre"
    ],
    "accommodation": [
      {
        "name": "Hotel in central Akureyri",
        "type": "Hotel",
        "price": "$$$"
      },
      {
        "name": "Guesthouses and apartments",
        "type": "Guesthouse",
        "price": "$$"
      }
    ],
    "activities": [
      "Skiing in Hlíðarfjall",
      "Town walk and museums",
      "Swimming pool"
    ],
    "season": "Year-round"
  },
  {
    "id": "myvatn",
    "name": "Mývatn",
    "region": "nordaustur",
    "type": "Lake & geothermal",
    "tags": [
      "Geothermal",
      "Birds",
      "Baths"
    ],
    "blurb": "A volcanic landscape of pseudo-craters, hot springs and natural baths.",
    "description": "The Mývatn area is a unique blend of volcanic activity and birdlife. Here you'll find the pseudo-craters at Skútustaðir, the lava formations of Dimmuborgir, the colourful geothermal field at Námafjall and the Mývatn Nature Baths - a calmer alternative to the Blue Lagoon.",
    "highlights": [
      "Dimmuborgir",
      "Hot springs at Námafjall",
      "The Nature Baths",
      "Grjótagjá",
      "Hverfjall"
    ],
    "accommodation": [
      {
        "name": "Hotel by Mývatn",
        "type": "Hotel",
        "price": "$$$"
      },
      {
        "name": "Country stay",
        "type": "Farm stay",
        "price": "$$"
      }
    ],
    "activities": [
      "Geothermal baths",
      "Circular walk around Hverfjall",
      "Birdwatching"
    ],
    "season": "Year-round"
  },
  {
    "id": "godafoss",
    "name": "Goðafoss",
    "region": "nordaustur",
    "type": "Waterfall",
    "tags": [
      "Waterfall",
      "History",
      "Landmark"
    ],
    "blurb": "The waterfall of the gods, where the pagan gods were cast aside around the year 1000.",
    "description": "Goðafoss is one of the country's most beautiful waterfalls, crescent-shaped and about 12 m high. Its name traces back to the conversion to Christianity around the year 1000, when statues of the pagan gods are said to have been thrown into the falls. Easily accessible right off the Ring Road.",
    "highlights": [
      "Views from both sides",
      "Skjálfandafljót",
      "Close to Akureyri and Mývatn"
    ],
    "accommodation": [
      {
        "name": "Accommodation in Fnjóskadalur / Akureyri",
        "type": "Hotels & guesthouses",
        "price": "$$"
      }
    ],
    "activities": [
      "Waterfall viewing",
      "Photography"
    ],
    "season": "Year-round"
  },
  {
    "id": "husavik",
    "name": "Húsavík",
    "region": "nordaustur",
    "type": "Town",
    "tags": [
      "Whales",
      "Baths",
      "Fishing village"
    ],
    "blurb": "Europe's whale-watching capital with sea baths on the cliff edge.",
    "description": "Húsavík is a colourful fishing town and one of the best places in the country for whale watching - humpbacks, minke whales and even blue whales are seen regularly. The GeoSea sea baths offer warm seawater with views over Skjálfandi bay.",
    "highlights": [
      "Whale watching",
      "GeoSea sea baths",
      "The Whale Museum",
      "Húsavíkurkirkja"
    ],
    "accommodation": [
      {
        "name": "Fosshótel Húsavík",
        "type": "Hotel",
        "price": "$$$"
      },
      {
        "name": "Guesthouse",
        "type": "Guesthouse",
        "price": "$$"
      }
    ],
    "activities": [
      "Whale watching",
      "GeoSea sea baths"
    ],
    "season": "April–October for whales"
  },
  {
    "id": "asbyrgi",
    "name": "Ásbyrgi",
    "region": "nordaustur",
    "type": "National park canyon",
    "tags": [
      "Canyon",
      "Hiking",
      "National park"
    ],
    "blurb": "A horseshoe-shaped canyon with cliffs up to 100 metres, a still pond and birch woodland.",
    "description": "Ásbyrgi is a spectacular horseshoe-shaped canyon in the northern part of Jökulsárgljúfur, within Vatnajökull National Park. Folklore says it formed when Sleipnir, Odin's eight-legged horse, set down a hoof, though geologists trace it to catastrophic glacial floods in the river Jökulsá á Fjöllum. At its sheltered innermost end, cliffs rise up to 100 metres above the pond Botnstjörn, ringed by lush birch forest and walking trails.",
    "highlights": [
      "Botnstjörn pond",
      "The rock outcrop Eyjan",
      "Cliff walls up to 100 m",
      "Birch woodland and trails"
    ],
    "accommodation": [
      {
        "name": "Ásbyrgi campsite",
        "type": "Campsite",
        "price": "$"
      }
    ],
    "activities": [
      "Walking the canyon trails",
      "Birdwatching at Botnstjörn"
    ],
    "season": "May–September (services); canyon accessible year-round"
  },
  {
    "id": "askja",
    "name": "Askja",
    "region": "nordaustur",
    "type": "Volcanic site",
    "tags": [
      "Highlands",
      "Volcano",
      "Wilderness"
    ],
    "blurb": "A giant volcanic caldera in Ódáðahraun with a warm crater lake.",
    "description": "Askja is a spectacular caldera in the Dyngjufjöll mountains at the heart of the highlands, within Northeast Iceland. Within the caldera lies Öskjuvatn, the country's deepest lake, and the warm crater lake Víti where you can bathe. The area is so lunar that Apollo astronauts trained here.",
    "highlights": [
      "Öskjuvatn",
      "Víti",
      "Drekagil",
      "Herðubreið nearby"
    ],
    "accommodation": [
      {
        "name": "Dreki hut",
        "type": "Hut / camping",
        "price": "$"
      }
    ],
    "activities": [
      "Hike to Víti",
      "Super-jeep tour of the highlands"
    ],
    "season": "July–September"
  },
  {
    "id": "siglufjordur",
    "name": "Siglufjörður",
    "region": "nordaustur",
    "type": "Town",
    "tags": [
      "Fishing village",
      "Museums",
      "Culture"
    ],
    "blurb": "Iceland's northernmost town, a former herring capital with a superb museum.",
    "description": "Siglufjörður was once the herring capital of the world, and the Herring Era Museum, one of the largest maritime museums in the Nordic countries, tells that story. The town is picturesque, with a colourful harbour beneath steep mountains and excellent hiking trails.",
    "highlights": [
      "The Herring Era Museum",
      "The harbour",
      "Ski area",
      "Hiking trails in Tröllaskagi"
    ],
    "accommodation": [
      {
        "name": "Sigló Hotel",
        "type": "Hotel",
        "price": "$$$"
      },
      {
        "name": "Guesthouse",
        "type": "Guesthouse",
        "price": "$$"
      }
    ],
    "activities": [
      "Museum visit",
      "Skiing in Tröllaskagi",
      "Hiking"
    ],
    "season": "Year-round"
  },
  {
    "id": "grimsey",
    "name": "Grímsey",
    "region": "nordaustur",
    "type": "Island",
    "tags": [
      "Island",
      "Arctic Circle",
      "Birds"
    ],
    "blurb": "Iceland's only inhabited settlement on the Arctic Circle.",
    "description": "Grímsey is a small island 40 km off the coast and the only place in Iceland crossed by the Arctic Circle. The spherical monument Orbis et Globus marks the circle. The island teems with seabirds, not least puffins.",
    "highlights": [
      "The Arctic Circle",
      "Orbis et Globus",
      "Puffin colony",
      "Básavík"
    ],
    "accommodation": [
      {
        "name": "Accommodation in Grímsey",
        "type": "Guesthouse",
        "price": "$$"
      }
    ],
    "activities": [
      "Walk to the Arctic Circle",
      "Birdwatching",
      "Ferry or flight from Akureyri"
    ],
    "season": "May–August"
  },
  {
    "id": "dalvik",
    "name": "Dalvík og Árskógssandur",
    "region": "nordaustur",
    "type": "Town",
    "tags": [
      "Whales",
      "Baths",
      "Fishing village"
    ],
    "blurb": "A quiet town on Eyjafjörður with whale watching and beer baths.",
    "description": "Dalvík is a cosy fishing town on Eyjafjörður offering whale watching and sea angling. At nearby Árskógssandur are the Beer Baths, where you bathe in young beer, and the ferry to Hrísey.",
    "highlights": [
      "Whale watching",
      "The Beer Baths at Árskógssandur",
      "Hrísey",
      "The Great Fish Day festival"
    ],
    "accommodation": [
      {
        "name": "Accommodation in Dalvík",
        "type": "Guesthouse",
        "price": "$$"
      }
    ],
    "activities": [
      "Whale watching",
      "Beer baths",
      "Ferry to Hrísey"
    ],
    "season": "Year-round"
  },
  {
    "id": "oskjuvegur",
    "name": "Askja og Dyngjufjöll",
    "region": "nordaustur",
    "category": "ganga",
    "type": "Hiking trail",
    "length": "Day and multi-day routes",
    "duration": "1 hour to several days",
    "difficulty": "Moderate / challenging",
    "tags": [
      "Highlands",
      "Volcanic sites",
      "Wilderness"
    ],
    "blurb": "Hikes through the lunar landscape of Askja and its surroundings at the heart of the highlands.",
    "description": "From the hut at Drekagil, a short but striking walk leads into Askja to the crater lake Víti. Longer and more challenging multi-day routes cross the Dyngjufjöll mountains and Ódáðahraun - the country's vastest desert, surrounded by black lava and volcanoes.",
    "highlights": [
      "Víti crater lake",
      "Öskjuvatn",
      "Drekagil",
      "Herðubreið in the distance"
    ],
    "accommodation": [
      {
        "name": "Dreki hut",
        "type": "Hut / camping",
        "price": "$"
      }
    ],
    "activities": [
      "Day hike to Víti",
      "Multi-day highland trek"
    ]
  },
  {
    "id": "vogafjos",
    "name": "Vogafjós",
    "region": "nordaustur",
    "category": "veitingar",
    "type": "Restaurant",
    "cuisine": "Country cooking",
    "price": "$$",
    "location": "By Mývatn",
    "tags": [
      "Homemade",
      "Countryside",
      "Unique"
    ],
    "blurb": "A restaurant in a cowshed by Mývatn with views over the cows.",
    "description": "Vogafjós is a unique country restaurant where you dine beside a glass wall separating the dining room from the cowshed. The focus is on homemade local food - smoked trout, homemade mozzarella and geothermal rye bread baked in the ground by Mývatn.",
    "highlights": [
      "Geothermal rye bread baked in the ground",
      "Smoked Mývatn trout",
      "Homemade cheese",
      "Views into the cowshed"
    ]
  },
  {
    "id": "aldeyjarfoss",
    "name": "Aldeyjarfoss",
    "region": "nordaustur",
    "type": "Waterfall",
    "tags": [
      "Waterfall",
      "Basalt columns",
      "Highlands"
    ],
    "blurb": "A powerful waterfall framed by black basalt columns in Skjálfandafljót.",
    "description": "Aldeyjarfoss in the Skjálfandafljót river drops about 20 metres into a pool surrounded by striking dark basalt columns that stand in stark contrast to the white torrent of water. The waterfall lies on the edge of the highlands in Bárðardalur.",
    "highlights": [
      "The basalt walls",
      "The frothing white pool",
      "Hrafnabjargafoss nearby"
    ],
    "accommodation": [
      {
        "name": "Accommodation in Bárðardalur / near Goðafoss",
        "type": "Farm stay",
        "price": "$$"
      }
    ],
    "activities": [
      "Waterfall viewing",
      "Photography"
    ]
  },
  {
    "id": "krafla",
    "name": "Krafla og Leirhnjúkur",
    "region": "nordaustur",
    "type": "Volcanic site",
    "tags": [
      "Volcano",
      "Geothermal",
      "Hiking"
    ],
    "blurb": "An active volcanic system with the crater lake Víti and steaming lava fields.",
    "description": "Krafla is one of the country's most active volcanic systems, not far from Mývatn. Here you'll find the green crater lake Víti and lava fields from the Krafla Fires of 1975-1984 that still steam. Trails lead through the colourful high-temperature area at Leirhnjúkur. The Krafla power station harnesses the geothermal heat.",
    "highlights": [
      "Víti crater lake",
      "Leirhnjúkur",
      "Steaming lava",
      "Krafla power station"
    ],
    "accommodation": [
      {
        "name": "Accommodation by Mývatn",
        "type": "Hotels & guesthouses",
        "price": "$$"
      }
    ],
    "activities": [
      "Walk through lava and geothermal fields",
      "Viewing the Víti crater lake"
    ]
  },
  {
    "id": "hrisey",
    "name": "Hrísey",
    "region": "nordaustur",
    "type": "Island",
    "tags": [
      "Island",
      "Birds",
      "Tranquillity"
    ],
    "blurb": "A tranquil island in Eyjafjörður, the 'pearl of Eyjafjörður', with rich birdlife.",
    "description": "Hrísey is the second largest island off Iceland and a peaceful paradise in Eyjafjörður, reached by a short ferry from Árskógssandur. Largely car-free, with marked trails, tame ptarmigan and one of the largest eider duck nesting grounds in the country.",
    "highlights": [
      "Trails around the island",
      "Birdlife and ptarmigan",
      "The House (cultural centre)",
      "The ferry Sævar"
    ],
    "accommodation": [
      {
        "name": "Accommodation in Hrísey",
        "type": "Guesthouse",
        "price": "$$"
      }
    ],
    "activities": [
      "Hiking",
      "Birdwatching",
      "Ferry from Árskógssandur"
    ]
  },
  {
    "id": "vaglaskogur",
    "name": "Vaglaskógur",
    "region": "nordaustur",
    "type": "Forest",
    "tags": [
      "Forest",
      "Family",
      "Hiking"
    ],
    "blurb": "One of the largest and most beautiful birch forests in the country, in Fnjóskadalur.",
    "description": "Vaglaskógur in Fnjóskadalur is one of the country's largest and most lush forests, with tall birch and conifer trees, walking trails and a campsite by the river Fnjóská. A popular stop for families and outdoor enthusiasts all year round.",
    "highlights": [
      "Walking trails",
      "The campsite",
      "Fnjóská",
      "Tall birch forest"
    ],
    "accommodation": [
      {
        "name": "Campsite in Vaglaskógur",
        "type": "Camping",
        "price": "$"
      }
    ],
    "activities": [
      "Forest walks",
      "Outdoor recreation by the river"
    ]
  },
  {
    "id": "laufas",
    "name": "Laufás",
    "region": "nordaustur",
    "type": "Turf house & museum",
    "tags": [
      "History",
      "Turf house",
      "Family"
    ],
    "blurb": "A beautiful old parsonage turf house by Eyjafjörður.",
    "description": "Laufás on the eastern side of Eyjafjörður is a splendid gabled turf house from the 19th century, a former parsonage and now a museum. The house stands in green surroundings by the river and gives a good picture of the life of wealthier farmers in earlier times. A turf church stands nearby.",
    "highlights": [
      "The turf house",
      "Laufáskirkja",
      "Period furnishings",
      "Grýtubakkahreppur"
    ],
    "accommodation": [
      {
        "name": "Accommodation by Eyjafjörður / Akureyri",
        "type": "Hotels & guesthouses",
        "price": "$$"
      }
    ],
    "activities": [
      "Museum visit",
      "Walk around the site"
    ]
  },
  {
    "id": "olafsfjordur",
    "name": "Ólafsfjörður og Héðinsfjörður",
    "region": "nordaustur",
    "type": "Town & fjord",
    "tags": [
      "Tröllaskagi",
      "Tranquillity",
      "Hiking"
    ],
    "blurb": "A quiet fjord town on Tröllaskagi with the uninhabited Héðinsfjörður alongside.",
    "description": "Ólafsfjörður is part of Fjallabyggð, connected to Siglufjörður and Eyjafjörður by long tunnels. Between them lies Héðinsfjörður, uninhabited since the mid-20th century - a tranquil fjord with a lake, trails and untouched nature beneath the steep peaks of Tröllaskagi.",
    "highlights": [
      "Héðinsfjörður",
      "The Múla and Héðinsfjörður tunnels",
      "Ski area",
      "Trout fishing"
    ],
    "accommodation": [
      {
        "name": "Accommodation in Ólafsfjörður",
        "type": "Guesthouse",
        "price": "$$"
      }
    ],
    "activities": [
      "Hiking in Héðinsfjörður",
      "Skiing in Tröllaskagi"
    ]
  },
  {
    "id": "tjornes",
    "name": "Tjörnes",
    "region": "nordaustur",
    "type": "Nature",
    "tags": [
      "Geology",
      "Fossils",
      "Birds"
    ],
    "blurb": "A peninsula between Skjálfandi and Öxarfjörður, known for its fossils.",
    "description": "Tjörnes is a peninsula north of Húsavík where the rock layers hold millions-of-years-old shell fossils - one of the best-known fossil sites in the country. On the peninsula are lighthouses, bird cliffs and views towards Grímsey and the mountains of Northeast Iceland.",
    "highlights": [
      "Shell fossils",
      "Lighthouses on the peninsula",
      "Bird cliffs",
      "Views towards Grímsey"
    ],
    "accommodation": [
      {
        "name": "Accommodation in Húsavík",
        "type": "Hotels & guesthouses",
        "price": "$$"
      }
    ],
    "activities": [
      "Fossil viewing",
      "Birdwatching"
    ]
  },
  {
    "id": "sulur",
    "name": "Súlur",
    "region": "nordaustur",
    "category": "ganga",
    "type": "Hiking trail",
    "length": "12 km round trip",
    "duration": "5–7 hours",
    "difficulty": "Moderate / challenging",
    "tags": [
      "Views",
      "Mountain",
      "Day hike"
    ],
    "blurb": "Akureyri's local mountain - a twin-peaked summit with sweeping views.",
    "description": "Súlur is Akureyri's landmark mountain, twin-peaked and prominent south of the town. The trail climbs Glerárdalur to Ytri-Súla (1,144 m) and offers spectacular views over Eyjafjörður, Akureyri and the surrounding mountains. A popular but challenging day hike.",
    "highlights": [
      "Ytri-Súla",
      "Views over Eyjafjörður",
      "Glerárdalur",
      "Kaldbakur in the distance"
    ],
    "accommodation": [
      {
        "name": "Accommodation in Akureyri",
        "type": "Hotels & guesthouses",
        "price": "$$"
      }
    ],
    "activities": [
      "Day hike in summer",
      "Mountain biking lower in the valley"
    ]
  },
  {
    "id": "vindbelgjarfjall",
    "name": "Vindbelgjarfjall",
    "region": "nordaustur",
    "category": "ganga",
    "type": "Hiking trail",
    "length": "3 km round trip",
    "duration": "1.5–2 hours",
    "difficulty": "Easy / moderate",
    "tags": [
      "Views",
      "Mývatn",
      "Short"
    ],
    "blurb": "A short but steep climb to the best viewpoint over Mývatn.",
    "description": "Vindbelgjarfjall rises west of Mývatn and from its summit (529 m) is probably the best view over the lake, the pseudo-craters and the surrounding mountains. The walk is short but fairly steep for the last stretch - ideal for gaining an overview of the Mývatn area.",
    "highlights": [
      "Views over Mývatn",
      "The pseudo-craters",
      "The mountain ring",
      "Birdlife at the base"
    ],
    "accommodation": [
      {
        "name": "Accommodation by Mývatn",
        "type": "Hotels & guesthouses",
        "price": "$$"
      }
    ],
    "activities": [
      "Short day hike",
      "Photography over Mývatn"
    ]
  },
  {
    "id": "blaa_kannan",
    "name": "Bláa kannan",
    "region": "nordaustur",
    "category": "kaffi",
    "type": "Café",
    "cuisine": "Coffee and cakes",
    "price": "$$",
    "location": "Akureyri",
    "tags": [
      "Café",
      "Town centre",
      "Landmark"
    ],
    "blurb": "The distinctive blue café on Akureyri's pedestrian street.",
    "description": "Bláa kannan is one of the best-known landmarks of central Akureyri - a dark blue timber house with turrets on the pedestrian street Hafnarstræti. A popular café known for its cakes, sandwiches and cosy atmosphere in the heart of the town.",
    "highlights": [
      "Homemade cakes",
      "The blue timber house",
      "Location on the pedestrian street"
    ]
  },
  {
    "id": "kaffi_ku",
    "name": "Kaffi Kú",
    "region": "nordaustur",
    "category": "kaffi",
    "type": "Restaurant",
    "cuisine": "Country cooking",
    "price": "$$",
    "location": "Eyjafjarðarsveit",
    "tags": [
      "Countryside",
      "Unique",
      "Family"
    ],
    "blurb": "A restaurant above a cowshed with views over the cows and Eyjafjörður.",
    "description": "Kaffi Kú is a country restaurant in Eyjafjarðarsveit, set on the upper floor above a modern cowshed where guests can watch the cows and the milking robots. The menu features homemade country food and baked goods - a popular stop just a short distance from Akureyri.",
    "highlights": [
      "Views over the cowshed",
      "Homemade food",
      "Eyjafjörður",
      "Family-friendly"
    ]
  },
  {
    "id": "gamli_baukur",
    "name": "Gamli Baukur",
    "region": "nordaustur",
    "category": "veitingar",
    "type": "Restaurant",
    "cuisine": "Seafood",
    "price": "$$",
    "location": "Húsavík",
    "tags": [
      "Fish",
      "Harbour",
      "Whales"
    ],
    "blurb": "A timber house by the harbour in Húsavík, perfect after whale watching.",
    "description": "Gamli Baukur stands by the harbour in Húsavík, built from driftwood and old timber. The place is known for its fresh fish and fish soup and is ideal for sitting down after whale watching, with views over the boats and Skjálfandi bay.",
    "highlights": [
      "Fresh fish",
      "Fish soup",
      "Harbour atmosphere",
      "Views over Skjálfandi"
    ]
  },
  {
    "id": "seydisfjordur",
    "name": "Seyðisfjörður",
    "region": "austurland",
    "type": "Town",
    "tags": [
      "Art",
      "Culture",
      "Landmark"
    ],
    "blurb": "An artists' village by a fjord with a rainbow street and beautiful timber houses.",
    "description": "Seyðisfjörður is one of the most beautiful towns in the East Fjords, surrounded by steep mountains and waterfalls. The rainbow street leading to the blue church is world-famous, and the town buzzes with artistic life. This is where the Norræna ferry arrives from Europe.",
    "highlights": [
      "The rainbow street",
      "The blue church",
      "Tvísöngur",
      "Vestdalsfoss"
    ],
    "accommodation": [
      {
        "name": "Hótel Aldan",
        "type": "Hotel",
        "price": "$$$"
      },
      {
        "name": "Guesthouses and apartments",
        "type": "Guesthouse",
        "price": "$$"
      }
    ],
    "activities": [
      "Art walk",
      "Kayaking on the fjord"
    ],
    "season": "Year-round (mountain road closes in snow)"
  },
  {
    "id": "stodvarfjordur",
    "name": "Stöðvarfjörður",
    "region": "austurland",
    "type": "Village",
    "tags": [
      "Stones",
      "Museums",
      "Family"
    ],
    "blurb": "Petra's world-famous private stone collection in a small East Fjords village.",
    "description": "In Stöðvarfjörður you'll find Petra's Stone Collection, one of the largest private mineral collections in the world, gathered by Petra Sveinsdóttir over her lifetime. The garden and house are full of colourful crystals, jasper and zeolites from the East Fjords mountains.",
    "highlights": [
      "Petra's Stone Collection",
      "The cultural centre in the church",
      "Saxa sea geyser"
    ],
    "accommodation": [
      {
        "name": "Accommodation in the fjord",
        "type": "Guesthouse",
        "price": "$$"
      }
    ],
    "activities": [
      "Museum visit",
      "Beachcombing"
    ],
    "season": "May–September"
  },
  {
    "id": "hallormsstadur",
    "name": "Hallormsstaður og Lagarfljót",
    "region": "austurland",
    "type": "Forest & lake",
    "tags": [
      "Forest",
      "Hiking",
      "Family"
    ],
    "blurb": "The country's largest forest beside the legend-rich lake Lagarfljót.",
    "description": "Hallormsstaðaskógur is Iceland's largest and oldest national forest, with numerous walking trails and tree species. It lies beside Lagarfljót, where legend says the Lagarfljót Worm dwells.",
    "highlights": [
      "The arboretum",
      "Atlavík",
      "Hengifoss nearby",
      "The Lagarfljót Worm"
    ],
    "accommodation": [
      {
        "name": "Hótel Hallormsstaður",
        "type": "Hotel",
        "price": "$$"
      },
      {
        "name": "Campsite at Atlavík",
        "type": "Camping",
        "price": "$"
      }
    ],
    "activities": [
      "Forest walks",
      "Hike to Hengifoss"
    ],
    "season": "May–October"
  },
  {
    "id": "borgarfjordur_eystri",
    "name": "Borgarfjörður eystri",
    "region": "austurland",
    "type": "Village & nature",
    "tags": [
      "Puffins",
      "Hiking",
      "Elves"
    ],
    "blurb": "A remote fjord with a puffin colony and some of the best hiking trails in the country.",
    "description": "Borgarfjörður eystri is a small village (Bakkagerði) known for its easily accessible puffin colony at Hafnarhólmi, colourful rhyolite mountains and expansive walking trails across Víknaslóðir. Álfaborg and folklore give the place its character.",
    "highlights": [
      "Hafnarhólmi puffin colony",
      "Víknaslóðir",
      "Álfaborg",
      "Dyrfjöll"
    ],
    "accommodation": [
      {
        "name": "Accommodation in Bakkagerði",
        "type": "Guesthouse",
        "price": "$$"
      },
      {
        "name": "Mountain huts on Víknaslóðir",
        "type": "Hut",
        "price": "$"
      }
    ],
    "activities": [
      "Puffin watching",
      "Multi-day hikes across Víknaslóðir"
    ],
    "season": "May–September"
  },
  {
    "id": "djupivogur",
    "name": "Djúpivogur",
    "region": "austurland",
    "type": "Village",
    "tags": [
      "Art",
      "Tranquillity",
      "Birds"
    ],
    "blurb": "A peaceful Cittaslow village with the artwork Eggin í Gleðivík.",
    "description": "Djúpivogur is Iceland's first \"Cittaslow\" community, with an emphasis on calm and quality. By the harbour stands the artwork Eggin í Gleðivík – 34 large granite eggs by Sigurður Guðmundsson. Nearby lies the natural gem Búlandstindur.",
    "highlights": [
      "Eggin í Gleðivík",
      "Búlandstindur",
      "Papey nearby",
      "The old harbour"
    ],
    "accommodation": [
      {
        "name": "Hótel Framtíð",
        "type": "Hotel",
        "price": "$$"
      }
    ],
    "activities": [
      "Art walk by the harbour",
      "Bird watching",
      "Boat trip to Papey"
    ],
    "season": "May–September"
  },
  {
    "id": "hofn",
    "name": "Höfn í Hornafirði",
    "region": "austurland",
    "type": "Town",
    "tags": [
      "Food",
      "Glaciers",
      "Fishing town"
    ],
    "blurb": "The langoustine town at the foot of Vatnajökull with spectacular glacier views.",
    "description": "Höfn is a lively harbour town known as the langoustine capital of Iceland. From here there are unique views over the glacier tongues of Vatnajökull, and the town is an ideal base for glacier tours and visits to Jökulsárlón.",
    "highlights": [
      "Langoustine restaurants",
      "Views over Vatnajökull",
      "The glacier centre",
      "Stokksnes nearby"
    ],
    "accommodation": [
      {
        "name": "Hotel in Höfn",
        "type": "Hotel",
        "price": "$$$"
      },
      {
        "name": "Guesthouse",
        "type": "Guesthouse",
        "price": "$$"
      }
    ],
    "activities": [
      "Langoustine meal",
      "Guided glacier hike",
      "Photography at Stokksnes"
    ],
    "season": "Year-round"
  },
  {
    "id": "stokksnes",
    "name": "Stokksnes og Vestrahorn",
    "region": "austurland",
    "type": "Mountain & beach",
    "tags": [
      "Photography",
      "Mountain",
      "Beach"
    ],
    "blurb": "A majestic mountain mirrored in a black sand beach — a photographer's dream.",
    "description": "Vestrahorn (Vestitindur) at Stokksnes is one of the most photographed mountains in the country, where the jagged peak is reflected in the wet black sand. The area also features a Viking village film set and views over Hornafjörður.",
    "highlights": [
      "Vestrahorn",
      "Black sand beach",
      "The Viking village",
      "Seals"
    ],
    "accommodation": [
      {
        "name": "Accommodation in Höfn",
        "type": "Hotels & guesthouses",
        "price": "$$"
      }
    ],
    "activities": [
      "Photography",
      "Beach walk"
    ],
    "season": "Year-round"
  },
  {
    "id": "storurd",
    "name": "Stórurð",
    "region": "austurland",
    "category": "ganga",
    "type": "Hiking trail",
    "length": "11–20 km loop",
    "duration": "6–8 hrs",
    "difficulty": "Moderate / challenging",
    "tags": [
      "Dyrfjöll",
      "Pools",
      "Unique"
    ],
    "blurb": "An adventurous valley of giant boulders and turquoise pools beneath Dyrfjöll.",
    "description": "Stórurð is one of the most distinctive hiking destinations in the country — a valley full of house-sized tuff boulders, soft grassy meadows and bright turquoise pools beneath the peaked Dyrfjöll. The route starts from Vatnsskarð or Borgarfjörður eystri.",
    "highlights": [
      "The giant boulders",
      "Turquoise pools",
      "Dyrfjöll",
      "Vatnsskarð"
    ],
    "accommodation": [
      {
        "name": "Accommodation in Borgarfjörður eystri",
        "type": "Guesthouse",
        "price": "$$"
      }
    ],
    "activities": [
      "Summer day hike",
      "Photography"
    ]
  },
  {
    "id": "humarhofnin",
    "name": "Humarhöfnin",
    "region": "austurland",
    "category": "veitingar",
    "type": "Restaurant",
    "cuisine": "Langoustine / seafood",
    "price": "$$$",
    "location": "Höfn í Hornafirði",
    "tags": [
      "Langoustine",
      "Glacier views",
      "Fishing town"
    ],
    "blurb": "Langoustine dining in Iceland's langoustine capital at the foot of Vatnajökull.",
    "description": "Humarhöfnin in Höfn specialises in langoustine caught in the bay just offshore. In a cosy timber house the langoustine is served in countless ways — in soup, on pizza and grilled — with views over the glacier tongues of Vatnajökull.",
    "highlights": [
      "Fresh Hornafjörður langoustine",
      "Langoustine pizza",
      "Langoustine soup",
      "Glacier views"
    ]
  },
  {
    "id": "skaftfell",
    "name": "Skaftfell Bistro",
    "region": "austurland",
    "category": "veitingar",
    "type": "Restaurant",
    "cuisine": "Bistro / pizza",
    "price": "$$",
    "location": "Seyðisfjörður",
    "tags": [
      "Art",
      "Relaxed",
      "Culture"
    ],
    "blurb": "An artistic bistro and cultural centre in the heart of Seyðisfjörður.",
    "description": "Skaftfell is a visual art centre and bistro in one and the same building in Seyðisfjörður. A relaxed spot where artists and travellers meet over popular pizzas, soups and home baking — surrounded by contemporary art.",
    "highlights": [
      "Handmade pizzas",
      "Art exhibitions",
      "Relaxed atmosphere"
    ]
  },
  {
    "id": "thingvellir",
    "name": "Þingvellir",
    "region": "sudurland",
    "type": "National park & UNESCO site",
    "tags": [
      "History",
      "UNESCO",
      "Diving"
    ],
    "blurb": "Birthplace of the Alþingi and the meeting point of the continental plates.",
    "description": "Þingvellir is a UNESCO World Heritage Site — the Alþingi, one of the world's oldest parliaments, was founded here in 930. Geologically, the boundary of the Eurasian and North American plates runs through the area, and in Silfra you can dive between the continents in crystal-clear water.",
    "highlights": [
      "Almannagjá",
      "Silfra",
      "Öxarárfoss",
      "Lögberg"
    ],
    "accommodation": [
      {
        "name": "Accommodation in Laugarvatn / Reykholt",
        "type": "Hotels & guesthouses",
        "price": "$$"
      }
    ],
    "activities": [
      "Diving or snorkelling in Silfra",
      "Historical walk"
    ],
    "season": "Year-round"
  },
  {
    "id": "geysir",
    "name": "Geysir og Strokkur",
    "region": "sudurland",
    "type": "Geothermal area",
    "tags": [
      "Geothermal",
      "Golden Circle",
      "Family"
    ],
    "blurb": "The original erupting hot spring — Strokkur erupts every few minutes.",
    "description": "Haukadalur is home to the original Geysir, which gave its name to every erupting hot spring in the world. Although it is now largely dormant, its neighbour Strokkur shoots 20–30 m into the air every 5–10 minutes. A colourful geothermal area of boiling pools surrounds the site.",
    "highlights": [
      "Strokkur",
      "Blesi and Konungshver",
      "Geysir Center"
    ],
    "accommodation": [
      {
        "name": "Hótel Geysir",
        "type": "Hotel",
        "price": "$$$"
      }
    ],
    "activities": [
      "Hot-spring viewing",
      "The Golden Circle"
    ],
    "season": "Year-round"
  },
  {
    "id": "gullfoss",
    "name": "Gullfoss",
    "region": "sudurland",
    "type": "Waterfall",
    "tags": [
      "Waterfall",
      "Golden Circle",
      "Landmark"
    ],
    "blurb": "The golden waterfall plunges in two tiers into a vast canyon.",
    "description": "Gullfoss is the crown of the Golden Circle — the river Hvítá plunges in two tiers, some 32 m in total, into a narrow canyon. On sunny days a rainbow often forms in the spray. The waterfall was saved from being harnessed for power thanks to the campaign of Sigríður of Brattholt.",
    "highlights": [
      "Upper and lower tiers",
      "Viewing platforms",
      "Rainbows in the spray"
    ],
    "accommodation": [
      {
        "name": "Accommodation along the Golden Circle",
        "type": "Hotels & guesthouses",
        "price": "$$"
      }
    ],
    "activities": [
      "Waterfall viewing",
      "Snowmobiling on nearby Langjökull"
    ],
    "season": "Year-round"
  },
  {
    "id": "reynisfjara",
    "name": "Reynisfjara",
    "region": "sudurland",
    "type": "Beach",
    "tags": ["Black-sand beach", "Landmark", "Puffin"],
    "blurb": "Famous black-sand beach with basalt columns and the Reynisdrangar sea stacks.",
    "warning": "The sneaker waves at Reynisfjara are life-threatening and have swept tourists to their deaths. They arrive without warning, surge far higher up the beach than ordinary waves, and the water is freezing with a powerful undertow. Never turn your back on the sea, keep well back from the waterline, and never step closer to the water for a photo.",
    "description": "Reynisfjara is the most striking black-sand beach in Iceland, with tall basalt columns (the Hálsanefshellir cave), the Reynisdrangar sea stacks offshore and a puffin colony on Reynisfjall in summer. The beach is breathtaking but dangerous — see the warning below. The village of Vík is a few minutes' drive away.",
    "highlights": ["Basalt columns & Hálsanefshellir", "Reynisdrangar", "Reynisfjall", "Puffins (May–Aug)"],
    "accommodation": [
      { "name": "Hótel í Vík", "type": "Hotel", "price": "$$$" },
      { "name": "Guesthouses & cabins", "type": "Guesthouse", "price": "$$" }
    ],
    "activities": ["Beach walk with extreme caution", "Photographing the basalt columns"],
    "season": "Year-round, puffins May–Aug"
  },
  {
    "id": "vik",
    "name": "Vík í Mýrdal",
    "region": "sudurland",
    "type": "Village",
    "tags": ["Village", "Services", "South Coast"],
    "blurb": "Iceland's southernmost village and the service hub of the South Coast.",
    "description": "Vík í Mýrdal is Iceland's southernmost village, a community of around 750 people that serves as the natural service hub of the South Coast — fuel, food, shops and accommodation along a long stretch where little else exists. Above the village stands the white Víkurkirkja church on a hill, with views over the black sand and the Reynisdrangar sea stacks, while the Mýrdalsjökull glacier, which caps the Katla volcano, rises all around. Vík is the ideal place to stay to split a South Coast trip over two days.",
    "highlights": ["Víkurkirkja church", "Víkurfjara beach", "Views of Reynisdrangar", "Services & shops"],
    "accommodation": [
      { "name": "Hótel í Vík", "type": "Hotel", "price": "$$$" },
      { "name": "Guesthouses & cabins", "type": "Guesthouse", "price": "$$" }
    ],
    "activities": ["Stroll through the village", "Views from Víkurkirkja"],
    "season": "Year-round"
  },
  {
    "id": "jokulsarlon",
    "name": "Jökulsárlón",
    "region": "sudurland",
    "type": "Glacier lagoon",
    "tags": [
      "Glacier",
      "Icebergs",
      "Seals"
    ],
    "blurb": "Iceland's deepest lake, filled with blue icebergs calving from Breiðamerkurjökull.",
    "description": "Jökulsárlón is Iceland's deepest lake and one of the country's most spectacular natural wonders. The lagoon fills with blue and white icebergs that break off Breiðamerkurjökull, an outlet glacier of Vatnajökull, and drift slowly toward the sea. Seals are often seen swimming between the floes or resting on the ice year-round. In summer you can take a boat tour among the icebergs, either on large amphibian boats or faster zodiac craft. The lagoon sits on the Ring Road at the edge of Vatnajökull National Park and is open all year.",
    "highlights": [
      "Boat tours among icebergs (summer)",
      "Blue and white calving icebergs",
      "Seals in the lagoon",
      "Nearby Fjallsárlón lagoon"
    ],
    "accommodation": [
      {
        "name": "Hotels in Höfn and Öræfi",
        "type": "Hotel",
        "price": "$$$"
      },
      {
        "name": "Guesthouses and cabins",
        "type": "Guesthouse",
        "price": "$$"
      }
    ],
    "activities": [
      "Amphibian or zodiac boat tour (summer)",
      "Walking along the lagoon shore",
      "Photography and birdwatching"
    ],
    "season": "All year, boat tours spring–autumn"
  },
  {
    "id": "skogafoss",
    "name": "Skógafoss",
    "region": "sudurland",
    "type": "Waterfall",
    "tags": [
      "Waterfall",
      "Hiking",
      "Landmark"
    ],
    "blurb": "A 60-metre waterfall beneath Eyjafjöll and the start of the Fimmvörðuháls trail.",
    "description": "Skógafoss is one of Iceland's most majestic waterfalls, 60 metres high and about 25 metres wide, where the Skógá river plunges over an ancient sea cliff by the village of Skógar beneath Eyjafjöll. A staircase climbs alongside the falls to a viewing platform on the rim, and from there the famous Fimmvörðuháls hiking trail sets off between the glaciers. On sunny days rainbows form in the spray, and local folklore tells of a chest of treasure hidden behind the cascade by the settler Þrasi.",
    "highlights": [
      "60-metre-high waterfall",
      "Staircase to a viewing platform",
      "Start of the Fimmvörðuháls trail",
      "Rainbows in the spray",
      "Folklore of Þrasi's treasure chest"
    ],
    "accommodation": [
      {
        "name": "Accommodation beneath Eyjafjöll",
        "type": "Hotels & guesthouses",
        "price": "$$"
      }
    ],
    "activities": [
      "Waterfall walk",
      "Fimmvörðuháls hiking trail",
      "Photography"
    ],
    "season": "All year"
  },
  {
    "id": "vestmannaeyjar",
    "name": "Vestmannaeyjar",
    "region": "sudurland",
    "type": "Islands",
    "tags": [
      "Islands",
      "Puffin",
      "Volcano"
    ],
    "blurb": "A volcanic archipelago with a huge puffin colony and the volcano Eldfell.",
    "description": "Vestmannaeyjar is a volcanic archipelago off the south coast. Heimaey bears the marks of the 1973 eruption, when Eldfell was formed and half the town was buried under lava. It is home to one of the largest puffin colonies in the world and a vibrant island community. A ferry runs from Landeyjahöfn.",
    "highlights": [
      "Eldfell and Eldheimar",
      "Puffin colony",
      "Sæheimar",
      "Sprangan"
    ],
    "accommodation": [
      {
        "name": "Hótel Vestmannaeyjar",
        "type": "Hotel",
        "price": "$$$"
      },
      {
        "name": "Guesthouse",
        "type": "Guesthouse",
        "price": "$$"
      }
    ],
    "activities": [
      "Boat trip around the islands",
      "Hike up Eldfell",
      "Puffin watching"
    ],
    "season": "Year-round, puffins May–August"
  },
  {
    "id": "landmannalaugar",
    "name": "Landmannalaugar",
    "region": "sudurland",
    "type": "Geothermal area & hiking",
    "tags": [
      "Highlands",
      "Rhyolite",
      "Bathing"
    ],
    "blurb": "Rainbow rhyolite mountains and a natural hot spring in the heart of the Highlands.",
    "description": "Landmannalaugar is the jewel of Fjallabak in the southern Highlands — colourful rhyolite mountains, lava fields and a warm natural hot spring to bathe in. From here begins the Laugavegur, one of the world's most famous hiking trails, to Þórsmörk.",
    "highlights": [
      "The natural hot spring",
      "Brennisteinsalda",
      "Ljótipollur",
      "The Laugavegur"
    ],
    "accommodation": [
      {
        "name": "Iceland Touring Association hut and campsite",
        "type": "Hut / camping",
        "price": "$"
      }
    ],
    "activities": [
      "Day hikes among the colourful mountains",
      "Bathing in the natural hot spring",
      "The Laugavegur"
    ],
    "season": "June–September"
  },
  {
    "id": "thorsmork",
    "name": "Þórsmörk",
    "region": "sudurland",
    "type": "Valley & hiking",
    "tags": [
      "Highlands",
      "Hiking",
      "Glaciers"
    ],
    "blurb": "A lush mountain valley surrounded by three glaciers.",
    "description": "Þórsmörk is a sheltered, verdant valley between the glaciers Eyjafjallajökull, Mýrdalsjökull and Tindfjallajökull. A famous end point of the Laugavegur and the start of the Fimmvörðuháls hike. Accessible only by powerful 4x4 vehicles crossing unbridged rivers.",
    "highlights": [
      "Valahnúkur",
      "Stakkholtsgjá",
      "Fimmvörðuháls",
      "Krossá"
    ],
    "accommodation": [
      {
        "name": "Huts in Húsadalur and Langidalur",
        "type": "Hut / camping",
        "price": "$"
      }
    ],
    "activities": [
      "Day hikes",
      "Fimmvörðuháls to Skógar"
    ],
    "season": "June–September"
  },
  {
    "id": "kerlingarfjoll",
    "name": "Kerlingarfjöll",
    "region": "sudurland",
    "type": "Mountains & geothermal",
    "tags": [
      "Highlands",
      "Rhyolite",
      "Geothermal"
    ],
    "blurb": "Colourful rhyolite mountains with a steaming geothermal area in Hveradalir.",
    "description": "Kerlingarfjöll is a cluster of colourful rhyolite mountains by the Kjölur route in the Highlands. The Hveradalir geothermal area is stunning — steaming ground in shades of red, yellow and green with snowdrifts in between. A popular hiking area with well-developed facilities.",
    "highlights": [
      "Hveradalir",
      "Snækollur",
      "Hiking trails",
      "Natural hot spring"
    ],
    "accommodation": [
      {
        "name": "Highland Base – Kerlingarfjöll",
        "type": "Hotel & hut",
        "price": "$$$"
      }
    ],
    "activities": [
      "Hiking in Hveradalir",
      "Bathing in a natural hot spring"
    ],
    "season": "June–September"
  },
  {
    "id": "fjadrargljufur",
    "name": "Fjaðrárgljúfur",
    "region": "sudurland",
    "type": "Canyon",
    "tags": [
      "Canyon",
      "Hiking",
      "Landmark"
    ],
    "blurb": "A dramatic, winding canyon near Kirkjubæjarklaustur.",
    "description": "Fjaðrárgljúfur is a canyon up to 100 m deep and about 2 km long, with mossy, winding walls through which the river Fjaðrá meanders. A hiking trail runs along the rim with viewing platforms looking down into the canyon.",
    "highlights": [
      "Viewing platforms",
      "Fjaðrá",
      "Nearby Kirkjubæjarklaustur"
    ],
    "accommodation": [
      {
        "name": "Accommodation near Kirkjubæjarklaustur",
        "type": "Hotels & guesthouses",
        "price": "$$"
      }
    ],
    "activities": [
      "Walk along the canyon",
      "Photography"
    ],
    "season": "Year-round (path may close)"
  },
  {
    "id": "kerid",
    "name": "Kerið",
    "region": "sudurland",
    "type": "Crater lake",
    "tags": [
      "Crater",
      "Colours",
      "Golden Circle"
    ],
    "blurb": "A red volcanic crater with blue-green water, often a Golden Circle add-on.",
    "description": "Kerið is a roughly 3,000-year-old explosion crater in Grímsnes with red scoria walls and vivid blue-green water at its base. A path runs both around the rim and down to the water. A popular addition to the Golden Circle.",
    "highlights": [
      "Red crater walls",
      "The crater lake",
      "Trail around the rim"
    ],
    "accommodation": [
      {
        "name": "Accommodation in Grímsnes / Selfoss",
        "type": "Hotels & guesthouses",
        "price": "$$"
      }
    ],
    "activities": [
      "Walk around the crater"
    ],
    "season": "Year-round"
  },
  {
    "id": "solheimajokull",
    "name": "Sólheimajökull",
    "region": "sudurland",
    "type": "Glacier tongue",
    "tags": [
      "Glacier",
      "Hiking",
      "Adventure"
    ],
    "blurb": "An accessible glacier tongue popular for guided glacier tours.",
    "description": "Sólheimajökull is an outlet glacier from Mýrdalsjökull, one of the most accessible glaciers in the country and popular for guided glacier hikes and ice climbing. The glacier clearly shows the effects of climate change as it retreats year after year.",
    "highlights": [
      "Glacier hike with crampons",
      "Ice climbing",
      "The snout and lagoon"
    ],
    "accommodation": [
      {
        "name": "Accommodation beneath Eyjafjöll / in Vík",
        "type": "Hotels & guesthouses",
        "price": "$$"
      }
    ],
    "activities": [
      "Guided glacier hike",
      "Ice climbing"
    ],
    "season": "Year-round (guided)"
  },
  {
    "id": "secret_lagoon",
    "name": "Gamla laugin (Flúðir)",
    "region": "sudurland",
    "type": "Natural hot spring",
    "tags": [
      "Bathing",
      "Relaxation",
      "Golden Circle"
    ],
    "blurb": "The oldest swimming pool in the country, a natural geothermal pool in Flúðir.",
    "description": "Gamla laugin in Flúðir, often called the Secret Lagoon, is the oldest swimming pool in the country, dating from 1891. A natural geothermal pool surrounded by small hot springs that erupt from time to time. A calm and authentic option near the Golden Circle.",
    "highlights": [
      "Natural geothermal pool",
      "Small hot springs",
      "Near the Golden Circle"
    ],
    "accommodation": [
      {
        "name": "Accommodation in Flúðir / Reykholt",
        "type": "Hotels & guesthouses",
        "price": "$$"
      }
    ],
    "activities": [
      "Bathing in the natural pool"
    ],
    "season": "Year-round",
    "category": "bod",
    "price": "$$",
    "location": "Flúðir"
  },
  {
    "id": "laugavegurinn",
    "name": "Laugavegurinn",
    "region": "sudurland",
    "category": "ganga",
    "type": "Hiking trail",
    "length": "55 km",
    "duration": "3–4 days",
    "difficulty": "Moderate",
    "tags": [
      "Highlands",
      "Multi-day",
      "Huts"
    ],
    "blurb": "One of the world's most famous hiking trails, from Landmannalaugar to Þórsmörk.",
    "description": "The Laugavegur runs some 55 km from the colourful rhyolite mountains of Landmannalaugar, across plateaus, geothermal areas and black sand deserts, down into the lush valley of Þórsmörk. It is hiked between the mountain huts of the Iceland Touring Association and the trail is marked, but severe weather can strike without warning.",
    "highlights": [
      "Hrafntinnusker",
      "Álftavatn",
      "Emstrur / Botnar",
      "Þröngá and Þórsmörk"
    ],
    "accommodation": [
      {
        "name": "Iceland Touring Association huts along the route",
        "type": "Hut",
        "price": "$$"
      },
      {
        "name": "Campsites by the huts",
        "type": "Camping",
        "price": "$"
      }
    ],
    "activities": [
      "Multi-day hike, guided or independent",
      "Continuation onto Fimmvörðuháls"
    ]
  },
  {
    "id": "fimmvorduhals",
    "name": "Fimmvörðuháls",
    "region": "sudurland",
    "category": "ganga",
    "type": "Hiking trail",
    "length": "25 km",
    "duration": "1–2 days",
    "difficulty": "Challenging",
    "tags": [
      "Highlands",
      "Waterfalls",
      "Volcanic craters"
    ],
    "blurb": "Between glaciers, past new craters, from Skógar down into Þórsmörk.",
    "description": "Fimmvörðuháls runs between Eyjafjallajökull and Mýrdalsjökull, past the craters Magni and Móði formed in the 2010 eruption. The trail begins at Skógafoss and follows the river Skógá uphill past countless waterfalls before descending into Þórsmörk.",
    "highlights": [
      "The waterfall chain along Skógá",
      "Magni and Móði",
      "Heljarkambur",
      "Views over Þórsmörk"
    ],
    "accommodation": [
      {
        "name": "Baldvinsskáli on the pass",
        "type": "Hut",
        "price": "$"
      },
      {
        "name": "Accommodation in Skógar / Þórsmörk",
        "type": "Hut / guesthouse",
        "price": "$$"
      }
    ],
    "activities": [
      "Day hike for experienced hikers",
      "Connects to the Laugavegur"
    ]
  },
  {
    "id": "reykjadalur",
    "name": "Reykjadalur",
    "region": "sudurland",
    "category": "ganga",
    "type": "Hiking trail",
    "length": "7 km round trip",
    "duration": "3 hrs",
    "difficulty": "Easy / moderate",
    "tags": [
      "Bathing",
      "Geothermal",
      "Family"
    ],
    "blurb": "A hike up into a valley to a warm river you can bathe in.",
    "description": "From Hveragerði a popular trail leads up into Reykjadalur, the 'steam valley', past hot springs and mud pots. At the top runs a warm river where wooden decking lets people bathe in nature under the open sky.",
    "highlights": [
      "The warm river",
      "Hot springs and steam vents",
      "Views over Hveragerði"
    ],
    "accommodation": [
      {
        "name": "Accommodation in Hveragerði",
        "type": "Hotels & guesthouses",
        "price": "$$"
      }
    ],
    "activities": [
      "Hike and bathe in the river",
      "Bring a towel"
    ]
  },
  {
    "id": "skaftafell",
    "name": "Skaftafell",
    "region": "sudurland",
    "category": "ganga",
    "type": "Hiking area",
    "length": "2–20 km routes",
    "duration": "1–8 hrs",
    "difficulty": "Easy to challenging",
    "tags": [
      "National park",
      "Waterfalls",
      "Glaciers"
    ],
    "blurb": "A green oasis in Vatnajökull National Park with Svartifoss and glacier views.",
    "description": "Skaftafell is a gem of Vatnajökull National Park with a variety of hiking trails. The most popular leads to Svartifoss, which falls over dark basalt columns. Longer routes lead up to Kristínartindar and to the snout of Skaftafellsjökull.",
    "highlights": [
      "Svartifoss",
      "Sjónarnípa",
      "Kristínartindar",
      "Skaftafellsjökull"
    ],
    "accommodation": [
      {
        "name": "Campsite in Skaftafell",
        "type": "Camping",
        "price": "$"
      },
      {
        "name": "Hotel in Öræfi",
        "type": "Hotel",
        "price": "$$$"
      }
    ],
    "activities": [
      "Day hikes for all abilities",
      "Guided glacier hike"
    ]
  },
  {
    "id": "fjorubordid",
    "name": "Fjöruborðið",
    "region": "sudurland",
    "category": "veitingar",
    "type": "Restaurant",
    "cuisine": "Langoustine / seafood",
    "price": "$$$",
    "location": "Stokkseyri",
    "tags": [
      "Langoustine",
      "Renowned",
      "Fishing village"
    ],
    "blurb": "A nationally famous langoustine restaurant in the little fishing village of Stokkseyri.",
    "description": "Fjöruborðið in Stokkseyri is almost synonymous with Icelandic langoustine. People drive from Reykjavík purely to have creamy langoustine soup and a pot of butter-fried langoustine tails by the sound of the sea in the quiet village.",
    "highlights": [
      "Langoustine soup",
      "Butter-fried langoustine tails",
      "Seaside atmosphere"
    ]
  },
  {
    "id": "fridheimar",
    "name": "Friðheimar",
    "region": "sudurland",
    "category": "veitingar",
    "type": "Restaurant",
    "cuisine": "Tomato dishes",
    "price": "$$$",
    "location": "Reykholt, Bláskógabyggð",
    "tags": [
      "Unique",
      "Golden Circle",
      "Family"
    ],
    "blurb": "Dining inside a tomato greenhouse on the Golden Circle.",
    "description": "Friðheimar is a horticultural farm where guests dine among tomato plants in a lit greenhouse. Everything revolves around the tomato — endless tomato soup with home-baked bread, tomato bloody marys and even tomato ice cream. There are also horse shows.",
    "highlights": [
      "Bottomless tomato soup",
      "Home-baked bread",
      "Tomato ice cream and cocktails",
      "Horse show"
    ]
  },
  {
    "id": "gott",
    "name": "Gott",
    "region": "sudurland",
    "category": "veitingar",
    "type": "Restaurant",
    "cuisine": "Fresh and healthy",
    "price": "$$",
    "location": "Vestmannaeyjar",
    "tags": [
      "Fresh",
      "Family",
      "Islands"
    ],
    "blurb": "A popular family-run spot on Heimaey with fresh local ingredients.",
    "description": "Gott is a cosy, family-run restaurant on Heimaey that emphasises fresh, healthy local ingredients — fish straight off the boats, home baking and dishes to suit the whole family.",
    "highlights": [
      "Fresh catch of the day",
      "Home baking",
      "Child-friendly",
      "Ingredients from the islands"
    ]
  },
  {
    "id": "lindin",
    "name": "Lindin",
    "region": "sudurland",
    "category": "veitingar",
    "type": "Restaurant",
    "cuisine": "Game / Icelandic",
    "price": "$$$",
    "location": "Laugarvatn",
    "tags": [
      "Game",
      "Local ingredients",
      "Gourmet"
    ],
    "blurb": "A small dining spot by Laugarvatn known for game.",
    "description": "Lindin by Laugarvatn is a small but celebrated restaurant that has drawn attention for its ambitious cooking with Icelandic ingredients — reindeer, goose, char and wild herbs. A cosy, homely atmosphere on the lakeside along the Golden Circle.",
    "highlights": [
      "Reindeer and game",
      "Char from the lake",
      "Wild herbs",
      "Lakeside atmosphere"
    ]
  },
  {
    "id": "mokka",
    "name": "Mokka Kaffi",
    "region": "hofudborg",
    "category": "kaffi",
    "type": "Café",
    "cuisine": "Coffee & waffles",
    "price": "$$",
    "location": "Skólavörðustígur, Reykjavík",
    "tags": [
      "Historic",
      "Waffles",
      "City centre"
    ],
    "blurb": "Reykjavík's oldest café, nearly unchanged since 1958 and famous for its waffles.",
    "description": "Mokka Kaffi on Skólavörðustígur opened in 1958 and was the country's first espresso café. Its interior has stayed almost unchanged for decades, and the place is known for Belgian waffles with cream and rotating art exhibitions on the walls.",
    "highlights": [
      "Waffles with cream",
      "Original 1958 interior",
      "Art exhibitions",
      "Espresso"
    ]
  },
  {
    "id": "reykjavik_roasters",
    "name": "Reykjavík Roasters",
    "region": "hofudborg",
    "category": "kaffi",
    "type": "Café",
    "cuisine": "Specialty coffee",
    "price": "$$",
    "location": "Reykjavík",
    "tags": [
      "Specialty coffee",
      "Roastery",
      "Cosy"
    ],
    "blurb": "A popular specialty roastery with a cosy atmosphere and a record player.",
    "description": "Reykjavík Roasters roasts its own beans and is a favourite among coffee lovers. A relaxed atmosphere with vinyl records, carefully brewed coffee and home-baked treats in the heart of the city.",
    "highlights": [
      "Hand-brewed cups",
      "In-house roastery",
      "Record player",
      "Home-baked"
    ]
  },
  {
    "id": "sandholt",
    "name": "Sandholt",
    "region": "hofudborg",
    "category": "kaffi",
    "type": "Bakery & café",
    "cuisine": "Pastries & coffee",
    "price": "$$",
    "location": "Laugavegur, Reykjavík",
    "tags": [
      "Bakery",
      "Breakfast",
      "City centre"
    ],
    "blurb": "A long-established family bakery on Laugavegur, running since 1920.",
    "description": "Sandholt is a fourth-generation artisan bakery on Laugavegur, known for sourdough bread, croissants, pastries and a fine breakfast and lunch. A popular stop in the city centre.",
    "highlights": [
      "Sourdough bread",
      "Croissants & pastries",
      "Breakfast",
      "Quality coffee"
    ]
  },
  {
    "id": "geirabakari",
    "name": "Geirabakarí Kaffihús",
    "region": "vesturland",
    "category": "kaffi",
    "type": "Bakery & café",
    "cuisine": "Pastries & coffee",
    "price": "$",
    "location": "Borgarnes",
    "tags": [
      "Bakery",
      "Views",
      "Film location"
    ],
    "blurb": "A bakery by Borgarfjörður, known from the Walter Mitty film.",
    "description": "Geirabakarí in Borgarnes sits by the sea with views over Borgarfjörður and Mount Hafnarfjall. The bakery featured in The Secret Life of Walter Mitty and serves fresh bread, cinnamon buns and coffee.",
    "highlights": [
      "Views over Borgarfjörður",
      "Fresh pastries",
      "The Walter Mitty scene",
      "Cinnamon buns"
    ]
  },
  {
    "id": "heimabyggd",
    "name": "Heimabyggð",
    "region": "vestfirdir",
    "category": "kaffi",
    "type": "Café",
    "cuisine": "Coffee & light bites",
    "price": "$$",
    "location": "Ísafjörður",
    "tags": [
      "Cosy",
      "Home-baked",
      "Fishing town"
    ],
    "blurb": "A cosy café in the heart of Ísafjörður.",
    "description": "Heimabyggð is a warm café in Ísafjörður focused on home-baked treats, good coffee and light meals made with West Fjords ingredients. A popular meeting spot for locals and travellers.",
    "highlights": [
      "Home-baked",
      "Good coffee",
      "Light meals",
      "Warm atmosphere"
    ]
  },
  {
    "id": "kaffi_ilmur",
    "name": "Kaffi Ilmur",
    "region": "nordaustur",
    "category": "kaffi",
    "type": "Café",
    "cuisine": "Coffee & home cooking",
    "price": "$$",
    "location": "Akureyri",
    "tags": [
      "Home cooking",
      "Pastries",
      "City centre"
    ],
    "blurb": "A café in a beautiful old timber house in central Akureyri.",
    "description": "Kaffi Ilmur occupies one of Akureyri's older timber houses and serves homely pastries, soups and a lunch buffet. A cosy atmosphere over several floors in the heart of town.",
    "highlights": [
      "Home-baked",
      "Lunch buffet",
      "Historic timber house",
      "Soups"
    ]
  },
  {
    "id": "kaffi_lara",
    "name": "Kaffi Lára",
    "region": "austurland",
    "category": "kaffi",
    "type": "Café & bar",
    "cuisine": "Coffee & beer",
    "price": "$$",
    "location": "Seyðisfjörður",
    "tags": [
      "Beer",
      "Cosy",
      "Culture"
    ],
    "blurb": "A cosy café and bar by the harbour in Seyðisfjörður.",
    "description": "Kaffi Lára – El Grillo Bar in Seyðisfjörður is known for its warm atmosphere, home-cooked food and a good selection of Icelandic beer, including El Grillo, named after a shipwreck in the fjord.",
    "highlights": [
      "Icelandic beer",
      "El Grillo",
      "Home-cooked",
      "Harbour atmosphere"
    ]
  },
  {
    "id": "kaffi_krus",
    "name": "Kaffi Krús",
    "region": "sudurland",
    "category": "kaffi",
    "type": "Café",
    "cuisine": "Coffee & home cooking",
    "price": "$$",
    "location": "Selfoss",
    "tags": [
      "Home cooking",
      "Pastries",
      "Family"
    ],
    "blurb": "A well-established café in a charming older timber house in Selfoss.",
    "description": "Kaffi Krús on Austurvegur in Selfoss is a popular café in an older timber house with a garden. Known for home-baked cakes, soups and pizzas and a cosy atmosphere — a good stop on the way around South Iceland.",
    "highlights": [
      "Home-baked cakes",
      "Soups & pizzas",
      "Garden",
      "Cosy atmosphere"
    ]
  },
  {
    "id": "arctic_henge",
    "name": "Heimskautsgerðið",
    "region": "nordaustur",
    "type": "Monument",
    "tags": [
      "Landmark",
      "Midnight sun",
      "Photography"
    ],
    "blurb": "A large stone gateway monument inspired by Norse mythology at Iceland's northern edge.",
    "description": "Heimskautsgerðið (the Arctic Henge) is a large circular stone monument at Raufarhöfn on the Melrakkaslétta peninsula, inspired by the poem Völuspá and Norse mythology. Its arches and gateways frame the midnight sun, and the work is still being built — a striking detour north of the Diamond Circle.",
    "highlights": [
      "Midnight sun through the arches",
      "Norse mythology",
      "Raufarhöfn",
      "Northern lights in winter"
    ],
    "accommodation": [
      {
        "name": "Accommodation in Raufarhöfn / Kópasker",
        "type": "Guesthouses",
        "price": "$$"
      }
    ],
    "activities": [
      "Photography",
      "Midnight-sun walk"
    ]
  },
  {
    "id": "hljodaklettar",
    "name": "Hljóðaklettar",
    "region": "nordaustur",
    "type": "Rock formations",
    "tags": [
      "Basalt columns",
      "Hiking",
      "Diamond Circle"
    ],
    "blurb": "Striking basalt rock formations in Vesturdalur within the Jökulsárgljúfur canyon.",
    "description": "Hljóðaklettar (the Echo Rocks) are a cluster of dramatic basalt columns in Vesturdalur within the Jökulsárgljúfur canyon. The rock forms twisted, swirling columns that create an unusual echo, and short walking trails lead through the area — a popular stop on the Diamond Circle.",
    "highlights": [
      "Twisted basalt columns",
      "Echoes",
      "Vesturdalur",
      "Walking trails"
    ],
    "accommodation": [
      {
        "name": "Accommodation in Ásbyrgi / Kópasker",
        "type": "Camping / guesthouse",
        "price": "$"
      }
    ],
    "activities": [
      "Walking",
      "Photography"
    ]
  },
  {
    "id": "lofthellir",
    "name": "Lofthellir",
    "region": "nordaustur",
    "type": "Lava cave",
    "tags": [
      "Cave",
      "Ice",
      "Adventure"
    ],
    "blurb": "A lava cave near Lake Mývatn known for spectacular ice formations.",
    "description": "Lofthellir is a lava cave a short distance from Lake Mývatn, famous for the natural ice sculptures and formations that fill the cave. It can only be visited on a guided tour with special equipment, usually combined with a short hike across lava.",
    "highlights": [
      "Natural ice sculptures",
      "Lava cave",
      "Guided tours",
      "Near Lake Mývatn"
    ],
    "accommodation": [
      {
        "name": "Accommodation at Lake Mývatn",
        "type": "Hotels & guesthouses",
        "price": "$$"
      }
    ],
    "activities": [
      "Guided cave tour",
      "Lava hike"
    ]
  },
  {
    "id": "namaskard",
    "name": "Hverir við Námaskarð",
    "region": "nordaustur",
    "type": "Geothermal area",
    "tags": [
      "Geothermal",
      "Colours",
      "Diamond Circle"
    ],
    "blurb": "A colourful high-temperature geothermal field with mud pots and fumaroles east of Mývatn.",
    "description": "Hverir at Námaskarð below Mount Námafjall, east of Lake Mývatn, is a powerful high-temperature geothermal field with boiling mud pots, steaming fumaroles and sulphur deposits. The barren ground glows in shades of red, yellow and ochre, and boardwalks lead across the area.",
    "highlights": [
      "Boiling mud pots",
      "Steaming fumaroles",
      "Sulphur and colours",
      "Námafjall"
    ],
    "accommodation": [
      {
        "name": "Accommodation at Lake Mývatn",
        "type": "Hotels & guesthouses",
        "price": "$$"
      }
    ],
    "activities": [
      "Exploring the geothermal field",
      "Photography"
    ]
  },
  {
    "id": "studlagil",
    "name": "Stuðlagil",
    "region": "austurland",
    "type": "Canyon",
    "tags": [
      "Basalt columns",
      "Hiking",
      "Photography"
    ],
    "blurb": "A spectacular basalt-column canyon with a blue-green glacial river in Jökuldalur.",
    "description": "Stuðlagil in the Jökuldalur valley in East Iceland is known for its tall, regular basalt columns surrounding a blue-green glacial river. The canyon became famous after the river level dropped and revealed the columns. There are viewpoints on both sides of the river.",
    "highlights": [
      "Basalt columns",
      "Blue-green glacial river",
      "Viewpoints on both sides",
      "Jökuldalur"
    ],
    "accommodation": [
      {
        "name": "Accommodation in Jökuldalur / Egilsstaðir",
        "type": "Hotels & guesthouses",
        "price": "$$"
      }
    ],
    "activities": [
      "Walking to the viewpoints",
      "Photography"
    ]
  },
  {
    "id": "solheimasandur",
    "name": "Sólheimasandur",
    "region": "sudurland",
    "type": "Beach & wreck",
    "tags": [
      "Black sand",
      "Photography",
      "Hiking"
    ],
    "blurb": "A black-sand plain on the South Coast with the wreck of a US DC-3 plane.",
    "description": "On Sólheimasandur on the South Coast lies the wreck of a United States DC-3 plane that crash-landed in 1973, with the crew surviving. The wreck sits on a vast black-sand plain and is a popular, eerie photography spot. It is reached by a roughly 4 km walk each way from a car park by the Ring Road, or by a shuttle bus.",
    "highlights": [
      "The DC-3 plane wreck",
      "Black sand",
      "Photography",
      "Shuttle or walk"
    ],
    "accommodation": [
      {
        "name": "Accommodation in Vík / under Eyjafjöll",
        "type": "Hotels & guesthouses",
        "price": "$$"
      }
    ],
    "activities": [
      "Walk to the wreck",
      "Photography"
    ]
  },
  {
    "id": "braud_og_co",
    "name": "Brauð & Co",
    "region": "hofudborg",
    "category": "kaffi",
    "type": "Bakery & café",
    "cuisine": "Bakery and coffee",
    "price": "$",
    "location": "Reykjavík",
    "tags": [
      "sourdough",
      "cinnamon rolls",
      "artisan bakery"
    ],
    "blurb": "Popular artisan bakery known for sourdough bread and cinnamon rolls.",
    "description": "Brauð & Co is one of the best-known bakeries in the capital area, with several branches. It is celebrated for sourdough loaves, cinnamon rolls and other freshly baked treats made in full view of customers.",
    "highlights": [
      "Freshly baked cinnamon rolls",
      "Sourdough bread",
      "Colourful building on Frakkastígur",
      "Multiple locations"
    ]
  },
  {
    "id": "cafe_babalu",
    "name": "Café Babalú",
    "region": "hofudborg",
    "category": "kaffi",
    "type": "Café",
    "cuisine": "Coffee and light bites",
    "price": "$",
    "location": "Reykjavík",
    "tags": [
      "cosy",
      "downtown",
      "cheesecake"
    ],
    "blurb": "Warm, colourful café a short walk from Hallgrímskirkja.",
    "description": "Café Babalú is a small, homely café on Skólavörðustígur known for its quirky, eclectic interior. It is a favourite for coffee, hot chocolate and homemade cheesecake.",
    "highlights": [
      "Homemade cheesecake",
      "Cosy atmosphere",
      "Near Hallgrímskirkja",
      "Eclectic décor"
    ]
  },
  {
    "id": "kaffibrennslan",
    "name": "Kaffibrennslan",
    "region": "hofudborg",
    "category": "kaffi",
    "type": "Café",
    "cuisine": "Coffee and light bites",
    "price": "$$",
    "location": "Reykjavík",
    "tags": [
      "Laugavegur",
      "waffles",
      "cosy"
    ],
    "blurb": "Long-established café on Laugavegur in the heart of downtown.",
    "description": "Kaffibrennslan sits on Laugavegur and has long been a popular stop in the city centre. It serves coffee and waffles during the day and beer or wine into the evening.",
    "highlights": [
      "Waffles with cream and jam",
      "On Laugavegur",
      "Opens early",
      "Coffee and beer"
    ]
  },
  {
    "id": "stofan_kaffihus",
    "name": "Stofan Kaffihús",
    "region": "hofudborg",
    "category": "kaffi",
    "type": "Café",
    "cuisine": "Coffee and homemade cakes",
    "price": "$$",
    "location": "Reykjavík",
    "tags": [
      "old town",
      "sofas",
      "hot chocolate"
    ],
    "blurb": "Cosy café in a historic building with a living-room feel.",
    "description": "Stofan Kaffihús on Vesturgata in the old town has the feel of a warm living room, with sofas and armchairs. It is known for its hot chocolate and freshly baked cakes.",
    "highlights": [
      "Hot chocolate",
      "Freshly baked cakes",
      "Living-room atmosphere",
      "Historic downtown building"
    ]
  },
  {
    "id": "grai_kotturinn",
    "name": "Grái kötturinn",
    "region": "hofudborg",
    "category": "kaffi",
    "type": "Café",
    "cuisine": "Breakfast and brunch",
    "price": "$$",
    "location": "Reykjavík",
    "tags": [
      "breakfast",
      "brunch",
      "pancakes"
    ],
    "blurb": "Small basement café known for its hearty breakfast.",
    "description": "Grái kötturinn (The Grey Cat) is a small, cosy basement café on Hverfisgata. It is one of downtown's most popular breakfast and brunch spots, known for generous portions.",
    "highlights": [
      "Hearty breakfast",
      "Pancakes",
      "Cosy basement setting",
      "Popular brunch spot"
    ]
  },
  {
    "id": "kaffi_loki",
    "name": "Kaffi Loki",
    "region": "hofudborg",
    "category": "kaffi",
    "type": "Café",
    "cuisine": "Traditional Icelandic",
    "price": "$$",
    "location": "Reykjavík",
    "tags": [
      "Icelandic",
      "rye bread",
      "Hallgrímskirkja"
    ],
    "blurb": "Café opposite Hallgrímskirkja focused on Icelandic food.",
    "description": "Kaffi Loki sits across from Hallgrímskirkja and focuses on traditional Icelandic fare. The menu features rye bread, plokkfiskur (fish stew), dried fish and rye-bread ice cream.",
    "highlights": [
      "Icelandic rye bread",
      "Plokkfiskur fish stew",
      "Rye-bread ice cream",
      "View of Hallgrímskirkja"
    ]
  },
  {
    "id": "kattakaffihusid",
    "name": "Kattakaffihúsið",
    "region": "hofudborg",
    "category": "kaffi",
    "type": "Café",
    "cuisine": "Coffee and light bites",
    "price": "$$",
    "location": "Reykjavík",
    "tags": [
      "cats",
      "unique",
      "downtown"
    ],
    "blurb": "Reykjavík's first cat café where resident cats roam between tables.",
    "description": "Kattakaffihúsið is Reykjavík's first cat café, where rescue cats looking for homes wander among the guests. It serves coffee and light refreshments in a cosy setting.",
    "highlights": [
      "Resident cats",
      "Cosy atmosphere",
      "Coffee and cakes",
      "Unique experience"
    ]
  },
  {
    "id": "sufistinn",
    "name": "Súfistinn Kaffihús",
    "region": "hofudborg",
    "category": "kaffi",
    "type": "Café",
    "cuisine": "Coffee and light bites",
    "price": "$",
    "location": "Hafnarfjörður",
    "tags": [
      "Hafnarfjörður",
      "cosy",
      "cakes"
    ],
    "blurb": "Long-established café in the heart of Hafnarfjörður.",
    "description": "Súfistinn is a popular café on Strandgata in central Hafnarfjörður. It serves coffee, sandwiches, pies and cakes in a relaxed setting near Hellisgerði park.",
    "highlights": [
      "Coffee and cakes",
      "Sandwiches and pies",
      "Central Hafnarfjörður",
      "Relaxed atmosphere"
    ]
  },
  {
    "id": "pallett_kaffikompani",
    "name": "Pallett",
    "region": "hofudborg",
    "category": "kaffi",
    "type": "Café",
    "cuisine": "Specialty coffee and baking",
    "price": "$",
    "location": "Hafnarfjörður",
    "tags": [
      "specialty coffee",
      "harbour",
      "scones"
    ],
    "blurb": "Specialty coffee shop and small bakehouse by the Hafnarfjörður harbour.",
    "description": "Pallett is a specialty coffee shop and small-batch bakehouse in the harbour town of Hafnarfjörður. It is known for its excellent coffee alongside scones and cakes.",
    "highlights": [
      "Quality specialty coffee",
      "Freshly baked scones",
      "By the harbour",
      "Small-batch baking"
    ]
  },
  {
    "id": "cafe_petite",
    "name": "Café Petite",
    "region": "reykjanes",
    "category": "kaffi",
    "type": "Café",
    "cuisine": "Coffee and desserts",
    "price": "$",
    "location": "Keflavík",
    "tags": [
      "Keflavík",
      "cosy",
      "desserts"
    ],
    "blurb": "Cosy Keflavík café serving hot drinks and desserts.",
    "description": "Café Petite is a welcoming café in Keflavík offering hot drinks, desserts and light bites. The atmosphere is calm and hospitable.",
    "highlights": [
      "Hot drinks",
      "Desserts",
      "Calm atmosphere",
      "Central Keflavík"
    ]
  },
  {
    "id": "bryggjan_grindavik",
    "name": "Bryggjan",
    "region": "reykjanes",
    "category": "kaffi",
    "type": "Café",
    "cuisine": "Lobster soup and seafood",
    "price": "$$",
    "location": "Grindavík",
    "tags": [
      "harbour",
      "lobster soup",
      "Grindavík"
    ],
    "blurb": "Fisherman's harbour café in Grindavík known for its lobster soup.",
    "description": "Bryggjan is a café with a fisherman's atmosphere by the harbour in Grindavík. It is best known for its lobster soup, which has long been a favourite with visitors.",
    "highlights": [
      "Renowned lobster soup",
      "Harbourside setting",
      "Fisherman's atmosphere",
      "Homely feel"
    ]
  },
  {
    "id": "kaffi_duus",
    "name": "Kaffi Duus",
    "region": "reykjanes",
    "category": "veitingar",
    "type": "Restaurant",
    "cuisine": "Seafood",
    "price": "$$",
    "location": "Keflavík",
    "tags": [
      "fish",
      "harbour",
      "views"
    ],
    "blurb": "Well-established restaurant by the small-boat harbour in Keflavík.",
    "description": "Kaffi Duus is a well-known restaurant by the marina in Keflavík with views over the harbour. It focuses on fish dishes and also houses a café and bar.",
    "highlights": [
      "Fish dishes",
      "Harbour views",
      "Café and bar",
      "Spacious dining room"
    ]
  },
  {
    "id": "kaffivagninn",
    "name": "Kaffivagninn",
    "region": "hofudborg",
    "category": "veitingar",
    "type": "Restaurant",
    "cuisine": "Icelandic home cooking and fish",
    "price": "$$",
    "location": "Reykjavík",
    "tags": [
      "harbour",
      "fish",
      "historic"
    ],
    "blurb": "Said to be Iceland's oldest operating restaurant, by the old harbour.",
    "description": "Kaffivagninn sits on Grandagarður by the western harbour and is said to be the oldest operating restaurant in Iceland. It serves Icelandic home cooking and fish dishes with views over the harbour.",
    "highlights": [
      "Icelandic home cooking",
      "Fish of the day",
      "Harbour views",
      "Historic spot"
    ]
  },
  {
    "id": "dill_restaurant",
    "name": "Dill",
    "region": "hofudborg",
    "category": "veitingar",
    "type": "Restaurant",
    "cuisine": "New Nordic",
    "price": "$$$$",
    "location": "Reykjavík",
    "tags": [
      "fine dining",
      "tasting menu",
      "new nordic"
    ],
    "blurb": "Renowned fine-dining restaurant focused on New Nordic cuisine.",
    "description": "Dill is among Iceland's most acclaimed restaurants, focusing on New Nordic cuisine built around Icelandic ingredients. It offers a multi-course tasting menu that changes with the seasons.",
    "highlights": [
      "Multi-course tasting menu",
      "Seasonal Icelandic ingredients",
      "New Nordic cuisine",
      "Wine pairings"
    ]
  },
  {
    "id": "grillmarkadurinn",
    "name": "Grillmarkaðurinn",
    "region": "hofudborg",
    "category": "veitingar",
    "type": "Restaurant",
    "cuisine": "Grill, fish and meat",
    "price": "$$$",
    "location": "Reykjavík",
    "tags": [
      "grill",
      "local ingredients",
      "downtown"
    ],
    "blurb": "Award-winning downtown restaurant with a focus on grilled dishes.",
    "description": "Grillmarkaðurinn (Grill Market) is a well-known restaurant in central Reykjavík that works closely with Icelandic farmers and producers. The menu centres on fish and meat, often from the grill.",
    "highlights": [
      "Grilled dishes",
      "Icelandic ingredients",
      "Fish and meat",
      "Refined setting"
    ]
  },
  {
    "id": "fiskmarkadurinn",
    "name": "Fiskmarkaðurinn",
    "region": "hofudborg",
    "category": "veitingar",
    "type": "Restaurant",
    "cuisine": "Seafood with Asian influences",
    "price": "$$$",
    "location": "Reykjavík",
    "tags": [
      "fish",
      "sushi",
      "asian influence"
    ],
    "blurb": "Well-known restaurant blending Icelandic seafood with Asian influences.",
    "description": "Fiskmarkaðurinn (Fish Market) is a respected restaurant in central Reykjavík that combines Icelandic seafood with Asian influences. The menu features sushi, fresh fish and a range of dishes from sea and land.",
    "highlights": [
      "Fresh seafood",
      "Sushi and nigiri",
      "Asian influences",
      "Refined menu"
    ]
  },
  {
    "id": "rub23_akureyri",
    "name": "Rub23",
    "region": "nordaustur",
    "category": "veitingar",
    "type": "Restaurant",
    "cuisine": "Seafood and Icelandic-Japanese fusion",
    "price": "$$$",
    "location": "Akureyri",
    "tags": [
      "seafood",
      "sushi",
      "fine dining"
    ],
    "blurb": "A well-known restaurant in the heart of Akureyri focused on fresh fish and Icelandic-Japanese cuisine.",
    "description": "Rub23 is one of North Iceland's best-known restaurants, built around fresh ingredients sourced from local fishermen and farmers. The menu spans sushi and seafood dishes alongside Icelandic culinary traditions.",
    "highlights": [
      "Fresh fish",
      "Sushi",
      "Downtown Akureyri",
      "Quality ingredients"
    ]
  },
  {
    "id": "strikid_akureyri",
    "name": "Strikið",
    "region": "nordaustur",
    "category": "veitingar",
    "type": "Restaurant",
    "cuisine": "Icelandic and international",
    "price": "$$$",
    "location": "Akureyri",
    "tags": [
      "view",
      "fjord",
      "varied menu"
    ],
    "blurb": "A top-floor restaurant on Skipagata with sweeping views over Eyjafjörður.",
    "description": "Strikið sits on the top floor of Skipagata 14 and offers a versatile menu with sweeping views of the fjord and the mountains surrounding the town. It is a popular choice with both locals and visitors.",
    "highlights": [
      "Fjord views",
      "Varied menu",
      "Downtown Akureyri",
      "Top floor"
    ]
  },
  {
    "id": "mulaberg_akureyri",
    "name": "Múlaberg Bistro & Bar",
    "region": "nordaustur",
    "category": "veitingar",
    "type": "Restaurant",
    "cuisine": "Icelandic bistro",
    "price": "$$$",
    "location": "Akureyri",
    "tags": [
      "bistro",
      "hotel",
      "downtown"
    ],
    "blurb": "A bistro and bar at Hotel Kea in the heart of Akureyri.",
    "description": "Múlaberg Bistro & Bar is located on Hafnarstræti in connection with Hotel Kea and has long been known for quality food and professional service. It offers a bistro menu in a relaxed setting.",
    "highlights": [
      "Bistro menu",
      "Hotel Kea",
      "Downtown Akureyri",
      "Bar"
    ]
  },
  {
    "id": "bautinn_akureyri",
    "name": "Bautinn",
    "region": "nordaustur",
    "category": "veitingar",
    "type": "Restaurant",
    "cuisine": "Icelandic home cooking",
    "price": "$$",
    "location": "Akureyri",
    "tags": [
      "classic",
      "family-friendly",
      "downtown"
    ],
    "blurb": "A long-established restaurant in one of the oldest houses in Akureyri.",
    "description": "Bautinn sits right in the heart of Akureyri in one of the town's oldest and most beautiful houses and has long been a local favorite. It offers good-quality food at affordable prices in a lively, welcoming atmosphere.",
    "highlights": [
      "Historic house",
      "Affordable",
      "Downtown Akureyri",
      "Family-friendly"
    ]
  },
  {
    "id": "greifinn_akureyri",
    "name": "Greifinn",
    "region": "nordaustur",
    "category": "veitingar",
    "type": "Restaurant",
    "cuisine": "Pizza, burgers and varied",
    "price": "$$",
    "location": "Akureyri",
    "tags": [
      "pizza",
      "burgers",
      "family-friendly"
    ],
    "blurb": "A popular family restaurant with a broad menu of pizzas, burgers and more.",
    "description": "Greifinn is all about variety, offering everything from pizzas and burgers to more traditional Icelandic dishes. The aim is a wide menu where everyone can find something to their liking.",
    "highlights": [
      "Pizza",
      "Burgers",
      "Varied menu",
      "Family-friendly"
    ]
  },
  {
    "id": "naustid_husavik",
    "name": "Naustið",
    "region": "nordaustur",
    "category": "veitingar",
    "type": "Restaurant",
    "cuisine": "Seafood",
    "price": "$$$",
    "location": "Húsavík",
    "tags": [
      "seafood",
      "fish soup",
      "cozy"
    ],
    "blurb": "A seafood restaurant in Húsavík known for its fish soup.",
    "description": "Naustið is a seafood restaurant in Húsavík set in old wooden houses that create a cozy atmosphere. It is best known for its signature fish soup alongside a range of dishes built on fresh seafood.",
    "highlights": [
      "Fish soup",
      "Fresh seafood",
      "Old wooden houses",
      "Cozy atmosphere"
    ]
  },
  {
    "id": "salka_husavik",
    "name": "Veitingahúsið Salka",
    "region": "nordaustur",
    "category": "veitingar",
    "type": "Restaurant",
    "cuisine": "Icelandic and varied",
    "price": "$$",
    "location": "Húsavík",
    "tags": [
      "family-run",
      "fish",
      "pizza"
    ],
    "blurb": "A family-run restaurant in one of the oldest buildings in Húsavík.",
    "description": "Salka is located in the center of Húsavík in one of the town's oldest buildings. The menu ranges from fresh seafood and Icelandic lamb to pizzas, steaks and lighter fare, cooked from scratch.",
    "highlights": [
      "Historic building",
      "Fresh fish",
      "Pizza and steaks",
      "Family-run"
    ]
  },
  {
    "id": "kristjansbakari_akureyri",
    "name": "Kristjánsbakarí",
    "region": "nordaustur",
    "category": "kaffi",
    "type": "Bakery & café",
    "cuisine": "Pastries and coffee",
    "price": "$",
    "location": "Akureyri",
    "tags": [
      "bakery",
      "cinnamon rolls",
      "bread"
    ],
    "blurb": "A long-established Akureyri bakery with freshly baked bread and pastries.",
    "description": "Kristjánsbakarí is a well-known bakery in North Iceland recognized for its freshly baked bread, kleinur (twisted doughnuts), cinnamon rolls and strong coffee. It makes an ideal stop for breakfast or an afternoon treat.",
    "highlights": [
      "Fresh bread",
      "Cinnamon rolls and kleinur",
      "Coffee",
      "Bakery"
    ]
  },
  {
    "id": "brynja_akureyri",
    "name": "Brynja",
    "region": "nordaustur",
    "category": "kaffi",
    "type": "Ice cream parlour",
    "cuisine": "Ice cream",
    "price": "$",
    "location": "Akureyri",
    "tags": [
      "ice cream",
      "classic",
      "family-friendly"
    ],
    "blurb": "One of Iceland's most beloved ice cream parlours in central Akureyri.",
    "description": "Brynja is one of Iceland's most loved ice cream parlours, with the original shop in the center of Akureyri. It is known for its milk- and cream-based ice cream and has been a favorite with locals and visitors for many years.",
    "highlights": [
      "Cream ice cream",
      "Downtown Akureyri",
      "Classic parlour",
      "Family-friendly"
    ]
  },
  {
    "id": "berlin_akureyri",
    "name": "Berlín",
    "region": "nordaustur",
    "category": "kaffi",
    "type": "Café",
    "cuisine": "Breakfast and coffee",
    "price": "$$",
    "location": "Akureyri",
    "tags": [
      "breakfast",
      "brunch",
      "downtown"
    ],
    "blurb": "A small breakfast and coffee shop in central Akureyri.",
    "description": "Berlín is a small, cozy café in central Akureyri serving breakfast every morning and brunch at weekends. It is a popular spot to start the day.",
    "highlights": [
      "Breakfast",
      "Weekend brunch",
      "Downtown Akureyri",
      "Cozy"
    ]
  },
  {
    "id": "kaffi_raudka_siglufjordur",
    "name": "Kaffi Rauðka",
    "region": "nordaustur",
    "category": "kaffi",
    "type": "Café and restaurant",
    "cuisine": "Coffee, cakes and home cooking",
    "price": "$$",
    "location": "Siglufjörður",
    "tags": [
      "harbour",
      "red house",
      "live music"
    ],
    "blurb": "A café in a bright red house by the harbour in Siglufjörður.",
    "description": "Kaffi Rauðka occupies a bright red house by the marina in Siglufjörður and is open all year round. It serves home-cooked lunches on weekdays and a varied menu from cakes and sandwiches to hot dishes, and hosts concerts regularly.",
    "highlights": [
      "Red house by the harbour",
      "Home cooking",
      "Cakes and sandwiches",
      "Live music"
    ]
  },
  {
    "id": "adalbakari_siglufjordur",
    "name": "Aðalbakarí",
    "region": "nordaustur",
    "category": "kaffi",
    "type": "Bakery & café",
    "cuisine": "Pastries and coffee",
    "price": "$",
    "location": "Siglufjörður",
    "tags": [
      "bakery",
      "bread",
      "downtown"
    ],
    "blurb": "A bakery and café on Aðalgata in Siglufjörður, open year-round.",
    "description": "Aðalbakarí is located on Aðalgata in central Siglufjörður and is open all year round. It offers freshly baked bread, pastries and coffee, ideal for breakfast or a break while strolling around town.",
    "highlights": [
      "Fresh bread",
      "Pastries",
      "Central Siglufjörður",
      "Open year-round"
    ]
  },
  {
    "id": "bakkabraedur_dalvik",
    "name": "Gísli, Eiríkur, Helgi - Kaffihús Bakkabræðra",
    "region": "nordaustur",
    "category": "kaffi",
    "type": "Café",
    "cuisine": "Fish soup, coffee and cakes",
    "price": "$$",
    "location": "Dalvík",
    "tags": [
      "fish soup",
      "cozy",
      "folklore"
    ],
    "blurb": "A cozy café in Dalvík named after the Bakkabræður brothers of Icelandic folklore.",
    "description": "This café in Dalvík is named after the three Bakkabræður brothers of old Icelandic folk tales. It is known for its warm atmosphere and a popular fish soup served with homemade bread, along with coffee, cakes and local beer.",
    "highlights": [
      "Fish soup",
      "Homemade bread",
      "Cozy atmosphere",
      "Dalvík"
    ]
  },
  {
    "id": "gamli_baerinn_myvatn",
    "name": "Gamli Bærinn",
    "region": "nordaustur",
    "category": "kaffi",
    "type": "Café and tavern",
    "cuisine": "Coffee and light meals",
    "price": "$$",
    "location": "Reykjahlíð",
    "tags": [
      "Mývatn",
      "cozy",
      "tavern"
    ],
    "blurb": "A cozy café and tavern by Lake Mývatn in Reykjahlíð.",
    "description": "Gamli Bærinn (The Old Farm) is in Reykjahlíð by Lake Mývatn, right next to the hotel, with the feel of a friendly café from morning into the afternoon. It is a relaxed spot for coffee and a light meal.",
    "highlights": [
      "By Lake Mývatn",
      "Relaxed atmosphere",
      "Coffee and light meals",
      "Reykjahlíð"
    ]
  },
  {
    "id": "saudarkroksbakari",
    "name": "Sauðárkróksbakarí",
    "region": "nordvestur",
    "category": "kaffi",
    "type": "Bakery & café",
    "cuisine": "Pastries, soup and sandwiches",
    "price": "$",
    "location": "Sauðárkrókur",
    "tags": [
      "bakery",
      "old town",
      "bread"
    ],
    "blurb": "A long-established bakery on the main street of Sauðárkrókur's old town.",
    "description": "Sauðárkróksbakarí is among the oldest bakeries in Iceland, sitting on Aðalgata in the old part of Sauðárkrókur. It serves a wide selection of breads and traditional pastries alongside hot and cold sandwiches and soup, with seating indoors and out.",
    "highlights": [
      "One of Iceland's oldest bakeries",
      "Bread and pastries",
      "Soup and sandwiches",
      "Old town"
    ]
  },
  {
    "id": "hunabud_blonduos",
    "name": "Húnabúð Kaffihús",
    "region": "nordvestur",
    "category": "kaffi",
    "type": "Café",
    "cuisine": "Coffee and homemade treats",
    "price": "$",
    "location": "Blönduós",
    "tags": [
      "café",
      "homemade",
      "gift shop"
    ],
    "blurb": "A cozy café in Blönduós with homemade treats and a gift shop.",
    "description": "Húnabúð is a welcoming café in Blönduós that also houses a gift and flower shop. It emphasizes fresh ingredients, and visitors are often treated to a cup of coffee and homemade cakes.",
    "highlights": [
      "Homemade treats",
      "Coffee",
      "Gift shop",
      "Blönduós"
    ]
  },
  {
    "id": "sjavarborg_hvammstangi",
    "name": "Sjávarborg",
    "region": "nordvestur",
    "category": "veitingar",
    "type": "Restaurant",
    "cuisine": "Seafood",
    "price": "$$$",
    "location": "Hvammstangi",
    "tags": [
      "harbour",
      "seafood",
      "view"
    ],
    "blurb": "A restaurant by the harbour in Hvammstangi, above the Seal Center.",
    "description": "Sjávarborg is located by the harbour in Hvammstangi, above the Icelandic Seal Center, and is open all year round. It offers a varied menu of fresh seafood, and guests can sometimes watch whales swim in the sea while they dine.",
    "highlights": [
      "Fresh seafood",
      "By the harbour",
      "Sea views",
      "Open year-round"
    ]
  },
  {
    "id": "kaffihus_bakarans",
    "name": "Kaffihús Bakarans",
    "region": "vestfirdir",
    "category": "kaffi",
    "type": "Bakery & café",
    "cuisine": "Pastries, soups and light meals",
    "price": "$$",
    "location": "Ísafjörður",
    "tags": [
      "bakery",
      "town centre",
      "cosy"
    ],
    "blurb": "A popular bakery and café in the heart of Ísafjörður.",
    "description": "Kaffihús Bakarans sits on Hafnarstræti in central Ísafjörður and is open throughout the week. It serves freshly baked bread and pastries alongside soups, sandwiches, crêpes and other light fare.",
    "highlights": [
      "Freshly baked pastries",
      "Central location",
      "Soups and sandwiches",
      "Good coffee"
    ]
  },
  {
    "id": "simbahollin",
    "name": "Simbahöllin",
    "region": "vestfirdir",
    "category": "kaffi",
    "type": "Café",
    "cuisine": "Waffles, cakes and light dishes",
    "price": "$$",
    "location": "Þingeyri",
    "tags": [
      "historic house",
      "waffles",
      "rural charm"
    ],
    "blurb": "A cosy old-style coffeehouse in the heart of the village of Þingeyri.",
    "description": "Simbahöllin occupies a former general store from 1915, with much of the original interior still intact. The owners are known for their Belgian waffles with homemade rhubarb jam and cream, along with espresso drinks, cakes, homemade bread and soups.",
    "highlights": [
      "Belgian waffles",
      "Historic 1915 building",
      "Homemade bread",
      "Espresso and cakes"
    ]
  },
  {
    "id": "franska_kaffihusid_raudasandi",
    "name": "Franska kaffihúsið",
    "region": "vestfirdir",
    "category": "kaffi",
    "type": "Café",
    "cuisine": "Waffles, soup and cakes",
    "price": "$$",
    "location": "Rauðasandur",
    "tags": [
      "remote",
      "sea view",
      "countryside café"
    ],
    "blurb": "A tiny countryside café overlooking Rauðasandur beach.",
    "description": "Franska kaffihúsið (the French Café) sits by the famous red-sand beach of Rauðasandur in a remote rural district south of Patreksfjörður. It serves waffles, soup, cakes and hot and cold drinks in a peaceful setting with views over the beach.",
    "highlights": [
      "Views over Rauðasandur",
      "Waffles and cakes",
      "Remote countryside setting",
      "Soup of the day"
    ]
  },
  {
    "id": "fisherman_cafe_sudureyri",
    "name": "Fisherman Café",
    "region": "vestfirdir",
    "category": "kaffi",
    "type": "Café",
    "cuisine": "Seafood, cakes and coffee",
    "price": "$$",
    "location": "Suðureyri",
    "tags": [
      "fishing village",
      "cosy",
      "local"
    ],
    "blurb": "A cosy local favourite in the heart of the fishing village of Suðureyri.",
    "description": "Fisherman Café is a local favourite at the centre of Suðureyri, with a relaxed atmosphere and warm, characterful surroundings. It serves cakes and espresso alongside locally landed seafood such as fish cakes and lobster soup.",
    "highlights": [
      "Locally landed seafood",
      "Lobster soup",
      "Cakes and espresso",
      "Warm atmosphere"
    ]
  },
  {
    "id": "bryggjukaffi_flateyri",
    "name": "Bryggjukaffi",
    "region": "vestfirdir",
    "category": "kaffi",
    "type": "Café",
    "cuisine": "Soups, bagels and cakes",
    "price": "$$",
    "location": "Flateyri",
    "tags": [
      "small",
      "summer",
      "friendly"
    ],
    "blurb": "A small and friendly café in Flateyri.",
    "description": "Bryggjukaffi is a small, welcoming café in Flateyri open over the summer months. The menu features soups, freshly baked bagels, coffee and cakes.",
    "highlights": [
      "Freshly baked bagels",
      "Soups",
      "Open in summer",
      "Coffee and cakes"
    ]
  },
  {
    "id": "blomasetrid_kaffi_kyrrd",
    "name": "Blómasetrið - Kaffi Kyrrð",
    "region": "vesturland",
    "category": "kaffi",
    "type": "Café",
    "cuisine": "Soups, cakes and light meals",
    "price": "$$",
    "location": "Borgarnes",
    "tags": [
      "old town",
      "relaxed",
      "cosy"
    ],
    "blurb": "A calm, warm café in the old town of Borgarnes.",
    "description": "Blómasetrið - Kaffi Kyrrð is a café, gift shop and guesthouse on Skúlagata in the old town of Borgarnes, beside Englendingavík bay. It serves light meals, cakes and quality coffee in a relaxed atmosphere, including sandwiches, quiche and salads.",
    "highlights": [
      "Relaxed atmosphere",
      "Homemade cakes",
      "By Englendingavík bay",
      "Soups and salads"
    ]
  },
  {
    "id": "gilbakki_kaffihus_hellissandur",
    "name": "Gilbakki Kaffihús",
    "region": "vesturland",
    "category": "kaffi",
    "type": "Café",
    "cuisine": "Fish soup, bread and cakes",
    "price": "$$",
    "location": "Hellissandur",
    "tags": [
      "charming house",
      "fishing village",
      "homemade"
    ],
    "blurb": "A charming café in one of the prettiest houses in Hellissandur.",
    "description": "Gilbakki Kaffihús is a small café in one of the loveliest houses in Hellissandur on the Snæfellsnes peninsula. It serves fish soup with bread, coffee and homemade cakes.",
    "highlights": [
      "Fish soup with bread",
      "Homemade cakes",
      "Beautiful old house",
      "On Snæfellsnes"
    ]
  },
  {
    "id": "fjoruhusid_hellnar",
    "name": "Fjöruhúsið",
    "region": "vesturland",
    "category": "kaffi",
    "type": "Café",
    "cuisine": "Seafood soup, waffles and cakes",
    "price": "$$",
    "location": "Hellnar",
    "tags": [
      "ocean view",
      "sea cliffs",
      "family-run"
    ],
    "blurb": "A family-run café perched on the sea cliffs at Hellnar.",
    "description": "Fjöruhúsið is a family-run café in Hellnar on the southern side of Snæfellsnes, set on rocky cliffs overlooking the Atlantic. It serves homemade dishes such as seafood soup, quiche, waffles and a range of cakes, and is open through the summer season.",
    "highlights": [
      "Ocean views",
      "Seafood soup",
      "Waffles and cakes",
      "On the Hellnar–Arnarstapi coastal trail"
    ]
  },
  {
    "id": "stukuhusid_patreksfjordur",
    "name": "Stúkuhúsið",
    "region": "vestfirdir",
    "category": "kaffi",
    "type": "Café",
    "cuisine": "Coffee, pastries and light dishes",
    "price": "$$",
    "location": "Patreksfjörður",
    "tags": [
      "town centre",
      "fjord view",
      "homemade"
    ],
    "blurb": "A cosy café in central Patreksfjörður with views over the fjord.",
    "description": "Stúkuhúsið is a welcoming café in the centre of Patreksfjörður, next to the swimming pool, with fine views across the fjord. It focuses on good coffee along with homemade pastries, sandwiches, salads, soups and a daily dish made from fresh local ingredients.",
    "highlights": [
      "Views over the fjord",
      "Homemade pastries",
      "Dish of the day",
      "Soups and salads"
    ]
  },
  {
    "id": "vegamot_bildudalur",
    "name": "Vegamót",
    "region": "vestfirdir",
    "category": "kaffi",
    "type": "Café",
    "cuisine": "Light meals, coffee and cakes",
    "price": "$$",
    "location": "Bíldudalur",
    "tags": [
      "village",
      "shop",
      "cosy"
    ],
    "blurb": "A café and shop in the heart of Bíldudalur.",
    "description": "Vegamót is a café, shop and eatery in Bíldudalur on Arnarfjörður. It serves coffee, light meals and cakes in a homely setting in this small village.",
    "highlights": [
      "Coffee and cakes",
      "Light meals",
      "Village atmosphere",
      "Shop on site"
    ]
  },
  {
    "id": "sjavarpakkhusid_stykkisholmur",
    "name": "Sjávarpakkhúsið",
    "region": "vesturland",
    "category": "veitingar",
    "type": "Restaurant",
    "cuisine": "Seafood, local ingredients",
    "price": "$$$",
    "location": "Stykkishólmur",
    "tags": [
      "harbour view",
      "seafood",
      "local"
    ],
    "blurb": "A seafood restaurant with views over Stykkishólmur harbour.",
    "description": "Sjávarpakkhúsið is a restaurant with lovely views over the harbour in Stykkishólmur. It emphasises locally sourced, seasonal food in cooperation with local fishermen and farmers, alongside a good selection of beer and wine.",
    "highlights": [
      "Harbour views",
      "Local seafood",
      "Seasonal menu",
      "Beer and wine"
    ]
  },
  {
    "id": "cafe_riis_holmavik",
    "name": "Café Riis",
    "region": "vestfirdir",
    "category": "veitingar",
    "type": "Restaurant",
    "cuisine": "Icelandic dishes and pizza",
    "price": "$$$",
    "location": "Hólmavík",
    "tags": [
      "oldest house",
      "pizza",
      "local"
    ],
    "blurb": "A long-established restaurant in the oldest house in Hólmavík.",
    "description": "Café Riis occupies the oldest building in Hólmavík and has served classic Icelandic dishes since 1996. It emphasises high-quality ingredients from land and sea, and its pizzas are especially popular with guests and locals alike.",
    "highlights": [
      "The town's oldest house",
      "Popular pizzas",
      "Icelandic seafood",
      "Locally sourced ingredients"
    ]
  },
  {
    "id": "bjargarsteinn_mathus",
    "name": "Bjargarsteinn Mathús",
    "region": "vesturland",
    "category": "veitingar",
    "type": "Restaurant",
    "cuisine": "Icelandic cuisine, seafood",
    "price": "$$$",
    "location": "Grundarfjörður",
    "tags": [
      "view",
      "local",
      "dinner"
    ],
    "blurb": "A popular Grundarfjörður restaurant built around Icelandic ingredients.",
    "description": "Bjargarsteinn Mathús in Grundarfjörður showcases Icelandic ingredients and cooking, where local produce meets culinary creativity. It is one of the most popular sit-down restaurants in the area, and reservations are recommended, especially on summer evenings.",
    "highlights": [
      "Icelandic ingredients",
      "Views over the fjord",
      "Reservations recommended",
      "Popular dinner spot"
    ]
  },
  {
    "id": "sker_olafsvik",
    "name": "Sker",
    "region": "vesturland",
    "category": "veitingar",
    "type": "Restaurant",
    "cuisine": "Icelandic cuisine, seafood",
    "price": "$$$",
    "location": "Ólafsvík",
    "tags": [
      "harbour view",
      "town centre",
      "seafood"
    ],
    "blurb": "A cosy restaurant in the heart of Ólafsvík with harbour views.",
    "description": "Sker is a cosy restaurant in the centre of Ólafsvík on the Snæfellsnes peninsula, with views over the harbour. It offers a varied menu with an emphasis on good ingredients.",
    "highlights": [
      "Harbour views",
      "Central location",
      "Varied menu",
      "Seafood"
    ]
  },
  {
    "id": "skool_beans",
    "name": "Skool Beans",
    "region": "sudurland",
    "category": "kaffi",
    "type": "Café",
    "cuisine": "Specialty coffee and hot drinks",
    "price": "$",
    "location": "Vík",
    "tags": [
      "school bus",
      "specialty coffee",
      "cozy"
    ],
    "blurb": "A specialty coffee café inside an old yellow school bus in the heart of Vík.",
    "description": "Skool Beans is a small café set inside a converted American school bus where the beans are roasted on site. It serves specialty coffee, tea and hot chocolate in a warm, homey atmosphere.",
    "highlights": [
      "Coffee in a school bus",
      "Beans roasted on site",
      "Signature hot chocolate",
      "Cozy atmosphere"
    ]
  },
  {
    "id": "efstidalur_ii",
    "name": "Efstidalur II",
    "region": "sudurland",
    "category": "kaffi",
    "type": "Farm café & restaurant",
    "cuisine": "Farm-to-table and homemade ice cream",
    "price": "$$",
    "location": "Laugarvatn",
    "tags": [
      "dairy farm",
      "ice cream",
      "homemade"
    ],
    "blurb": "A family-run farm on the Golden Circle with an ice cream barn and restaurant.",
    "description": "Efstidalur II is a working dairy farm near Laugarvatn where guests enjoy homemade ice cream made from the farm's own milk while watching the cows through a glass wall. The restaurant focuses on produce from the farm, including beef, skyr and cheeses.",
    "highlights": [
      "Homemade ice cream from own milk",
      "Cows visible through a glass wall",
      "Farm-sourced ingredients",
      "On the Golden Circle"
    ]
  },
  {
    "id": "systrakaffi",
    "name": "Systrakaffi",
    "region": "sudurland",
    "category": "kaffi",
    "type": "Café & restaurant",
    "cuisine": "Icelandic and international",
    "price": "$$",
    "location": "Kirkjubæjarklaustur",
    "tags": [
      "family-run",
      "pizza",
      "cakes"
    ],
    "blurb": "A cozy café and restaurant in the heart of Kirkjubæjarklaustur.",
    "description": "Systrakaffi is a family-run spot in Kirkjubæjarklaustur offering a varied menu of pizzas, lamb dishes, soups and homemade cakes. It is a popular stop for travellers along the south coast.",
    "highlights": [
      "Pizzas and Icelandic dishes",
      "Homemade cakes",
      "Friendly atmosphere",
      "Central in Kirkjubæjarklaustur"
    ]
  },
  {
    "id": "eldsto_art_cafe",
    "name": "Eldstó Art Café",
    "region": "sudurland",
    "category": "kaffi",
    "type": "Café & art gallery",
    "cuisine": "Icelandic and homestyle",
    "price": "$$",
    "location": "Hvolsvöllur",
    "tags": [
      "art gallery",
      "ceramics",
      "homemade"
    ],
    "blurb": "A café and ceramics gallery where food is served on handmade pottery.",
    "description": "Eldstó Art Café is a family-run café and restaurant in Hvolsvöllur that also houses a ceramics gallery. It serves Icelandic dishes such as lamb and fish stew, presented in pottery made on the premises.",
    "highlights": [
      "Pottery made on site",
      "Icelandic lamb stew",
      "Handcrafted ceramics",
      "On-site art gallery"
    ]
  },
  {
    "id": "almar_bakari",
    "name": "Almar Bakari",
    "region": "sudurland",
    "category": "kaffi",
    "type": "Bakery & café",
    "cuisine": "Pastries and bread",
    "price": "$",
    "location": "Hveragerði",
    "tags": [
      "bakery",
      "kleinur",
      "breakfast"
    ],
    "blurb": "A well-established bakery and café in Hveragerði with fresh pastries.",
    "description": "Almar Bakari is a bakery and café that makes bread and pastries using traditional Icelandic methods. Popular picks include rye bread, cinnamon rolls and kleinur, alongside coffee, light lunches and sandwiches.",
    "highlights": [
      "Fresh bread and pastries",
      "Cinnamon rolls and kleinur",
      "Light lunch options",
      "A good breakfast stop"
    ]
  },
  {
    "id": "halldorskaffi",
    "name": "Halldórskaffi",
    "region": "sudurland",
    "category": "kaffi",
    "type": "Café & restaurant",
    "cuisine": "Icelandic and pizza",
    "price": "$$",
    "location": "Vík",
    "tags": [
      "historic building",
      "pizza",
      "lamb"
    ],
    "blurb": "A cozy café and restaurant in Vík's historic Brydebúð building.",
    "description": "Halldórskaffi occupies the historic Brydebúð building in Vík and serves Icelandic dishes made with local ingredients. The menu features lamb, Arctic char, fish and wood-fired oven pizzas.",
    "highlights": [
      "Set in a historic building",
      "Icelandic lamb and Arctic char",
      "Wood-fired pizzas",
      "Warm atmosphere"
    ]
  },
  {
    "id": "rauda_husid",
    "name": "Rauða húsið",
    "region": "sudurland",
    "category": "veitingar",
    "type": "Restaurant",
    "cuisine": "Seafood",
    "price": "$$$",
    "location": "Eyrarbakki",
    "tags": [
      "seafood",
      "langoustine",
      "historic building"
    ],
    "blurb": "A well-established seafood restaurant in a historic red house in Eyrarbakki.",
    "description": "Rauða húsið (The Red House) is a restaurant in a near-century-old building in the historic fishing village of Eyrarbakki. It focuses on seafood, especially langoustine and fish, while also offering meat dishes.",
    "highlights": [
      "Seafood focus",
      "Langoustine and fresh fish",
      "Historic building",
      "A short drive from Selfoss"
    ]
  },
  {
    "id": "minilik",
    "name": "Minilik",
    "region": "sudurland",
    "category": "veitingar",
    "type": "Restaurant",
    "cuisine": "Ethiopian",
    "price": "$$",
    "location": "Flúðir",
    "tags": [
      "Ethiopian",
      "exotic",
      "injera"
    ],
    "blurb": "An Ethiopian restaurant in the rural village of Flúðir on the Golden Circle.",
    "description": "Minilik is an Ethiopian restaurant in Flúðir, near Geysir and Gullfoss. Dishes are served with injera flatbread, with both vegetarian and meat options and a traditional coffee ceremony.",
    "highlights": [
      "Ethiopian cuisine",
      "Served with injera",
      "Vegetarian and meat dishes",
      "Near the Golden Circle"
    ]
  },
  {
    "id": "cafe_sumarlina",
    "name": "Café Sumarlína",
    "region": "austurland",
    "category": "kaffi",
    "type": "Café & restaurant",
    "cuisine": "Icelandic, pizza and seafood",
    "price": "$$",
    "location": "Fáskrúðsfjörður",
    "tags": [
      "family-run",
      "pizza",
      "fish soup"
    ],
    "blurb": "A cozy café and restaurant in an old wooden house in Fáskrúðsfjörður.",
    "description": "Café Sumarlína is a family-run spot in an old wooden building in Fáskrúðsfjörður. The menu includes pizzas, seafood, lamb, fish soup and homemade cakes.",
    "highlights": [
      "Set in an old wooden house",
      "Pizzas and seafood",
      "Fish soup",
      "Homemade cakes"
    ]
  },
  {
    "id": "pakkhus_hofn",
    "name": "Pakkhús",
    "region": "austurland",
    "category": "veitingar",
    "type": "Restaurant",
    "cuisine": "Seafood",
    "price": "$$$",
    "location": "Höfn",
    "tags": [
      "langoustine",
      "seafood",
      "harbour"
    ],
    "blurb": "A seafood restaurant in an old warehouse by the harbour in Höfn.",
    "description": "Pakkhús is a restaurant in a former warehouse overlooking the harbour in Höfn, often called Iceland's langoustine capital. It emphasises langoustine and fresh fish alongside other local dishes.",
    "highlights": [
      "Local langoustine",
      "By the harbour",
      "Set in an old warehouse",
      "Fresh fish"
    ]
  },
  {
    "id": "kaffi_hornid",
    "name": "Kaffi Hornið",
    "region": "austurland",
    "category": "kaffi",
    "type": "Café & restaurant",
    "cuisine": "Icelandic and seafood",
    "price": "$$",
    "location": "Höfn",
    "tags": [
      "langoustine soup",
      "cozy",
      "Höfn"
    ],
    "blurb": "A well-established café and restaurant in a log building in Höfn.",
    "description": "Kaffi Hornið is a cozy log-cabin spot in Höfn focused on local ingredients and seafood. The langoustine soup is among its most popular dishes, alongside lamb and other Icelandic fare.",
    "highlights": [
      "Langoustine soup",
      "Log-cabin setting",
      "Local ingredients",
      "Popular with locals"
    ]
  },
  {
    "id": "nielsen_restaurant",
    "name": "Nielsen Restaurant",
    "region": "austurland",
    "category": "veitingar",
    "type": "Restaurant",
    "cuisine": "New Icelandic",
    "price": "$$$",
    "location": "Egilsstaðir",
    "tags": [
      "historic house",
      "local",
      "seasonal"
    ],
    "blurb": "A restaurant in the oldest house in Egilsstaðir with a focus on local ingredients.",
    "description": "Nielsen Restaurant occupies the oldest house in Egilsstaðir and focuses on local, seasonal ingredients from East Iceland. The menu changes with the seasons and what is freshest at the time.",
    "highlights": [
      "In Egilsstaðir's oldest house",
      "Local East Iceland produce",
      "Seasonal menu",
      "Cozy setting"
    ]
  },
  {
    "id": "randulffs_sjohus",
    "name": "Randulffs Sjóhús",
    "region": "austurland",
    "category": "veitingar",
    "type": "Restaurant",
    "cuisine": "Icelandic and seafood",
    "price": "$$$",
    "location": "Eskifjörður",
    "tags": [
      "sea house",
      "historic",
      "seafood"
    ],
    "blurb": "A restaurant in an old seaside boathouse in Eskifjörður.",
    "description": "Randulffs Sjóhús is a restaurant in a century-old sea house by the harbour in Eskifjörður. The menu is built on fresh, local ingredients, including fish from the fjord and East Iceland specialities. Open in summer.",
    "highlights": [
      "In a historic sea house",
      "Fresh fish from the fjord",
      "East Iceland specialities",
      "Views over the fjord"
    ]
  },
  {
    "id": "nord_austur",
    "name": "Norð Austur Sushi & Bar",
    "region": "austurland",
    "category": "veitingar",
    "type": "Restaurant",
    "cuisine": "Sushi and Japanese",
    "price": "$$$",
    "location": "Seyðisfjörður",
    "tags": [
      "sushi",
      "fresh fish",
      "Japanese"
    ],
    "blurb": "A sushi restaurant in Seyðisfjörður serving fresh fish straight from the fjords.",
    "description": "Norð Austur Sushi & Bar sits in Seyðisfjörður near the famous rainbow street and specialises in handmade sushi and Japanese small plates. The chefs prioritise fresh fish from local fishermen. Open in summer.",
    "highlights": [
      "Handmade sushi",
      "Fresh fish from the fjords",
      "Japanese small plates",
      "Near the rainbow street"
    ]
  },
  {
    "id": "langabud",
    "name": "Langabúð",
    "region": "austurland",
    "category": "kaffi",
    "type": "Café & cultural centre",
    "cuisine": "Soups, cakes and light dishes",
    "price": "$",
    "location": "Djúpivogur",
    "tags": [
      "historic building",
      "cultural centre",
      "homemade"
    ],
    "blurb": "A café in the oldest building in Djúpivogur that doubles as a cultural centre.",
    "description": "Langabúð is a café in one of Djúpivogur's oldest buildings, which also houses museums and exhibitions. It serves homemade soups, bread with salmon and smoked lamb, coffee and cakes, including vegan and gluten-free options.",
    "highlights": [
      "In the village's oldest building",
      "Homemade soups",
      "Coffee and cakes",
      "Museums and exhibitions on site"
    ]
  },
  {
    "id": "taergesen",
    "name": "Tærgesen",
    "region": "austurland",
    "category": "veitingar",
    "type": "Restaurant & guesthouse",
    "cuisine": "Icelandic, pizza and grill",
    "price": "$$",
    "location": "Reyðarfjörður",
    "tags": [
      "historic building",
      "pizza",
      "guesthouse"
    ],
    "blurb": "A restaurant and guesthouse in a historic wooden house by the harbour in Reyðarfjörður.",
    "description": "Tærgesen is a restaurant and guesthouse in an old wooden building in the heart of Reyðarfjörður, near the harbour. The menu features traditional Icelandic dishes, grill specialities, hamburgers and pizzas.",
    "highlights": [
      "In a historic wooden house",
      "Icelandic dishes and grill",
      "Pizzas and burgers",
      "Near the harbour"
    ]
  },
  {
    "id": "sky_lagoon",
    "name": "Sky Lagoon",
    "region": "hofudborg",
    "category": "bod",
    "type": "Geothermal baths",
    "price": "$$$$",
    "location": "Kópavogur (Kársnes)",
    "tags": [
      "infinity edge",
      "ocean view",
      "ritual"
    ],
    "blurb": "An upscale oceanfront geothermal lagoon in Kópavogur with an infinity edge dissolving into the North Atlantic.",
    "description": "Opened in 2021, Sky Lagoon is carved into the shoreline cliffs of Kópavogur, roughly ten minutes from central Reykjavík. Bathers soak in 38-40°C geothermal seawater facing the ocean and can work through the seven-step Skjól ritual of sauna, cold plunge, steam and body scrub.",
    "highlights": [
      "Infinity edge over the Atlantic",
      "Seven-step Skjól ritual",
      "Cold plunge, sauna and salt scrub",
      "Swim-up bar in the lagoon"
    ]
  },
  {
    "id": "laugardalslaug",
    "name": "Laugardalslaug",
    "region": "hofudborg",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Laugardalur, Reykjavík",
    "tags": [
      "largest pool",
      "hot pots",
      "water slide"
    ],
    "blurb": "Iceland's largest swimming complex in the Laugardalur valley, packed with hot pots and slides for the whole family.",
    "description": "Opened in 1968, Laugardalslaug is the biggest conventional pool complex in Iceland. It offers a 50-metre outdoor pool, an Olympic-size indoor pool, a children's pool, eight hot pots at varying temperatures, a steam bath and a water slide.",
    "highlights": [
      "50-metre outdoor pool",
      "Eight hot pots",
      "Water slide and kids' pool",
      "Steam bath and cold tub"
    ]
  },
  {
    "id": "sundhollin",
    "name": "Sundhöll Reykjavíkur",
    "region": "hofudborg",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Miðborg Reykjavíkur",
    "tags": [
      "oldest pool",
      "art deco",
      "city centre"
    ],
    "blurb": "Reykjavík's oldest pool, a 1937 functionalist landmark in the heart of downtown.",
    "description": "Designed by celebrated architect Guðjón Samúelsson, Sundhöllin opened in 1937 as the city's first indoor pool. Its white, almost art-deco building frames the historic indoor bath, while a later extension added an outdoor pool and rooftop hot pots.",
    "highlights": [
      "Guðjón Samúelsson's landmark building",
      "Historic 1937 indoor pool",
      "Rooftop outdoor pool and hot pots",
      "Walkable downtown location"
    ]
  },
  {
    "id": "vesturbaejarlaug",
    "name": "Vesturbæjarlaug",
    "region": "hofudborg",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Vesturbær, Reykjavík",
    "tags": [
      "neighbourhood pool",
      "hot pots",
      "local vibe"
    ],
    "blurb": "A beloved neighbourhood pool in Vesturbær, famous for its laid-back atmosphere and excellent hot pots.",
    "description": "Opened in 1961, Vesturbæjarlaug was the first Icelandic pool designed for leisure rather than just swimming. It stays small and friendly, with a 25-metre outdoor pool, a children's pool, a steam bath and five hot pots ranging from 38°C to 44°C.",
    "highlights": [
      "Five hot pots",
      "25-metre outdoor pool",
      "Relaxed local atmosphere",
      "Walking distance from downtown"
    ]
  },
  {
    "id": "nautholsvik",
    "name": "Nauthólsvík Geothermal Beach",
    "region": "hofudborg",
    "category": "bod",
    "type": "Geothermal baths",
    "price": "$",
    "location": "Nauthólsvík, Reykjavík",
    "tags": [
      "warm beach",
      "sea swimming",
      "hot pots"
    ],
    "blurb": "A man-made warm beach where geothermal water is fed into a sheltered cove to heat the sea.",
    "description": "Opened in 2001 and known to locals as Ylströndin, Nauthólsvík is an engineered beach where hot geothermal water warms a small lagoon of seawater. Visitors soak in hot pots, use the steam bath, and take a bracing swim in the cooler open sea beyond.",
    "highlights": [
      "Man-made warm sea lagoon",
      "Hot pots on the sand",
      "Cold sea swimming in the Atlantic",
      "Steam bath and BBQ area"
    ]
  },
  {
    "id": "arbaejarlaug",
    "name": "Árbæjarlaug",
    "region": "hofudborg",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Árbær, Reykjavík",
    "tags": [
      "family pool",
      "water slide",
      "valley view"
    ],
    "blurb": "A family-friendly pool in eastern Reykjavík overlooking the green Elliðaárdalur valley.",
    "description": "Opened in 1994, Árbæjarlaug is a favourite with families. It has an outdoor pool, an indoor pool with a children's area, a large water slide, three hot pots from 36-42°C, a steam bath and a cold plunge, all looking out over the Elliðaárdalur valley.",
    "highlights": [
      "Large water slide",
      "Three hot pots",
      "Indoor and children's pools",
      "Views over Elliðaárdalur"
    ]
  },
  {
    "id": "alftaneslaug",
    "name": "Álftaneslaug",
    "region": "hofudborg",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Álftanes, Garðabær",
    "tags": [
      "wave pool",
      "water slides",
      "family pool"
    ],
    "blurb": "Home to Iceland's only wave pool, out on the Álftanes peninsula in Garðabær.",
    "description": "Álftaneslaug is best known for Iceland's only wave pool, where bathers of all ages ride gentle artificial waves. It also has a 25-metre outdoor pool, an indoor pool, two hot pots, a children's pool, a sauna and two water slides, the longer stretching about 85 metres.",
    "highlights": [
      "Iceland's only wave pool",
      "85-metre water slide",
      "25-metre outdoor pool",
      "Two hot pots and a sauna"
    ]
  },
  {
    "id": "seltjarnarneslaug",
    "name": "Sundlaug Seltjarnarness",
    "region": "hofudborg",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Seltjarnarnes",
    "tags": [
      "seawater",
      "mineral-rich",
      "ocean view"
    ],
    "blurb": "A calm neighbourhood pool on Seltjarnarnes that blends geothermal water with mineral-rich seawater.",
    "description": "Just minutes from downtown, Seltjarnarnes pool is unusual in mixing warm geothermal water with mineral-rich saltwater, which allows less chlorine than most pools. It has a 25-metre outdoor pool, a children's pool, four hot pots, a water slide and a steam bath with ocean views.",
    "highlights": [
      "Mineral-rich seawater",
      "Four hot pots",
      "25-metre outdoor pool",
      "Ocean views"
    ]
  },
  {
    "id": "lagafellslaug",
    "name": "Lágafellslaug",
    "region": "hofudborg",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Mosfellsbær",
    "tags": [
      "water slides",
      "family pool",
      "hot pots"
    ],
    "blurb": "A popular family pool in Mosfellsbær with three slides and plenty of hot pots.",
    "description": "Lágafellslaug in Mosfellsbær is a spacious complex with an outdoor pool, indoor pool, children's pool and play pool. It offers three water slides, two hot pots, a massage pot, a cold tub and a steam room.",
    "highlights": [
      "Three water slides",
      "25-metre competition pool",
      "Massage and hot pots",
      "Children's and play pools"
    ]
  },
  {
    "id": "vatnaverold_reykjanesbaer",
    "name": "Vatnaveröld",
    "region": "reykjanes",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Reykjanesbær (Keflavík)",
    "tags": [
      "waterworld",
      "water slides",
      "family pool"
    ],
    "blurb": "A lively family waterworld in downtown Keflavík with an indoor pool and slides.",
    "description": "Vatnaveröld is Reykjanesbær's swimming centre, popular with locals and travellers alike. It has a 50-metre indoor pool, a 25-metre outdoor pool, a children's pool, four hot pots, a steam room and water slides, all heated by geothermal water from the Reykjanes peninsula.",
    "highlights": [
      "50-metre indoor pool",
      "Water slides and play features",
      "Four hot pots",
      "Close to Keflavík Airport"
    ]
  },
  {
    "id": "sundlaugin_vogum",
    "name": "Sundlaugin í Vogum",
    "region": "reykjanes",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Vogar",
    "tags": [
      "family-friendly",
      "sheltered",
      "quiet"
    ],
    "blurb": "A small, cosy pool at the edge of Vogar, only ten minutes from the airport.",
    "description": "The pool in Vogar is a 16-metre outdoor pool set in a sheltered spot at the entrance to town. It has a hot pot, a children's pool, a cold tub, a sauna and spacious changing rooms, ideal for those seeking a relaxed, low-key soak.",
    "highlights": [
      "Sheltered, child-friendly setting",
      "Hot pot and cold tub",
      "Sauna",
      "Ten minutes from Keflavík Airport"
    ]
  },
  {
    "id": "hvammsvik",
    "name": "Hvammsvík",
    "region": "vesturland",
    "category": "bod",
    "type": "Geothermal baths",
    "price": "$$$$",
    "location": "Hvalfjörður",
    "tags": [
      "natural pools",
      "fjord",
      "sea bathing"
    ],
    "blurb": "Natural hot pools set right at the tideline of Hvalfjörður, framed by fjord and mountains.",
    "description": "Opened in 2022 on a vast private estate in Hvalfjörður about 45 minutes from Reykjavík, Hvammsvík has eight natural pools built into the coastal rock. Their 35-40°C water mingles with the sea as the tide rises and falls, and the site adds a sauna, cold plunge and swim-up bar.",
    "highlights": [
      "Eight natural tideline pools",
      "Views across Hvalfjörður",
      "Sauna, cold plunge and sea swimming",
      "Swim-up bar on site"
    ]
  },
  {
    "id": "krauma",
    "name": "Krauma",
    "region": "vesturland",
    "category": "bod",
    "type": "Geothermal baths",
    "price": "$$$",
    "location": "Deildartunga, Reykholt",
    "tags": [
      "Deildartunguhver",
      "glacial water",
      "sauna"
    ],
    "blurb": "Geothermal baths fed by Deildartunguhver, Europe's most powerful hot spring, in Borgarfjörður.",
    "description": "Krauma draws water straight from Deildartunguhver, Europe's highest-flow hot spring, cooling the near-boiling flow with cold water from nearby rivers. It offers five hot pools from 37-43°C, a cold tub, two saunas and a relaxation room with a fireplace, close to Hraunfossar and Reykholt.",
    "highlights": [
      "Water from Deildartunguhver",
      "Five hot pools",
      "Two saunas and a cold tub",
      "Relaxation room with fireplace"
    ]
  },
  {
    "id": "gudlaug_akranes",
    "name": "Guðlaug",
    "region": "vesturland",
    "category": "bod",
    "type": "Hot pots",
    "price": "$",
    "location": "Langisandur, Akranes",
    "tags": [
      "tiered baths",
      "ocean view",
      "Langisandur"
    ],
    "blurb": "A three-tier bathing pool built into the sea wall at Langisandur beach in Akranes.",
    "description": "Opened in 2018 and designed by Basalt Architects, Guðlaug is set into the breakwater above Langisandur beach. Its lowest tier is a shallow wading pool at beach level, the middle a warm soaking pool overlooking the shore, and the top a viewing deck.",
    "highlights": [
      "Three-tier design",
      "Warm pool with ocean views",
      "Shallow beach-level wading pool",
      "Viewing deck on top"
    ]
  },
  {
    "id": "landbrotalaug",
    "name": "Landbrotalaug",
    "region": "vesturland",
    "category": "bod",
    "type": "Natural hot spring",
    "price": "$",
    "location": "Snæfellsnes",
    "tags": [
      "primitive",
      "hidden",
      "tiny"
    ],
    "blurb": "A tiny natural hot pot hidden in the lava on the Snæfellsnes peninsula.",
    "description": "Landbrotalaug is a small, rustic natural spring on the eastern edge of Snæfellsnes. The classic stone-lined pot fits only two or three people and holds a steady 38°C, with a larger pool alongside. There are no facilities, so it is a soak for those who want raw, authentic nature bathing.",
    "highlights": [
      "Tiny stone-lined pot",
      "Steady natural 38°C",
      "Hidden in quiet lava fields",
      "Authentic, no-frills bathing"
    ]
  },
  {
    "id": "lysuholslaug",
    "name": "Lýsuhólslaug",
    "region": "vesturland",
    "category": "bod",
    "type": "Natural hot spring",
    "price": "$",
    "location": "Snæfellsnes",
    "tags": [
      "mineral water",
      "green water",
      "carbonated spring"
    ],
    "blurb": "A mineral-rich natural pool with distinctive green water on the south side of Snæfellsnes.",
    "description": "Lýsuhólslaug is a geothermal mineral pool fed by naturally carbonated spring water with no added chemicals. Its striking green tint comes from chlorella algae thriving in the iron- and mineral-rich water, which holds around 37-39°C. The pool is open over the summer months.",
    "highlights": [
      "Green algae-rich water",
      "Naturally carbonated mineral spring",
      "Around 37-39°C",
      "Hot pots and a cold plunge"
    ]
  },
  {
    "id": "gudrunarlaug",
    "name": "Guðrúnarlaug",
    "region": "vesturland",
    "category": "bod",
    "type": "Natural hot spring",
    "price": "$",
    "location": "Sælingsdalur, Dalir",
    "tags": [
      "saga site",
      "Laxdæla",
      "free access"
    ],
    "blurb": "A historic stone pool in Sælingsdalur named after Guðrún Ósvífursdóttir of the Laxdæla Saga.",
    "description": "Guðrúnarlaug is a small stone-built natural pool in the Sælingsdalur valley of the Dalir region, named after Guðrún Ósvífursdóttir, the heroine of the Laxdæla Saga. Mentioned in both the Laxdæla and Sturlunga sagas, it was rebuilt in 2009 after lying unused for over a century. The water sits around 37-40°C and it is open year-round.",
    "highlights": [
      "Saga site from Laxdæla",
      "Rebuilt stone-lined pool",
      "Around 37-40°C",
      "Free and open year-round"
    ]
  },
  {
    "id": "reykjafjardarlaug",
    "name": "Reykjafjarðarlaug",
    "region": "vestfirdir",
    "category": "bod",
    "type": "Natural hot spring",
    "price": "$",
    "location": "Reykjafjörður, Arnarfjörður",
    "tags": [
      "natural pool",
      "free",
      "remote"
    ],
    "blurb": "A peaceful geothermal pool at the head of Reykjafjörður in Arnarfjörður.",
    "description": "Reykjafjarðarlaug pairs a concrete swimming pool with a hotter natural spring just above it, built by locals in 1975. The pool sits around 32°C while the natural pool runs considerably warmer. It lies right by Road 63 and is free to use, with a donation box on site.",
    "highlights": [
      "Concrete pool plus a hot natural spring",
      "Free with a donation box",
      "Simple changing facilities",
      "Quiet setting with mountain views"
    ]
  },
  {
    "id": "pollurinn_talknafjordur",
    "name": "Pollurinn",
    "region": "vestfirdir",
    "category": "bod",
    "type": "Hot pots",
    "price": "$",
    "location": "Tálknafjörður",
    "tags": [
      "hot pots",
      "free",
      "views"
    ],
    "blurb": "Beloved hillside hot pots just outside the village of Tálknafjörður.",
    "description": "Pollurinn is a cluster of concrete pools of varying sizes and temperatures, originally built by local farmers in the mid-20th century. The water runs a toasty 40–45°C and the pools look out over the fjord. There are showers and enclosed changing rooms, and entry is free with a donation box.",
    "highlights": [
      "Several pools at different temperatures",
      "Panoramic view of the fjord",
      "Showers and changing rooms",
      "Free with a donation box"
    ]
  },
  {
    "id": "krossneslaug",
    "name": "Krossneslaug",
    "region": "vestfirdir",
    "category": "bod",
    "type": "Natural hot spring",
    "price": "$",
    "location": "Krossnes, Strandir",
    "tags": [
      "natural pool",
      "seaside",
      "remote"
    ],
    "blurb": "One of Iceland's most remote pools, set on the beach in Strandir.",
    "description": "Krossneslaug was built by locals in 1954 and is heated by natural geothermal water, a rarity in the Strandir region. It sits on a gravel bank facing the open ocean, with the main pool around 38–40°C plus a smaller, hotter tub. The gravel road in is long and rough, but the reward is unforgettable.",
    "highlights": [
      "Naturally heated pool and hot tub",
      "Bathing beside the open sea",
      "Changing rooms and showers",
      "One of Iceland's most remote pools"
    ]
  },
  {
    "id": "drangsnes_hot_pots",
    "name": "Drangsnes Hot Pots",
    "region": "vestfirdir",
    "category": "bod",
    "type": "Hot pots",
    "price": "$",
    "location": "Drangsnes, Strandir",
    "tags": [
      "hot pots",
      "free",
      "seaside"
    ],
    "blurb": "Three seaside hot tubs right in the middle of the village of Drangsnes.",
    "description": "The Drangsnes hot pots are three tubs, each a different temperature, set on the shoreline right beside the road. They appeared after hot water was struck during drilling in 1997. Changing rooms sit across the street, access is free, and the view stretches across Steingrímsfjörður toward Grímsey island.",
    "highlights": [
      "Three pots at different temperatures",
      "Right on the shoreline",
      "Free access",
      "Changing rooms across the road"
    ]
  },
  {
    "id": "hellulaug",
    "name": "Hellulaug",
    "region": "vestfirdir",
    "category": "bod",
    "type": "Natural hot spring",
    "price": "$",
    "location": "Vatnsfjörður, Flókalundur",
    "tags": [
      "natural pool",
      "free",
      "seaside"
    ],
    "blurb": "An unspoiled natural pool by the sea in Vatnsfjörður, near Flókalundur.",
    "description": "Hellulaug is a small natural pool just below Road 60 near Flókalundur, holding around 38°C. It sits at the water's edge with views over Breiðafjörður and is completely free. There are no facilities, so bring everything you need.",
    "highlights": [
      "Natural pool right by the sea",
      "Around 38°C year-round",
      "Free and open to all",
      "Short walk from the parking area"
    ]
  },
  {
    "id": "birkimelur",
    "name": "Birkimelur",
    "region": "vestfirdir",
    "category": "bod",
    "type": "Natural hot spring",
    "price": "$",
    "location": "Barðaströnd",
    "tags": [
      "natural pool",
      "views",
      "hot pot"
    ],
    "blurb": "A lovely little pool and natural hot pot on Barðaströnd overlooking Breiðafjörður.",
    "description": "At Birkimelur on Barðaströnd there is a small concrete pool alongside a natural hot pot closer to the shore. The view sweeps across Breiðafjörður and, on clear days, all the way to the Snæfellsjökull glacier. The local youth club runs the pool and there is a donation box by the changing rooms.",
    "highlights": [
      "Concrete pool and natural hot pot",
      "Views toward Snæfellsjökull",
      "Run by the local community",
      "Donation box at the changing rooms"
    ]
  },
  {
    "id": "sundholl_isafjardar",
    "name": "Sundhöll Ísafjarðar",
    "region": "vestfirdir",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Ísafjörður",
    "tags": [
      "swimming pool",
      "indoor",
      "sauna"
    ],
    "blurb": "A cozy indoor pool in the heart of Ísafjörður, open since 1945.",
    "description": "Sundhöll Ísafjarðar is the town's oldest bathing facility, opened in 1945 and set close to the centre. It has a 16-metre indoor pool along with a geothermal hot tub, a cold plunge and a sauna. It's a classic slice of Icelandic pool culture in a warm, welcoming setting.",
    "highlights": [
      "16-metre indoor pool",
      "Hot tub and cold plunge",
      "Sauna",
      "Central Ísafjörður location"
    ]
  },
  {
    "id": "sundlaug_bolungarvikur",
    "name": "Sundlaug Bolungarvíkur",
    "region": "vestfirdir",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Bolungarvík",
    "tags": [
      "swimming pool",
      "waterslide",
      "family-friendly"
    ],
    "blurb": "A well-equipped pool in the coastal village of Bolungarvík.",
    "description": "Sundlaug Bolungarvíkur is a welcoming, well-appointed pool in the northernmost settlement of the Westfjords. It offers an indoor pool, two hot tubs, a waterslide and a children's pool, plus a sauna, cold tub and relaxation area. A great stop for families exploring the northern Westfjords.",
    "highlights": [
      "Indoor pool and two hot tubs",
      "Waterslide and children's pool",
      "Sauna and cold tub",
      "Family-friendly facilities"
    ]
  },
  {
    "id": "hofsos_sundlaug",
    "name": "Sundlaug Hofsóss",
    "region": "nordvestur",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Hofsós, Skagafjörður",
    "tags": [
      "infinity pool",
      "views",
      "architecture"
    ],
    "blurb": "A celebrated infinity pool perched above Skagafjörður fjord.",
    "description": "The Hofsós pool is one of Iceland's most beautiful, designed by Basalt Architects and completed in 2010. The edge of the 25-metre pool visually merges with Skagafjörður so the water appears to spill into the sea. The view takes in Drangey island and the Þórðarhöfði headland.",
    "highlights": [
      "Infinity edge over the fjord",
      "25-metre outdoor pool",
      "Views toward Drangey",
      "Award-worthy architectural design"
    ]
  },
  {
    "id": "sundlaug_saudarkroks",
    "name": "Sundlaug Sauðárkróks",
    "region": "nordvestur",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Sauðárkrókur, Skagafjörður",
    "tags": [
      "swimming pool",
      "hot tubs",
      "central"
    ],
    "blurb": "A renovated outdoor pool in the heart of Sauðárkrókur.",
    "description": "Sundlaug Sauðárkróks is a 25-metre outdoor pool on Aðalgata in the town centre, recently renovated. It has two hot tubs with massage jets at 39°C and 41°C, plus a sauna and sunbeds. A popular stop in the Skagafjörður region.",
    "highlights": [
      "25-metre outdoor pool",
      "Two hot tubs with massage jets",
      "Sauna and sunbeds",
      "Central town location"
    ]
  },
  {
    "id": "jardbodin_myvatn",
    "name": "Jarðböðin við Mývatn",
    "region": "nordaustur",
    "category": "bod",
    "type": "Geothermal baths",
    "price": "$$$",
    "location": "Mývatn",
    "tags": [
      "geothermal baths",
      "mineral-rich",
      "views"
    ],
    "blurb": "Milky-blue geothermal baths set in lava fields overlooking Lake Mývatn.",
    "description": "Mývatn Nature Baths opened in 2004 and are among the largest bathing facilities in North Iceland. The centrepiece is a milky-blue mineral lagoon at 36–40°C, rich in silica and sulphur and free of chlorine. Bathers soak surrounded by lava with sweeping views over the Mývatn area.",
    "highlights": [
      "Mineral-rich milky-blue lagoon",
      "Steam baths straight from the earth",
      "Views over Lake Mývatn and lava fields",
      "Swim-up bar in the lagoon"
    ]
  },
  {
    "id": "geosea_husavik",
    "name": "GeoSea",
    "region": "nordaustur",
    "category": "bod",
    "type": "Geothermal baths",
    "price": "$$$",
    "location": "Húsavík",
    "tags": [
      "sea baths",
      "views",
      "infinity"
    ],
    "blurb": "Geothermal sea baths on the clifftop overlooking Skjálfandi bay.",
    "description": "GeoSea opened in 2018 on the Húsavíkurhöfði headland and is heated with geothermal seawater from boreholes at around 38–39°C. The baths sit on a cliff edge high above the sea with an uninterrupted view over Skjálfandaflói bay. Bathers can spot whales passing by and the northern lights in winter.",
    "highlights": [
      "Mineral-rich geothermal seawater",
      "Infinity edge over Skjálfandi bay",
      "Whale and northern-lights views",
      "On-site café and bar"
    ]
  },
  {
    "id": "forest_lagoon",
    "name": "Skógarböðin (Forest Lagoon)",
    "region": "nordaustur",
    "category": "bod",
    "type": "Geothermal baths",
    "price": "$$$",
    "location": "Vaðlaskógur, við Akureyri",
    "tags": [
      "geothermal baths",
      "forest",
      "views"
    ],
    "blurb": "Geothermal baths tucked into a birch forest above Eyjafjörður.",
    "description": "Forest Lagoon opened in 2022 in the birch woods on the slopes of Vaðlaheiði, just minutes from Akureyri. The water comes from a hot spring struck during construction of the Vaðlaheiði tunnel and flows untreated into two infinity pools. There is also a dry Finnish sauna, a cold pool and a swim-up bar.",
    "highlights": [
      "Two infinity pools in the forest",
      "Views across Eyjafjörður",
      "Finnish sauna and cold pool",
      "Just minutes from Akureyri"
    ]
  },
  {
    "id": "sundlaug_akureyrar",
    "name": "Sundlaug Akureyrar",
    "region": "nordaustur",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Akureyri",
    "tags": [
      "swimming pool",
      "waterslides",
      "family-friendly"
    ],
    "blurb": "One of Iceland's most popular pools, home to the country's longest waterslide.",
    "description": "Sundlaug Akureyrar is a large, varied outdoor pool often voted the best in the country. It has two 25-metre pools, five hot tubs (38–42°C), a children's pool, a steam bath, a cold plunge and three waterslides, including the longest in Iceland. The whole area is wheelchair accessible.",
    "highlights": [
      "Two 25-metre outdoor pools",
      "Five hot tubs",
      "Iceland's longest waterslide",
      "Fully accessible facilities"
    ]
  },
  {
    "id": "sundlaug_dalvikur",
    "name": "Sundlaug Dalvíkur",
    "region": "nordaustur",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Dalvík",
    "tags": [
      "swimming pool",
      "views",
      "family-friendly"
    ],
    "blurb": "An attractive pool with mountain views in the seaside town of Dalvík.",
    "description": "Sundlaug Dalvíkur opened in 1994 and is known for its handsome setting and views. It features a 25-metre pool along with hot tubs, a children's pool, a waterslide, a sauna and a well-equipped gym. It's a popular spot to relax in summer and watch the northern lights from the hot tubs in winter.",
    "highlights": [
      "25-metre pool with a view",
      "Hot tubs and a waterslide",
      "Children's pool and sauna",
      "Northern-lights views in winter"
    ]
  },
  {
    "id": "vok_baths",
    "name": "Vök Baths",
    "region": "austurland",
    "category": "bod",
    "type": "Geothermal baths",
    "price": "$$$",
    "location": "Egilsstaðir",
    "tags": [
      "floating pools",
      "sauna",
      "on-site dining"
    ],
    "blurb": "Iceland's only floating geothermal pools set out in Lake Urriðavatn near Egilsstaðir.",
    "description": "Opened in 2019, Vök Baths features Iceland's first floating pools, reaching out into Lake Urriðavatn with infinity views across the water. The geothermal water is clean enough to drink, and the site also includes on-shore pools, a sauna, a cold plunge and a bistro.",
    "highlights": [
      "Floating infinity pools out in the lake",
      "Drinkable geothermal water",
      "Sauna and cold plunge",
      "In-water bar and on-site restaurant"
    ]
  },
  {
    "id": "laugarfell",
    "name": "Laugarfell",
    "region": "austurland",
    "category": "bod",
    "type": "Natural hot spring",
    "price": "$$",
    "location": "Fljótsdalur",
    "tags": [
      "natural pools",
      "highlands",
      "guesthouse"
    ],
    "blurb": "Two stone-built natural hot pools on the edge of the highlands beneath Mt. Snæfell.",
    "description": "Laugarfell sits on the rim of Iceland's eastern highlands near Vatnajökull National Park, about an hour from the Ring Road. Two natural hot springs built from stone in the traditional way give the place its name, the larger one around 37–39°C, with sweeping views toward Mt. Snæfell.",
    "highlights": [
      "Traditional stone-built pools",
      "Views toward Mt. Snæfell",
      "Near waterfalls and highland hiking trails",
      "On-site accommodation and dining"
    ]
  },
  {
    "id": "selarlaug",
    "name": "Selárlaug",
    "region": "austurland",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Vopnafjörður",
    "tags": [
      "geothermal pool",
      "riverside",
      "historic"
    ],
    "blurb": "A historic geothermal pool on the bank of the Selá river in Selárdalur valley.",
    "description": "Selárlaug sits beside the salmon river Selá in Selárdalur, about 12 km north of Vopnafjörður, built by the local youth club Einherji in 1949–1950. Fed by a nearby hot spring, it holds a steady 30–33°C year-round, with a striking view of the river running through a shallow canyon.",
    "highlights": [
      "On the bank of the Selá salmon river",
      "Natural geothermal water at 30–33°C",
      "Hot tub and children's wading pool",
      "Built by locals in the mid-20th century"
    ]
  },
  {
    "id": "eskifjardarlaug",
    "name": "Sundlaug Eskifjarðar",
    "region": "austurland",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Eskifjörður",
    "tags": [
      "outdoor pool",
      "waterslides",
      "family"
    ],
    "blurb": "A friendly town pool with waterslides and mountain views in Eskifjörður.",
    "description": "Eskifjörður's swimming pool is a 25-metre outdoor pool with two hot tubs, a sauna and three water slides. There are lovely views both out the fjord and in toward the mountains, and the same building houses a gym and a children's pool.",
    "highlights": [
      "25-metre outdoor pool",
      "Three water slides",
      "Two hot tubs and a sauna",
      "Views out the fjord and to the mountains"
    ]
  },
  {
    "id": "stefanslaug_neskaupstadur",
    "name": "Stefánslaug",
    "region": "austurland",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Neskaupstaður",
    "tags": [
      "outdoor pool",
      "waterslides",
      "fjord views"
    ],
    "blurb": "A hillside town pool with panoramic views over Norðfjörður.",
    "description": "Stefánslaug in Neskaupstaður first opened in 1943 and was rebuilt almost from the ground up between 2001 and 2006. Set in the hills, it offers wide views over Norðfjörður fjord, with hot tubs, a sauna and two water slides.",
    "highlights": [
      "Panoramic views over Norðfjörður",
      "Two water slides",
      "Hot tubs at varying temperatures",
      "Sauna with scenic views"
    ]
  },
  {
    "id": "sundlaug_egilsstada",
    "name": "Sundlaug Egilsstaða",
    "region": "austurland",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Egilsstaðir",
    "tags": [
      "outdoor pool",
      "waterslide",
      "family"
    ],
    "blurb": "A well-equipped town pool in the heart of Egilsstaðir.",
    "description": "The Egilsstaðir swimming pool is a 25-metre outdoor pool with hot tubs at three temperatures, a cold plunge, a water slide, a sauna and a children's pool. It is a well-maintained and accessible bathing spot for both locals and travellers in East Iceland.",
    "highlights": [
      "25-metre outdoor pool",
      "Hot tubs at three temperatures",
      "Water slide and children's pool",
      "Cold plunge and sauna"
    ]
  },
  {
    "id": "hoffell_hot_tubs",
    "name": "Hoffell heitir pottar",
    "region": "austurland",
    "category": "bod",
    "type": "Hot pots",
    "price": "$$",
    "location": "Hoffell, Höfn",
    "tags": [
      "glacier views",
      "countryside",
      "relaxation"
    ],
    "blurb": "Geothermal hot tubs with views of Hoffellsjökull glacier near Höfn.",
    "description": "The Hoffell hot tubs sit beneath the Arnarbæli cliff about 10 km north of Höfn, overlooking Hoffellsjökull, an outlet glacier of Vatnajökull. The tubs are man-made but filled with natural geothermal water, run by the family at Hoffell alongside their guesthouse.",
    "highlights": [
      "Views of Hoffellsjökull glacier",
      "Natural geothermal water",
      "Peaceful rural setting",
      "Guesthouse on site"
    ]
  },
  {
    "id": "laugarvatn_fontana",
    "name": "Laugarvatn Fontana",
    "region": "sudurland",
    "category": "bod",
    "type": "Geothermal baths",
    "price": "$$$",
    "location": "Laugarvatn",
    "tags": [
      "Golden Circle",
      "steam baths",
      "geothermal bread"
    ],
    "blurb": "Geothermal baths and natural steam rooms on the shore of Lake Laugarvatn.",
    "description": "Laugarvatn Fontana sits on the black-sand shore of Lake Laugarvatn in the heart of the Golden Circle, drawing on a bathing tradition dating back to 1929. It offers heated mineral pools of varying temperatures, three natural steam rooms set over a boiling hot spring, and a chance to swim in the cool lake itself.",
    "highlights": [
      "Natural steam rooms over a hot spring",
      "Heated pools by the lakeshore",
      "Swim in Lake Laugarvatn",
      "Rye bread baked in the geothermal ground"
    ]
  },
  {
    "id": "laugaskard_hveragerdi",
    "name": "Sundlaugin í Laugaskarði",
    "region": "sudurland",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Hveragerði",
    "tags": [
      "50-metre pool",
      "historic",
      "geothermal"
    ],
    "blurb": "A historic 50-metre outdoor pool tucked in a sheltered gap in Hveragerði.",
    "description": "Laugaskarð pool opened in 1938 and was for a time the largest in Iceland after being extended to 50 metres in 1963. Set in a sheltered gap with mountain views and heated by geothermal steam, it also has a hot tub, a cold plunge and a natural steam bath.",
    "highlights": [
      "50-metre pool ideal for lap swimming",
      "Built by volunteers in 1938",
      "Sheltered setting with mountain views",
      "Natural steam bath"
    ]
  },
  {
    "id": "sundholl_selfoss",
    "name": "Sundhöll Selfoss",
    "region": "sudurland",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Selfoss",
    "tags": [
      "outdoor pool",
      "waterslides",
      "family"
    ],
    "blurb": "One of South Iceland's largest bathing complexes in the centre of Selfoss.",
    "description": "Sundhöll Selfoss is one of the largest swimming facilities in South Iceland, welcoming around 200,000 visitors a year. It has a 25-metre outdoor pool, an indoor children's pool, a children's pool with three water slides, hot tubs, cold tubs and a steam bath.",
    "highlights": [
      "25-metre outdoor pool",
      "Three water slides",
      "Indoor and outdoor pools",
      "Hot tubs, cold tubs and steam bath"
    ]
  },
  {
    "id": "hrunalaug",
    "name": "Hrunalaug",
    "region": "sudurland",
    "category": "bod",
    "type": "Natural hot spring",
    "price": "$$",
    "location": "Flúðir",
    "tags": [
      "natural pool",
      "stone-built",
      "countryside"
    ],
    "blurb": "Small stone-built natural pools on private farmland near Flúðir.",
    "description": "Hrunalaug is a small natural hot pot on private farmland near Flúðir, with three stone-lined pools at 32–40°C set in a grassy hollow. The oldest pool was built around 1890 for bathing and washing, and the spot has kept its rustic charm despite its popularity.",
    "highlights": [
      "Three stone-lined pools at 32–40°C",
      "Oldest pool dating from around 1890",
      "Quiet countryside setting",
      "Untouched natural charm"
    ]
  },
  {
    "id": "seljavallalaug",
    "name": "Seljavallalaug",
    "region": "sudurland",
    "category": "bod",
    "type": "Natural hot spring",
    "price": "$",
    "location": "Undir Eyjafjöllum",
    "tags": [
      "historic",
      "mountain valley",
      "1923"
    ],
    "blurb": "One of Iceland's oldest pools, hidden in a narrow valley under Eyjafjöll.",
    "description": "Seljavallalaug was built in 1923 to teach locals to swim and was the largest pool in Iceland until 1936. The 25-metre pool is set into the mountainside in a narrow valley below Eyjafjallajökull, fed by a hot spring seeping through the rock. It is a roughly 20-minute walk in and free to visit.",
    "highlights": [
      "Built in 1923, one of Iceland's oldest pools",
      "Hidden in a narrow mountain valley",
      "Warmed by a spring in the rock face",
      "About a 20-minute walk to reach"
    ]
  },
  {
    "id": "sundlaug_vestmannaeyja",
    "name": "Sundlaug Vestmannaeyja",
    "region": "sudurland",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Vestmannaeyjar",
    "tags": [
      "waterslides",
      "family",
      "island"
    ],
    "blurb": "A lively family pool with waterslides on Heimaey island.",
    "description": "The Westman Islands pool first opened in 1976, with a renewed outdoor area added in 2010 that is considered among the best in Iceland. It has a 25-metre indoor pool, hot tubs and several water slides, including Eldfell, Stórhöfði and Dufþekja, plus a large children's pool with a climbing wall.",
    "highlights": [
      "Three distinct water slides",
      "25-metre indoor pool",
      "Hot tubs and jacuzzi",
      "Large children's pool with climbing wall"
    ]
  },
  {
    "id": "sundlaug_kirkjubaejarklausturs",
    "name": "Sundlaug Kirkjubæjarklausturs",
    "region": "sudurland",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Kirkjubæjarklaustur",
    "tags": [
      "waterfall views",
      "hot tubs",
      "stopover"
    ],
    "blurb": "A cosy village pool with a view of Systrafoss waterfall from the hot tub.",
    "description": "The Kirkjubæjarklaustur pool sits in the middle of the village as part of the sports centre, with two hot tubs, a slide and a children's pool. A special draw is that bathers can watch the Systrafoss waterfall from the hot tub, making it a fine stop along the southeast route.",
    "highlights": [
      "View of Systrafoss from the hot tub",
      "Two hot tubs",
      "Water slide and children's pool",
      "Convenient stopover on the road"
    ]
  },
  {
    "id": "breidholtslaug",
    "name": "Breiðholtslaug",
    "region": "hofudborg",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Reykjavík",
    "tags": [
      "Pool",
      "Hot tubs",
      "Family"
    ],
    "blurb": "Spacious neighbourhood pool in Breiðholt with outdoor lanes, hot tubs and a slide.",
    "description": "Public pool at Austurberg with a 50 m outdoor pool, hot tubs, steam bath, water slide and a children's pool. A calmer, local alternative to the downtown pools.",
    "highlights": [
      "50 m outdoor pool",
      "Water slide and kids' pool",
      "Hot tubs and steam bath"
    ]
  },
  {
    "id": "grafarvogslaug",
    "name": "Grafarvogslaug",
    "region": "hofudborg",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Reykjavík",
    "tags": [
      "Pool",
      "Hot tubs",
      "Family"
    ],
    "blurb": "Popular family pool in the Grafarvogur suburb with a slide and great kids' facilities.",
    "description": "Outdoor pool at Dalhús with a 25 m lap pool, hot tubs, steam bath, water slide and a shallow children's pool. One of Reykjavík's best family pools.",
    "highlights": [
      "25 m outdoor pool",
      "Water slide",
      "Great for kids"
    ]
  },
  {
    "id": "dalslaug",
    "name": "Dalslaug",
    "region": "hofudborg",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Reykjavík",
    "tags": [
      "Pool",
      "Water slides",
      "Family"
    ],
    "blurb": "Reykjavík's newest pool in Úlfarsárdalur, famous for its big water slides.",
    "description": "Opened in 2021 with a 25 m outdoor pool, an indoor pool, hot tubs, a cold plunge, steam bath and two large water slides named Úlfur and Ylfa.",
    "highlights": [
      "Two big water slides",
      "25 m outdoor plus indoor pool",
      "The city's newest pool"
    ]
  },
  {
    "id": "klebergslaug",
    "name": "Klébergslaug",
    "region": "hofudborg",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Kjalarnes",
    "tags": [
      "Pool",
      "Hot tubs",
      "Quiet"
    ],
    "blurb": "Small, cosy countryside pool on Kjalarnes with views over the bay.",
    "description": "A friendly outdoor pool by Kléberg school on the Kjalarnes peninsula, with a hot tub and steam bath. A quiet stop just off the road north from Reykjavík.",
    "highlights": [
      "Quiet rural feel",
      "Hot tub and steam bath",
      "Short drive from Reykjavík"
    ]
  },
  {
    "id": "sundlaug_kopavogs",
    "name": "Sundlaug Kópavogs",
    "region": "hofudborg",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Kópavogur",
    "tags": [
      "Pool",
      "Hot tubs",
      "Family"
    ],
    "blurb": "Kópavogur's large main pool with a 50 m outdoor pool and water slides.",
    "description": "The main pool of Kópavogur with a 50 m outdoor pool, hot tubs, steam bath, water slides and a children's area. One of the largest pools in the capital region.",
    "highlights": [
      "50 m outdoor pool",
      "Water slides",
      "Hot tubs and steam bath"
    ]
  },
  {
    "id": "salalaug",
    "name": "Salalaug",
    "region": "hofudborg",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Kópavogur",
    "tags": [
      "Pool",
      "Hot tubs",
      "Family"
    ],
    "blurb": "Bright, modern pool in the Salir district with both indoor and outdoor areas.",
    "description": "The pool at Versalir in upper Kópavogur, with a 25 m indoor pool, outdoor pool, hot tubs, steam bath and a water slide. A local family favourite.",
    "highlights": [
      "Indoor and outdoor pools",
      "Water slide",
      "Hot tubs"
    ]
  },
  {
    "id": "asgardslaug",
    "name": "Ásgarðslaug",
    "region": "hofudborg",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Garðabær",
    "tags": [
      "Pool",
      "Hot tubs",
      "Family"
    ],
    "blurb": "Garðabær's main pool at Ásgarður with an outdoor pool, hot tubs and a slide.",
    "description": "The town pool of Garðabær at the Ásgarður sports grounds, with a 25 m outdoor pool, hot tubs, steam bath, water slide and children's pool.",
    "highlights": [
      "25 m outdoor pool",
      "Water slide and kids' pool",
      "Hot tubs and steam bath"
    ]
  },
  {
    "id": "sundholl_hafnarfjardar",
    "name": "Sundhöll Hafnarfjarðar",
    "region": "hofudborg",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Hafnarfjörður",
    "tags": [
      "Pool",
      "Hot tubs",
      "Historic"
    ],
    "blurb": "Historic 1943 swim hall by the sea in central Hafnarfjörður.",
    "description": "The old swim hall on Herjólfsgata with an indoor pool, outdoor hot tubs and steam bath, beautifully placed by the shore. Open on weekdays and full of local history.",
    "highlights": [
      "Historic hall from 1943",
      "Indoor pool and outdoor tubs",
      "Seaside location"
    ]
  },
  {
    "id": "sudurbaejarlaug",
    "name": "Suðurbæjarlaug",
    "region": "hofudborg",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Hafnarfjörður",
    "tags": [
      "Pool",
      "Hot tubs",
      "Family"
    ],
    "blurb": "Popular outdoor pool in south Hafnarfjörður with a slide and hot tubs.",
    "description": "Family-friendly outdoor pool on Hringbraut with a 25 m pool, hot tubs, steam bath, water slide and children's pool in a sheltered setting.",
    "highlights": [
      "25 m outdoor pool",
      "Water slide",
      "Sheltered and family-friendly"
    ]
  },
  {
    "id": "asvallalaug",
    "name": "Ásvallalaug",
    "region": "hofudborg",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Hafnarfjörður",
    "tags": [
      "Pool",
      "Indoor pool",
      "Family"
    ],
    "blurb": "One of Iceland's largest indoor pools, with a 50 m pool and kids' area.",
    "description": "Large indoor complex at Ásvellir with a 50 m competition pool, teaching pool, children's area with a slide, and hot tubs. A great choice in any weather.",
    "highlights": [
      "50 m indoor pool",
      "All-weather swimming",
      "Kids' area with slide"
    ]
  },
  {
    "id": "varmarlaug",
    "name": "Varmárlaug",
    "region": "hofudborg",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Mosfellsbær",
    "tags": [
      "Pool",
      "Hot tubs",
      "Quiet"
    ],
    "blurb": "Mosfellsbær's older, quieter pool at the Varmá sports grounds.",
    "description": "A cosy pool at Varmá with an outdoor pool, children's pool, two hot tubs, sauna and steam bath. A calmer alternative to Lágafellslaug.",
    "highlights": [
      "Quiet local feel",
      "Hot tubs and sauna",
      "Children's pool"
    ]
  },
  {
    "id": "sundlaug_njardvikur",
    "name": "Sundlaug Njarðvíkur",
    "region": "reykjanes",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Njarðvík",
    "tags": [
      "Pool",
      "Indoor pool",
      "Hot tubs"
    ],
    "blurb": "Small indoor pool in Njarðvík with hot tubs, massage jets and a sauna.",
    "description": "Indoor pool on Norðurstígur in Njarðvík with a 16 m pool, hot tubs and sauna. In summer the hot tubs and sauna take centre stage.",
    "highlights": [
      "Indoor pool",
      "Hot tubs and sauna",
      "Quiet local spot"
    ]
  },
  {
    "id": "stapalaug",
    "name": "Stapalaug",
    "region": "reykjanes",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Innri-Njarðvík",
    "tags": [
      "Pool",
      "Indoor pool",
      "Family"
    ],
    "blurb": "New, modern indoor pool at Stapaskóli in Innri-Njarðvík.",
    "description": "A recent addition at the Stapaskóli sports centre in Innri-Njarðvík, one of Reykjanesbær's three pools. A bright indoor pool with good family facilities.",
    "highlights": [
      "Brand-new facilities",
      "Indoor pool",
      "Family-friendly"
    ]
  },
  {
    "id": "sundlaug_grindavikur",
    "name": "Sundlaug Grindavíkur",
    "region": "reykjanes",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Grindavík",
    "tags": [
      "Pool",
      "Hot tubs",
      "Family"
    ],
    "blurb": "Grindavík's town pool on Austurvegur, open again after the seismic events.",
    "description": "Outdoor pool at the Grindavík sports centre with a 25 m pool, hot tubs and a water slide. Opening hours can change with conditions in town, so check ahead before visiting.",
    "highlights": [
      "25 m outdoor pool",
      "Hot tubs",
      "Check opening hours in advance"
    ]
  },
  {
    "id": "sundlaugin_sandgerdi",
    "name": "Sundlaugin Sandgerði",
    "region": "reykjanes",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Sandgerði",
    "tags": [
      "Pool",
      "Hot tubs",
      "Quiet"
    ],
    "blurb": "Cosy town pool in the fishing village of Sandgerði.",
    "description": "Outdoor pool with hot tubs and a children's pool in the seaside village of Sandgerði. A quiet, inexpensive pool where locals take their daily swim.",
    "highlights": [
      "Outdoor pool and hot tubs",
      "Quiet village feel",
      "Close to Keflavík Airport"
    ]
  },
  {
    "id": "sundlaugin_gardi",
    "name": "Sundlaugin Garði",
    "region": "reykjanes",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Garður",
    "tags": [
      "Pool",
      "Hot tubs",
      "Quiet"
    ],
    "blurb": "Small village pool in Garður, near the Garðskagi lighthouses.",
    "description": "A small, friendly pool in Garður in Suðurnesjabær with a hot tub and children's pool. A great stop after a walk out to Garðskagi point.",
    "highlights": [
      "Friendly village pool",
      "Hot tub",
      "Near Garðskagi lighthouse"
    ]
  },
  {
    "id": "jadarsbakkalaug",
    "name": "Jaðarsbakkalaug",
    "region": "vesturland",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Akranes",
    "tags": [
      "Pool",
      "Hot tubs",
      "Family"
    ],
    "blurb": "Akranes town pool right by Langisandur beach, with hot tubs and a slide.",
    "description": "Outdoor pool at Jaðarsbakkar next to Langisandur beach, with a 25 m pool, hot tubs, steam bath, water slide and children's pool. Pairs perfectly with a sea dip and the Guðlaug baths.",
    "highlights": [
      "25 m outdoor pool",
      "Next to Langisandur beach",
      "Slide and hot tubs"
    ]
  },
  {
    "id": "sundlaug_borgarness",
    "name": "Sundlaug Borgarness",
    "region": "vesturland",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Borgarnes",
    "tags": [
      "Pool",
      "Hot tubs",
      "Family"
    ],
    "blurb": "Popular outdoor pool in Borgarnes overlooking the fjord.",
    "description": "The Borgarnes town pool with a 25 m outdoor pool, hot tubs, steam bath, water slide and kids' area. A favourite stop when driving west or north.",
    "highlights": [
      "25 m outdoor pool",
      "Fjord views",
      "Slide and hot tubs"
    ]
  },
  {
    "id": "sundlaug_husafelli",
    "name": "Sundlaugin Húsafelli",
    "region": "vesturland",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Húsafell",
    "tags": [
      "Pool",
      "Hot tubs",
      "Nature"
    ],
    "blurb": "Geothermal pool in the Húsafell woodland, open year round.",
    "description": "Outdoor pool dating from 1965 in the lovely Húsafell forest setting, with two pools, two hot tubs, a sauna and a water slide. Popular with travellers and summer-house guests.",
    "highlights": [
      "Geothermal water in woodland",
      "Water slide",
      "Open all year"
    ]
  },
  {
    "id": "sundlaugin_varmalandi",
    "name": "Sundlaugin Varmalandi",
    "region": "vesturland",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Varmaland",
    "tags": [
      "Pool",
      "Hot tubs",
      "Quiet"
    ],
    "blurb": "Summer pool in the geothermal hamlet of Varmaland in Borgarfjörður.",
    "description": "Outdoor pool at the Varmaland sports centre with hot tubs and a children's pool, heated by local geothermal springs. Open during the summer season.",
    "highlights": [
      "Geothermal area",
      "Quiet country pool",
      "Open in summer"
    ]
  },
  {
    "id": "sundlaugin_kleppjarnsreykjum",
    "name": "Sundlaugin Kleppjárnsreykjum",
    "region": "vesturland",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Kleppjárnsreykir",
    "tags": [
      "Pool",
      "Hot tubs",
      "Quiet"
    ],
    "blurb": "Little country pool in the greenhouse village of Kleppjárnsreykir.",
    "description": "Summer-season outdoor pool in the geothermal village of Kleppjárnsreykir in Borgarfjörður, with a hot tub and children's pool. A pleasant stop on the way through Reykholtsdalur.",
    "highlights": [
      "Geothermal village",
      "Quiet and cheap",
      "Near Reykholt"
    ]
  },
  {
    "id": "sundlaug_stykkisholms",
    "name": "Sundlaug Stykkishólms",
    "region": "vesturland",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Stykkishólmur",
    "tags": [
      "Pool",
      "Water slide",
      "Family"
    ],
    "blurb": "Family pool in Stykkishólmur with a big slide and mineral-rich water.",
    "description": "Outdoor pool with a 25 m pool, a large water slide, hot tubs and a children's pool. The water comes from a borehole rich in minerals that the pool is known for.",
    "highlights": [
      "Big water slide",
      "Mineral-rich water",
      "25 m outdoor pool"
    ]
  },
  {
    "id": "sundlaug_grundarfjardar",
    "name": "Sundlaug Grundarfjarðar",
    "region": "vesturland",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Grundarfjörður",
    "tags": [
      "Pool",
      "Hot tubs",
      "Quiet"
    ],
    "blurb": "Grundarfjörður's town pool a short walk from Kirkjufell mountain.",
    "description": "Outdoor pool with hot tubs and a children's pool at the town sports centre. A perfect soak after hiking near Kirkjufell or touring Snæfellsnes.",
    "highlights": [
      "Near Kirkjufell",
      "Hot tubs",
      "Quiet town pool"
    ]
  },
  {
    "id": "sundlaug_olafsvikur",
    "name": "Sundlaug Ólafsvíkur",
    "region": "vesturland",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Ólafsvík",
    "tags": [
      "Pool",
      "Hot tubs",
      "Family"
    ],
    "blurb": "Snæfellsbær's pool in Ólafsvík beneath the Snæfellsjökull glacier.",
    "description": "Town pool on Ennisbraut with an outdoor pool, hot tubs, steam bath and a water slide. A good stop while circling Snæfellsjökull National Park.",
    "highlights": [
      "Outdoor pool and tubs",
      "Water slide",
      "Near Snæfellsjökull"
    ]
  },
  {
    "id": "sundlaug_budardals",
    "name": "Sundlaugin Búðardal",
    "region": "vesturland",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Búðardalur",
    "tags": [
      "Pool",
      "Hot tubs",
      "Brand new"
    ],
    "blurb": "Brand-new 25 m outdoor pool in Búðardalur with views over Hvammsfjörður.",
    "description": "Dalabyggð's new sports centre opened in 2026 with a 25 m outdoor pool, hot tubs, wading pool, sauna and cold plunge. Búðardalur's first proper swimming pool.",
    "highlights": [
      "Opened in 2026",
      "Views over Hvammsfjörður",
      "Hot tubs, sauna and cold plunge"
    ]
  },
  {
    "id": "sundlaug_sudureyrar",
    "name": "Suðureyri Swimming Pool",
    "region": "vestfirdir",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Suðureyri",
    "tags": [
      "Outdoor pool",
      "Hot tubs",
      "Family friendly"
    ],
    "blurb": "A cosy outdoor pool in a tiny fishing village on Súgandafjörður.",
    "description": "A small, welcoming outdoor pool in the heart of Suðureyri village on Súgandafjörður, run by the Ísafjarðarbær municipality. A local gathering spot and a great stop for travellers exploring the northern Westfjords.",
    "highlights": [
      "Outdoor pool in a quiet fishing village",
      "Hot tubs",
      "Close to Suðureyri's famous fishing-village atmosphere"
    ]
  },
  {
    "id": "sundlaug_flateyrar",
    "name": "Flateyri Swimming Pool",
    "region": "vestfirdir",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Flateyri",
    "tags": [
      "Indoor pool",
      "Hot tub",
      "Family friendly"
    ],
    "blurb": "The village pool in Flateyri's sports centre on Önundarfjörður.",
    "description": "The swimming pool in Flateyri's sports centre on scenic Önundarfjörður, run by the Ísafjarðarbær municipality. A relaxing stop after hiking or kayaking in one of the Westfjords' most beautiful fjords.",
    "highlights": [
      "Cosy pool in a peaceful village",
      "Hot tub",
      "Beautiful Önundarfjörður scenery nearby"
    ]
  },
  {
    "id": "sundlaug_thingeyrar",
    "name": "Þingeyri Swimming Pool",
    "region": "vestfirdir",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Þingeyri",
    "tags": [
      "Outdoor pool",
      "Hot tubs",
      "Family friendly"
    ],
    "blurb": "Outdoor pool with hot tubs in Þingeyri on Dýrafjörður.",
    "description": "An outdoor pool with hot tubs at the sports centre in Þingeyri village on Dýrafjörður. A great stop for travellers exploring the Westfjords Alps and the area's Viking history sites.",
    "highlights": [
      "Outdoor pool at the foot of the Westfjords Alps",
      "Hot tubs",
      "Close to Sandafell mountain and Þingeyri's Viking area"
    ]
  },
  {
    "id": "sundlaug_patreksfjardar",
    "name": "Patreksfjörður Swimming Pool",
    "region": "vestfirdir",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Patreksfjörður",
    "tags": [
      "Outdoor pool",
      "Hot tub",
      "Great views"
    ],
    "blurb": "Outdoor pool with a splendid view over Patreksfjörður fjord.",
    "description": "The pool at the Brattahlíð sports centre sits high in the town with a superb view over the fjord. The perfect end to a day visiting the Látrabjarg bird cliffs or Rauðisandur beach.",
    "highlights": [
      "Fjord views straight from the pool",
      "Hot tub and steam room",
      "Ideal after Látrabjarg and Rauðisandur"
    ]
  },
  {
    "id": "sundlaug_talknafjardar",
    "name": "Tálknafjörður Swimming Pool",
    "region": "vestfirdir",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Tálknafjörður",
    "tags": [
      "Outdoor pool",
      "Hot tubs",
      "Family friendly"
    ],
    "blurb": "Friendly village pool in Tálknafjörður with hot tubs.",
    "description": "The outdoor pool at Tálknafjörður's sports centre has hot tubs and good family facilities. A comfortable alternative to the natural Pollurinn hot pots on colder days.",
    "highlights": [
      "Heated outdoor pool with hot tubs",
      "Family-friendly facilities",
      "Short drive from the Pollurinn natural pools"
    ]
  },
  {
    "id": "sundlaugin_holmavik",
    "name": "Hólmavík Swimming Pool",
    "region": "vestfirdir",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Hólmavík",
    "tags": [
      "Outdoor pool",
      "Hot tubs",
      "Steam bath"
    ],
    "blurb": "A 25 m pool with hot tubs and steam bath in the Strandir region.",
    "description": "A 25-metre pool with two hot tubs, a children's wading pool and a steam bath at the Hólmavík sports centre. The main pool of the Strandir coast and a great stop en route to the remote northern Westfjords.",
    "highlights": [
      "25-metre pool",
      "Two hot tubs and a steam bath",
      "Perfect rest stop on the Strandir coast"
    ]
  },
  {
    "id": "grettislaug_reykholar",
    "name": "Grettislaug at Reykhólar",
    "region": "vestfirdir",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Reykhólar",
    "tags": [
      "Outdoor pool",
      "Hot tubs",
      "Geothermal"
    ],
    "blurb": "A 25 m geothermal outdoor pool at Reykhólar on Breiðafjörður.",
    "description": "Grettislaug is a 25-metre outdoor pool with hot tubs in Reykhólar village, heated by the local geothermal field. A quiet bathing spot overlooking the countless islands of Breiðafjörður bay.",
    "highlights": [
      "25-metre outdoor pool",
      "Hot tubs and play equipment",
      "Views over Breiðafjörður's islands"
    ]
  },
  {
    "id": "reykjanes_isafjardardjup",
    "name": "Reykjanes Pool in Ísafjarðardjúp",
    "region": "vestfirdir",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Reykjanes í Ísafjarðardjúpi",
    "tags": [
      "Outdoor pool",
      "Geothermal",
      "Historic pool"
    ],
    "blurb": "One of Iceland's longest pools, fed by free-flowing geothermal water.",
    "description": "The 50-metre outdoor pool at Reykjanes in Ísafjarðardjúp was built in 1934 and is heated by naturally flowing geothermal water. It sits beside Hotel Reykjanes and is open to visitors for a small fee.",
    "highlights": [
      "Roughly 50-metre geothermal pool from 1934",
      "Naturally hot spring water and steam bath",
      "Wonderfully remote setting on Ísafjarðardjúp"
    ]
  },
  {
    "id": "sundlaugin_hvammstanga",
    "name": "Hvammstangi Swimming Pool",
    "region": "nordvestur",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Hvammstangi",
    "tags": [
      "Outdoor pool",
      "Hot tubs",
      "Family friendly"
    ],
    "blurb": "A pleasant outdoor pool in Hvammstangi on Miðfjörður.",
    "description": "An outdoor pool with hot tubs and good facilities in Hvammstangi, the gateway to the Vatnsnes peninsula. Perfect relaxation after seal watching on Vatnsnes or a day on the Ring Road detour.",
    "highlights": [
      "Outdoor pool with hot tubs",
      "Close to Vatnsnes seal-watching sites",
      "Generous opening hours"
    ]
  },
  {
    "id": "sundlaug_blonduoss",
    "name": "Blönduós Swimming Pool",
    "region": "nordvestur",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Blönduós",
    "tags": [
      "Outdoor pool",
      "Water slides",
      "Cold plunge"
    ],
    "blurb": "A splendid modern pool with water slides right on the Ring Road.",
    "description": "Blönduós opened a brand-new pool complex in 2021 featuring water slides, two hot tubs, a sauna and a cold plunge. One of the best family stops along the north Ring Road.",
    "highlights": [
      "Modern facilities opened in 2021",
      "Water slides for kids",
      "Sauna, cold plunge and hot tubs"
    ]
  },
  {
    "id": "sundlaug_skagastrandar",
    "name": "Skagaströnd Swimming Pool",
    "region": "nordvestur",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Skagaströnd",
    "tags": [
      "Indoor pool",
      "Hot tub",
      "Off the beaten path"
    ],
    "blurb": "A small friendly pool beneath Spákonufell mountain.",
    "description": "A small pool at the Skagaströnd sports centre, sitting beneath the striking Spákonufell mountain. A quiet spot where tourists are rare and locals give visitors a warm welcome.",
    "highlights": [
      "Genuinely off the tourist trail",
      "Hot tub",
      "Hiking trails up Spákonufell nearby"
    ]
  },
  {
    "id": "sundlaugin_varmahlid",
    "name": "Varmahlíð Swimming Pool",
    "region": "nordvestur",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Varmahlíð",
    "tags": [
      "Outdoor pool",
      "Water slides",
      "Family friendly"
    ],
    "blurb": "A popular family pool with two water slides in Skagafjörður.",
    "description": "An outdoor pool in Varmahlíð with two water slides and hot tubs, just off the Ring Road in Skagafjörður. A favourite stop for families and for rafters coming off the glacial rivers.",
    "highlights": [
      "Two water slides",
      "Right by the Ring Road",
      "Great after rafting or horse riding in Skagafjörður"
    ]
  },
  {
    "id": "sundlaug_olafsfjardar",
    "name": "Ólafsfjörður Swimming Pool",
    "region": "nordaustur",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Ólafsfjörður",
    "tags": [
      "Outdoor pool",
      "Hot tubs",
      "Family friendly"
    ],
    "blurb": "An outdoor pool ringed by the steep peaks of Tröllaskagi.",
    "description": "An outdoor pool with hot tubs in Ólafsfjörður, surrounded by the steep mountains of the Tröllaskagi peninsula. A relaxing stop on the scenic coastal drive between Dalvík and Siglufjörður.",
    "highlights": [
      "Mountain views in every direction",
      "Hot tubs",
      "On the beautiful Tröllaskagi coastal route"
    ]
  },
  {
    "id": "sundlaug_hriseyjar",
    "name": "Hrísey Swimming Pool",
    "region": "nordaustur",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Hrísey",
    "tags": [
      "Outdoor pool",
      "Hot tub",
      "Island life"
    ],
    "blurb": "A little island pool with hot tub and cold plunge on Hrísey in Eyjafjörður.",
    "description": "A 12.5-metre outdoor pool with a hot tub, paddling pool and cold plunge on Hrísey, the pearl of Eyjafjörður. An unforgettable open-air swim after the short ferry ride to the island.",
    "highlights": [
      "Swimming on a peaceful car-free island",
      "Hot tub and cold plunge",
      "Short ferry ride from Árskógssandur"
    ]
  },
  {
    "id": "sundlaug_grimseyjar",
    "name": "Grímsey Swimming Pool",
    "region": "nordaustur",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Grímsey",
    "tags": [
      "Indoor pool",
      "Arctic Circle",
      "Island life"
    ],
    "blurb": "Iceland's northernmost pool, on the Arctic Circle island of Grímsey.",
    "description": "A small indoor pool on Grímsey, Iceland's only inhabited island on the Arctic Circle. Few travellers can claim a swim this far north — a fun bonus to puffin watching and crossing the Circle.",
    "highlights": [
      "Iceland's northernmost swimming pool",
      "The island straddles the Arctic Circle",
      "Puffin colonies and sea cliffs all around"
    ]
  },
  {
    "id": "thelamerkurlaug",
    "name": "Þelamörk Swimming Pool",
    "region": "nordaustur",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Þelamörk",
    "tags": [
      "Outdoor pool",
      "Hot tubs",
      "Countryside pool"
    ],
    "blurb": "A countryside pool in Hörgárdalur valley near Akureyri.",
    "description": "An outdoor pool by the Þelamörk school in Hörgársveit, about 15 minutes' drive from Akureyri towards the Öxnadalsheiði pass. A quiet rural pool with hot tubs that few travellers know about.",
    "highlights": [
      "Quiet countryside pool just off the Ring Road",
      "Hot tubs",
      "Close to Akureyri yet far from the crowds"
    ]
  },
  {
    "id": "grenivikurlaug",
    "name": "Grenivík Swimming Pool",
    "region": "nordaustur",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Grenivík",
    "tags": [
      "Outdoor pool",
      "Hot tub",
      "Great views"
    ],
    "blurb": "A small outdoor pool overlooking Eyjafjörður beneath Mt. Kaldbakur.",
    "description": "A small outdoor pool in Grenivík with lovely views over Eyjafjörður and Mt. Kaldbakur. A friendly village pool on the fjord's quieter eastern shore, away from the main tourist routes.",
    "highlights": [
      "Views across Eyjafjörður",
      "Hot tub",
      "At the foot of Mt. Kaldbakur"
    ]
  },
  {
    "id": "sundlaug_husavikur",
    "name": "Húsavík Swimming Pool",
    "region": "nordaustur",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Húsavík",
    "tags": [
      "Outdoor pool",
      "Water slide",
      "Family friendly"
    ],
    "blurb": "Húsavík's town pool with hot tubs and a water slide.",
    "description": "Húsavík's recently renovated outdoor town pool has hot tubs, a water slide and a children's pool. A cheaper, more local alternative to the GeoSea baths after whale watching on Skjálfandi bay.",
    "highlights": [
      "A proper local town pool",
      "Water slide and kids' pool",
      "Perfect after whale watching on Skjálfandi"
    ]
  },
  {
    "id": "sundlaugin_laugum",
    "name": "Laugar Swimming Pool",
    "region": "nordaustur",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Laugar í Reykjadal",
    "tags": [
      "Indoor pool",
      "Hot tubs",
      "Historic pool"
    ],
    "blurb": "A historic school pool with hot tubs in Reykjadalur valley, between Goðafoss and Mývatn.",
    "description": "A 25-metre pool with two spacious hot tubs and a children's pool at the Laugar boarding-school campus in Reykjadalur. One of Iceland's oldest covered pools and a handy stop between Goðafoss and Lake Mývatn.",
    "highlights": [
      "25-metre pool on a historic school campus",
      "Two spacious hot tubs",
      "Halfway between Goðafoss and Mývatn"
    ]
  },
  {
    "id": "sundlaug_raufarhafnar",
    "name": "Raufarhöfn Swimming Pool",
    "region": "nordaustur",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Raufarhöfn",
    "tags": [
      "Outdoor pool",
      "Sauna",
      "Remote"
    ],
    "blurb": "A remote pool in mainland Iceland's northernmost village, near the Arctic Henge.",
    "description": "A small pool with sauna in Raufarhöfn, the northernmost village on the Icelandic mainland. A rarely visited bathing spot on the Melrakkaslétta plain, a stone's throw from the mysterious Arctic Henge.",
    "highlights": [
      "Northernmost village pool on the mainland",
      "Sauna",
      "Minutes from the Arctic Henge"
    ]
  },
  {
    "id": "sundlaug_thorshafnar",
    "name": "Þórshöfn Swimming Pool",
    "region": "nordaustur",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Þórshöfn",
    "tags": [
      "Indoor pool",
      "Hot tubs",
      "Steam bath"
    ],
    "blurb": "An indoor pool with hot tubs and steam bath in Þórshöfn by Langanes.",
    "description": "An indoor pool with two hot tubs and a steam bath at the Þórshöfn sports centre. A welcome rest in Iceland's remote northeast corner, ideal before or after exploring the Langanes peninsula.",
    "highlights": [
      "Indoor pool with two hot tubs",
      "Steam bath",
      "Gateway to the wild Langanes peninsula"
    ]
  },
  {
    "id": "sundlaug_bildudals",
    "name": "Bíldudalur Swimming Pool",
    "region": "vestfirdir",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Bíldudalur",
    "tags": [
      "Swimming pool",
      "Westfjords",
      "Family"
    ],
    "blurb": "Small village pool in the fishing hamlet of Bíldudalur on Arnarfjörður.",
    "description": "Bíldudalur Swimming Pool is a cosy outdoor pool with a hot tub in the centre of this small village on Arnarfjörður. It serves locals and travellers exploring the southern Westfjords.",
    "highlights": [
      "Hot tub",
      "Views over Arnarfjörður",
      "Near Dynjandi waterfall"
    ]
  },
  {
    "id": "sundlaug_kopaskers",
    "name": "Kópasker Swimming Pool",
    "region": "nordaustur",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Kópasker",
    "tags": [
      "Swimming pool",
      "Northeast Iceland",
      "Remote"
    ],
    "blurb": "Small village pool in Kópasker on the Melrakkaslétta peninsula.",
    "description": "Kópasker Swimming Pool is a small outdoor pool with a hot tub in the village on the eastern shore of Öxarfjörður. Entry is by key card from morning until night, a welcome stop on a drive around remote Melrakkaslétta.",
    "highlights": [
      "Hot tub",
      "Key-card access",
      "Stop on Melrakkaslétta"
    ]
  },
  {
    "id": "sundlaug_thorlakshafnar",
    "name": "Þorlákshöfn Swimming Pool",
    "region": "sudurland",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Þorlákshöfn",
    "tags": [
      "Family",
      "Water slides",
      "Swimming"
    ],
    "blurb": "Family-friendly municipal pool in Þorlákshöfn with slides and hot tubs.",
    "description": "Þorlákshöfn's town pool is part of the local sports centre, with a 25-metre outdoor pool, an indoor pool, hot tubs, a children's pool and three water slides. A popular family stop on the south coast.",
    "highlights": [
      "25-metre outdoor pool",
      "Three water slides",
      "Hot tubs and children's pool"
    ]
  },
  {
    "id": "sundlaug_stokkseyrar",
    "name": "Stokkseyri Swimming Pool",
    "region": "sudurland",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Stokkseyri",
    "tags": [
      "Village pool",
      "Family",
      "Quiet"
    ],
    "blurb": "Cosy village pool in the heart of Stokkseyri with a slide and hot tubs.",
    "description": "Stokkseyri's pool is a welcoming 18-metre outdoor pool with a slide, a wading pool and two hot tubs. A quiet, family-friendly bathing spot in the seaside village.",
    "highlights": [
      "18-metre outdoor pool",
      "Slide and wading pool",
      "Two hot tubs"
    ]
  },
  {
    "id": "sundlaugin_hellu",
    "name": "Hella Swimming Pool",
    "region": "sudurland",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Hella",
    "tags": [
      "Family",
      "Swimming",
      "Hot tubs"
    ],
    "blurb": "Rangárþing ytra's town pool in Hella, a handy stop by the ring road.",
    "description": "Hella's pool is part of the town sports centre, with an outdoor pool, hot tubs and good family facilities. A convenient bathing stop for travellers crossing South Iceland.",
    "highlights": [
      "Outdoor pool",
      "Hot tubs",
      "On-site sports centre"
    ]
  },
  {
    "id": "sundlaug_hvolsvallar",
    "name": "Hvolsvöllur Swimming Pool",
    "region": "sudurland",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Hvolsvöllur",
    "tags": [
      "Family",
      "Swimming",
      "Hot tubs"
    ],
    "blurb": "The Hvolsvöllur sports-centre pool, popular with locals and travellers.",
    "description": "Hvolsvöllur's pool is part of the Rangárþing eystra sports centre, with an outdoor pool, hot tubs and facilities for children. A welcome ring-road stop near the Eyjafjöll mountains.",
    "highlights": [
      "Outdoor pool",
      "Hot tubs",
      "Central South Iceland location"
    ]
  },
  {
    "id": "sundlaugin_laugalandi",
    "name": "Laugaland Swimming Pool",
    "region": "sudurland",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Laugaland, Holtum",
    "tags": [
      "Village pool",
      "Family",
      "Slide"
    ],
    "blurb": "A small country pool in Holt, about 6 km off the ring road near Þjórsá.",
    "description": "Laugaland's pool is an 8x16-metre outdoor pool with two hot tubs and a slide, next to the Laugaland school in Holt. A peaceful rural bathing spot away from the crowds.",
    "highlights": [
      "8x16-metre outdoor pool",
      "Water slide",
      "Two hot tubs"
    ]
  },
  {
    "id": "sundlaug_vikur",
    "name": "Vík Swimming Pool",
    "region": "sudurland",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Vík í Mýrdal",
    "tags": [
      "Family",
      "Hot tub",
      "Swimming"
    ],
    "blurb": "The sports-centre pool in Vík, a welcome stop on the south coast.",
    "description": "Vík's pool on Mánabraut is part of the village sports centre, with a roughly 17-metre pool, a hot tub, a sauna and a gym. A cosy stop after exploring the black-sand beaches.",
    "highlights": [
      "Indoor pool",
      "Hot tub and sauna",
      "In the heart of Vík"
    ]
  },
  {
    "id": "sundlaug_fludir",
    "name": "Flúðir Swimming Pool",
    "region": "sudurland",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Flúðir",
    "tags": [
      "Family",
      "Swimming",
      "Sauna"
    ],
    "blurb": "Flúðir's municipal pool, separate from the Secret Lagoon.",
    "description": "Flúðir's town pool is a 25-metre outdoor pool with two hot tubs, a cold pool, a sauna and a natural steam bath. This is the sports-centre pool, not to be confused with the Secret Lagoon in the village.",
    "highlights": [
      "25-metre outdoor pool",
      "Hot tubs and cold pool",
      "Natural steam bath"
    ]
  },
  {
    "id": "sundlaug_laugarvatns",
    "name": "Laugarvatn Swimming Pool",
    "region": "sudurland",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Laugarvatn",
    "tags": [
      "Family",
      "Swimming",
      "Hot tubs"
    ],
    "blurb": "Laugarvatn's town pool, separate from the Fontana baths.",
    "description": "The Laugarvatn sports-centre pool is a 25-metre pool with three hot tubs, a cold pool and a sauna. It is the village's municipal pool, not to be confused with the lakeside Fontana spa.",
    "highlights": [
      "25-metre pool",
      "Three hot tubs",
      "Sauna and cold pool"
    ]
  },
  {
    "id": "sundlaugin_borg_grimsnesi",
    "name": "Borg Swimming Pool",
    "region": "sudurland",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Borg í Grímsnesi",
    "tags": [
      "Family",
      "Slide",
      "Hot tubs"
    ],
    "blurb": "The Borg sports centre in Grímsnes with a pool, slide and steam bath.",
    "description": "Borg's pool is part of the Grímsnes- og Grafningshreppur sports centre, with an outdoor pool, hot tubs, a children's pool, a steam bath and a water slide. A popular stop near Kerið crater and the Golden Circle.",
    "highlights": [
      "Outdoor and children's pools",
      "Water slide",
      "Hot tubs and steam bath"
    ]
  },
  {
    "id": "sundholl_seydisfjardar",
    "name": "Seyðisfjörður Swimming Hall",
    "region": "austurland",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Seyðisfjörður",
    "tags": [
      "Historic",
      "Indoor pool",
      "Hot tub"
    ],
    "blurb": "A historic 1948 indoor pool in the arts village of Seyðisfjörður.",
    "description": "Seyðisfjörður's swimming hall opened in 1948 and offers a 12.5-metre indoor pool with an outdoor hot tub, cold tub and sauna. A cosy bathing spot in one of the East Fjords' prettiest towns.",
    "highlights": [
      "1948 indoor pool",
      "Hot and cold tubs",
      "Sauna"
    ]
  },
  {
    "id": "sundlaug_reydarfjardar",
    "name": "Reyðarfjörður Swimming Pool",
    "region": "austurland",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Reyðarfjörður",
    "tags": [
      "Family",
      "Swimming",
      "Hot tubs"
    ],
    "blurb": "Fjarðabyggð's town pool in Reyðarfjörður with good family facilities.",
    "description": "Reyðarfjörður's pool is part of the town sports centre, with an outdoor pool, hot tubs and facilities for children. A pleasant stop in one of Fjarðabyggð's fjords.",
    "highlights": [
      "Outdoor pool",
      "Hot tubs",
      "On-site sports centre"
    ]
  },
  {
    "id": "sundlaug_faskrudsfjardar",
    "name": "Fáskrúðsfjörður Swimming Pool",
    "region": "austurland",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Fáskrúðsfjörður",
    "tags": [
      "Indoor pool",
      "Hot tub",
      "Quiet"
    ],
    "blurb": "A small indoor pool in the French-heritage town of Fáskrúðsfjörður.",
    "description": "Fáskrúðsfjörður's pool is a 12.5-metre indoor pool with an outdoor hot tub. Open through the winter, it makes a cosy stop in this historic French fishing town.",
    "highlights": [
      "12.5-metre indoor pool",
      "Outdoor hot tub",
      "In the heart of the village"
    ]
  },
  {
    "id": "sundlaug_stodvarfjardar",
    "name": "Stöðvarfjörður Swimming Pool",
    "region": "austurland",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Stöðvarfjörður",
    "tags": [
      "Village pool",
      "Summer only",
      "Quiet"
    ],
    "blurb": "A small outdoor pool below the school in Stöðvarfjörður, open in summer.",
    "description": "Stöðvarfjörður's pool is a small outdoor pool with a hot tub on Skólabraut. Open only in summer, it is a quiet bathing spot in the fjord that is home to Petra's Stone Collection.",
    "highlights": [
      "Small outdoor pool",
      "Hot tub",
      "Open in summer"
    ]
  },
  {
    "id": "sundlaug_breiddalsvikur",
    "name": "Breiðdalsvík Swimming Pool",
    "region": "austurland",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Breiðdalsvík",
    "tags": [
      "Village pool",
      "Summer only",
      "Hot tub"
    ],
    "blurb": "An oval outdoor pool from 2002 in Breiðdalsvík, open in summer.",
    "description": "Breiðdalsvík's pool is a small oval outdoor pool, 8x14 metres, with a hot tub. Built in 2002 and open from June to September, it is a cosy bathing spot in a quiet village.",
    "highlights": [
      "Oval outdoor pool",
      "Hot tub",
      "Open June to September"
    ]
  },
  {
    "id": "sundlaug_djupavogs",
    "name": "Djúpivogur Swimming Pool",
    "region": "austurland",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Djúpivogur",
    "tags": [
      "Family",
      "Hot tubs",
      "Swimming"
    ],
    "blurb": "The Djúpivogur sports-centre pool, a relaxed bathing spot.",
    "description": "Djúpivogur's pool on Varða is part of the village sports centre, with an outdoor pool and hot tubs. A cosy stop in the peaceful Cittaslow town on the southeast corner.",
    "highlights": [
      "Outdoor pool",
      "Hot tubs",
      "In a peaceful Cittaslow town"
    ]
  },
  {
    "id": "sundlaug_hafnar",
    "name": "Höfn Swimming Pool",
    "region": "austurland",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Höfn í Hornafirði",
    "tags": [
      "Family",
      "Water slides",
      "Swimming"
    ],
    "blurb": "A large family pool in Höfn with three water slides.",
    "description": "Höfn's pool is a fine 25x8.5-metre outdoor pool with a children's pool, two hot tubs, a steam bath and three water slides of different heights. A welcome stop near Jökulsárlón and Vatnajökull.",
    "highlights": [
      "25-metre outdoor pool",
      "Three water slides",
      "Hot tubs and steam bath"
    ]
  },
  {
    "id": "sundlaug_borgarfjardar_eystri",
    "name": "Borgarfjörður eystri Swimming Pool",
    "region": "austurland",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Borgarfjörður eystri",
    "tags": [
      "Village pool",
      "Nature",
      "Quiet"
    ],
    "blurb": "A small geothermal pool in Bakkagerði with mountain and fjord views.",
    "description": "The pool at Borgarfjörður eystri sits by Fjarðarborg and is run by Múlaþing municipality. A perfect place to meet locals and warm up after hiking the Víknaslóðir trails in this remote, colourful fjord.",
    "highlights": [
      "Geothermal pool",
      "Mountain views",
      "Near the Víknaslóðir trails"
    ]
  },
  {
    "id": "sundlaug_vopnafjardar",
    "name": "Vopnafjörður Swimming Pool",
    "region": "austurland",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Vopnafjörður",
    "tags": [
      "Family",
      "Swimming",
      "Hot tubs"
    ],
    "blurb": "Vopnafjörður's town pool, separate from the Selárlaug nature pool.",
    "description": "Vopnafjörður's pool is the village sports-centre pool, with hot tubs and good facilities. This is the town's municipal pool, not to be confused with Selárlaug a few kilometres outside the village.",
    "highlights": [
      "Outdoor pool",
      "Hot tubs",
      "In the heart of the village"
    ]
  },
  {
    "id": "giljabodin",
    "name": "Húsafell Canyon Baths (Giljaböðin)",
    "region": "vesturland",
    "category": "bod",
    "type": "Geothermal baths",
    "price": "$$$",
    "location": "Húsafell",
    "tags": [
      "Relaxation",
      "Nature",
      "Guided"
    ],
    "blurb": "Secluded geothermal pools hidden in a canyon above Húsafell, reached only by guided tour.",
    "description": "The Canyon Baths are three natural pools, 30–41°C, tucked into a canyon with sweeping views of mountains and glaciers above Húsafell. Access is by a short guided walk from Hotel Húsafell, with visitor numbers capped to keep the experience tranquil.",
    "highlights": [
      "Three pools at different temperatures",
      "Cold spring for contrast bathing",
      "Views over the canyon and glaciers"
    ]
  },
  {
    "id": "laugaras-lagoon",
    "name": "Laugarás Lagoon",
    "region": "sudurland",
    "category": "bod",
    "type": "Geothermal baths",
    "price": "$$$",
    "location": "Laugarás",
    "tags": [
      "Relaxation",
      "Golden Circle",
      "New"
    ],
    "blurb": "A new two-level geothermal lagoon on the banks of the Hvítá on the Golden Circle.",
    "description": "Laugarás Lagoon opened in October 2025 as Iceland's only two-level bathing lagoon, its tiers linked by a cascading waterfall beside the Hvítá River. It offers two saunas, a cold plunge, a grotto and swim-up bars alongside an on-site restaurant.",
    "highlights": [
      "Two-level lagoon",
      "Cascading waterfall between tiers",
      "Grotto and swim-up bars"
    ]
  },
  {
    "id": "bjorbodin",
    "name": "Bjórböðin Beer Spa",
    "region": "nordaustur",
    "category": "bod",
    "type": "Beer spa & geothermal baths",
    "price": "$$$",
    "location": "Árskógssandur",
    "tags": [
      "Beer bath",
      "Relaxation",
      "Unusual"
    ],
    "blurb": "Iceland's original beer spa paired with geothermal hot tubs on Eyjafjörður.",
    "description": "Bjórböðin at Árskógssandur is Iceland's first beer spa, where guests soak in young beer, hops and live yeast in private hardwood tubs. The bathing session is followed by outdoor geothermal hot tubs overlooking Eyjafjörður, plus a relaxation room and restaurant.",
    "highlights": [
      "Soak in young beer and hops",
      "Beer tap at the tub",
      "Outdoor geothermal tubs with fjord views"
    ]
  },
  {
    "id": "kvika",
    "name": "Kvika Foot Bath",
    "region": "hofudborg",
    "category": "bod",
    "type": "Foot bath",
    "price": "$",
    "location": "Grótta, Seltjarnarnes",
    "tags": [
      "Free",
      "Seashore",
      "Feet"
    ],
    "blurb": "A tiny geothermal foot bath on the shore by Grótta.",
    "description": "Kvika is a small natural foot bath, an artwork by Ólöf Nordal, set on the shoreline on the way out to Grótta on Seltjarnarnes. Passers-by can walk up, sit down and warm their feet in geothermal water while looking out over the sea and mountains.",
    "highlights": [
      "Free and open to all",
      "Geothermally warmed water",
      "Views to Snæfellsjökull on a clear day"
    ]
  },
  {
    "id": "keilir",
    "name": "Keilir",
    "region": "reykjanes",
    "category": "ganga",
    "type": "Hiking trail",
    "length": "9 km round trip",
    "duration": "3–4 hrs",
    "difficulty": "Moderate",
    "tags": [
      "Day hike",
      "Views",
      "Volcano",
      "Reykjanes"
    ],
    "blurb": "A cone-shaped volcano rising above the Reykjanes Peninsula with a 360-degree summit panorama.",
    "description": "Keilir is the signature landmark of the Reykjanes Peninsula, a perfectly cone-shaped hyaloclastite mountain visible from far away. The trail starts at the Oddafell parking area, crosses lava fields to the base of the mountain, then climbs a steep final stretch to the 379 m summit. From the top there are sweeping views over the peninsula, the Atlantic Ocean and, on clear days, all the way to Snæfellsjökull glacier.",
    "highlights": [
      "The mountain's perfect cone shape",
      "360-degree summit views",
      "Lava fields of the Reykjanes Peninsula"
    ],
    "activities": [
      "Mountain hiking",
      "Photography"
    ]
  },
  {
    "id": "thorbjorn",
    "name": "Þorbjörn",
    "region": "reykjanes",
    "category": "ganga",
    "type": "Hiking trail",
    "length": "5.5 km round trip",
    "duration": "1.5–2 hrs",
    "difficulty": "Moderate",
    "tags": [
      "Day hike",
      "Views",
      "Reykjanes"
    ],
    "blurb": "A short but steep climb up the hill above Grindavík, split at the top by the Þjófagjá fissure.",
    "description": "Þorbjörn is a 243 m volcanic hill right beside the town of Grindavík and a popular local hike. The route usually starts from the Selskógur woods and climbs to the top, where the distinctive Þjófagjá fissure splits the mountain in two. Because of ongoing volcanic and seismic activity in the area, access may be restricted, so check safetravel.is before you hike.",
    "highlights": [
      "The Þjófagjá fissure at the summit",
      "Views over Grindavík and the sea",
      "Selskógur woods at the base"
    ],
    "activities": [
      "Mountain hiking",
      "Photography"
    ]
  },
  {
    "id": "sveifluhals",
    "name": "Sveifluháls (Krýsuvík)",
    "region": "reykjanes",
    "category": "ganga",
    "type": "Hiking trail",
    "length": "8.4 km round trip",
    "duration": "3–4 hrs",
    "difficulty": "Challenging",
    "tags": [
      "Day hike",
      "Views",
      "Geothermal",
      "Reykjanes"
    ],
    "blurb": "A jagged hyaloclastite ridge above Lake Kleifarvatn and Krýsuvík with sweeping views over colourful geothermal ground.",
    "description": "Sveifluháls is a 397 m hyaloclastite ridge in the Reykjanesfólkvangur reserve, part of the Krýsuvík volcanic system. A popular route starts near Lake Kleifarvatn and follows the ridge, with views over the lake, the Krýsuvík geothermal area and its colourful mud-pool hills. The trail is steep and rocky in places but rewards hikers with striking scenery and wide panoramas.",
    "highlights": [
      "The jagged ridge and views over Kleifarvatn",
      "Colourful Krýsuvík geothermal area",
      "Landscape of the Reykjanesfólkvangur reserve"
    ],
    "activities": [
      "Mountain hiking",
      "Photography"
    ]
  },
  {
    "id": "reykjanesviti",
    "name": "Reykjanesviti and Valahnúkamöl",
    "region": "reykjanes",
    "category": "ganga",
    "type": "Hiking trail",
    "length": "4 km round trip",
    "duration": "1–1.5 hrs",
    "difficulty": "Easy",
    "tags": [
      "Day hike",
      "Coast",
      "Geothermal",
      "Reykjanes"
    ],
    "blurb": "An easy coastal walk past Iceland's oldest lighthouse, the Gunnuhver hot spring and the rugged Valahnúkamöl cliffs.",
    "description": "On the southwestern tip of the Reykjanes Peninsula, an easy trail links Reykjanesviti, Iceland's oldest lighthouse, the Gunnuhver geothermal area and the boulder-strewn coast at Valahnúkamöl. The route is mostly flat and suits everyone, passing steam vents, surf-battered cliffs and seabird ledges. It is a dramatic spot where the open ocean meets raw volcanic land.",
    "highlights": [
      "Reykjanesviti, Iceland's oldest lighthouse",
      "The Gunnuhver steam vents",
      "Surf-battered Valahnúkamöl coast"
    ],
    "activities": [
      "Walking",
      "Birdwatching"
    ]
  },
  {
    "id": "helgafell_hafnarfjordur",
    "name": "Helgafell (Hafnarfjörður)",
    "region": "hofudborg",
    "category": "ganga",
    "type": "Hiking trail",
    "length": "5.5 km round trip",
    "duration": "2–3 hrs",
    "difficulty": "Moderate",
    "tags": [
      "Day hike",
      "Views",
      "Capital region"
    ],
    "blurb": "A popular tuya above Hafnarfjörður with a short but steep climb to the summit.",
    "description": "Helgafell is a 338 m tuya just above Hafnarfjörður and one of the most popular mountain hikes in the capital region. The trail crosses lava and gravel to the foot of the mountain, then climbs a steep and sometimes loose final stretch to the summit. From the top there are wide views over the capital area, the Reykjanes Peninsula and the surrounding mountains.",
    "highlights": [
      "Views over the capital region",
      "A steep but short summit climb",
      "Tuya and lava landscape"
    ],
    "activities": [
      "Mountain hiking",
      "Photography"
    ]
  },
  {
    "id": "ulfarsfell",
    "name": "Úlfarsfell",
    "region": "hofudborg",
    "category": "ganga",
    "type": "Hiking trail",
    "length": "3.7 km round trip",
    "duration": "1.5–2 hrs",
    "difficulty": "Easy",
    "tags": [
      "Day hike",
      "Views",
      "Capital region"
    ],
    "blurb": "An accessible local hill between Reykjavík and Mosfellsbær with fine views over the city.",
    "description": "Úlfarsfell is a 296 m hill on the boundary between Reykjavík and Mosfellsbær and one of the most popular exercise hikes for city residents. Well-marked, easy trails lead up to its two summits, Stórihnjúkur and Litlihnjúkur, and suit most walkers. From the top there are good views over the capital region, Mount Esja and the Bláfjöll range.",
    "highlights": [
      "Views over Reykjavík and Esja",
      "Accessible, well-marked trails",
      "Popular with locals year-round"
    ],
    "activities": [
      "Mountain hiking",
      "Trail running"
    ]
  },
  {
    "id": "burfellsgja",
    "name": "Búrfellsgjá and Búrfell",
    "region": "hofudborg",
    "category": "ganga",
    "type": "Hiking trail",
    "length": "6 km round trip",
    "duration": "1.5–3 hrs",
    "difficulty": "Easy",
    "tags": [
      "Day hike",
      "Lava",
      "Geology",
      "Capital region"
    ],
    "blurb": "A family-friendly walk along a dramatic lava channel from the Heiðmörk parking area up to the Búrfell crater.",
    "description": "Búrfellsgjá is a 3.5 km lava channel running from the Búrfell crater, which erupted more than 7,000 years ago. A well-cairned, mostly easy trail follows the channel from Heiðmörk between high lava walls and small caves up to the crater itself. It is a gentle, enjoyable hike close to the city that suits the whole family.",
    "highlights": [
      "The high walls of the lava channel",
      "The Búrfell crater",
      "Moss-covered lava of Heiðmörk"
    ],
    "activities": [
      "Walking",
      "Interpretive hike"
    ]
  },
  {
    "id": "vifilsfell",
    "name": "Vífilsfell",
    "region": "hofudborg",
    "category": "ganga",
    "type": "Hiking trail",
    "length": "6.4 km round trip",
    "duration": "3–3.5 hrs",
    "difficulty": "Challenging",
    "tags": [
      "Day hike",
      "Views",
      "Capital region"
    ],
    "blurb": "The highest mountain near Reykjavík, with a steep, rocky final scramble to the 655 m summit.",
    "description": "Vífilsfell is a 655 m hyaloclastite ridge just east of Reykjavík, near Sandskeið off the South Iceland road. The route begins with gentle slopes but turns steep and rocky higher up, where the last stretch requires scrambling, in places with fixed ropes. The summit offers one of the finest panoramas in the capital region over mountains, glaciers and the city.",
    "highlights": [
      "Wide mountain panorama from the summit",
      "Steep final scramble with ropes",
      "Hyaloclastite landscape near Sandskeið"
    ],
    "activities": [
      "Mountain hiking",
      "Photography"
    ]
  },
  {
    "id": "kirkjufell_summit",
    "name": "Kirkjufell",
    "region": "vesturland",
    "category": "ganga",
    "type": "Hiking trail",
    "length": "5.6 km round trip",
    "duration": "3.5–4 hrs",
    "difficulty": "Challenging",
    "tags": [
      "Day hike",
      "Views",
      "Scramble",
      "Vesturland"
    ],
    "blurb": "A steep, dangerous scramble up Iceland's most photographed mountain at Grundarfjörður, for experienced hikers only.",
    "description": "Kirkjufell near Grundarfjörður is one of Iceland's most famous mountains, but the climb is far harder than the photos suggest. The route to the 463 m summit involves scrambling through three steep, rope-assisted sections and demands a good head for heights. The mountain becomes slippery and hazardous when wet and has seen fatal accidents, so a guide is recommended and it should be attempted only by experienced hikers.",
    "highlights": [
      "Views over Grundarfjörður and Snæfellsnes",
      "Three steep rope-assisted sections",
      "Iceland's most photographed mountain"
    ],
    "activities": [
      "Mountain hiking",
      "Scrambling"
    ]
  },
  {
    "id": "eldborg",
    "name": "Eldborg",
    "region": "vesturland",
    "category": "ganga",
    "type": "Hiking trail",
    "length": "6 km round trip",
    "duration": "1.5–2 hrs",
    "difficulty": "Moderate",
    "tags": [
      "Day hike",
      "Crater",
      "Snæfellsnes",
      "Vesturland"
    ],
    "blurb": "A walk across lava to a perfectly shaped scoria crater on the southern side of Snæfellsnes.",
    "description": "Eldborg is a remarkably regular scoria crater, about 60 m high, on the Mýrar plain of southern Snæfellsnes. The trail starts at Snorrastaðir farm and crosses moss-covered lava to the crater, roughly 3 km each way, with a chain-assisted climb to the rim. From the top there are wide views over the lava field, Faxaflói bay and the mountains of Snæfellsnes.",
    "highlights": [
      "The perfect form of the Eldborg crater",
      "Views from the crater rim",
      "Moss-covered lava of the Mýrar plain"
    ],
    "activities": [
      "Walking",
      "Photography"
    ]
  },
  {
    "id": "naustahvilft",
    "name": "Naustahvilft",
    "region": "vestfirdir",
    "category": "ganga",
    "type": "Hiking trail",
    "length": "1.6 km round trip",
    "duration": "1-2 hrs",
    "difficulty": "Challenging",
    "tags": [
      "Day hike",
      "Viewpoint",
      "Steep"
    ],
    "blurb": "A steep climb to the troll seat known as The Pot, with sweeping views over Ísafjörður.",
    "description": "Naustahvilft is a bowl-shaped hanging valley high on Kirkjubólsfjall above Skutulsfjörður, nicknamed The Pot and tied to a folk tale of a resting troll woman. The path is short but very steep and loose, and the top rewards you with one of the finest panoramas over the town of Ísafjörður and its fjord.",
    "highlights": [
      "The troll-seat depression",
      "Views over Ísafjörður and the airport",
      "Glacial hanging valley"
    ],
    "activities": [
      "Mountain hiking",
      "Photography"
    ]
  },
  {
    "id": "kaldbakur_vestfirdir",
    "name": "Kaldbakur",
    "region": "vestfirdir",
    "category": "ganga",
    "type": "Hiking trail",
    "length": "7 km round trip",
    "duration": "4-5 hrs",
    "difficulty": "Challenging",
    "tags": [
      "Day hike",
      "Mountain hike",
      "Viewpoint"
    ],
    "blurb": "A climb to the Westfjords' highest peak at 998 metres, deep in the Westfjords Alps.",
    "description": "Kaldbakur is the tallest mountain in the Westfjords at 998 metres, rising between Arnarfjörður and Dýrafjörður in the heart of the Westfjords Alps. A mountain track leads up to the Kvennaskarð pass, from where you hike to the summit and its two-metre cairn that lets you reach a full thousand metres. The route is long but technically manageable in good conditions.",
    "highlights": [
      "Highest peak in the Westfjords",
      "The Westfjords Alps",
      "Thousand-metre summit cairn"
    ],
    "activities": [
      "Mountain hiking",
      "Photography"
    ]
  },
  {
    "id": "bolafjall",
    "name": "Bolafjall",
    "region": "vestfirdir",
    "category": "ganga",
    "type": "Hiking trail",
    "length": "10.5 km loop",
    "duration": "3-4 hrs",
    "difficulty": "Moderate",
    "tags": [
      "Day hike",
      "Viewpoint"
    ],
    "blurb": "A climb up Bolafjall above Bolungarvík to a skywalk platform cantilevered over the cliff edge.",
    "description": "Bolafjall towers over the village of Bolungarvík, and a viewing platform that opened in 2022 juts out over the cliff edge at its top. It offers a staggering panorama across Ísafjarðardjúp and the Jökulfirðir fjords, and on the clearest days some say you can see all the way to Greenland. You can hike up or, in summer, drive the mountain road.",
    "highlights": [
      "The Skywalk platform",
      "Views over Ísafjarðardjúp and Jökulfirðir",
      "The old radar station"
    ],
    "activities": [
      "Mountain hiking",
      "Photography"
    ]
  },
  {
    "id": "valagil",
    "name": "Valagil",
    "region": "vestfirdir",
    "category": "ganga",
    "type": "Hiking trail",
    "length": "8 km round trip",
    "duration": "2-3 hrs",
    "difficulty": "Easy",
    "tags": [
      "Day hike",
      "Waterfall"
    ],
    "blurb": "A gentle walk into Álftafjörður to a narrow ravine and its striking waterfall.",
    "description": "Valagil is a narrow, dramatic ravine at the head of Álftafjörður, about 9 km south of Súðavík, with a fine waterfall tumbling from the cliffs. The path crosses green meadows and is clear and largely flat, though the final stretch turns rockier as you approach the gorge.",
    "highlights": [
      "The narrow ravine",
      "The Valagil waterfall",
      "Quiet head of Álftafjörður"
    ],
    "activities": [
      "Walking",
      "Photography"
    ]
  },
  {
    "id": "dynjandi_ganga",
    "name": "Dynjandi",
    "region": "vestfirdir",
    "category": "ganga",
    "type": "Hiking trail",
    "length": "1.6 km round trip",
    "duration": "30-60 min",
    "difficulty": "Easy",
    "tags": [
      "Day hike",
      "Waterfall"
    ],
    "blurb": "A short walk up past a cascade of falls to the majestic Dynjandi, the Westfjords' tallest waterfall.",
    "description": "Dynjandi, also called Fjallfoss, is the tallest and most spectacular waterfall in the Westfjords, roughly 100 metres high and fanning out like a bridal veil. From the parking area on Route 60 a 15-minute path climbs to the base of the falls, passing six smaller cascades along the way. The trail is rocky but manageable for most.",
    "highlights": [
      "The fan-shaped main falls",
      "Six smaller waterfalls en route",
      "Views over Arnarfjörður"
    ],
    "activities": [
      "Walking",
      "Photography"
    ]
  },
  {
    "id": "reykjarholl_varmahlid",
    "name": "Reykjarhóll",
    "region": "nordvestur",
    "category": "ganga",
    "type": "Hiking trail",
    "length": "3 km loop",
    "duration": "1 hr",
    "difficulty": "Easy",
    "tags": [
      "Day hike",
      "Viewpoint",
      "Family friendly"
    ],
    "blurb": "An easy walk up the wooded hill of Reykjarhóll with wide views over Skagafjörður.",
    "description": "Reykjarhóll rises above the village of Varmahlíð, cloaked in woodland with clearly marked trails. A short, rewarding walk leads to the top of the hill, where on a clear day the view opens across most of the Skagafjörður region. It is an ideal outing for families and a shorter leg-stretch.",
    "highlights": [
      "Views over Skagafjörður",
      "Wooded hilltop",
      "Easy family route"
    ],
    "activities": [
      "Walking",
      "Photography"
    ]
  },
  {
    "id": "kerlingarfjall_trollaskagi",
    "name": "Kerlingarfjall (Kerling)",
    "region": "nordvestur",
    "category": "ganga",
    "type": "Hiking trail",
    "length": "12 km round trip",
    "duration": "7-9 hrs",
    "difficulty": "Challenging",
    "tags": [
      "Mountain hike",
      "Viewpoint",
      "Experienced hikers"
    ],
    "blurb": "A long, demanding climb to the highest peak of the Tröllaskagi peninsula at 1,538 metres.",
    "description": "Kerling, often called Kerlingarfjall, is the highest peak of the Tröllaskagi peninsula at 1,538 metres, straddling the boundary between Skagafjörður and Eyjafjörður. It is a long, strenuous mountain hike for experienced walkers, often with snow and steep sections near the top, but the summit rewards you with sweeping views over the fjords and the sea. Choose settled weather and carry the right gear.",
    "highlights": [
      "Highest peak of Tröllaskagi",
      "Expansive views over the fjords",
      "Alpine mountain atmosphere"
    ],
    "activities": [
      "Mountain hiking",
      "Photography"
    ]
  },
  {
    "id": "asbyrgi_rim",
    "name": "Ásbyrgi",
    "region": "nordaustur",
    "category": "ganga",
    "type": "Hiking trail",
    "length": "12 km loop",
    "duration": "4-5 hrs",
    "difficulty": "Moderate",
    "tags": [
      "Day hike",
      "Viewpoint",
      "National park"
    ],
    "blurb": "A rim loop around the horseshoe canyon of Ásbyrgi with views down into its forest.",
    "description": "Ásbyrgi is a dramatic horseshoe-shaped canyon in Vatnajökull National Park, carved by catastrophic floods of the Jökulsá á Fjöllum river and tied to the legend of Sleipnir's hoofprint. The trail follows the canyon rim, offering views down into the lush woodland and across to the rock island of Eyjan. The path is clear but fairly long.",
    "highlights": [
      "The horseshoe canyon",
      "The rock island at its centre",
      "Lush birch woodland"
    ],
    "activities": [
      "Walking",
      "Birdwatching"
    ]
  },
  {
    "id": "hverfjall",
    "name": "Hverfjall",
    "region": "nordaustur",
    "category": "ganga",
    "type": "Hiking trail",
    "length": "4.5 km loop",
    "duration": "1-2 hrs",
    "difficulty": "Moderate",
    "tags": [
      "Day hike",
      "Volcano",
      "Viewpoint"
    ],
    "blurb": "A climb to the rim and a loop around the vast tephra crater of Hverfjall by Lake Mývatn.",
    "description": "Hverfjall is a near-perfect ring-shaped tephra crater east of Lake Mývatn, about a kilometre across and one of the area's most striking volcanic features. A steep but short path climbs to the rim, from where you can walk the full loop around the crater with views over the Mývatn district. Stay strictly on the marked paths to protect the fragile ground.",
    "highlights": [
      "The circular crater rim",
      "Views over Lake Mývatn",
      "The tephra crater itself"
    ],
    "activities": [
      "Mountain hiking",
      "Photography"
    ]
  },
  {
    "id": "leirhnjukur",
    "name": "Leirhnjúkur",
    "region": "nordaustur",
    "category": "ganga",
    "type": "Hiking trail",
    "length": "5 km loop",
    "duration": "1.5-2 hrs",
    "difficulty": "Moderate",
    "tags": [
      "Day hike",
      "Geothermal",
      "Volcano"
    ],
    "blurb": "A loop through fresh lava and steaming geothermal ground in the Krafla caldera.",
    "description": "Leirhnjúkur sits in the heart of the Krafla caldera and is one of Iceland's youngest lava fields, formed in the Krafla Fires of 1975-1984. A marked loop trail crosses ropey pahoehoe lava, passing bubbling mud pots and steaming fissures where geothermal heat escapes. The terrain is mostly flat but the surface is uneven, so sturdy shoes are essential and you must keep to the path.",
    "highlights": [
      "Fresh lava from the Krafla Fires",
      "Bubbling mud pots and steam vents",
      "Colourful geothermal ground"
    ],
    "activities": [
      "Walking",
      "Photography"
    ]
  },
  {
    "id": "dimmuborgir",
    "name": "Dimmuborgir",
    "region": "nordaustur",
    "category": "ganga",
    "type": "Hiking trail",
    "length": "2.4 km loop",
    "duration": "45-60 min",
    "difficulty": "Easy",
    "tags": [
      "Day hike",
      "Lava field",
      "Family friendly"
    ],
    "blurb": "An easy loop through a maze of towering lava pillars and arches by Lake Mývatn.",
    "description": "Dimmuborgir is a remarkable lava field east of Lake Mývatn, where huge pillars, arches and caves form a mysterious labyrinth. Several marked, colour-coded loops start from the car park, from short strolls to longer walks, and the most popular is the Church Circle with its distinctive lava-cave arch known as Kirkjan.",
    "highlights": [
      "Towering lava pillars and arches",
      "The Kirkjan lava cave",
      "Colour-coded loop trails"
    ],
    "activities": [
      "Walking",
      "Photography"
    ]
  },
  {
    "id": "valahnukur",
    "name": "Valahnúkur",
    "region": "sudurland",
    "category": "ganga",
    "type": "Hiking trail",
    "length": "5 km loop",
    "duration": "2–3 hrs",
    "difficulty": "Moderate",
    "tags": [
      "Day hike",
      "Views",
      "Highlands"
    ],
    "blurb": "A short but steep climb to a panoramic summit in the heart of Þórsmörk.",
    "description": "Valahnúkur (465 m) rises above the huts in Langidalur, and its summit opens up sweeping views of Eyjafjallajökull, Mýrdalsjökull, the Tindfjöll peaks and the whole Þórsmörk valley. The trail is marked and colour-coded on each side, ideal for hikers wanting a big reward in little time. Access is summer-only and requires driving a mountain road with unbridged river crossings.",
    "highlights": [
      "Views over three glaciers",
      "Colour-marked up and down routes",
      "Heart of Þórsmörk"
    ],
    "activities": [
      "Mountain hiking",
      "Photography"
    ]
  },
  {
    "id": "blahnukur",
    "name": "Bláhnúkur",
    "region": "sudurland",
    "category": "ganga",
    "type": "Hiking trail",
    "length": "6 km loop",
    "duration": "3–4 hrs",
    "difficulty": "Challenging",
    "tags": [
      "Day hike",
      "Highlands",
      "Views"
    ],
    "blurb": "A steep loop up a blue-hued rhyolite peak above Landmannalaugar.",
    "description": "Bláhnúkur (945 m) is one of the most popular day-hike summits at Landmannalaugar, its blue-grey rhyolite slopes shifting colour with the light. The route is short but steep and narrow in places, with sweeping views over the Laugahraun lava field, Brennisteinsalda and the surrounding colourful mountains. The area is accessible only in summer via mountain F-roads, often with river fords.",
    "highlights": [
      "Blue-grey rhyolite slopes",
      "Views over Laugahraun lava",
      "One of the best highland day hikes"
    ],
    "activities": [
      "Mountain hiking",
      "Photography"
    ]
  },
  {
    "id": "brennisteinsalda",
    "name": "Brennisteinsalda",
    "region": "sudurland",
    "category": "ganga",
    "type": "Hiking trail",
    "length": "11 km round trip",
    "duration": "3–4 hrs",
    "difficulty": "Moderate",
    "tags": [
      "Day hike",
      "Highlands",
      "Geothermal"
    ],
    "blurb": "The most colourful mountain at Landmannalaugar, laced with steaming sulphur vents.",
    "description": "Brennisteinsalda, the “Sulphur Wave” (855 m), takes its name from the yellow sulphur that streaks its slopes alongside red, green and black mineral layers. The hike follows the first stretch of the Laugavegur trail from Landmannalaugar up to the summit, where steam rises from the ground. It lies in an F-road highland area passable only during the summer months.",
    "highlights": [
      "Steaming sulphur vents",
      "Multi-coloured rhyolite slopes",
      "Start of the Laugavegur trail"
    ],
    "activities": [
      "Mountain hiking",
      "Photography"
    ]
  },
  {
    "id": "hveradalir_kerlingarfjoll",
    "name": "Hveradalir, Kerlingarfjöll",
    "region": "sudurland",
    "category": "ganga",
    "type": "Hiking trail",
    "length": "7 km loop",
    "duration": "3–4 hrs",
    "difficulty": "Moderate",
    "tags": [
      "Day hike",
      "Highlands",
      "Geothermal"
    ],
    "blurb": "A loop through one of the highlands' most colourful geothermal valleys.",
    "description": "Hveradalir is a steaming high-temperature area in the heart of the Kerlingarfjöll mountains, filled with boiling mud pots, fumaroles and rhyolite peaks in every colour of the rainbow. A marked loop descends into the valley and winds along paths between the vents with dramatic views throughout. The area is reached in summer via the Kjölur route (F35) and the F347 mountain track.",
    "highlights": [
      "Boiling mud pots and fumaroles",
      "Multi-coloured rhyolite peaks",
      "Snow patches amid the geothermal heat"
    ],
    "activities": [
      "Mountain hiking",
      "Photography"
    ]
  },
  {
    "id": "almannagja_thingvellir",
    "name": "Almannagjá, Þingvellir",
    "region": "sudurland",
    "category": "ganga",
    "type": "Hiking trail",
    "length": "5 km",
    "duration": "1–2 hrs",
    "difficulty": "Easy",
    "tags": [
      "Day hike",
      "History",
      "Family-friendly"
    ],
    "blurb": "An easy walk through a historic rift between tectonic plates to Öxarárfoss waterfall.",
    "description": "Almannagjá is a dramatic fissure where the North American and Eurasian plates pull apart, and the path through it once led to the Lögberg law rock of the ancient Alþingi. A level trail runs between towering rock walls to Öxarárfoss waterfall and down onto the plains of this UNESCO World Heritage site. It is accessible year-round and suits all ages.",
    "highlights": [
      "Rift between tectonic plates",
      "Öxarárfoss waterfall",
      "UNESCO site and old parliament grounds"
    ],
    "activities": [
      "Walking",
      "Sightseeing"
    ]
  },
  {
    "id": "solheimajokull_walk",
    "name": "Sólheimajökull glacier edge",
    "region": "sudurland",
    "category": "ganga",
    "type": "Hiking trail",
    "length": "3.5 km round trip",
    "duration": "1 hr",
    "difficulty": "Easy",
    "tags": [
      "Day hike",
      "Glacier",
      "Family-friendly"
    ],
    "blurb": "An easy walk to the snout of Sólheimajökull and the lagoon in front of it.",
    "description": "A level path leads from the car park along the glacial lagoon to the snout of Sólheimajökull, an outlet of Mýrdalsjökull with ash-streaked blue ice and deep crevasses. The walk itself is short and easy, suitable for the whole family. Walking onto the glacier itself requires a guide and crampons.",
    "highlights": [
      "Ash-streaked blue glacier ice",
      "Lagoon at the glacier snout",
      "Easy year-round access"
    ],
    "activities": [
      "Walking",
      "Photography"
    ]
  },
  {
    "id": "mulagljufur",
    "name": "Múlagljúfur",
    "region": "sudurland",
    "category": "ganga",
    "type": "Hiking trail",
    "length": "6 km round trip",
    "duration": "2–3 hrs",
    "difficulty": "Moderate",
    "tags": [
      "Day hike",
      "Canyon",
      "Views"
    ],
    "blurb": "A hidden canyon with waterfalls and views toward Öræfajökull.",
    "description": "Múlagljúfur is a lush, deep canyon just off the Ring Road between Vík and Höfn that has become one of Iceland's most popular hidden gems in recent years. A trail climbs to viewpoints along the rim overlooking Hangandifoss, a waterfall dropping more than 100 metres, with Öræfajökull glacier as a backdrop. The access track is a short gravel road and the route is passable in summer.",
    "highlights": [
      "Hangandifoss, over 100 m tall",
      "Moss-covered canyon rim",
      "Views toward Öræfajökull"
    ],
    "activities": [
      "Mountain hiking",
      "Photography"
    ]
  },
  {
    "id": "stakkholtsgja",
    "name": "Stakkholtsgjá",
    "region": "sudurland",
    "category": "ganga",
    "type": "Hiking trail",
    "length": "4 km round trip",
    "duration": "1–2 hrs",
    "difficulty": "Easy",
    "tags": [
      "Day hike",
      "Canyon",
      "Family-friendly"
    ],
    "blurb": "A narrow, moss-lined canyon in Þórsmörk with a hidden waterfall at its end.",
    "description": "Stakkholtsgjá is a roughly two-kilometre canyon with palagonite walls up to 100 metres high, cloaked in green moss through the summer. The route follows the riverbed inward across small fords until it reaches a cave at the far end where a waterfall plunges from above. It lies in Þórsmörk and is accessible only in summer via a mountain road with unbridged rivers.",
    "highlights": [
      "High moss-covered palagonite walls",
      "Hidden waterfall in a cave",
      "Easy walk for the whole family"
    ],
    "activities": [
      "Walking",
      "Photography"
    ]
  },
  {
    "id": "hengifoss",
    "name": "Hengifoss",
    "region": "austurland",
    "category": "ganga",
    "type": "Hiking trail",
    "length": "5 km round trip",
    "duration": "2 hrs",
    "difficulty": "Moderate",
    "tags": [
      "Day hike",
      "Waterfall",
      "Views"
    ],
    "blurb": "A hike to one of Iceland's tallest waterfalls, framed by red rock strata.",
    "description": "Hengifoss plunges 128 metres and is one of Iceland's tallest waterfalls, set in a gorge banded with basalt columns and striking red clay layers. On the way up the trail passes Litlanesfoss, which tumbles through a wall of neatly formed basalt columns. The path is well marked but fairly steep in places.",
    "highlights": [
      "128 m tall waterfall",
      "Red clay strata in the gorge walls",
      "Litlanesfoss and basalt columns en route"
    ],
    "activities": [
      "Walking",
      "Photography"
    ]
  },
  {
    "id": "snaefell_austurland",
    "name": "Snæfell",
    "region": "austurland",
    "category": "ganga",
    "type": "Hiking trail",
    "length": "8 km round trip",
    "duration": "7–8 hrs",
    "difficulty": "Challenging",
    "tags": [
      "Mountain hike",
      "Highlands",
      "Views"
    ],
    "blurb": "A climb of Iceland's highest free-standing mountain on the edge of Vatnajökull.",
    "description": "Snæfell (1,833 m) is Iceland's highest free-standing mountain, an old volcano towering over the highlands north of Vatnajökull. The hike starts at the Snæfellsskáli hut and is long and steep, with snow and loose scree near the top, but the summit rewards you with views over Vatnajökull, the Eyjabakkar wetlands and reindeer country. The route suits only experienced, well-equipped hikers and is accessible only in high summer via mountain roads.",
    "highlights": [
      "Iceland's highest free-standing mountain",
      "Views over Vatnajökull and Eyjabakkar",
      "Highland reindeer grounds"
    ],
    "activities": [
      "Mountain hiking",
      "Photography"
    ]
  },
  {
    "id": "gerpir",
    "name": "Gerpir",
    "region": "austurland",
    "category": "ganga",
    "type": "Hiking trail",
    "length": "8 km",
    "duration": "3–4 hrs",
    "difficulty": "Moderate",
    "tags": [
      "Day hike",
      "Coast",
      "Views"
    ],
    "blurb": "A hike to the easternmost point of mainland Iceland with towering sea cliffs.",
    "description": "Gerpir is the easternmost headland of mainland Iceland, where 12-million-year-old cliffs rise straight from the sea to heights of up to 661 metres. The hiking club Ferðafélag Fjarðamanna has marked numerous trails across the Gerpir area, offering dramatic views over the open ocean and the surrounding fjords. The access track is rough and the route is best walked in dry weather during summer.",
    "highlights": [
      "Easternmost point of the mainland",
      "Towering sea cliffs",
      "Sweeping ocean views"
    ],
    "activities": [
      "Walking",
      "Photography"
    ]
  },
  {
    "id": "dettifoss",
    "region": "nordaustur",
    "category": "stadur",
    "name": "Dettifoss",
    "type": "Waterfall",
    "tags": [
      "Waterfall",
      "Power",
      "Landmark"
    ],
    "blurb": "Europe's most powerful waterfall, about 44 metres high and 100 metres wide.",
    "description": "Dettifoss, on the glacial river Jökulsá á Fjöllum, is considered Europe's most powerful waterfall by volume, roughly 44 metres high and about 100 metres wide with an immense flow of glacial meltwater. Just upstream lies Selfoss and downstream Hafragilsfoss, all within Jökulsárgljúfur in Vatnajökull National Park. The west bank is reached by the paved Road 862, and the east bank by the gravel Road 864, which is mainly passable in summer.",
    "highlights": [
      "Europe's most powerful waterfall",
      "Selfoss just upstream",
      "Hafragilsfoss downstream",
      "Viewing platforms on both banks"
    ],
    "accommodation": [
      {
        "name": "Accommodation around Mývatn",
        "type": "Hotels and guesthouses",
        "price": "$$"
      }
    ],
    "activities": [
      "Waterfall viewing",
      "Short walk to the viewpoints"
    ],
    "season": "Road 862 (west) often open April–December; Road 864 (east) mainly summer"
  },
  {
    "id": "seljalandsfoss",
    "region": "sudurland",
    "category": "stadur",
    "name": "Seljalandsfoss",
    "type": "Waterfall",
    "tags": [
      "Waterfall",
      "Landmark"
    ],
    "blurb": "The waterfall you can walk behind, with the hidden Gljúfrabúi next door.",
    "description": "Seljalandsfoss is a roughly 60-metre waterfall beneath Eyjafjöll, fed by glacial meltwater from Eyjafjallajökull as it drops over an ancient sea cliff. What makes it unique is that a path leads all the way behind the cascade into the hollow behind it. A short walk to the north hides its neighbour Gljúfrabúi, tucked away inside a narrow canyon. The path is often wet and slippery from the spray, so good footwear and waterproofs are essential. A parking fee is charged at the site.",
    "highlights": [
      "Walking behind the waterfall",
      "About 60 metres high",
      "The hidden Gljúfrabúi falls",
      "Wet, slippery path",
      "Paid parking"
    ],
    "accommodation": [
      {
        "name": "Accommodation beneath Eyjafjöll",
        "type": "Hotels & guesthouses",
        "price": "$$"
      }
    ],
    "activities": [
      "Waterfall walk",
      "Photography"
    ],
    "season": "All year"
  },
  {
    "id": "demantsstrondin",
    "region": "sudurland",
    "category": "stadur",
    "name": "Diamond Beach",
    "type": "Black-sand beach",
    "tags": [
      "Beach",
      "Ice",
      "Photography"
    ],
    "blurb": "Black-sand beach where ice chunks wash ashore and glisten like diamonds.",
    "description": "Diamond Beach, known in Icelandic as Fellsfjara on Breiðamerkursandur, is a jet-black sand beach just across Route 1 from Jökulsárlón. Chunks of ice drift out of the lagoon into the sea and wash back onto the shore, where they sparkle like scattered diamonds on the black sand. It is one of Iceland's most famous photography spots, especially in the low golden light of sunrise and sunset. Take great care near the ocean, as sneaker waves can surge far up the sand without warning. Diamond Beach Iceland is captivating in every season.",
    "highlights": [
      "Ice glistening on black sand",
      "Photography in golden light",
      "Right beside Jökulsárlón",
      "Jet-black Breiðamerkursandur"
    ],
    "accommodation": [
      {
        "name": "Hotels in Höfn and Öræfi",
        "type": "Hotel",
        "price": "$$$"
      },
      {
        "name": "Guesthouses and cabins",
        "type": "Guesthouse",
        "price": "$$"
      }
    ],
    "activities": [
      "Photography at sunrise and sunset",
      "Beach walking with caution",
      "Watching ice near the shoreline"
    ],
    "season": "All year"
  },
  {
    "id": "husdyragardurinn_reykjavik",
    "name": "Reykjavík Family Park and Zoo",
    "region": "hofudborg",
    "category": "afthreying",
    "type": "Zoo",
    "location": "Reykjavík",
    "tags": [
      "Family",
      "Animals",
      "Kids"
    ],
    "blurb": "Farm animals, native Icelandic wildlife and rides in Laugardalur in the heart of Reykjavík.",
    "description": "The Family Park and Zoo in Laugardalur combines a petting zoo of Icelandic farm animals with a family park full of rides. Visitors meet cows, sheep, horses, goats, foxes, seals and fish, and learn about Icelandic nature in a hands-on way. It is open year round and is a favourite with families.",
    "highlights": [
      "Icelandic farm animals such as cows, sheep and horses",
      "Seals, foxes and fish from Iceland's own nature",
      "Rides and slides in the family park"
    ],
    "activities": [
      "Watch the animals and catch a feeding session",
      "Enjoy the rides in the family park"
    ]
  },
  {
    "id": "whales_of_iceland",
    "name": "Whales of Iceland",
    "region": "hofudborg",
    "category": "afthreying",
    "type": "Exhibition",
    "location": "Reykjavík",
    "tags": [
      "Family",
      "Whales",
      "Exhibition"
    ],
    "blurb": "Europe's largest whale exhibition, with life-size whale models at the Old Harbour.",
    "description": "Whales of Iceland is an exhibition at Reykjavík's Old Harbour where visitors walk among life-size whale models, including the blue whale and the sperm whale. The darkened hall uses ambient ocean sounds and multimedia to tell the story of the whales' lives. It suits all ages and is a short walk from the city centre.",
    "highlights": [
      "Life-size whale models, including the blue whale",
      "Ambient sound and lighting that evoke the seabed",
      "Multilingual audio guide covering each species"
    ],
    "activities": [
      "Walk among the whale models with an audio guide",
      "Try interactive stations on whale song and echolocation"
    ]
  },
  {
    "id": "perlan_wonders_of_iceland",
    "name": "Perlan – Wonders of Iceland",
    "region": "hofudborg",
    "category": "afthreying",
    "type": "Exhibition",
    "location": "Reykjavík",
    "tags": [
      "Family",
      "Nature",
      "Exhibition"
    ],
    "blurb": "Interactive nature exhibition, a man-made ice cave and an observation deck on Öskjuhlíð hill.",
    "description": "Perlan on Öskjuhlíð hill houses the Wonders of Iceland exhibition, where interactive displays explore glaciers, volcanoes, caves and seabird cliffs. Highlights include a man-made ice cave, a volcano show and a planetarium with a northern lights film. The rooftop observation deck offers 360-degree views over Reykjavík.",
    "highlights": [
      "A man-made ice cave built from real snow and ice",
      "A planetarium with a northern lights show",
      "A 360-degree observation deck over Reykjavík"
    ],
    "activities": [
      "Walk through the ice cave tunnel",
      "Watch the northern lights show in the planetarium"
    ]
  },
  {
    "id": "arbaejarsafn",
    "name": "Árbær Open Air Museum",
    "region": "hofudborg",
    "category": "afthreying",
    "type": "Museum",
    "location": "Reykjavík",
    "tags": [
      "Family",
      "History",
      "Open-air"
    ],
    "blurb": "An open-air museum of old houses showing how life was lived in Reykjavík in times past.",
    "description": "Árbær Open Air Museum, part of the Reykjavík City Museum, is laid out as a small village of historic houses relocated to the site. Visitors walk among the buildings, discover old interiors and crafts, and in summer often meet farm animals and see costumed activities. Daily guided tours run all year round.",
    "highlights": [
      "Historic houses arranged as a small village",
      "A glimpse into the everyday life of old Reykjavík",
      "Farm animals and live activities in summer"
    ],
    "activities": [
      "Stroll through the village and explore the old houses",
      "Join the daily guided tour of the museum"
    ]
  },
  {
    "id": "flyover_iceland",
    "name": "FlyOver Iceland",
    "region": "hofudborg",
    "category": "afthreying",
    "type": "Exhibition",
    "location": "Reykjavík",
    "tags": [
      "Family",
      "Experience",
      "Indoor"
    ],
    "blurb": "A flight-simulation ride in the Grandi district that lets you soar over Iceland's landscapes.",
    "description": "FlyOver Iceland in Reykjavík's Grandi district is an experience where guests sit in moving seats before a giant spherical screen and soar over glaciers, fjords and famous Icelandic landmarks. Wind, mist and scents accompany the film to create the sensation of flight. It suits all ages who meet the height requirement.",
    "highlights": [
      "A giant spherical screen with moving seats",
      "Wind, mist and scents that heighten the experience",
      "A flight over glaciers, fjords and Icelandic landmarks"
    ],
    "activities": [
      "Take the flight-simulation ride over Iceland's landscapes",
      "Enjoy the pre-show before the main ride"
    ]
  },
  {
    "id": "aurora_reykjavik",
    "name": "Aurora Reykjavík",
    "region": "hofudborg",
    "category": "afthreying",
    "type": "Exhibition",
    "location": "Reykjavík",
    "tags": [
      "Family",
      "Northern lights",
      "Indoor"
    ],
    "blurb": "A northern lights centre in the Grandi district where you can learn about and experience the aurora all year round.",
    "description": "Aurora Reykjavík is an exhibition in the Grandi district dedicated to the northern lights. Visitors learn about the aurora through science, stories and photography, watch the lights on a large screen and try interactive stations and virtual reality. Open all year, it lets guests experience the northern lights regardless of the weather.",
    "highlights": [
      "Displays on the science and history of the aurora",
      "A large screen showing northern lights footage",
      "Interactive stations and a virtual reality experience"
    ],
    "activities": [
      "Watch a northern lights film on the big screen",
      "Try the aurora virtual reality experience"
    ]
  },
  {
    "id": "vikingaheimar",
    "name": "Viking World",
    "region": "reykjanes",
    "category": "afthreying",
    "type": "Museum",
    "location": "Njarðvík",
    "tags": [
      "Family",
      "Vikings",
      "History"
    ],
    "blurb": "A museum in Njarðvík home to the Viking ship Íslendingur and exhibitions on settlement and seafaring.",
    "description": "Viking World stands by the sea in Njarðvík, Reykjanesbær, and houses five exhibitions on Vikings, the settlement of Iceland and Norse seafaring. Its centrepiece is the Viking ship Íslendingur, an exact replica that sailed to America in the year 2000. In summer the museum adds a settlement zoo, a playground and an outdoor classroom.",
    "highlights": [
      "The full-size Viking ship Íslendingur",
      "Five exhibitions on Vikings and the settlement",
      "A settlement zoo and playground in summer"
    ],
    "activities": [
      "Explore the Viking ship Íslendingur and the exhibitions",
      "Visit the settlement zoo in summer"
    ]
  },
  {
    "id": "duus_safnahus",
    "name": "Duus Museum",
    "region": "reykjanes",
    "category": "afthreying",
    "type": "Museum",
    "location": "Keflavík",
    "tags": [
      "Family",
      "Culture",
      "History"
    ],
    "blurb": "The art and cultural centre of Reykjanesbær by the harbour in Keflavík.",
    "description": "Duus Museum is the art and cultural centre of Reykjanesbær, set in a former merchant's warehouse from 1877 by the harbour in Keflavík. Under one roof it holds the local heritage museum, the art gallery and the Reykjanes Geopark visitor centre. A large collection of model ships is a highlight for children. Rotating exhibitions change throughout the year.",
    "highlights": [
      "A historic 1877 warehouse by the harbour",
      "A large collection of wooden model ships",
      "Heritage museum, art gallery and geopark centre"
    ],
    "activities": [
      "View the model ships and the heritage displays",
      "Enjoy the rotating art exhibitions throughout the year"
    ]
  },
  {
    "id": "rokksafn_islands",
    "name": "Icelandic Museum of Rock 'n' Roll",
    "region": "reykjanes",
    "category": "afthreying",
    "type": "Museum",
    "location": "Keflavík",
    "tags": [
      "Family",
      "Music",
      "Interactive"
    ],
    "blurb": "An interactive museum on the history of Icelandic popular music in Reykjanesbær.",
    "description": "The Icelandic Museum of Rock 'n' Roll in Reykjanesbær traces the story of Icelandic pop and rock music from the early twentieth century to the present day. The museum is interactive, with sound booths, instruments and multimedia where visitors can listen, play and learn. It lies close to Keflavík Airport and suits all ages.",
    "highlights": [
      "The story of Icelandic popular music in one place",
      "Interactive sound booths and instruments",
      "Multimedia on well-known Icelandic musicians"
    ],
    "activities": [
      "Try the instruments and sing in a sound booth",
      "Listen to Icelandic music through the decades"
    ]
  },
  {
    "id": "landnamssetur_borgarnes",
    "name": "The Settlement Center",
    "region": "vesturland",
    "category": "afthreying",
    "type": "Museum",
    "location": "Borgarnes",
    "tags": [
      "Family",
      "History",
      "Sagas"
    ],
    "blurb": "Exhibitions on the settlement of Iceland and Egil's Saga in the heart of Borgarnes.",
    "description": "The Settlement Center in Borgarnes houses two audio-guided exhibitions, one on the settlement of Iceland and the other on Egil's Saga and the fate of Egill Skallagrímsson. Set in old houses by the sea, it also has a restaurant. The exhibitions tell the stories in a vivid and visual way for all ages.",
    "highlights": [
      "An audio-guided exhibition on Iceland's settlement",
      "An exhibition on Egil's Saga and Egill Skallagrímsson",
      "Historic houses by the sea in Borgarnes"
    ],
    "activities": [
      "Explore the settlement exhibition with an audio guide",
      "Discover Egil's Saga in the saga exhibition"
    ]
  },
  {
    "id": "haafell_geitfjarsetur",
    "name": "Háafell Goat Farm",
    "region": "vesturland",
    "category": "afthreying",
    "type": "Animal farm",
    "location": "Borgarfjörður",
    "tags": [
      "Family",
      "Animals",
      "Countryside"
    ],
    "blurb": "A goat farm in Borgarfjörður where visitors get to know the Icelandic goat.",
    "description": "Háafell Goat Farm in Borgarfjörður is a working farm dedicated to preserving the Icelandic goat breed that opens its doors to visitors in summer. Friendly, people-loving goats greet guests, who learn about the Icelandic goat and the story of the farm. The on-site shop sells goat products, soaps, creams and handicrafts.",
    "highlights": [
      "Friendly, people-loving Icelandic goats",
      "Learning about preserving the goat breed",
      "A shop with goat products and handicrafts"
    ],
    "activities": [
      "Meet and pet the goats",
      "Browse goat products and crafts in the shop"
    ]
  },
  {
    "id": "erpsstadir_rjomabu",
    "name": "Erpsstaðir Creamery",
    "region": "vesturland",
    "category": "afthreying",
    "type": "Animal farm",
    "location": "Dalir",
    "tags": [
      "Family",
      "Animals",
      "Ice cream"
    ],
    "blurb": "A family-run dairy farm in the Dalir region with homemade ice cream, skyr and a petting zoo.",
    "description": "Erpsstaðir Creamery is a family-run dairy farm in the Dalir region of West Iceland, known for its homemade ice cream, skyr and cheeses. Visitors can taste and buy dairy products straight from the farm, meet the animals in a small petting zoo and let children enjoy the play area. It sits on Route 60 near Búðardalur and is a popular stop.",
    "highlights": [
      "Homemade ice cream and skyr straight from the farm",
      "A small petting zoo with farm animals",
      "A play area and outdoor space for children"
    ],
    "activities": [
      "Taste homemade ice cream and dairy products",
      "Visit the farm animals in the petting zoo"
    ]
  },
  {
    "id": "slakki-dyragardur",
    "name": "Slakki Petting Zoo",
    "region": "sudurland",
    "category": "afthreying",
    "type": "Zoo",
    "location": "Laugarás",
    "tags": [
      "Family",
      "Animals",
      "Kids",
      "Indoor"
    ],
    "blurb": "A cosy petting zoo in Laugarás where children can meet and touch calves, rabbits, guinea pigs and more.",
    "description": "Slakki is a much-loved petting zoo in Laugarás in the South Iceland highlands, just off the Golden Circle. Visitors can pet and feed calves, rabbits, guinea pigs, kittens, ducks, turtles and other animals. The site also has a playground, mini golf and a café, making it an easy stop for families with young children.",
    "highlights": [
      "Hands-on animal petting and feeding",
      "Indoor playground and mini golf",
      "Close to the Golden Circle route"
    ],
    "activities": [
      "Pet and feed the farm animals",
      "Play in the play area and try mini golf"
    ]
  },
  {
    "id": "lava-centre-hvolsvollur",
    "name": "LAVA Centre",
    "region": "sudurland",
    "category": "afthreying",
    "type": "Exhibition",
    "location": "Hvolsvöllur",
    "tags": [
      "Family",
      "Volcanoes",
      "Interactive",
      "Indoor"
    ],
    "blurb": "An interactive exhibition about Iceland's volcanoes, earthquakes and geology in the heart of Hvolsvöllur.",
    "description": "LAVA Centre is a high-tech, interactive exhibition in Hvolsvöllur that explores volcanic activity, earthquakes and the making of the Icelandic landscape. Visitors move through halls filled with animations, soundscapes and models that bring magma, volcanic zones and tectonic plates to life. Suitable for all ages, it offers great context before heading out into South Iceland's volcanic scenery.",
    "highlights": [
      "Interactive volcano exhibition",
      "Models of volcanic zones and plate boundaries",
      "Open year-round"
    ],
    "activities": [
      "Walk through the interactive exhibition halls",
      "Learn about Iceland's eruptions and earthquakes"
    ]
  },
  {
    "id": "efstidalur-ii",
    "name": "Efstidalur II",
    "region": "sudurland",
    "category": "afthreying",
    "type": "Animal farm",
    "location": "Bláskógabyggð",
    "tags": [
      "Family",
      "Animals",
      "Ice cream",
      "Countryside"
    ],
    "blurb": "A family farm on the Golden Circle with a cowshed café, homemade ice cream and animals all around.",
    "description": "Efstidalur II is a working dairy farm in Bláskógabyggð, between Laugarvatn and Geysir, that warmly welcomes visitors. In the cowshed café you can enjoy homemade ice cream made from the farm's own milk while watching the cows through large windows. Around the farm are horses, calves and other animals, making it a fun stop for families on the Golden Circle.",
    "highlights": [
      "Homemade ice cream in the cowshed café",
      "Views over the cows in the barn",
      "Horses and farm animals on site"
    ],
    "activities": [
      "Taste ice cream and food from the farm's produce",
      "See the animals and farm life"
    ]
  },
  {
    "id": "icelandic-lava-show-vik",
    "name": "Icelandic Lava Show",
    "region": "sudurland",
    "category": "afthreying",
    "type": "Exhibition",
    "location": "Vík í Mýrdal",
    "tags": [
      "Family",
      "Volcanoes",
      "Show",
      "Indoor"
    ],
    "blurb": "A live show where real molten lava is poured in front of the audience in Vík.",
    "description": "The Icelandic Lava Show in Vík is a unique experience where rock is melted to over a thousand degrees and glowing lava is poured in front of the audience. Guests feel the heat, see the colours and hear the sounds of flowing lava in a safe, indoor setting. Knowledgeable hosts explain Iceland's volcanism, making the show both thrilling and educational for the whole family.",
    "highlights": [
      "Real molten lava poured live",
      "Feel the heat of glowing lava",
      "Learn about Iceland's eruptions"
    ],
    "activities": [
      "Watch the live lava show",
      "Learn about the properties of lava and volcanism"
    ]
  },
  {
    "id": "eldheimar-vestmannaeyjar",
    "name": "Eldheimar",
    "region": "sudurland",
    "category": "afthreying",
    "type": "Museum",
    "location": "Vestmannaeyjar",
    "tags": [
      "Family",
      "Eruption",
      "History",
      "Indoor"
    ],
    "blurb": "A volcano museum in the Westman Islands built around a house buried in ash by the 1973 eruption.",
    "description": "Eldheimar is a powerful volcano museum in the Westman Islands telling the story of the 1973 eruption on Heimaey. The museum is built around a house that was buried in ash and later excavated, offering a striking insight into the night the townspeople had to flee. Interactive displays and personal accounts make the visit moving for all ages.",
    "highlights": [
      "A house excavated from the 1973 ash",
      "Stories of the town's evacuation",
      "Exhibits on the Surtsey eruption"
    ],
    "activities": [
      "View the excavated house and exhibition",
      "Learn about the eruption and its impact on Heimaey"
    ]
  },
  {
    "id": "sea-life-trust-beluga-sanctuary",
    "name": "SEA LIFE Trust Beluga Whale Sanctuary",
    "region": "sudurland",
    "category": "afthreying",
    "type": "Exhibition",
    "location": "Vestmannaeyjar",
    "tags": [
      "Family",
      "Animals",
      "Puffins",
      "Marine life"
    ],
    "blurb": "A visitor centre in the Westman Islands with an aquarium, rescued puffins and beluga whales in Klettsvík bay.",
    "description": "The SEA LIFE Trust Beluga Whale Sanctuary in the Westman Islands is home to two beluga whales that travelled a long way to a natural bay by the island. The harbour-side visitor centre features an aquarium of local marine life and a puffin rescue, including the well-known Tóti. The exhibition teaches visitors about the whales, the sea life and the puffin colony, and is fun and educational for children.",
    "highlights": [
      "Meet rescued puffins",
      "Aquarium of local marine life",
      "Learn about the belugas in Klettsvík bay"
    ],
    "activities": [
      "See the puffins and the aquarium",
      "Learn about the belugas and the conservation work"
    ]
  },
  {
    "id": "skogasafn-skogar-museum",
    "name": "Skógar Museum",
    "region": "sudurland",
    "category": "afthreying",
    "type": "Museum",
    "location": "Skógar",
    "tags": [
      "Family",
      "History",
      "Culture",
      "Turf houses"
    ],
    "blurb": "A folk museum in Skógar with thousands of artefacts, turf houses and old buildings showing Iceland's rural past.",
    "description": "Skógar Museum beneath Eyjafjöll is one of Iceland's largest folk museums, holding thousands of artefacts that illuminate how Icelanders lived and worked in centuries past. The grounds feature old turf houses, a church and buildings that visitors can step inside to experience earlier ways of life. There is also a transport and technology museum, making the visit varied for the whole family.",
    "highlights": [
      "Old turf houses and a church to explore",
      "Thousands of artefacts from rural life",
      "Transport and technology museum"
    ],
    "activities": [
      "Walk through turf houses and old buildings",
      "View artefacts and learn about Icelandic heritage"
    ]
  },
  {
    "id": "hestheimar-horse-farm",
    "name": "Hestheimar",
    "region": "sudurland",
    "category": "afthreying",
    "type": "Animal farm",
    "location": "Ásahreppur",
    "tags": [
      "Family",
      "Horses",
      "Countryside",
      "Outdoors"
    ],
    "blurb": "A family-run horse farm near Hella offering riding tours for beginners and experienced riders alike.",
    "description": "Hestheimar is a family-run horse farm and guesthouse in Ásahreppur, close to Hella and just off the Ring Road. It offers riding tours on Icelandic horses for both beginners and more experienced riders, with views towards Hekla and Eyjafjallajökull. The farm warmly welcomes families and is a great place to meet the Icelandic horse and experience rural life in South Iceland.",
    "highlights": [
      "Riding tours for beginners and experienced riders",
      "Meet the Icelandic horse up close",
      "Views towards Hekla and glaciers"
    ],
    "activities": [
      "Take a riding tour on Icelandic horses",
      "Get to know the horses and farm life"
    ]
  },
  {
    "id": "sogusetrid-saga-centre",
    "name": "Saga Centre",
    "region": "sudurland",
    "category": "afthreying",
    "type": "Museum",
    "location": "Hvolsvöllur",
    "tags": [
      "Family",
      "History",
      "Vikings",
      "Culture"
    ],
    "blurb": "A saga exhibition in Hvolsvöllur dedicated to Njáls saga, with a Viking hall and a giant tapestry.",
    "description": "The Saga Centre in Hvolsvöllur is a museum dedicated to Njáls saga, one of the best-known Icelandic sagas, and the events that unfolded in the Rangárvellir region. Visitors walk through an exhibition of artefacts and images and a Viking hall that brings the saga's world to life. It is also home to the ambitious Njála tapestry, a long embroidered artwork that guests can even help create.",
    "highlights": [
      "Exhibition on Njáls saga",
      "Viking hall with a historical setting",
      "The great Njála tapestry"
    ],
    "activities": [
      "Explore the exhibition on the Icelandic sagas",
      "Discover the setting of Njáls saga"
    ]
  },
  {
    "id": "sveitagardurinn-petting-zoo",
    "name": "Sveitagarðurinn",
    "region": "sudurland",
    "category": "afthreying",
    "type": "Zoo",
    "location": "Grímsnes",
    "tags": [
      "Family",
      "Animals",
      "Kids",
      "Countryside"
    ],
    "blurb": "A petting zoo and play park in Grímsnes where children can get close to farm animals.",
    "description": "Sveitagarðurinn is a petting zoo and play park in Grímsnes, close to Selfoss and the Golden Circle. It is home to horses, calves, pigs, sheep, goats, chickens, ducks, rabbits and kittens that children can get close to and get to know. The site also has a play area, making it an enjoyable stop for families in summer.",
    "highlights": [
      "A variety of farm animals to pet",
      "Play area for children",
      "Close to Selfoss and the Golden Circle"
    ],
    "activities": [
      "Pet and meet the farm animals",
      "Play in the play park"
    ]
  },
  {
    "id": "selasetur-islands",
    "name": "The Icelandic Seal Center",
    "region": "nordvestur",
    "category": "afthreying",
    "type": "Museum",
    "location": "Hvammstangi",
    "tags": [
      "Family",
      "Wildlife",
      "Educational",
      "Indoor"
    ],
    "blurb": "Interactive seal exhibition in the red harbour house at Hvammstangi.",
    "description": "The Icelandic Seal Center is a research and education facility dedicated to Iceland's harbour and grey seals. Exhibitions explain seal biology, distribution and the long relationship between seals and people since settlement. It makes a perfect first stop before heading out onto the Vatnsnes peninsula to watch seals in the wild.",
    "highlights": [
      "Interactive seal exhibition",
      "Advice on the best seal-watching spots on Vatnsnes",
      "The landmark red harbour building"
    ],
    "activities": [
      "Explore the seal exhibition",
      "Get seal-watching tips for Vatnsnes"
    ]
  },
  {
    "id": "glaumbaer-torfbaer",
    "name": "Glaumbaer Turf Farm Museum",
    "region": "nordvestur",
    "category": "afthreying",
    "type": "Museum",
    "location": "Skagafjordur",
    "tags": [
      "Family",
      "History",
      "Turf house",
      "Culture"
    ],
    "blurb": "A historic turf farm in Skagafjordur where old rural life comes alive.",
    "description": "Glaumbaer preserves one of Iceland's best-known turf farms, built from turf, stone and timber. Visitors walk through the interconnected rooms, where furnishings and everyday objects show how people lived in the Icelandic countryside in centuries past. The site also includes two old timber houses and a cosy cafe.",
    "highlights": [
      "Beautifully preserved turf farmhouse",
      "Period furnishings and household objects",
      "Cafe in a historic timber house"
    ],
    "activities": [
      "Walk through the turf farm rooms",
      "Learn about historic rural life"
    ]
  },
  {
    "id": "1238-orrusta-islands",
    "name": "1238: The Battle of Iceland",
    "region": "nordvestur",
    "category": "afthreying",
    "type": "Exhibition",
    "location": "Saudarkrokur",
    "tags": [
      "Family",
      "History",
      "Virtual reality",
      "Indoor"
    ],
    "blurb": "Interactive Sturlung-era exhibition with virtual and augmented reality.",
    "description": "1238: The Battle of Iceland is a modern experience in the heart of Saudarkrokur that brings the violent conflicts of the Sturlung era to life. Using virtual reality, augmented reality and hands-on storytelling, visitors relive the Battle of Orlygsstadir, the largest battle in Icelandic history. The exhibition engages all ages and makes history vivid in an innovative way.",
    "highlights": [
      "Become a virtual viking in VR",
      "The Battle of Orlygsstadir comes alive",
      "On-site bistro and gift shop"
    ],
    "activities": [
      "Experience a battle in virtual reality",
      "Explore the interactive history exhibition"
    ]
  },
  {
    "id": "brunastadir-dyrabaer",
    "name": "Brunastadir Petting Zoo",
    "region": "nordvestur",
    "category": "afthreying",
    "type": "Animal farm",
    "location": "Fljot, Skagafjordur",
    "tags": [
      "Family",
      "Farm animals",
      "Countryside",
      "Kids"
    ],
    "blurb": "A family-run petting zoo in Fljot with many friendly farm animals.",
    "description": "At Brunastadir in the Fljot district, farmers run a welcoming petting zoo where visitors get close to Icelandic farm animals. Among them are goats, pigs, rabbits, chickens, turkeys, lambs, calves and horses. There is also a farm store selling homemade products and ice cream.",
    "highlights": [
      "Close contact with many friendly farm animals",
      "Farm store with homemade goat cheese",
      "Soft-serve ice cream and refreshments"
    ],
    "activities": [
      "Feed and pet the farm animals",
      "Buy homemade produce in the farm store"
    ]
  },
  {
    "id": "hvalasafnid-husavik",
    "name": "Husavik Whale Museum",
    "region": "nordaustur",
    "category": "afthreying",
    "type": "Museum",
    "location": "Husavik",
    "tags": [
      "Family",
      "Whales",
      "Educational",
      "Indoor"
    ],
    "blurb": "One of the world's few whale museums, in the whale-watching town of Husavik.",
    "description": "The Husavik Whale Museum is dedicated to whales and marine life, housed in a former slaughterhouse by the harbour. It displays full whale skeletons suspended from the ceiling alongside informative exhibits on whale ecology and conservation. It is a perfect stop before or after a whale-watching tour.",
    "highlights": [
      "Full whale skeletons on display",
      "Exhibits on whale biology and conservation",
      "Right by the Husavik harbour"
    ],
    "activities": [
      "View skeletons and exhibitions",
      "Learn about whales before a whale-watching tour"
    ]
  },
  {
    "id": "jolagardurinn-akureyri",
    "name": "The Christmas Garden",
    "region": "nordaustur",
    "category": "afthreying",
    "type": "Exhibition",
    "location": "Eyjafjardarsveit",
    "tags": [
      "Family",
      "Christmas",
      "Shop",
      "Garden"
    ],
    "blurb": "Year-round Christmas cheer in a gingerbread house just south of Akureyri.",
    "description": "The Christmas Garden is a delightful destination where Christmas reigns all year round. The red house resembles a gingerbread house, and inside you will find Christmas decorations from around the world alongside Icelandic Christmas items and handicrafts. A pretty garden surrounds the house, with benches and a tower that holds a giant Advent calendar.",
    "highlights": [
      "Gingerbread-style house full of decorations",
      "Pretty garden with benches",
      "Tower with a giant Advent calendar"
    ],
    "activities": [
      "Browse Christmas decorations and handicrafts",
      "Stroll the garden and relax"
    ]
  },
  {
    "id": "lystigardur-akureyrar",
    "name": "Akureyri Botanical Garden",
    "region": "nordaustur",
    "category": "afthreying",
    "type": "Botanical garden",
    "location": "Akureyri",
    "tags": [
      "Family",
      "Garden",
      "Plants",
      "Outdoors"
    ],
    "blurb": "A beautiful botanical garden in the heart of Akureyri with diverse plants.",
    "description": "The Akureyri Botanical Garden is one of the world's northernmost botanical gardens, showcasing a wide range of Icelandic and foreign plants. The garden is sheltered and well tended, with paths, flowerbeds and benches where you can sit and relax. Entry is free, and it is a popular resting spot for families in summer.",
    "highlights": [
      "Diverse plant collections and flowerbeds",
      "Sheltered paths and benches",
      "Free admission"
    ],
    "activities": [
      "Stroll the garden and admire the plants",
      "Sit and enjoy the outdoors"
    ]
  },
  {
    "id": "motorhjolasafn-islands",
    "name": "The Motorcycle Museum of Iceland",
    "region": "nordaustur",
    "category": "afthreying",
    "type": "Museum",
    "location": "Akureyri",
    "tags": [
      "Family",
      "Vehicles",
      "History",
      "Indoor"
    ],
    "blurb": "A museum devoted to the history of motorcycles in Iceland, at Krokeyri in Akureyri.",
    "description": "The Motorcycle Museum of Iceland holds a varied collection of motorcycles spanning their history in the country. Visitors can view old and new bikes alongside objects and photographs that illustrate Icelandic motorcycle culture. The museum is interesting for the whole family, especially those fascinated by vehicles.",
    "highlights": [
      "Varied collection of motorcycles",
      "Objects and photos from motorcycling history",
      "Indoor activity in Akureyri"
    ],
    "activities": [
      "Explore the motorcycle collection",
      "Learn about the history of bikes in Iceland"
    ]
  },
  {
    "id": "daladyrd-dyrabaer",
    "name": "Daladyrd Petting Zoo",
    "region": "nordaustur",
    "category": "afthreying",
    "type": "Animal farm",
    "location": "Fnjoskadalur",
    "tags": [
      "Family",
      "Farm animals",
      "Countryside",
      "Kids"
    ],
    "blurb": "A family-run petting zoo in Fnjoskadalur valley with diverse animals.",
    "description": "Daladyrd is a friendly petting zoo at Brunagerdi farm in the Fnjoskadalur valley, where visitors get close to Icelandic farm animals. You will find horses, sheep, goats, rabbits, cats, dogs, pigs, cows and chickens of various breeds. There is also a small cafe emphasising products from the farm.",
    "highlights": [
      "Diverse farm animals to pet",
      "Farm produce in the cafe",
      "The scenic Fnjoskadalur valley"
    ],
    "activities": [
      "Feed and pet the farm animals",
      "Enjoy refreshments in the cafe"
    ]
  },
  {
    "id": "kjarnaskogur-akureyri",
    "name": "Kjarnaskogur Forest",
    "region": "nordaustur",
    "category": "afthreying",
    "type": "Family park",
    "location": "Akureyri",
    "tags": [
      "Family",
      "Outdoors",
      "Playground",
      "Forest"
    ],
    "blurb": "Iceland's most-visited forest, with playgrounds and trails by Akureyri.",
    "description": "Kjarnaskogur lies just south of Akureyri and is one of Iceland's most popular outdoor recreation areas. The forest has children's playgrounds, walking and cycling trails, barbecue areas and varied facilities for families. It is sheltered and well suited to walks, play and time outdoors in beautiful surroundings.",
    "highlights": [
      "Three children's playgrounds",
      "Illuminated walking trails",
      "Barbecue and picnic areas"
    ],
    "activities": [
      "Play at the playgrounds",
      "Walk or cycle the trails"
    ]
  },
  {
    "id": "skrimslasetrid-bildudalur",
    "name": "The Icelandic Sea Monster Museum",
    "region": "vestfirdir",
    "category": "afthreying",
    "type": "Museum",
    "location": "Bíldudalur",
    "tags": [
      "Family",
      "Indoor",
      "Rainy day",
      "Folklore",
      "Kids"
    ],
    "blurb": "A museum devoted to the sea monsters of Arnarfjörður.",
    "description": "The Sea Monster Museum in Bíldudalur tells the tales of the many sea monsters said to haunt Arnarfjörður and the wider Westfjords. The exhibition mixes folklore, eyewitness accounts and multimedia in a way that keeps both children and adults engaged. There is a cosy coffee shop on site.",
    "highlights": [
      "Lively multimedia sea-monster exhibition",
      "Local folklore and eyewitness stories",
      "Coffee shop on site"
    ],
    "activities": [
      "Explore the sea-monster exhibition",
      "Relax in the coffee shop"
    ]
  },
  {
    "id": "melrakkasetur-sudavik",
    "name": "The Arctic Fox Centre",
    "region": "vestfirdir",
    "category": "afthreying",
    "type": "Center",
    "location": "Súðavík",
    "tags": [
      "Family",
      "Animals",
      "Nature",
      "Indoor",
      "Kids"
    ],
    "blurb": "A nature centre about the Icelandic arctic fox in Súðavík.",
    "description": "The Arctic Fox Centre in Súðavík is a nature centre dedicated to Iceland's only native land mammal, the arctic fox. The exhibition covers the animal's life, the history of fox hunting and ongoing research, and orphaned fox cubs are often cared for at the centre over the summer. It is housed in Eyrardalur, the oldest house in Súðavík.",
    "highlights": [
      "Exhibition on the Icelandic arctic fox",
      "Live fox cubs often on show in summer",
      "Cosy café in a historic house"
    ],
    "activities": [
      "Learn about the life of the arctic fox",
      "Enjoy coffee and waffles at Eyrardalur"
    ]
  },
  {
    "id": "galdrasyning-holmavik",
    "name": "Museum of Icelandic Sorcery & Witchcraft",
    "region": "vestfirdir",
    "category": "afthreying",
    "type": "Exhibition",
    "location": "Hólmavík",
    "tags": [
      "Family",
      "History",
      "Folklore",
      "Indoor",
      "Rainy day"
    ],
    "blurb": "An exhibition on sorcery and the witch-hunts of Strandir.",
    "description": "The Museum of Icelandic Sorcery & Witchcraft in Hólmavík explores Iceland's magical traditions, its runic staves and the witch persecutions of the 17th century. The exhibition paints a vivid and at times eerie picture of the superstition and sorcery of earlier centuries through objects, texts and reconstructions. There is also a restaurant on site focusing on local ingredients.",
    "highlights": [
      "Magical staves and Icelandic sorcery",
      "The history of 17th-century witch-hunts",
      "Restaurant using local ingredients"
    ],
    "activities": [
      "Explore the sorcery exhibition",
      "Dine at the on-site restaurant"
    ]
  },
  {
    "id": "obyggdasetur-fljotsdalur",
    "name": "The Wilderness Center",
    "region": "austurland",
    "category": "afthreying",
    "type": "Center",
    "location": "Fljótsdalur",
    "tags": [
      "Family",
      "History",
      "Nature",
      "Horses",
      "Countryside"
    ],
    "blurb": "A culture and experience centre on the edge of the highlands.",
    "description": "The Wilderness Center lies in Norðurdalur in Fljótsdalur, on the edge of the largest uninhabited area in Northern Europe. It houses a living exhibition on the history of highland travel and the struggle for survival at the edge of the wilderness, along with accommodation, dining and outdoor areas for guests. Horse riding and other experiences are offered in dramatic surroundings.",
    "highlights": [
      "Exhibition on the history of highland travel",
      "Dramatic setting at the edge of the highlands",
      "Horse riding and outdoor activities"
    ],
    "activities": [
      "Explore the wilderness exhibition",
      "Take a short horse ride"
    ]
  },
  {
    "id": "steinasafn-petru-stodvarfjordur",
    "name": "Petra's Stone Collection",
    "region": "austurland",
    "category": "afthreying",
    "type": "Museum",
    "location": "Stöðvarfjörður",
    "tags": [
      "Family",
      "Nature",
      "Minerals",
      "Garden",
      "Kids"
    ],
    "blurb": "One of the world's largest private stone collections.",
    "description": "Petra's Stone Collection in Stöðvarfjörður holds the life's work of Petra Sveinsdóttir, who spent decades gathering stones and crystals from the nature of the East Fjords. The collection is displayed both indoors and in a beautiful garden around Petra's former home, where colourful stones lie in rows everywhere. It is a unique experience for anyone captivated by minerals and the craftsmanship of nature.",
    "highlights": [
      "The life's work of collector Petra",
      "Colourful stones in the garden and indoors",
      "Charming setting in a former home"
    ],
    "activities": [
      "Look at stones and crystals",
      "Wander through the stone garden"
    ]
  },
  {
    "id": "skriduklaustur-fljotsdalur",
    "name": "Skriðuklaustur",
    "region": "austurland",
    "category": "afthreying",
    "type": "Center",
    "location": "Fljótsdalur",
    "tags": [
      "Family",
      "History",
      "Culture",
      "Indoor",
      "Countryside"
    ],
    "blurb": "A culture centre and historic site in the author's house.",
    "description": "Skriðuklaustur in Fljótsdalur is a culture centre set in the grand 1939 house of author Gunnar Gunnarsson. It features exhibitions on the author and on the medieval monastery that once stood here, a varied programme of cultural events, and the restaurant Klausturkaffi. The grounds are family-friendly, with paths and a play area for children.",
    "highlights": [
      "The historic house of Gunnar Gunnarsson",
      "Exhibition on the medieval monastery",
      "Klausturkaffi with local ingredients"
    ],
    "activities": [
      "Explore the exhibitions and the author's house",
      "Enjoy a meal at Klausturkaffi"
    ]
  },
  {
    "id": "osvor-bolungarvik",
    "name": "Ósvör Maritime Museum",
    "region": "vestfirdir",
    "category": "afthreying",
    "type": "Museum",
    "location": "Bolungarvík",
    "tags": [
      "Family",
      "History",
      "Fishing",
      "Outdoor",
      "Culture"
    ],
    "blurb": "A reconstructed fishing station from the age of rowing boats.",
    "description": "Ósvör near Bolungarvík is a reconstructed fishing station showing how fishing was carried out in the days of rowing boats. Here you can see the salt house, drying shed, fishermen's hut and a traditional six-oared boat, often with a guide dressed in the skin clothing of bygone fishermen. It offers a vivid insight into the hard lives of Westfjords fishermen.",
    "highlights": [
      "Reconstructed fishing hut and rowing boat",
      "Guide in traditional skin clothing",
      "Insight into old-style fishing"
    ],
    "activities": [
      "Explore the fishing station and boat",
      "Learn about the lives of past fishermen"
    ]
  },
  {
    "id": "minjasafn-austurlands-egilsstadir",
    "name": "East Iceland Heritage Museum",
    "region": "austurland",
    "category": "afthreying",
    "type": "Museum",
    "location": "Egilsstaðir",
    "tags": [
      "Family",
      "History",
      "Reindeer",
      "Indoor",
      "Rainy day"
    ],
    "blurb": "The cultural history of East Iceland and a reindeer exhibition.",
    "description": "The East Iceland Heritage Museum in Egilsstaðir preserves and presents the cultural history, traditions and community life of the East Fjords. Its permanent exhibitions include one on reindeer in East Iceland and another, Sustainable Unit, on the old Icelandic turf farm. The museum is indoors and suitable in any season.",
    "highlights": [
      "Exhibition on East Iceland's reindeer",
      "Cultural history and the old Icelandic farm",
      "Central location in Egilsstaðir"
    ],
    "activities": [
      "See the reindeer exhibition",
      "Learn about East Fjords cultural history"
    ]
  },
  {
    "id": "samuel-jonsson-selardalur",
    "name": "Samúel Jónsson's Art Farm",
    "region": "vestfirdir",
    "category": "afthreying",
    "type": "Museum",
    "location": "Selárdalur",
    "tags": [
      "Family",
      "Art",
      "Outdoor",
      "Culture",
      "Nature"
    ],
    "blurb": "The folk art of Samúel Jónsson in a remote valley.",
    "description": "In Selárdalur at the outer edge of Arnarfjörður stands the art farm of Samúel Jónsson, a self-taught folk artist often called the artist with a child's heart. Here he built a church, an art house and many concrete sculptures, including a lion fountain and statues, with no formal art training. The works stand in the open air and are open to visitors through the summer.",
    "highlights": [
      "Concrete sculptures and a lion fountain",
      "Samúel's church and art house",
      "A remote and unique setting"
    ],
    "activities": [
      "Wander the outdoor art site",
      "See the church and the sculptures"
    ]
  },
  {
    "id": "hrafnseyri-jon-sigurdsson",
    "name": "Hrafnseyri – Jón Sigurðsson Museum",
    "region": "vestfirdir",
    "category": "afthreying",
    "type": "Museum",
    "location": "Arnarfjörður",
    "tags": [
      "Family",
      "History",
      "Culture",
      "Indoor",
      "Countryside"
    ],
    "blurb": "The birthplace and museum of Jón Sigurðsson by Arnarfjörður.",
    "description": "Hrafnseyri by Arnarfjörður is the birthplace of Jón Sigurðsson, leader of Iceland's campaign for independence. The site has a museum on his life and work, a reconstructed turf farm and a small café, surrounded by the beautiful nature of the Westfjords. Here you can learn about one of the most important figures in Icelandic history.",
    "highlights": [
      "Museum on Jón Sigurðsson",
      "Reconstructed turf farm",
      "Café and scenic surroundings"
    ],
    "activities": [
      "Explore the Jón Sigurðsson museum",
      "Walk around the turf farm and grounds"
    ]
  },
  {
    "id": "papeyjarferdir-djupivogur",
    "name": "Papey Island Boat Tours",
    "region": "austurland",
    "category": "afthreying",
    "type": "Boat tour",
    "location": "Djúpivogur",
    "tags": [
      "Family",
      "Wildlife",
      "Puffins",
      "Boat tour",
      "Nature"
    ],
    "blurb": "A boat trip to the puffin island of Papey from Djúpivogur.",
    "description": "Papey Island Boat Tours run boat trips from Djúpivogur out to the island of Papey, home to a large puffin colony and rich birdlife. On the trip you walk around the island with a guide, see the old lighthouse and learn about its history. It is an enjoyable experience for families and bird enthusiasts through the summer.",
    "highlights": [
      "Boat trip out to Papey",
      "Puffin colony and varied birdlife",
      "Guided walk around the island"
    ],
    "activities": [
      "Sail to Papey island",
      "Watch puffins and birdlife"
    ]
  },
  {
    "id": "eimverk_distillery",
    "name": "Eimverk Distillery (Flóki)",
    "region": "hofudborg",
    "category": "heimavara",
    "type": "Distillery",
    "location": "Garðabær",
    "website": "https://www.flokiwhisky.is",
    "tags": [
      "Local",
      "Distillery",
      "Whisky",
      "Family-run"
    ],
    "blurb": "Iceland's first whisky distillery, made entirely from Icelandic barley.",
    "description": "This family-run distillery in Garðabær makes Flóki single malt whisky, Vor gin and Víti brennivín, all from 100% Icelandic barley. Guided tours with tastings run by appointment, and an on-site shop sells the full range of spirits and gifts.",
    "highlights": [
      "Guided tour and tasting by appointment",
      "Flóki whisky, Vor gin and Víti brennivín",
      "On-site shop open weekdays"
    ]
  },
  {
    "id": "alafoss_ullarverslun",
    "name": "Álafoss Wool Store",
    "region": "hofudborg",
    "category": "heimavara",
    "type": "Crafts",
    "location": "Mosfellsbær",
    "website": "https://alafoss.is",
    "tags": [
      "Local",
      "Wool",
      "Lopapeysa",
      "Crafts"
    ],
    "blurb": "Historic wool store in Álafosskvos selling lopi yarn and sweaters.",
    "description": "Álafoss has worked with Icelandic wool since 1896, and its store in Álafosskvos in Mosfellsbær sells lopi yarn, wool, hand-knitted lopapeysa sweaters and wool goods. The little valley itself is a scenic heritage spot beside the old wool mill.",
    "highlights": [
      "Icelandic lopi yarn and wool",
      "Hand-knitted lopapeysa sweaters",
      "Historic setting in Álafosskvos"
    ]
  },
  {
    "id": "handprjonasamband_islands",
    "name": "Handknitting Association of Iceland",
    "region": "hofudborg",
    "category": "heimavara",
    "type": "Crafts",
    "location": "Reykjavík",
    "website": "https://handknitted.is",
    "tags": [
      "Local",
      "Wool",
      "Lopapeysa",
      "Crafts"
    ],
    "blurb": "Shop of the cooperative of Icelandic hand-knitters in central Reykjavík.",
    "description": "The Handknitting Association of Iceland, founded in 1977, is a cooperative of hundreds of Icelandic knitters. Its stores on Skólavörðustígur and Borgartún sell hand-knitted lopapeysa sweaters and wool goods made by members from Icelandic wool.",
    "highlights": [
      "Hand-knitted lopapeysa by members",
      "Icelandic wool and knitwear",
      "Central location on Skólavörðustígur"
    ]
  },
  {
    "id": "kolaportid_flohamarkadur",
    "name": "Kolaportið Flea Market",
    "region": "hofudborg",
    "category": "heimavara",
    "type": "Market",
    "location": "Reykjavík",
    "website": "https://www.kolaportid.is",
    "tags": [
      "Local",
      "Market",
      "Food",
      "Crafts"
    ],
    "blurb": "Iceland's largest weekend flea market in the old customs house.",
    "description": "Kolaportið is Iceland's largest flea market, open on weekends in the old customs house by the harbour in Reykjavík. Dozens of vendors sell crafts, wool, vintage clothing and Icelandic food such as dried fish, kleinur doughnuts and fermented shark.",
    "highlights": [
      "Over 50 vendors on weekends",
      "Food corner with dried fish and kleinur",
      "Crafts, wool and vintage finds"
    ]
  },
  {
    "id": "aegir_brugghus",
    "name": "Ægir Brugghús",
    "region": "hofudborg",
    "category": "heimavara",
    "type": "Brewery",
    "location": "Reykjavík",
    "website": "https://www.aegirbrugghus.is",
    "tags": [
      "Local",
      "Brewery",
      "Craft beer"
    ],
    "blurb": "Reykjavík craft brewery with taprooms downtown and in Grandi.",
    "description": "Ægir Brugghús opened in the Grandi district in 2017 and brews craft beer using Icelandic ingredients. The beer is served at the Ægir 101 taproom on Laugavegur and Ægir 220 in Hafnarfjörður, where guests can taste the range straight from the brewer.",
    "highlights": [
      "Craft beer brewed in Reykjavík",
      "Ægir 101 taproom on Laugavegur",
      "Ægir 220 in Hafnarfjörður's old harbour"
    ]
  },
  {
    "id": "farmers_and_friends",
    "name": "Farmers & Friends (Farmers Market)",
    "region": "hofudborg",
    "category": "heimavara",
    "type": "Design",
    "location": "Reykjavík",
    "website": "https://www.farmersmarket.is",
    "tags": [
      "Local",
      "Design",
      "Wool",
      "Fashion"
    ],
    "blurb": "Icelandic design brand with a flagship store in Grandi.",
    "description": "Farmers Market is an Icelandic design company founded in 2005 that blends modern design with Icelandic heritage. Its Farmers & Friends flagship store in Grandi sells clothing in natural fabrics, wool sweaters, music, books and household items.",
    "highlights": [
      "Icelandic design in natural fabrics",
      "Wool sweaters and knitwear",
      "Store and design studio in Grandi"
    ]
  },
  {
    "id": "burid_islenska_buri",
    "name": "Búrið – The Icelandic Pantry",
    "region": "hofudborg",
    "category": "heimavara",
    "type": "Farm shop",
    "location": "Reykjavík",
    "website": "",
    "tags": [
      "Local",
      "Cheese",
      "Food",
      "Farm-direct"
    ],
    "blurb": "Grandi cheese shop stocking specialties from small Icelandic producers.",
    "description": "Búrið on Grandagarður is a cheese shop and pantry specialising in artisan cheeses, jams, chutneys and treats from small Icelandic farms and producers. Founded in 2008, it also runs informal cheese workshops over the summer months.",
    "highlights": [
      "Icelandic artisan cheeses",
      "Specialties from small producers",
      "Summer cheese workshops"
    ]
  },
  {
    "id": "duus_handverk",
    "name": "Duus Handverk",
    "region": "reykjanes",
    "category": "heimavara",
    "type": "Crafts",
    "location": "Reykjanesbær",
    "website": "https://www.facebook.com/DuusHandverk",
    "tags": [
      "Local",
      "Crafts",
      "Wool",
      "Art"
    ],
    "blurb": "Craft shop where twenty Reykjanes artisans sell under one roof.",
    "description": "Duus Handverk on Hafnargata in Reykjanesbær is a cosy gift boutique where around twenty artisans from the Reykjanes Peninsula sell their work together: wool sweaters, textiles, glass art, ceramics, jewellery and paintings. A small café rounds out the visit.",
    "highlights": [
      "Crafts by 20 Reykjanes artisans",
      "Wool, glass, ceramics and jewellery",
      "Café with waffles and homemade jam"
    ]
  },
  {
    "id": "ullarselid_hvanneyri",
    "name": "Ullarselið – Wool Centre",
    "region": "vesturland",
    "category": "heimavara",
    "type": "Crafts",
    "location": "Hvanneyri",
    "website": "https://ull.is",
    "tags": [
      "Local",
      "Wool",
      "Crafts",
      "Hand-knit"
    ],
    "blurb": "A locals' wool centre in Hvanneyri with hand-made wool goods.",
    "description": "Ullarselið in Hvanneyri in Borgarfjörður is a craft shop devoted to Icelandic wool and other natural materials. Locals banded together to sell hand-made goods: knitwear, felted and woven pieces, scarves and accessories made from quality wool.",
    "highlights": [
      "Hand-made wool goods by locals",
      "Knitted, felted and woven pieces",
      "Workshops in knitting and wool craft"
    ]
  },
  {
    "id": "brugghus_stedja",
    "name": "Brugghús Steðja",
    "region": "vesturland",
    "category": "heimavara",
    "type": "Brewery",
    "location": "Borgarfjörður",
    "website": "https://www.facebook.com/BrugghusStedja",
    "tags": [
      "Local",
      "Brewery",
      "Farm brewery"
    ],
    "blurb": "A farm brewery in Borgarfjörður that loves to experiment.",
    "description": "Brugghús Steðja is a farm brewery in Borgarfjörður, founded in 2012 and known for experimenting with unusual flavours such as seaweed and chocolate. Group visits and tastings are offered by arrangement in a relaxed, characterful tasting room.",
    "highlights": [
      "Farm brewery with experimental beers",
      "Tastings and visits for groups",
      "Smoked beer straight from the barrel"
    ]
  },
  {
    "id": "ljomalind_sveitamarkadur",
    "name": "Ljómalind Local Market",
    "region": "vesturland",
    "category": "heimavara",
    "type": "Market",
    "location": "Borgarnes",
    "website": "https://ljomalind.is",
    "tags": [
      "Local",
      "Market",
      "Farm-direct",
      "Crafts"
    ],
    "blurb": "A Borgarnes local market with food and crafts straight from locals.",
    "description": "Ljómalind in Borgarnes is a local market selling food straight from the farm and crafts by locals. Around seventy producers offer their goods: skyr, eggs, dried fish, smoked salmon, jams, chocolate, ice cream, knitwear and wool goods, all from West Iceland.",
    "highlights": [
      "Goods from around 70 West Iceland producers",
      "Skyr, eggs, dried fish and smoked salmon",
      "Crafts and wool goods straight from locals"
    ]
  },
  {
    "id": "olvisholt-brugghus",
    "name": "Ölvisholt Brewery",
    "region": "sudurland",
    "category": "heimavara",
    "type": "Brewery",
    "location": "Ölvisholt, near Selfoss",
    "website": "https://olvisholt.is",
    "tags": [
      "Local",
      "Craft beer",
      "Brewery",
      "Countryside"
    ],
    "blurb": "A countryside brewery in a former dairy barn where you can taste the beer straight from the brewers.",
    "description": "Founded in 2007 by two neighbouring farmers, Ölvisholt Brewery sits in an old dairy farm just outside Selfoss. Its taproom opens to visitors on selected days for tastings of craft beers such as the smoky Lava stout and lighter lagers. It is one of Iceland's oldest independent breweries and its beers are stocked across the country.",
    "highlights": [
      "Brewed in an old farm dairy",
      "Known for the smoky Lava stout",
      "Taproom open on selected days"
    ]
  },
  {
    "id": "smidjan-brugghus-vik",
    "name": "Smiðjan Brugghús",
    "region": "sudurland",
    "category": "heimavara",
    "type": "Brewery",
    "location": "Vík",
    "website": "https://smidjanbrugghus.is",
    "tags": [
      "Local",
      "Craft beer",
      "Brewery",
      "Brewpub"
    ],
    "blurb": "A brewpub in Vík serving its own craft beer alongside burgers and grilled dishes.",
    "description": "Smiðjan Brugghús is a small brewery and brewpub in the heart of Vík, founded by locals in 2018. It brews craft beer on site, from IPAs to stouts, and serves burgers, ribs and grilled fare. The spot is a popular gathering place for both residents and travellers seeking shelter from the south coast weather.",
    "highlights": []
  },
  {
    "id": "olverk-pizza-brugghus",
    "name": "Ölverk Pizza & Brewery",
    "region": "sudurland",
    "category": "heimavara",
    "type": "Brewery",
    "location": "Hveragerði",
    "website": "https://www.olverk.is",
    "tags": [
      "Local",
      "Craft beer",
      "Brewery",
      "Geothermal"
    ],
    "blurb": "A family-run Hveragerði brewery using geothermal energy to brew beer and fire its pizzas.",
    "description": "Ölverk opened in 2017 in Hveragerði and is run by a young local couple. It brews craft beer using geothermal energy from the Hengill area and serves wood-fired pizzas and its own hot sauces. The brewery offers tours explaining Iceland's beer history and the local use of geothermal power.",
    "highlights": []
  },
  {
    "id": "brothers-brewery-vestmannaeyjar",
    "name": "The Brothers Brewery",
    "region": "sudurland",
    "category": "heimavara",
    "type": "Brewery",
    "location": "Vestmannaeyjar",
    "website": "https://tbb.is",
    "tags": [
      "Local",
      "Craft beer",
      "Brewery",
      "Islands"
    ],
    "blurb": "A Westman Islands brewery brewing beer from local ingredients, including dulse picked on the islands.",
    "description": "The Brothers Brewery began in 2012 as a kitchen experiment by two friends and their brothers and today is a brewery with its own tavern in Vestmannaeyjar. It brews craft beer from carefully chosen ingredients, including its flagship Eldfell Volcano Red Ale, which uses dulse foraged on the islands. The tavern is a lively gathering place with live music and events.",
    "highlights": []
  },
  {
    "id": "eimverk-floki-distillery",
    "name": "Eimverk / Flóki Distillery",
    "region": "sudurland",
    "category": "heimavara",
    "type": "Distillery",
    "location": "Bjálmholt, near Hella",
    "website": "https://flokiwhisky.is",
    "tags": [
      "Local",
      "Distillery",
      "Whisky",
      "Farm-direct"
    ],
    "blurb": "A family distillery growing its own barley to make Flóki whisky and other Icelandic spirits.",
    "description": "Eimverk is a family-run distillery producing Flóki whisky, gin and brennivín from 100% Icelandic barley. The barley is grown at Bjálmholt farm near Hella in South Iceland, where tastings and tours are also offered. It was Iceland's first whisky distillery and the spirits are made from grain to glass.",
    "highlights": []
  },
  {
    "id": "skyrgerdin-hveragerdi",
    "name": "Skyrgerðin (The Old Skyr Factory)",
    "region": "sudurland",
    "category": "heimavara",
    "type": "Farm shop",
    "location": "Hveragerði",
    "website": "https://www.skyrgerdin.is",
    "tags": [
      "Local",
      "Skyr",
      "Farm-direct",
      "Café"
    ],
    "blurb": "The old skyr factory in Hveragerði, where skyr is still made on site the traditional way.",
    "description": "Skyrgerðin occupies a 1930 building in Hveragerði that once housed a skyr factory. Skyr is still made on site the traditional way and served with light dishes, cakes and coffee. The house has long been a gathering place for locals and travellers in the heart of town.",
    "highlights": []
  },
  {
    "id": "solheimar-vala-verslun",
    "name": "Vala Shop, Sólheimar",
    "region": "sudurland",
    "category": "heimavara",
    "type": "Design",
    "location": "Sólheimar, Grímsnes",
    "website": "https://verslun.solheimar.is",
    "tags": [
      "Local",
      "Crafts",
      "Art workshops",
      "Organic"
    ],
    "blurb": "A shop in the Sólheimar eco-village selling crafts from its art workshops and organic produce.",
    "description": "The Vala shop sits in Sólheimar, Iceland's oldest eco-village, founded in 1930 in Grímsnes. It sells handicrafts from the community's art workshops, including ceramics, candles, artwork and weaving, alongside organic goods from its bakery and greenhouses. The shop shares a building with the art studio and the organic café Græna kannan.",
    "highlights": []
  },
  {
    "id": "vikurprjon-icewear-vik",
    "name": "Víkurprjón (Icewear)",
    "region": "sudurland",
    "category": "heimavara",
    "type": "Design",
    "location": "Vík",
    "website": "https://icewear.is",
    "tags": [
      "Local",
      "Wool",
      "Lopapeysa",
      "Design"
    ],
    "blurb": "One of Iceland's oldest wool works in Vík, with lopapeysa sweaters, wool goods and an on-site factory.",
    "description": "Víkurprjón has processed Icelandic wool in Vík since 1972 and is today part of Icewear. It offers lopapeysa sweaters, knitwear, outdoor clothing and souvenirs, and visitors can see production in the factory. The same building also houses a café and a small grocery store.",
    "highlights": []
  },
  {
    "id": "hespuhusid-jurtalitun",
    "name": "Hespuhúsið (The Yarn House)",
    "region": "sudurland",
    "category": "heimavara",
    "type": "Crafts",
    "location": "Near Selfoss",
    "website": "https://hespa.is",
    "tags": [
      "Local",
      "Wool",
      "Plant dyeing",
      "Crafts"
    ],
    "blurb": "An open plant-dyeing studio near Selfoss where Icelandic wool is dyed with plants the traditional way.",
    "description": "At Hespuhúsið, Guðrún Bjarnadóttir dyes Icelandic einband yarn with plants following old traditions but with modern technique. She uses Icelandic plants such as rhubarb, lichen, lupine and flowers, along with indigo and other dyes. The studio welcomes visitors by arrangement, where you can peer into the dye pots and buy plant-dyed yarn.",
    "highlights": []
  },
  {
    "id": "thingborg-ullarvinnsla",
    "name": "Þingborg Wool Centre",
    "region": "sudurland",
    "category": "heimavara",
    "type": "Crafts",
    "location": "Þingborg, east of Selfoss",
    "website": "https://www.facebook.com/thingborgull",
    "tags": [
      "Local",
      "Wool",
      "Crafts",
      "Lopapeysa"
    ],
    "blurb": "A wool workshop and shop in an old community hall where a group of women work Icelandic wool from scratch.",
    "description": "Þingborg occupies an old community hall and schoolhouse from 1927, about 8 km east of Selfoss. A group of women gathers here to knit, spin, card, felt and weave Icelandic wool in natural colours. The shop sells lopapeysa sweaters, knitwear, hand-dyed yarn and lopi, all handmade on site.",
    "highlights": []
  },
  {
    "id": "solskinsbudin-fludir",
    "name": "Sólskinsbúðin Farmers Market",
    "region": "sudurland",
    "category": "heimavara",
    "type": "Market",
    "location": "Flúðir",
    "website": "https://www.solskinsbudin.is",
    "tags": [
      "Local",
      "Farmers market",
      "Farm-direct",
      "Vegetables"
    ],
    "blurb": "A farmers market in a Flúðir greenhouse selling vegetables, baked goods and produce straight from nearby farms.",
    "description": "Sólskinsbúðin is a farmers market inside a greenhouse in Flúðir, selling vegetables, home-baked bread, meat, fresh herbs, eggs and more. Everything is sourced on site or from nearby farms, and guests can see into the greenhouses where tomatoes and cucumbers are grown. Cultivation has taken place in Flúðir since 1944.",
    "highlights": []
  },
  {
    "id": "kidka-hvammstangi",
    "name": "KIDKA Wool Factory",
    "region": "nordvestur",
    "category": "heimavara",
    "type": "Design",
    "location": "Hvammstangi",
    "website": "https://kidka.com",
    "tags": [
      "Local",
      "Wool",
      "Knitwear",
      "Lopapeysa"
    ],
    "blurb": "One of Iceland's largest wool factories, with a factory shop in the heart of Hvammstangi.",
    "description": "KIDKA has knitted garments from Icelandic wool for decades and runs a factory shop in the village of Hvammstangi. You can buy lopapeysur, hats, mittens and blankets straight from the maker, all designed and finished on site. The shop sits just off the Ring Road.",
    "highlights": [
      "Lopapeysur and knitwear straight from the factory",
      "100% Icelandic wool",
      "Factory shop just off the Ring Road"
    ]
  },
  {
    "id": "atlantic-leather-saudarkrokur",
    "name": "Atlantic Leather",
    "region": "nordvestur",
    "category": "heimavara",
    "type": "Crafts",
    "location": "Sauðárkrókur",
    "website": "https://atlanticleather.is",
    "tags": [
      "Local",
      "Crafts",
      "Fish leather",
      "Design"
    ],
    "blurb": "Europe's only fish-leather tannery, with a visitor centre and shop in Sauðárkrókur.",
    "description": "Atlantic Leather tans the skins of salmon, wolffish, cod and perch, turning a food-industry by-product into sought-after fashion leather. At the Gestastofa visitor centre beside the tannery you can view the process and buy fish-leather goods along with jewellery and accessories from Icelandic designers. The material has reached houses such as Dior and Prada.",
    "highlights": [
      "Fish leather from salmon, wolffish, cod and perch",
      "Visitor centre with goods by local designers",
      "The only fish-leather tannery in Europe"
    ]
  },
  {
    "id": "brunastadir-fljot",
    "name": "Brúnastaðir Farm",
    "region": "nordvestur",
    "category": "heimavara",
    "type": "Farm shop",
    "location": "Fljót, Skagafjörður",
    "website": "https://www.brunastadir.is",
    "tags": [
      "Local",
      "Farm shop",
      "Cheese",
      "Petting zoo"
    ],
    "blurb": "A family farm in Fljót with a farm shop, goat cheese and a petting zoo.",
    "description": "At Brúnastaðir in Fljót the family runs a small farm shop selling goat cheese made on the farm alongside other local produce. There is a petting zoo with Icelandic farm animals and light refreshments such as ice cream, coffee and home baking. The farm sits by Lake Miklavatn in the north of Skagafjörður.",
    "highlights": [
      "Goat cheese made on the farm",
      "Petting zoo with Icelandic farm animals",
      "Home baking, ice cream and coffee"
    ]
  },
  {
    "id": "langafit-laugarbakki",
    "name": "Langafit Handcraft Market",
    "region": "nordvestur",
    "category": "heimavara",
    "type": "Market",
    "location": "Laugarbakki",
    "website": "",
    "tags": [
      "Local",
      "Crafts",
      "Country market"
    ],
    "blurb": "A handcraft shop and coffee house in the village of Laugarbakki by Miðfjörður.",
    "description": "In the village of Laugarbakki by Miðfjörður, the Langafit shop sells handcraft made by local villagers and nearby farms. There is also a coffee house, open through the summer months beside the campsite. A greenhouse nearby sells strawberries and vegetables.",
    "highlights": [
      "Handcraft by locals and neighbouring farms",
      "Coffee house by the campsite",
      "Open in summer right off the Ring Road"
    ]
  },
  {
    "id": "stadarskali-hrutafjordur",
    "name": "Staðarskáli",
    "region": "nordvestur",
    "category": "heimavara",
    "type": "Village shop",
    "location": "Hrútafjörður",
    "website": "",
    "tags": [
      "Local",
      "Roadside stop",
      "Travel stop"
    ],
    "blurb": "A historic roadside stop and shop on the Ring Road in Hrútafjörður.",
    "description": "Staðarskáli in Hrútafjörður is one of Iceland's best-known roadside stops, roughly halfway between Reykjavik and Akureyri. It has a service centre, a shop, food and a tourist information point. The place has long been a traditional halt on the northern route.",
    "highlights": [
      "A classic halfway stop on the northern route",
      "Shop, food and fuel",
      "Tourist information point"
    ]
  },
  {
    "id": "bruggsmidjan-kaldi-arskogssandur",
    "name": "Bruggsmiðjan Kaldi",
    "region": "nordaustur",
    "category": "heimavara",
    "type": "Brewery",
    "location": "Árskógssandur",
    "website": "https://www.bruggsmidjan.is",
    "tags": [
      "Local",
      "Brewery",
      "Craft beer"
    ],
    "blurb": "Iceland's first craft brewery, with a shop in Árskógssandur.",
    "description": "Bruggsmiðjan Kaldi was Iceland's first craft brewery, founded in 2006 in Árskógssandur by Eyjafjörður. The beer is unfiltered and brewed with pure Icelandic water, and is sold straight from the brewery. On site there is also the Bjórböðin beer spa, where guests can bathe in beer.",
    "highlights": [
      "Iceland's first craft brewery",
      "Unfiltered beer from Icelandic water",
      "Beer spa on site"
    ]
  },
  {
    "id": "segull-67-siglufjordur",
    "name": "Segull 67",
    "region": "nordaustur",
    "category": "heimavara",
    "type": "Brewery",
    "location": "Siglufjörður",
    "website": "https://www.segull67.is",
    "tags": [
      "Local",
      "Brewery",
      "Distillery",
      "Craft beer"
    ],
    "blurb": "A family brewery in an old herring factory in Siglufjörður.",
    "description": "Segull 67 is a small family brewery in a renovated herring factory in Siglufjörður. In the taproom you can try beers from the core range and seasonal brews while watching the brewing through a glass wall. Upstairs is the Íshaf 67 distillery, producing gin and other spirits from Icelandic ingredients.",
    "highlights": [
      "Brewery in an old herring factory",
      "Taproom overlooking the brewing",
      "Íshaf 67 distillery upstairs"
    ]
  },
  {
    "id": "holtsel-eyjafjordur",
    "name": "Holtsel (Holtsels-Hnoss)",
    "region": "nordaustur",
    "category": "heimavara",
    "type": "Farm shop",
    "location": "Eyjafjarðarsveit",
    "website": "https://holtsel.is",
    "tags": [
      "Local",
      "Farm shop",
      "Ice cream",
      "Dairy"
    ],
    "blurb": "A dairy farm in Eyjafjörður making homemade ice cream from its own milk.",
    "description": "At Holtsel in Eyjafjarðarsveit, about 20 km south of Akureyri, the family has made ice cream from their cows' milk since 2006. The Holtsels-Hnoss ice cream comes in dozens of flavours, including liquorice, blueberry and rhubarb. The farm has a shop that sells only farm-direct produce.",
    "highlights": [
      "Homemade ice cream from the farm's milk",
      "Dozens of flavours",
      "Shop stocking only farm-direct produce"
    ]
  },
  {
    "id": "kaffi-ku-eyjafjordur",
    "name": "Kaffi Kú",
    "region": "nordaustur",
    "category": "heimavara",
    "type": "Farm shop",
    "location": "Garður, Eyjafjarðarsveit",
    "website": "https://www.kaffiku.is",
    "tags": [
      "Local",
      "Farm shop",
      "Café",
      "Beef"
    ],
    "blurb": "A café in the loft above a cowshed selling farm-direct beef.",
    "description": "Kaffi Kú sits at Garður farm in Eyjafjarðarsveit, about 10 km south of Akureyri, in the loft above a robotic dairy barn. Guests can watch the cows being milked while enjoying waffles and cakes with cream from the farm. On site you can also buy beef straight from the farm, fresh or frozen.",
    "highlights": [
      "Café in the loft above a cowshed",
      "Waffles and cream straight from the farm",
      "Farm-direct beef"
    ]
  },
  {
    "id": "vogafjos-myvatn",
    "name": "Vogafjós",
    "region": "nordaustur",
    "category": "heimavara",
    "type": "Farm shop",
    "location": "Mývatn",
    "website": "https://www.vogafjosfarmresort.is",
    "tags": [
      "Local",
      "Farm shop",
      "Cheese",
      "Cowshed"
    ],
    "blurb": "A family farm by Lake Mývatn with a cowshed, food and a small shop of local goods.",
    "description": "Vogafjós stands on the east shore of Lake Mývatn and is a family-run farm with accommodation, a restaurant in the cowshed and a small shop of local products. The kitchen focuses on homemade food, including smoked trout, mozzarella and salad cheese from their own milk, and rye bread baked underground. Guests can watch the cows being milked twice a day.",
    "highlights": [
      "Cheese and dairy from their own milk",
      "Small shop with local products",
      "Rye bread baked underground"
    ]
  },
  {
    "id": "fjalladyrd-modrudalur",
    "name": "Fjalladýrð, Möðrudalur",
    "region": "nordaustur",
    "category": "heimavara",
    "type": "Village shop",
    "location": "Möðrudalur",
    "website": "https://fjalladyrd.is",
    "tags": [
      "Local",
      "Village shop",
      "Crafts",
      "Café"
    ],
    "blurb": "Iceland's highest farm, with a country shop, handcraft and a café.",
    "description": "Möðrudalur is the highest inhabited farm in Iceland, where the family runs the Fjalladýrð travel service. The shop sells Icelandic woollens and handcraft made by locals along with essentials for travellers. At the Fjallakaffi café you will find homemade treats such as kleinur, ástarpungar and meat soup.",
    "highlights": [
      "Woollens and handcraft by locals",
      "Fjallakaffi café with homemade treats",
      "Iceland's highest inhabited farm"
    ]
  },
  {
    "id": "flora-akureyri",
    "name": "Flóra Culture House",
    "region": "nordaustur",
    "category": "heimavara",
    "type": "Design",
    "location": "Akureyri",
    "website": "https://www.floraflora.is",
    "tags": [
      "Local",
      "Design",
      "Crafts"
    ],
    "blurb": "A design and culture house in central Akureyri with goods from local makers.",
    "description": "Flóra is a concept store and culture house set in a green oasis in central Akureyri. It offers a varied selection from small producers, artists, designers and farmers, including woollens, honey, herbs, candles and art. The house is also a venue for events and workshops.",
    "highlights": [
      "Goods from small producers and designers",
      "Woollens, honey and Icelandic herbs",
      "Culture house with events and workshops"
    ]
  },
  {
    "id": "modir-jord-vallanes",
    "name": "Móðir Jörð – Vallanes",
    "region": "austurland",
    "category": "heimavara",
    "type": "Farm shop",
    "location": "Vallanes",
    "website": "https://modirjord.is",
    "tags": [
      "Local",
      "Organic",
      "Farm shop",
      "Vegetables"
    ],
    "blurb": "Organic farm shop and café between Egilsstaðir and Hallormsstaður forest.",
    "description": "At the Vallanes farm by Lagarfljót, the family grows organic grain, herbs and vegetables and turns the harvest into specialty foods. The Aspen House holds a small farm shop and café selling wholegrain products, jams, chutneys and lacto-fermented vegetables. Open daily in summer.",
    "highlights": [
      "Organic grain and vegetables grown on the farm",
      "Jams, chutneys and fermented foods",
      "Café serving vegetarian dishes"
    ]
  },
  {
    "id": "beljandi-brugghus",
    "name": "Beljandi Brugghús",
    "region": "austurland",
    "category": "heimavara",
    "type": "Brewery",
    "location": "Breiðdalsvík",
    "website": "https://www.facebook.com/beljandibrugghus",
    "tags": [
      "Local",
      "Craft beer",
      "Brewery"
    ],
    "blurb": "Micro-brewery and bar in a restored house in tiny Breiðdalsvík.",
    "description": "Beljandi is a small craft brewery started by two locals in a restored old house in Breiðdalsvík. The upstairs bar pours the brewery's own beers, from pale ale to porter, alongside light platters made with local ingredients. The bar is mainly open in the evenings through summer.",
    "highlights": [
      "Craft beer brewed on the premises",
      "Bar overlooking the brewhouse and the sea",
      "Light platters from local ingredients"
    ]
  },
  {
    "id": "austri-brugghus-askur",
    "name": "Austri Brugghús / Askur Taproom",
    "region": "austurland",
    "category": "heimavara",
    "type": "Brewery",
    "location": "Egilsstaðir",
    "website": "",
    "tags": [
      "Local",
      "Craft beer",
      "Brewery"
    ],
    "blurb": "Craft brewery in Egilsstaðir with its own taproom bar.",
    "description": "Austri is a craft brewery in Egilsstaðir that names its beers after East Iceland landmarks. At the Askur taproom you can taste the beer straight from the brewer, including an IPA and a double IPA infused with locally grown wasabi. The taproom is small and homely, right in the centre of town.",
    "highlights": [
      "Beers named after East Iceland landmarks",
      "Askur taproom in the heart of Egilsstaðir",
      "Beer flavoured with locally grown ingredients"
    ]
  },
  {
    "id": "khb-brugghus",
    "name": "KHB Brugghús",
    "region": "austurland",
    "category": "heimavara",
    "type": "Distillery",
    "location": "Borgarfjörður eystri",
    "website": "https://www.khb-brugghus.is",
    "tags": [
      "Local",
      "Distillery",
      "Craft beer",
      "Gin"
    ],
    "blurb": "Brewery and distillery in one of Borgarfjörður eystri's oldest houses.",
    "description": "KHB Brugghús is a craft brewery and distillery in an old freezing plant in Borgarfjörður eystri. It produces beer, small-batch gin and landi (Icelandic moonshine), with the beers named after the area's elf and ghost stories. Visitors can drop into the taproom, taste the products and book a tour.",
    "highlights": [
      "Beer, gin and moonshine made on site",
      "Beers named after elf and ghost lore",
      "Taproom with tastings and tours"
    ]
  },
  {
    "id": "hus-handanna",
    "name": "Hús Handanna",
    "region": "austurland",
    "category": "heimavara",
    "type": "Design",
    "location": "Egilsstaðir",
    "website": "https://hushandanna.is",
    "tags": [
      "Local",
      "Crafts",
      "Design"
    ],
    "blurb": "Craft and design shop in the heart of Egilsstaðir.",
    "description": "Hús Handanna is a small craft and design shop founded in 2010 at East Iceland's busiest crossroads. It carries a broad selection of Icelandic product design, art craft, clothing and chosen souvenirs. The shop emphasises eco-friendly goods and an artistic lifestyle.",
    "highlights": [
      "Icelandic product design and art craft",
      "Clothing design and selected souvenirs",
      "Eco-friendly home and personal-care goods"
    ]
  },
  {
    "id": "dokkan-brugghus",
    "name": "Dokkan Brugghús",
    "region": "vestfirdir",
    "category": "heimavara",
    "type": "Brewery",
    "location": "Ísafjörður",
    "website": "https://www.facebook.com/dokkanbrugghus",
    "tags": [
      "Local",
      "Craft beer",
      "Brewery"
    ],
    "blurb": "The Westfjords' first and only brewery, in the heart of Ísafjörður.",
    "description": "Dokkan Brugghús is a small family business founded in Ísafjörður in 2017, the first brewery in the Westfjords. The beer is brewed with spring water that rises in the remote Westfjords mountains. Everything is made on site at Sindragata, and the bar is open in the afternoons and evenings in summer.",
    "highlights": [
      "The Westfjords' first brewery",
      "Beer made with Westfjords spring water",
      "Brewed and served on site at Sindragata"
    ]
  },
  {
    "id": "saltverk-reykjanes",
    "name": "Saltverk",
    "region": "vestfirdir",
    "category": "heimavara",
    "type": "Farm shop",
    "location": "Reykjanes by Ísafjarðardjúp",
    "website": "https://saltverk.com",
    "tags": [
      "Local",
      "Sea salt",
      "Hand-harvested"
    ],
    "blurb": "Hand-harvested sea salt from Ísafjarðardjúp, dried with geothermal heat.",
    "description": "Saltverk makes hand-harvested sea salt at Reykjanes by Ísafjarðardjúp, where the seawater is considered among the purest and most mineral-rich in the world. The salt is boiled and dried using only geothermal energy, making the process carbon neutral. A range of flavours is produced, from lava salt to liquorice salt.",
    "highlights": [
      "Hand-harvested sea salt from Ísafjarðardjúp",
      "Dried with geothermal heat, carbon neutral",
      "Flavours from lava salt to liquorice"
    ]
  },
  {
    "id": "simbahollin-thingeyri",
    "name": "Simbahöllin",
    "region": "vestfirdir",
    "category": "heimavara",
    "type": "Village shop",
    "location": "Þingeyri",
    "website": "http://www.simbahollin.is",
    "tags": [
      "Local",
      "Café",
      "Crafts"
    ],
    "blurb": "Café and cultural house in a restored Norwegian building in Þingeyri.",
    "description": "Simbahöllin is a homely café in a beautifully restored 1915 Norwegian house in the middle of the fishing village of Þingeyri. A Danish-Belgian couple opened it in 2009, and its Belgian waffles with homemade rhubarb jam quickly became famous. The house also serves as a cultural hub with concerts, events and horse riding.",
    "highlights": [
      "Belgian waffles with homemade rhubarb jam",
      "Restored 1915 Norwegian house",
      "Cultural hub with concerts and events"
    ]
  },
  {
    "id": "fisherman-sudureyri",
    "name": "Fisherman",
    "region": "vestfirdir",
    "category": "heimavara",
    "type": "Farm shop",
    "location": "Suðureyri",
    "website": "https://fisherman.is",
    "tags": [
      "Local",
      "Fish",
      "Seafood"
    ],
    "blurb": "Fishmonger and bistro in the fishing village of Suðureyri.",
    "description": "Fisherman is a family-run fishmonger, bistro and café in Suðureyri, a small fishing village on Súgandafjörður. The fish arrives fresh straight from the harbour boats, and the kitchen uses as much local produce from within the village as possible. The company also offers guided seafood walks through the village.",
    "highlights": [
      "Fresh fish straight from the boats",
      "Fishmonger, bistro and café in one",
      "Guided seafood walks through the village"
    ]
  },
  {
    "id": "ivaf-knitwear",
    "name": "Ívaf",
    "region": "vestfirdir",
    "category": "heimavara",
    "type": "Crafts",
    "location": "Ísafjörður",
    "website": "https://ivafknitwear.is",
    "tags": [
      "Local",
      "Wool",
      "Knitwear",
      "Crafts"
    ],
    "blurb": "Hand-knitted woollens from a small workshop in Ísafjörður.",
    "description": "Ívaf is a small knitting workshop in Ísafjörður that started in 2016, run by Sigga Sifá. It makes hand-crafted woollens such as sweaters, hats and scarves inspired by Icelandic tradition. The focus is on sustainability and local production.",
    "highlights": [
      "Hand-knitted sweaters, hats and scarves",
      "Icelandic wool and traditional craft",
      "Small workshop focused on sustainability"
    ]
  },
  {
    "id": "kaupfelag-holmavik",
    "name": "Kaupfélag Steingrímsfjarðar – Pakkhúsið",
    "region": "vestfirdir",
    "category": "heimavara",
    "type": "Village shop",
    "location": "Hólmavík",
    "website": "https://www.ksholm.is",
    "tags": [
      "Local",
      "Village shop",
      "Co-op"
    ],
    "blurb": "Long-established locally owned co-op store in Hólmavík.",
    "description": "Kaupfélag Steingrímsfjarðar was founded in 1898 and runs the Pakkhúsið shop in Hólmavík, which is entirely locally owned. It offers personal service and a varied range of goods for residents and travellers in the Strandir region. The store is a classic Icelandic village shop and an important stop on the way through the area.",
    "highlights": [
      "Locally owned co-op since 1898",
      "Varied range of goods and personal service",
      "Important stop in the Strandir region"
    ]
  },
  {
    "id": "glerarlaug",
    "name": "Glerárlaug",
    "region": "nordaustur",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Höfðahlíð, Glerárhverfi, Akureyri",
    "tags": [
      "Pool",
      "Indoor pool",
      "Hot tubs",
      "Family-friendly"
    ],
    "blurb": "A cosy indoor pool in the Glerá district of Akureyri with hot tubs outside.",
    "description": "Glerárlaug is a 16.7-metre indoor pool in the northern part of Akureyri. The outdoor area has hot tubs, a children's pool and a cold tub, and it is a local favourite.",
    "highlights": [
      "16.7-metre indoor pool",
      "Outdoor hot tubs",
      "Children's pool and cold tub"
    ]
  },
  {
    "id": "bjarnalaug",
    "name": "Bjarnalaug",
    "region": "vesturland",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Laugabraut, Akranes",
    "tags": [
      "Pool",
      "Indoor pool",
      "Historic",
      "Hot tub"
    ],
    "blurb": "A historic indoor pool in Akranes from 1944, named after Bjarni Ólafsson.",
    "description": "Bjarnalaug is a 12.5-metre indoor pool in Akranes, designed by Guðjón Samúelsson and opened in 1944. It is mainly used for lessons and infant swimming and is open to the public on winter weekends.",
    "highlights": [
      "Opened in 1944",
      "12.5-metre indoor teaching pool",
      "Warm water around 33-34°C"
    ]
  },
  {
    "id": "gvendarlaug_bjarnarfirdi",
    "name": "Gvendarlaug í Bjarnarfirði",
    "region": "vestfirdir",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Laugarhóll, Bjarnarfjörður, Strandir",
    "tags": [
      "Pool",
      "Natural pool",
      "Historic",
      "Outdoor pool"
    ],
    "blurb": "A pool at Laugarhóll in Bjarnarfjörður with an ancient natural spring linked to Guðmundur the Good.",
    "description": "At Hótel Laugarhóll in Bjarnarfjörður on the Strandir coast is a 25-metre outdoor pool and a hot natural spring (39-41°C). Some of the water comes from the ancient Gvendarlaug, said to have been blessed by Bishop Guðmundur the Good and now a protected site.",
    "highlights": [
      "25-metre outdoor pool",
      "Ancient natural spring, 39-41°C",
      "Protected spring linked to Guðmundur the Good"
    ]
  },
  {
    "id": "hreppslaug",
    "name": "Hreppslaug",
    "region": "vesturland",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Andakíll, Skorradalur, Borgarfjörður",
    "tags": [
      "Pool",
      "Outdoor pool",
      "Historic",
      "Hot tubs"
    ],
    "blurb": "A historic outdoor pool in Andakíll from 1928, heated by water from the hillside above.",
    "description": "Hreppslaug is a historic outdoor pool in Andakíll in Borgarfjörður, built by locals in 1928. It has two hot tubs, a sauna, a cold tub and an outdoor shower, and is run by the local youth club Íslendingur.",
    "highlights": [
      "Built in 1928 by locals",
      "Two hot tubs and a sauna",
      "Naturally heated outdoor pool"
    ]
  },
  {
    "id": "heydalur",
    "name": "Heydalur",
    "region": "vestfirdir",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Heydalur, Mjóifjörður, Ísafjarðardjúp",
    "tags": [
      "Pool",
      "Hot tubs",
      "Natural pool",
      "Countryside"
    ],
    "blurb": "A small pool and hot tubs at the Heydalur country hotel in Mjóifjörður.",
    "description": "At Heydalur in Mjóifjörður by Ísafjarðardjúp there is a small pool and hot tub inside a greenhouse, plus three outdoor hot tubs built from rock and shell sand. A natural hot spring at Galtahrygg lies within walking distance.",
    "highlights": [
      "Pool and tub inside a greenhouse",
      "Three outdoor hot tubs",
      "Natural spring within walking distance"
    ]
  },
  {
    "id": "illugastadir",
    "name": "Illugastaðir",
    "region": "nordaustur",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Illugastaðir, Fnjóskadalur",
    "tags": [
      "Pool",
      "Outdoor pool",
      "Hot tubs",
      "Holiday village"
    ],
    "blurb": "An outdoor pool in the Illugastaðir holiday village in Fnjóskadalur, open to all in summer.",
    "description": "At Illugastaðir in Fnjóskadalur, about 27 km east of Akureyri, is a 16.5-metre outdoor pool with two hot tubs and a sunbathing area. The pool sits in a union holiday village but is open to everyone during summer.",
    "highlights": [
      "16.5-metre outdoor pool",
      "Two hot tubs",
      "Open to all in summer"
    ]
  },
  {
    "id": "skeidalaug",
    "name": "Skeiðalaug",
    "region": "sudurland",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Brautarholt, Skeið, Árnessýsla",
    "tags": [
      "Pool",
      "Outdoor pool",
      "Hot tubs",
      "Sauna"
    ],
    "blurb": "A renovated country pool in Brautarholt on Skeið with new hot tubs and a sauna.",
    "description": "Skeiðalaug in Brautarholt in Skeiða- og Gnúpverjahreppur opened in 1975 and was renovated in 2023-2024. It now has two large hot tubs, an indoor cold tub and an infrared sauna alongside its 16.68-metre pool.",
    "highlights": [
      "16.68-metre pool",
      "Two new hot tubs",
      "Infrared sauna and cold tub"
    ]
  },
  {
    "id": "solgardar",
    "name": "Sólgarðar í Fljótum",
    "region": "nordvestur",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Sólgarðar, Fljót, Skagafjörður",
    "tags": [
      "Pool",
      "Outdoor pool",
      "Sauna",
      "Countryside"
    ],
    "blurb": "A country pool at Sólgarðar in Fljót, heated with water from a nearby borehole.",
    "description": "The pool at Sólgarðar in Fljót in Skagafjörður is a 16.6-metre pool heated with water from a nearby borehole. A new steam room has been added, and the pool is run on behalf of the municipality.",
    "highlights": [
      "16.6-metre pool",
      "Heated by borehole water",
      "New steam room"
    ]
  },
  {
    "id": "djupidalur",
    "name": "Djúpidalur",
    "region": "vestfirdir",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Djúpidalur, Reykhólasveit",
    "tags": [
      "Pool",
      "Natural pool",
      "Hot tub",
      "Countryside"
    ],
    "blurb": "A country pool and hot soak at the Djúpidalur travel service in Reykhólasveit.",
    "description": "At Djúpidalur in Reykhólasveit in the southern Westfjords there is a swimming pool and hot tub at the travel service. The setting is peaceful and the pool is a popular stop when travelling the area.",
    "highlights": [
      "Pool and hot tub",
      "Peaceful country setting",
      "A stop in Reykhólasveit"
    ]
  },
  {
    "id": "hraunborgir",
    "name": "Hraunborgir",
    "region": "sudurland",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Hraunborgir, Grímsnes",
    "tags": [
      "Pool",
      "Hot tubs",
      "Sauna",
      "Family-friendly"
    ],
    "blurb": "A pool with three hot tubs in the Hraunborgir summer-house area in Grímsnes.",
    "description": "At Hraunborgir in Grímsnes there is a swimming pool with three hot tubs and a steam bath in the area's service centre. There is also mini golf, a nine-hole golf course and children's playground equipment.",
    "highlights": [
      "Pool and three hot tubs",
      "Steam bath",
      "Mini golf and golf course on site"
    ]
  },
  {
    "id": "heidarbaer",
    "name": "Heiðarbær",
    "region": "sudurland",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Heiðarbær, Þingvallasveit",
    "tags": [
      "Pool",
      "Outdoor pool",
      "Hot tub",
      "Countryside"
    ],
    "blurb": "A small, cosy country pool in Þingvallasveit with a single hot tub.",
    "description": "The pool at Heiðarbær in Þingvallasveit is a small, cosy outdoor pool with one hot tub and a sunbathing area. There is also a campsite and food for sale on site, and the pool is open in summer.",
    "highlights": [
      "Small, cosy outdoor pool",
      "One hot tub",
      "Campsite on site"
    ]
  },
  {
    "id": "heidarborg",
    "name": "Heiðarborg",
    "region": "vesturland",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Heiðarskóli, Hvalfjarðarsveit",
    "tags": [
      "Pool",
      "Sports centre",
      "Indoor pool",
      "Family-friendly"
    ],
    "blurb": "A pool at the Heiðarborg sports centre by Heiðarskóli in Hvalfjarðarsveit.",
    "description": "Heiðarborg is a sports centre by Heiðarskóli in Hvalfjarðarsveit with a swimming pool, gym and sports hall. The pool is open to the public in winter, while in summer the pool at Hlaðir opens instead.",
    "highlights": [
      "Pool at a sports centre",
      "Gym and sports hall",
      "Open to the public in winter"
    ]
  },
  {
    "id": "lundur_oxarfirdi",
    "name": "Lundur í Öxarfirði",
    "region": "nordaustur",
    "category": "bod",
    "type": "Swimming pool",
    "price": "$",
    "location": "Lundur, Öxarfjörður",
    "tags": [
      "Pool",
      "Outdoor pool",
      "Hot tub",
      "Countryside"
    ],
    "blurb": "A pleasant country pool in Öxarfjörður with a hot tub, for all ages.",
    "description": "The pool at Lundur in Öxarfjörður, a short distance from Kópasker, is a pleasant country pool with a hot tub suitable for all ages. It serves locals and travellers in North East Iceland.",
    "highlights": [
      "Pleasant country pool",
      "Hot tub",
      "Suitable for all ages"
    ]
  }
];

if (typeof module !== "undefined") {
  module.exports = { REGIONS, PLACES };
}
