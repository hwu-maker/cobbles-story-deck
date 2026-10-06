const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

// COBBLES — Gastenpagina-concept (decksectie 11)
// Tekst en data voor de werkende mock-up van de landingspagina. Operationele feiten — adres,
// kamertypes, faciliteiten, scores, de UCI-rennersdeal en het boekingssysteem — komen van de
// bestaande locatiesite. Alles visueel volgt de COBBLES-merkidentiteit.

export const bookingSystem = {
  name: "RoomRaccoon",
  url: "https://booking.roomraccoon.com/flanderscobblestoneparadise/en/",
};

export const todayIso = () => new Date().toISOString().slice(0, 10);

export function addDays(iso, days) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d + days)).toISOString().slice(0, 10);
}

// The booking engine expects DD-MM-YYYY.
const toEngineDate = (iso) => (iso ? iso.split("-").reverse().join("-") : null);

// Deep link into the booking engine, pre-filled with the guest's dates.
export function bookingUrl({ arrival, departure, guests } = {}) {
  const params = [];
  if (arrival) params.push(`dateStart=${toEngineDate(arrival)}`);
  if (departure) params.push(`dateEnd=${toEngineDate(departure)}`);
  if (guests) params.push(`adults=${guests}`);
  return params.length ? `${bookingSystem.url}?${params.join("&")}` : bookingSystem.url;
}

const files =
  "https://media.base44.com/images/public/6ac2337be23d3a71e0f5c308";
const generated = "https://media.base44.com/images/public/6ac2337be23d3a71e0f5c308";

// ---- De decksectie zelf -------------------------------------------------------------------

export const landingSection = {
  eyebrow: "11 — De Gastenpagina",
  title: "Wat de gast als eerste ziet.",
  intro:
    "De presentatie zet de visie neer. Dit is hoe die boekingen wordt: één snelle consumentenpagina — met de belevingen en arrangementen die vandaag alleen in het boekingssysteem zitten naar voren gehaald op de site, en de reservatie die wordt doorgegeven aan datzelfde systeem.",
  principles: [
    {
      title: "Boekingsbalk boven de vouw",
      detail:
        "Data en gasten staan direct onder de belofte, zodat het eerste wat een gast kan doen beschikbaarheid checken is.",
    },
    {
      title: "Beste tarief bij rechtstreeks boeken, vooraan gezegd",
      detail:
        "Het voordeel van hier boeken — beste tarief, geen boekingskosten — wordt geclaimd vóór enige twijfel kan ontstaan.",
    },
    {
      title: "De drie pijlers als reden om te kiezen",
      detail:
        "Gezondheid, performance en beleving zijn het onderscheid, dus ze staan vóór de kamers.",
    },
    {
      title: "Belevingen en arrangementen op de pagina",
      detail:
        "Diagnostiek, de health chamber, de fitnessruimte en het rijden worden hier verkocht — niet pas ontdekt bij het afrekenen.",
    },
  ],
  cta: "Open de live pagina",
  note: "Alles op de pagina werkt: de datums voeden het boekingssysteem, de navigatie scrolt, de FAQ opent, en elke boekingsknop opent het bestaande RoomRaccoon-systeem in een nieuw tabblad.",
};

// ---- De landingspagina zelf ---------------------------------------------------------------

export const landingHero = {
  promises: [
    "Beste tarief bij rechtstreeks boeken",
    "Geen boekingskosten",
    "Afgesloten fietsenstalling & werkplaats ter plaatse",
  ],
  // Eén hero per pijler, elk geschreven voor de gast van die pijler.
  slides: [
    {
      id: "health",
      tab: "Gezondheid & Herstel",
      tag: "COBBLES Gezondheid & Herstel",
      title: "Gezond van binnen, dan straal je van buiten.",
      text: "Een vetmassascan met je vetpercentage, uitgelegd door een bewegingsdeskundige, en een herstelchamber, fitness en infraroodsauna's erachter — allemaal ter plaatse, in één rustige plek om naar terug te keren.",
      image:
        "https://media.base44.com/images/public/6ac2337be23d3a71e0f5c308/e28aaf6d0_dxa.jpg",
      visual: "dxa",
    },
    {
      id: "performance",
      tab: "Performance",
      tag: "COBBLES Performance",
      title: "Rijd de kasseien. Meet wat het waard is.",
      text: "De Kapelmuur en de wegen van de Ronde van Vlaanderen starten bij de deur, met een werkplaats, afgesloten fietsenstalling en een performance lab erachter — voor renners en teams die vooruitgang zoeken.",
      image: `${files}/e0b7ec5dd_kapelmuur.jpg`,
    },
    {
      id: "experiences",
      tab: "Beleving",
      tag: "COBBLES Beleving",
      title: "Rij uit, eet goed, slaap ertussen.",
      text: "Gastrobar Ci-Ju van moeder en dochter Cindy en Justine, een terras in de vallei, en de dorpen en musea van de Vlaamse Ardennen — voor gasten die voor de mooie dingen komen.",
      image: `${generated}/6eeccd4f9_FB-002.png`,
      focalPointX: 0.5,
      focalPointY: 0.58,
    },
  ],
};

