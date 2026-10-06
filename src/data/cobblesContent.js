const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

// COBBLES — Centrale contentbron
// Alle publiekgerichte teksten in het Nederlands. Pas hier de inhoud aan om de presentatie bij te werken.

export const brand = {
  name: "COBBLES",
  baseline: "Gezondheid. Performance. Beleving.",
  tagline: "Een bestemming voor een betere manier van leven.",
  promise:
    "COBBLES brengt gezondheid, performance en betekenisvolle beleving samen op één bestemming.",
  positioning:
    "Een bestemming voor een betere manier van leven. Gezondheid, performance, herstel en beleving — samen in het hart van de Vlaamse Ardennen.",
};

// Beeldmateriaal. `experience` en `region` zijn echte foto's van de bestaande locatie, opnieuw
// gehost in de app. Al het overige is conceptbeeld in ontwikkeling — te vervangen door
// definitieve professionele fotografie zodra die beschikbaar is.
export const images = {
  hero: "https://media.base44.com/images/public/6ac2337be23d3a71e0f5c308/a677757c1_generated_image.png",
  destination:
    "https://media.base44.com/images/public/6ac2337be23d3a71e0f5c308/2515f2db5_generated_image.png",
  experience:
    "https://media.base44.com/images/public/6ac2337be23d3a71e0f5c308/e4d4ccd01_interior2.jpg",
  region:
    "https://media.base44.com/images/public/6ac2337be23d3a71e0f5c308/e0b7ec5dd_kapelmuur.jpg",
  // Landschap in plaats van kasseien voor sectie 09 — met naamsvermelding van de fotograaf.
  regionLandscape:
    "https://www.visitvlaamseardennen.be/sites/default/files/public/styles/page_header/public/2024-03/brakelbos_tijl_1.jpg?itok=2f1igDd6",
  regionLandscapeCredit: "Foto: Tijl De Meulemeester",
  // Echte beelden van de faciliteiten ter plaatse
  lab: "https://media.base44.com/images/public/6ac2337be23d3a71e0f5c308/aa429f65c_landing_lab.jpg",
  chamber:
    "https://media.base44.com/images/public/6ac2337be23d3a71e0f5c308/b43f09b45_landing_chamber.png",
  gym: "https://media.base44.com/images/public/6ac2337be23d3a71e0f5c308/3df3be667_landing_gym.jpg",
  gastronomy:
    "https://media.base44.com/images/public/6ac2337be23d3a71e0f5c308/b42be3ab4_FB-001.png",
};

export const contact = {
  // Placeholder — replace with the final confirmed contact email
  email: "hello@cobbles.be",
};

export const navSections = [
  { id: "idea", label: "Het Idee" },
  { id: "destination", label: "De Bestemming" },
  { id: "pillars", label: "De Pijlers" },
  { id: "portfolio", label: "Portfolio" },
  { id: "experience", label: "Beleving" },
  { id: "region", label: "De Regio" },
  { id: "opportunity", label: "De Kans" },
  { id: "landing", label: "Website" },
  { id: "partnerships", label: "Partners" },
];

export const pillars = [
  {
    id: "health",
    name: "Gezondheid & Herstel",
    description:
      "Professionele expertise en persoonlijke begeleiding die je helpen begrijpen, verbeteren en vasthouden wat je welzijn bepaalt — van consult tot herstel, in een omgeving die op rust is gemaakt.",
    audience:
      "Mensen en gezinnen die investeren in vitaliteit, herstel en preventieve gezondheid op lange termijn.",
    examples: ["Gezondheidsconsult", "Herstelverblijf", "Vitaliteitssessies", "Fysiotherapie"],
    accent: "forest",
  },
  {
    id: "performance",
    name: "Performance",
    description:
      "Training, diagnostiek en coaching door experts die je beter laten bewegen, gerichter laten presteren en vooruitgang meetbaar maken — op elk niveau.",
    audience:
      "Atleten, ambitieuze amateurs, professionals en teams die meetbare vooruitgang zoeken.",
    examples: ["Performance-diagnostiek", "Persoonlijke coaching", "Wielerbeleving", "Kracht & conditie"],
    accent: "copper",
  },
  {
    id: "experiences",
    name: "Beleving",
    description:
      "Momenten die mensen samenbrengen — gastronomie, natuur, wellness en verblijf, verweven met de bestemming en de streek.",
    audience:
      "Koppels, gezinnen, groepen en gasten die in een hoogwaardige natuurlijke omgeving iets willen meemaken.",
    examples: ["Gastro Bar Ci.Ju", "E-bike & natuur", "Vallei-wellness", "COBBLES Verblijf"],
    accent: "stone",
  },
];

