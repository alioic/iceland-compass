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
    "name": "Ásbyrgi og Dettifoss",
    "region": "nordaustur",
    "type": "National park",
    "tags": [
      "Canyon",
      "Waterfall",
      "Hiking"
    ],
    "blurb": "Sleipnir's horseshoe-shaped canyon and Europe's most powerful waterfall.",
    "description": "Ásbyrgi is a magnificent horseshoe-shaped canyon, said in folklore to have been formed by the hoof of Sleipnir, Odin's horse. Further south in Jökulsárgljúfur thunders Dettifoss, Europe's most powerful waterfall, along with Selfoss and Hafragilsfoss.",
    "highlights": [
      "Ásbyrgi",
      "Dettifoss",
      "Hljóðaklettar",
      "Vesturdalur"
    ],
    "accommodation": [
      {
        "name": "Campsite and accommodation in Ásbyrgi",
        "type": "Camping / guesthouse",
        "price": "$"
      }
    ],
    "activities": [
      "Hiking trails in the canyons",
      "Waterfall viewing"
    ],
    "season": "June–September"
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
    "name": "Reynisfjara og Vík",
    "region": "sudurland",
    "type": "Beach",
    "tags": [
      "Black-sand beach",
      "Landmark",
      "Puffin"
    ],
    "blurb": "Famous black-sand beach with basalt columns and the Reynisdrangar sea stacks.",
    "description": "Reynisfjara is the most striking black-sand beach in the country, with tall basalt columns, the Reynisdrangar sea stacks offshore and a puffin colony in summer. Caution: dangerous sneaker waves — keep well away from the sea. The village of Vík is close by.",
    "highlights": [
      "Basalt columns",
      "Reynisdrangar",
      "Dyrhólaey",
      "Vík í Mýrdal"
    ],
    "accommodation": [
      {
        "name": "Hotel in Vík",
        "type": "Hotel",
        "price": "$$$"
      },
      {
        "name": "Guesthouses and cottages",
        "type": "Guesthouse",
        "price": "$$"
      }
    ],
    "activities": [
      "Beach walk with caution",
      "Puffin watching at Dyrhólaey"
    ],
    "season": "Year-round, puffins May–August"
  },
  {
    "id": "jokulsarlon",
    "name": "Jökulsárlón og Breiðamerkursandur",
    "region": "sudurland",
    "type": "Glacier lagoon",
    "tags": [
      "Glacier",
      "Icebergs",
      "Seals"
    ],
    "blurb": "A magical glacier lagoon full of icebergs, with the Diamond Beach alongside.",
    "description": "Jökulsárlón is the deepest lake in the country, filled with blue icebergs that break off Breiðamerkurjökull and drift out to sea. On the Diamond Beach, chunks of ice glitter like diamonds on the black sand. Seals are often seen in the lagoon.",
    "highlights": [
      "Boat trip among the icebergs",
      "The Diamond Beach",
      "Seals",
      "Nearby Fjallsárlón"
    ],
    "accommodation": [
      {
        "name": "Hotel in Öræfi / Höfn",
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
      "Boat trip on the lagoon",
      "Ice-cave tour in winter"
    ],
    "season": "Year-round, ice caves Nov–March"
  },
  {
    "id": "skogafoss",
    "name": "Skógafoss og Seljalandsfoss",
    "region": "sudurland",
    "type": "Waterfalls",
    "tags": [
      "Waterfall",
      "Hiking",
      "Landmark"
    ],
    "blurb": "Two magnificent waterfalls at the foot of Eyjafjallajökull.",
    "description": "Skógafoss is 60 m high and 25 m wide — you can climb steps to a viewing platform and continue on to Fimmvörðuháls. Seljalandsfoss is unique because you can walk behind the waterfall. Both lie along the ring road beneath Eyjafjallajökull.",
    "highlights": [
      "Skógafoss",
      "Seljalandsfoss",
      "Gljúfrabúi",
      "Fimmvörðuháls"
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
      "Fimmvörðuháls hiking trail"
    ],
    "season": "Year-round"
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
  }
];

if (typeof module !== "undefined") {
  module.exports = { REGIONS, PLACES };
}