export const landingRatings = [
  { value: "4,9", source: "Tripadvisor", detail: "16 gastreviews" },
  { value: "5,0", source: "Google", detail: "Gastenscore" },
  { value: "UCI", source: "Rider Deals", detail: "Speciale tarieven voor teams" },
];

export const landingQuote = {
  text: "De perfecte uitvalsbasis voor koers, training en herstel.",
  source: "Gastreview, Flanders Cobblestone Paradise",
};

export const landingPillars = [
  {
    title: "Gezondheid & Herstel",
    tag: "COBBLES Gezondheid",
    text: "DXA-scans van je lichaamssamenstelling met persoonlijke feedback van bewegingsdeskundigen, en herstelexpertise ter plaatse.",
    image:
      "https://media.base44.com/images/public/6ac2337be23d3a71e0f5c308/0dc91a6d0_dxa2.jpg",
  },
  {
    title: "Performance",
    tag: "COBBLES Performance",
    text: "Een volledig uitgeruste fitnessruimte, een werkplaats met reservedelen, en begeleide ritten over de kasseien van de Vlaamse Ardennen.",
    image: `${generated}/521b16a79_generated_image.png`,
  },
  {
    title: "Beleving",
    tag: "COBBLES Beleving",
    text: "Restaurant Ci-Ju, een terras in de vallei, en de wegen, dorpen en musea van de streek.",
    image: `${files}/202b73017_landing_food.jpg`,
  },
];

export const landingRooms = [
  {
    name: "Twin-appartement",
    spec: "Tuinzicht & terras · ca. 67 m² · 2–3 gasten",
    price: "Vanaf €180",
    detail:
      "Eén slaapkamer met twijfelaar of tweepersoonsbedden, een volledig uitgeruste keuken, een moderne badkamer en een stijlvolle leefruimte. De zetel wordt omgevormd tot een extra bed.",
    features: ["Volledige keuken", "Terras", "Slaapzetel"],
    image: `${files}/ff9c6c9c2_landing_room_twin.jpg`,
  },
  {
    name: "Triple-appartement",
    spec: "Tuinzicht & terras · 3–4 gasten",
    price: "Vanaf €185",
    detail:
      "Drie bedden, een volledig uitgeruste keuken, een gezellige leefruimte en een eigen badkamer die rolstoeltoegankelijk is.",
    features: ["Volledige keuken", "Terras", "Rolstoeltoegankelijk"],
    image: `${files}/e882c6f59_landing_room_triple.jpg`,
  },
  {
    name: "Appartement met twee slaapkamers",
    spec: "Ca. 80 m² · 4–5 gasten",
    price: "Op aanvraag",
    detail:
      "Twee slaapkamers met twijfelaar of tweepersoonsbedden, een volledig uitgeruste keuken, een stijlvolle leefruimte en een rolstoeltoegankelijke badkamer — ruimte voor het hele gezin.",
    features: ["Twee slaapkamers", "Volledige keuken", "Rolstoeltoegankelijk"],
    image: `${files}/8c42277b3_landing_room_family.jpg`,
  },
];

export const landingFacilities = [
  "Vloerverwarming & -koeling",
  "Wasmachine & droogkast",
  "Fietswerkplaats",
  "Fietswas",
  "Fitnessruimte",
  "Afgesloten fietsenstalling",
  "Fietsverhuur",
  "Vergaderruimte",
  "Keuken",
  "Gratis parkeren",
];