export const pmcs = [
  { id: "01", image: "https://media.base44.com/images/public/6ac2337be23d3a71e0f5c308/f7935bd8a_generated_image.png", pillar: "performance", title: "Performance-diagnostiek", tagline: "Begrijp je lichaam en volg je vooruitgang.", description: "Professionele analyse van lichaamssamenstelling, beweging en capaciteit — de basis van elk programma dat rond jou wordt gebouwd.", line: "COBBLES Performance" },
  { id: "02", image: "https://media.base44.com/images/public/6ac2337be23d3a71e0f5c308/7f1183317_generated_image.png", pillar: "performance", title: "Persoonlijke coaching", tagline: "Train met begeleiding die rond jouw doelen is gebouwd.", description: "Coaching van mens tot mens die zich aanpast aan jouw niveau, agenda en ambitie — gestructureerd, persoonlijk en met opvolging.", line: "COBBLES Performance" },
  { id: "03", image: "https://media.base44.com/images/public/6ac2337be23d3a71e0f5c308/521b16a79_generated_image.png", pillar: "performance", title: "Wielerbeleving", tagline: "Rijd de legendarische wegen met professionele ondersteuning.", description: "Begeleide ritten over de kasseien en hellingen van de Vlaamse Ardennen, met lokale kennis en volledige ondersteuning.", line: "COBBLES Performance" },
  { id: "04", image: "https://media.base44.com/images/public/6ac2337be23d3a71e0f5c308/12b4ec1a3_generated_image.png", pillar: "performance", title: "Executive performance", tagline: "Een gerichte retreat om te resetten, te presteren en te herstellen.", description: "Intensieve, tijdbesparende programma's voor wie weinig tijd heeft en resultaat wil.", line: "COBBLES Performance" },
  { id: "05", image: "https://media.base44.com/images/public/6ac2337be23d3a71e0f5c308/dd9a9b0b0_generated_image.png", pillar: "health", title: "Vitaliteitssessies", tagline: "Een persoonlijke aanpak van vitaliteit en welzijn.", description: "Begeleide sessies rond herstel, energie en veerkracht — afgestemd op jouw behoeften en ritme.", line: "COBBLES Herstel" },
  { id: "06", image: "https://media.base44.com/images/public/6ac2337be23d3a71e0f5c308/1aa3adb07_generated_image.png", pillar: "health", title: "Gezondheidsconsult", tagline: "Professionele begeleiding voor je gezondheid op lange termijn.", description: "Een consult dat je laat begrijpen waar je staat en waar de focus hoort — helder, persoonlijk en geloofwaardig.", line: "COBBLES Gezondheid" },
  { id: "07", image: "https://media.base44.com/images/public/6ac2337be23d3a71e0f5c308/ed446a387_generated_image.png", pillar: "health", title: "Herstelverblijf", tagline: "Rust en herstel in een kalme, rustgevende omgeving.", description: "Verblijven gebouwd rond rust en herstel — de ruimte en begeleiding om echt te recupereren.", line: "COBBLES Herstel" },
  { id: "08", image: "https://media.base44.com/images/public/6ac2337be23d3a71e0f5c308/a53662eea_generated_image.png", pillar: "performance", title: "Kracht & conditie", tagline: "Bouw veerkracht en kracht met gestructureerde programma's.", description: "Krachttraining onder begeleiding, als duurzame basis voor performance én het dagelijkse leven.", line: "COBBLES Performance" },
  { id: "09", image: "https://media.base44.com/images/public/6ac2337be23d3a71e0f5c308/d5e5438d6_generated_image.png", pillar: "health", title: "Gezondheid voor het hele gezin", tagline: "Zorg die het welzijn van het hele gezin ondersteunt.", description: "Programma's die elke generatie meenemen — zodat herstel en gezondheid gedeeld zijn, niet alleen.", line: "COBBLES Gezondheid" },
  { id: "10", image: "https://media.base44.com/images/public/6ac2337be23d3a71e0f5c308/9fccc5f71_generated_image.png", pillar: "health", title: "Fysiotherapie & revalidatie", tagline: "Beweeg opnieuw vrij met professionele revalidatie.", description: "Persoonlijke revalidatie die beweging, vertrouwen en kracht herstelt.", line: "COBBLES Herstel" },
  { id: "11", image: "https://media.base44.com/images/public/6ac2337be23d3a71e0f5c308/74848d0d2_generated_image.png", pillar: "experiences", title: "Gastro Bar Ci.Ju", tagline: "Seizoensgebonden keuken met de streek als basis.", description: "Een gastvrije tafel waar seizoensgebonden, regionale gerechten mensen samenbrengen — ontspannen en rijkelijk.", line: "COBBLES Beleving" },
  { id: "12", image: "https://media.base44.com/images/public/6ac2337be23d3a71e0f5c308/a03813f35_generated_image.png", pillar: "health", title: "Privéspa", tagline: "Een privé-wellnesservaring rond tijd voor elkaar.", description: "Exclusief gebruik van een privéspa — de ruimte, warmte en rust om te ontspannen op jouw voorwaarden.", line: "COBBLES Wellness" },
  { id: "13", image: "https://media.base44.com/images/public/6ac2337be23d3a71e0f5c308/ce76814a5_generated_image.png", pillar: ["health", "experiences"], title: "Vallei-wellness", tagline: "Wellness waarin gezondheid en beleving samenkomen.", description: "Wellness in het landschap — een ervaring die het lichaam herstelt en de geest opheft.", line: "COBBLES Wellness" },
  { id: "14", image: "https://media.base44.com/images/public/6ac2337be23d3a71e0f5c308/9175d8cb1_generated_image.png", pillar: "experiences", title: "E-bike & natuur", tagline: "Ontdek de Vlaamse Ardennen op je eigen tempo.", description: "E-bikeroutes door de heuvels en dorpen van de streek — vrijheid, natuur en ontdekking.", line: "COBBLES Beleving" },
  { id: "15", image: "https://media.base44.com/images/public/6ac2337be23d3a71e0f5c308/47cce4aae_generated_image.png", pillar: "experiences", title: "COBBLES Verblijf", tagline: "Blijf overnachten en ervaar COBBLES volledig.", description: "Comfortabel en doordacht verblijf waarin je alles van de bestemming kunt combineren.", line: "COBBLES Verblijf" },
  { id: "16", image: "https://media.base44.com/images/public/6ac2337be23d3a71e0f5c308/1f65d5918_generated_image.png", pillar: "health", title: "Voeding & levensstijl", tagline: "Duurzame gewoontes voor blijvende vitaliteit.", description: "Praktische begeleiding rond voeding en dagelijkse gewoontes — kleine veranderingen die zich opstapelen tot blijvende energie.", line: "COBBLES Gezondheid" },
];

// De beleving is leidend; COBBLES staat klein als endorsement boven de naam.
export const productLines = [
  {
    id: "performance",
    label: "Performance",
    description: "Diagnostiek, coaching, training en wielrennen — voor meetbare vooruitgang.",
    image: "https://media.base44.com/images/public/6ac2337be23d3a71e0f5c308/f7935bd8a_generated_image.png",
  },
  {
    id: "health",
    label: "Gezondheid",
    description: "Consult en begeleiding rond levensstijl voor vitaliteit op lange termijn.",
    image: "https://media.base44.com/images/public/6ac2337be23d3a71e0f5c308/1aa3adb07_generated_image.png",
  },
  {
    id: "recovery",
    label: "Herstel",
    description: "Herstelverblijven, revalidatie en vitaliteitssessies.",
    image: "https://media.base44.com/images/public/6ac2337be23d3a71e0f5c308/ed446a387_generated_image.png",
  },
  {
    id: "wellness",
    label: "Wellness",
    description: "Privéspa en immersieve wellness in de natuur.",
    image: "https://media.base44.com/images/public/6ac2337be23d3a71e0f5c308/a03813f35_generated_image.png",
  },
  {
    id: "stay",
    label: "Verblijf",
    description: "Overnachtingen waarmee je COBBLES volledig ervaart.",
    image: "https://media.base44.com/images/public/6ac2337be23d3a71e0f5c308/47cce4aae_generated_image.png",
  },
  {
    id: "experiences",
    label: "Beleving",
    description: "Gastronomie, natuur en gedeelde momenten op de bestemming.",
    image: images.gastronomy,
    zoom: true, // snijdt de galerij-UI aan de rand van de bronfoto weg
  },
];