// Echte, boekbare faciliteiten — wat vandaag alleen in het boekingssysteem zichtbaar is.
export const landingExperiences = [
  {
    title: "Performance Lab",
    text: "DXA-scans van je lichaamssamenstelling: een pijnloze analyse van zes minuten van vet, spier en bot, gevolgd door een persoonlijk gesprek met een bewegingsdeskundige.",
    image:
      "https://media.base44.com/images/public/6ac2337be23d3a71e0f5c308/bdff33f59_dxa5.jpg",
  },
  {
    title: "Health chamber",
    text: "Normobare zuurstoftherapie in een drukcabine — meer zuurstof naar de weefsels voor sneller herstel en minder ontsteking.",
    image: `${files}/b43f09b45_landing_chamber.png`,
  },
  {
    title: "Fitness & infraroodsauna",
    text: "Keiser-toestellen, een ski-erg, Zwift-fietsen en een SRM-indoortrainer — met infraroodsauna's om af te sluiten.",
    image: `${files}/3df3be667_landing_gym.jpg`,
  },
  {
    title: "Restaurant Ci-Ju",
    text: "Tapas, Belgisch-Franse klassiekers en huisbereide gerechten in een ontspannen bistro. Reservatie vooraf vereist.",
    image: `${generated}/b42be3ab4_FB-001.png`,
    zoom: true, // snijdt de galerij-UI aan de rand van de bronfoto weg
  },
  {
    title: "De klassiekers, vanaf de deur",
    text: "De Kapelmuur en de wegen van de Ronde van Vlaanderen starten bij de accommodatie. Rijd het parcours van de profs, of volg de bewegwijzerde routes van de streek.",
    image: `${files}/e0b7ec5dd_kapelmuur.jpg`,
  },
];

// Concept-arrangementen, elk opgebouwd uit diensten die al ter plaatse boekbaar zijn.
export const landingPackages = [
  {
    name: "Het Performance-pad",
    duration: "3 nachten",
    text: "Meten, trainen en herstellen — een volledige boog voor renners die vooruitgang willen zien.",
    includes: [
      "DXA-scan met persoonlijk gesprek door een bewegingsdeskundige",
      "Twee begeleide ritten over de wegen van de Ronde van Vlaanderen",
      "Een herstelsessie in de health chamber",
    ],
    image: `${generated}/7f1183317_generated_image.png`,
  },
  {
    name: "Het Herstelverblijf",
    duration: "3 nachten",
    text: "Rust, herstel en de week van je af laten glijden — voor lichaam en geest.",
    includes: [
      "Health chamber-sessies op opeenvolgende dagen",
      "Toegang tot infraroodsauna en fitnessruimte",
      "Restaurant Ci-Ju en de vallei voor de deur",
    ],
    image: `${generated}/a03813f35_generated_image.png`,
  },
  {
    name: "De Natuur-uitstap",
    duration: "2 nachten",
    text: "Fietsen in de ochtend, lekker eten in de avond, slapen ertussen.",
    includes: [
      "Fiets of e-bike, ter plaatse geregeld",
      "Routes van Cycling in Flanders vanaf de deur",
      "Diner bij Restaurant Ci-Ju",
    ],
    image: `${generated}/9175d8cb1_generated_image.png`,
  },
  {
    name: "Teams & trainingskampen",
    duration: "Vanaf 5 nachten",
    text: "Voor teams en clubs die willen dat de logistiek verdwijnt.",
    includes: [
      "Afgesloten fietsenstalling, werkplaats en fietswas",
      "Teamkeuken en vergaderruimte",
      "UCI-rennerstarieven voor gelicentieerde teams",
    ],
    image: `${generated}/12b4ec1a3_generated_image.png`,
  },
];

export const landingPackagesNote =
  "Tarieven hangen af van data en bezetting — check beschikbaarheid en voeg je extra's toe in het boekingssysteem.";

// Deze week uitgelicht: het marketingaanbod dat vooraan op de pagina komt te staan.
export const landingFeatured = {
  eyebrow: "Deze week uitgelicht",
  title: "Het aanbod waarmee we deze weken gasten binnenhalen.",
  intro:
    "Elk arrangement bundelt wat vandaag al ter plaatse boekbaar is tot een aanbod dat we vooraan in de markt zetten. Open een kaart voor wat erin zit, of vraag het arrangement rechtstreeks aan.",
  note: "Deze arrangementen kunnen als pakket in het boekingssysteem worden gezet; vandaag komt een aanvraag rechtstreeks bij ons binnen.",
};