export const customerJourneys = [
  {
    title: "Het Performance-pad",
    description:
      "Begrijp waar je staat, train gericht en herstel goed — een volledige boog van inzicht naar resultaat.",
    steps: [
      { name: "Diagnostiek", detail: "Begrijp je startpunt" },
      { name: "Coaching", detail: "Bouw een persoonlijk plan" },
      { name: "Training", detail: "Train met begeleiding" },
      { name: "Herstel", detail: "Rust en herstel" },
    ],
  },
  {
    title: "Het Herstelverblijf",
    description:
      "Rust en herstel terwijl wie je dierbaar is wordt opgevangen — herstel voor de hele kring.",
    steps: [
      { name: "Herstelverblijf", detail: "Rust in een rustgevende omgeving" },
      { name: "Gezinszorg", detail: "Zorg voor het hele gezin" },
      { name: "Privéspa", detail: "Samen ontspannen" },
    ],
  },
  {
    title: "De Natuur-uitstap",
    description:
      "Overdag de streek verkennen, 's avonds samen tafelen en blijven slapen — de bestemming van begin tot eind.",
    steps: [
      { name: "E-bike & natuur", detail: "Verken de heuvels" },
      { name: "Gastro Bar Ci.Ju", detail: "Samen tafelen" },
      { name: "COBBLES Verblijf", detail: "Blijf slapen" },
    ],
  },
  {
    title: "De Executive Retreat",
    description:
      "Stap even uit om te resetten, gefocust te presteren en in de natuur te ontspannen — voor wie het druk heeft.",
    steps: [
      { name: "Executive retreat", detail: "Stap uit en reset" },
      { name: "Performance-sessie", detail: "Focus en prestatie" },
      { name: "Vallei-wellness", detail: "Ontspan in de natuur" },
    ],
  },
];

// Arrangementen die uit de reizen hierboven zijn afgeleid en als marketingaanbod op de
// website kunnen worden gezet. `featured` markeert het aanbod van deze week.
export const arrangements = [
  {
    name: "Reset & Meten",
    duration: "2 nachten",
    audience: "Wie zijn gezondheid wil opvolgen",
    text: "Een korte reset waarin je precies te weten komt waar je staat — en meteen iets doet met die cijfers.",
    includes: [
      "DXA-scan van je lichaamssamenstelling",
      "Persoonlijk gesprek met een bewegingsdeskundige",
      "Infraroodsauna en fitnessruimte",
    ],
    featured: true,
    image:
      "https://media.base44.com/images/public/6ac2337be23d3a71e0f5c308/f7935bd8a_generated_image.png",
  },
  {
    name: "Cobbles Week",
    duration: "4 nachten",
    audience: "Wielrenners & teams",
    text: "Vier dagen op de legendarische wegen van de Ronde van Vlaanderen, met begeleiding en herstel erachter.",
    includes: [
      "Twee begeleide ritten over de kasseien",
      "Afgesloten fietsenstalling, werkplaats en fietswas",
      "Herstelsessie in de health chamber",
    ],
    featured: true,
    image: "https://media.base44.com/images/public/6ac2337be23d3a71e0f5c308/e0b7ec5dd_kapelmuur.jpg",
  },
  {
    name: "Samen Herstellen",
    duration: "3 nachten",
    audience: "Koppels & gezinnen",
    text: "Herstellen zonder wie je dierbaar is thuis te laten — zorg voor het hele gezelschap.",
    includes: [
      "Herstelverblijf voor de hele groep",
      "Privéspa",
      "Begeleiding afgestemd op het gezin",
    ],
    featured: true,
    image: "https://media.base44.com/images/public/6ac2337be23d3a71e0f5c308/ed446a387_generated_image.png",
  },
  {
    name: "Vallei-uitstap",
    duration: "2 nachten",
    audience: "Koppels & vrienden",
    text: "Fietsen door de vallei, 's avonds tafelen bij Ci.Ju en blijven slapen op de bestemming.",
    includes: [
      "E-bike of fiets, ter plaatse geregeld",
      "Diner bij Gastro Bar Ci.Ju",
      "Routes van Cycling in Flanders",
    ],
    image: "https://media.base44.com/images/public/6ac2337be23d3a71e0f5c308/9175d8cb1_generated_image.png",
  },
  {
    name: "Executive Reset",
    duration: "2 nachten",
    audience: "Professionals & teams",
    text: "Twee dagen met focus: meten, trainen en ontspannen — zonder tijd te verliezen.",
    includes: [
      "Performance-sessie op maat",
      "Vergaderruimte en keuken",
      "Vallei-wellness",
    ],
    image: "https://media.base44.com/images/public/6ac2337be23d3a71e0f5c308/12b4ec1a3_generated_image.png",
  },
];

export const arrangementsNote =
  "Deze arrangementen bundelen wat vandaag al op de locatie boekbaar is. Ze zijn direct als campagne inzetbaar — bijvoorbeeld als 'deze week uitgelicht' op de website — en kunnen als pakket in het boekingssysteem worden gezet.";

export const destinationPillars = [
  { label: "Expertise", text: "Professionele zorg en begeleiding, geloofwaardig en actueel." },
  { label: "Gastvrijheid", text: "Premium service die warm is, niet stijf." },
  { label: "Natuur", text: "Het landschap van de Vlaamse Ardennen, verweven in alles." },
  { label: "Beleving", text: "Momenten die ertoe doen, ontworpen om te delen." },
];

export const opportunityPoints = [
  { label: "Meerdere doelgroepen", text: "Atleten, gezinnen, professionals, koppels en groepen — elk vinden hier iets." },
  { label: "Meerdere motieven", text: "Gezondheid, performance, herstel en beleving — redenen die verschillen en overlappen." },
  { label: "Combineerbare diensten", text: "Gasten willen zelden één ding. De bestemming is gebouwd op combinaties." },
  { label: "Terugkerende gasten", text: "Een plek waar mensen terugkomen — om andere redenen, in andere seizoenen." },
];

// Referenties — wie de bestemming achter het concept al vond en beoordeelde.
export const references = [
  { source: "Tripadvisor", value: "4,9 / 5", detail: "16 gastreviews" },
  { source: "Google", value: "5,0 / 5", detail: "Gastenscore" },
  { source: "UCI Rider Deals", value: "Teams & renners", detail: "Speciale tarieven voor gelicentieerde teams" },
];

export const referenceQuote = {
  text: "De perfecte uitvalsbasis voor koers, training en herstel.",
  source: "Gastreview, Flanders Cobblestone Paradise",
};

export const referenceListings = [
  {
    name: "Visit Flanders",
    logo: "https://media.base44.com/images/public/6ac2337be23d3a71e0f5c308/761709e7b_visitflanders.svg",
  },
  {
    name: "Cycling in Flanders",
    logo: "https://media.base44.com/images/public/6ac2337be23d3a71e0f5c308/6d5be08e5_cyclinginflanders.svg",
  },
];

// Kanalen waarop de bestemming al zichtbaar is en gevolgd wordt.
export const socialChannels = [
  {
    id: "instagram",
    name: "Instagram",
    href: "https://www.instagram.com/flanders_cobblestone/",
  },
  {
    id: "facebook",
    name: "Facebook",
    href: "https://www.facebook.com/p/Flanders-Cobblestone-61577224953361/",
  },
  {
    id: "tiktok",
    name: "TikTok",
    href: "https://www.tiktok.com/@flanders_cobblestone",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/flanders-cobblestone-paradise",
  },
];

// Partners die al betrokken zijn bij de bestemming.
export const existingPartners = [
  {
    name: "Soudal Quick-Step",
    role: "UCI WorldTeam",
    note: "Elite-team verbonden aan de bestemming.",
    logo: "https://media.base44.com/images/public/6ac2337be23d3a71e0f5c308/0682dd62c_soudal-quick-step.png",
  },
  {
    name: "Shimano",
    role: "Componenten",
    note: "Materiaalpartnership.",
    logo: "https://media.base44.com/images/public/6ac2337be23d3a71e0f5c308/7a978b6b2_shimano.svg",
  },
  {
    name: "Specialized",
    role: "Fietsen",
    note: "Fiets- en rennerspartnership.",
    logo: "https://media.base44.com/images/public/6ac2337be23d3a71e0f5c308/ed909cbdb_specialized.svg",
  },
  {
    name: "Normocare",
    role: "Sportzorg & herstel",
    note: "Zorg- en herstelexpertise ter plaatse.",
    logo: "https://media.base44.com/images/public/6ac2337be23d3a71e0f5c308/da0cfaec1_normocare.png",
  },
];

// Sporen om het partnernetwerk verder te ontwikkelen.
export const partnershipTracks = [
  { title: "Teams & federaties", text: "Langetermijncontracten en voorbereidingskampen — inclusief ondersteuning richting de Olympische cyclus LA 2028." },
  { title: "Merken & materiaal", text: "Fiets-, voedings- en hersteltechnologiepartners, verweven in de gastbeleving." },
  { title: "Gezondheid & wetenschap", text: "Toegepast onderzoekspartnerschap, waaronder het normobare zuurstoftherapieprogramma." },
  { title: "Corporate health", text: "Performance- en welzijnsprogramma's voor bedrijven en hun teams." },
  { title: "Reizen & toerisme", text: "Wielertoerisme, clubs en bestemmingspartners die de juiste gasten brengen." },
];

export const ctas = {
  explore: "Bekijk het portfolio",
  partner: "Bespreek een partnership",
  contact: "Neem contact op",
};