export const landingRegion = {
  title: "Brakel, in het hart van de Vlaamse Ardennen.",
  text: "De kasseien van de Ronde van Vlaanderen starten bij de deur. Brugge, Gent en Brussel liggen binnen handbereik, en de vallei rond de accommodatie is gemaakt om te fietsen, te wandelen en te vertragen.",
  address: "Teirlinckstraat 24, 9660 Brakel, België",
  image: `${files}/e0b7ec5dd_kapelmuur.jpg`,
  // Wandelmogelijkheden in de buurt — Het Brakelbos (visitvlaamseardennen.be).
  walksEyebrow: "Te voet",
  walksTitle: "Het Brakelbos, de gedroomde achtergrond voor urenlange wandelingen.",
  walksText:
    "Eeuwenoude beuken, en in het voorjaar een lichtblauw tapijt van wilde hyacinten. Samen met het Bos ter Rijst en het Pottelbergbos is dit meer dan 200 hectare bos — met reeën en eekhoorns tussen de stammen.",
  walksAccess:
    "Toegang via Brakel of het gehucht d'Hoppe · parking aan het einde van de Brakelbosstraat",
  // Beeld met toestemming en naamsvermelding — Tijl De Meulemeester (visitvlaamseardennen.be).
  walksImage:
    "https://www.visitvlaamseardennen.be/sites/default/files/public/styles/paragraph_2_images/public/2025-04/_mg_2090.jpg?itok=fuUhf9bE",
  walksImageAlt: "Wilde hyacinten tussen de beukenstammen in het Brakelbos",
  walksImageCredit: "Foto: Tijl De Meulemeester",
  walks: [
    { name: "Brakelbos-wandelroute", detail: "11 km" },
    { name: "Dwaallicht", detail: "17 km, steviger — over de taalgrens" },
  ],
  walksLink: {
    label: "Bekijk de wandelroutes",
    href: "https://www.visitvlaamseardennen.be/het-brakelbos",
  },
  stats: [
    { value: "10 km", label: "Centrum" },
    { value: "8,6 km", label: "Treinstation" },
    { value: "66 km", label: "Luchthaven" },
  ],
};

export const landingFaq = [
  {
    question: "Krijg ik hier het beste tarief?",
    answer:
      "Ja. Rechtstreeks boeken geeft altijd ons beste beschikbare tarief, zonder boekingskosten — en je spreekt ons direct als je plannen veranderen.",
  },
  {
    question: "Waar precies bevinden jullie je?",
    answer:
      "Teirlinckstraat 24, 9660 Brakel — 10 km van het centrum, 8,6 km van het dichtstbijzijnde treinstation en 66 km van de luchthaven.",
  },
  {
    question: "Kan ik mijn fiets meenemen?",
    answer:
      "Ja. Er is een afgesloten fietsenstalling, een fietswas, een werkplaats met reservedelen en fietsverhuur ter plaatse.",
  },
  {
    question: "Is het geschikt voor gezinnen?",
    answer:
      "De appartementen met twee slaapkamers bieden plaats aan vier tot vijf gasten met een gedeelde leefruimte en keuken. De twin- en triple-appartementen hebben beide tuinzicht en een privéterras.",
  },
  {
    question: "Kan ik ter plaatse eten?",
    answer:
      "Restaurant Ci-Ju serveert tapas en Belgisch-Franse gerechten en werkt met reservatie vooraf. Groepen vanaf 15 personen kunnen op aanvraag worden gecaterd.",
  },
  {
    question: "Kan ik het lab, de chamber of de sauna boeken?",
    answer:
      "Ja — DXA-scans, sessies in de health chamber en de fitnessruimte met infraroodsauna's kunnen aan je verblijf worden toegevoegd. Kies je extra's bij het boeken, dan bevestigen wij je tijden.",
  },
  {
    question: "Bieden jullie tarieven voor teams?",
    answer:
      "Ja — UCI-gelicentieerde teams en renners krijgen speciale tarieven voor langere trainings- en koersverblijven. Neem contact op om te bespreken wat je nodig hebt.",
  },
];

export const landingClosing = {
  title: "Klaar wanneer jij het bent.",
  text: "Check beschikbaarheid en boek rechtstreeks — beste tarief, geen boekingskosten, en alles ter plaatse.",
  cta: "Boek je verblijf",
  image: `${files}/43279e4cd_landing_bedroom.jpg`,
};

export const landingContact = {
  address: "Teirlinckstraat 24, 9660 Brakel, België",
  email: "hello@cobbles.be",
  phone: "+32 55 47 48 46",
  phoneHref: "+3255474846",
};