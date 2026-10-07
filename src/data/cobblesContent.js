const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

// COBBLES — Centrale contentbron
// Alle publiekgerichte teksten in het Nederlands. Pas hier de inhoud aan om de presentatie bij te werken.

export const brand = {
  name: "COBBLES",
  slogan: "THE ART OF BALANCE",
  baseline: "Vitality. Performance. Re-Source.",
  promise:
    "COBBLES brengt gezondheid, performance en beleving samen op één bestemming.",
  positioning:
    "Een plek om gezonder te leven. Gezondheid, performance, herstel en beleving, midden in de Vlaamse Ardennen.",
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
      "Begeleiding die laat zien waar je staat, wat je kunt verbeteren en hoe je dat volhoudt. Van consult tot herstel, op een plek die tot rust uitnodigt.",
    audience:
      "Mensen en gezinnen die kiezen voor vitaliteit, herstel en gezondheid die blijft.",
    examples: ["Gezondheidsconsult", "Herstelverblijf", "Vitaliteitssessies", "Fysiotherapie"],
    accent: "forest",
  },
  {
    id: "performance",
    name: "Performance",
    description:
      "Training, meting en coaching door experts. Je beweegt beter, presteert gerichter en ziet je vooruitgang — of je nu start of al ver staat.",
    audience:
      "Atleten, ambitieuze amateurs, professionals en teams die meetbare vooruitgang zoeken.",
    examples: ["Performance-diagnostiek", "Persoonlijke coaching", "Wielerbeleving", "Kracht & conditie"],
    accent: "copper",
  },
  {
    id: "experiences",
    name: "Beleving",
    description:
      "Samen aan tafel, de natuur in, wellness, en een nacht blijven. Verbonden met de plek en de streek.",
    audience:
      "Koppels, gezinnen en groepen die in deze natuur iets bijzonders willen beleven.",
    examples: ["Gastro Bar Ci.Ju", "E-bike & natuur", "Vallei-wellness", "COBBLES Verblijf"],
    accent: "stone",
  },
];

export const pmcs = [
  { id: "01", image: "https://media.base44.com/images/public/6ac2337be23d3a71e0f5c308/f7935bd8a_generated_image.png", pillar: "performance", title: "Performance-diagnostiek", tagline: "Begrijp je lichaam en volg je vooruitgang.", description: "Een professionele analyse van lichaamssamenstelling, beweging en capaciteit. Daarop bouwt elk programma dat bij jou past.", line: "COBBLES Performance" },
  { id: "02", image: "https://media.base44.com/images/public/6ac2337be23d3a71e0f5c308/7f1183317_generated_image.png", pillar: "performance", title: "Persoonlijke coaching", tagline: "Train met begeleiding die past bij jouw doelen.", description: "Persoonlijke coaching op jouw niveau, in jouw agenda, met jouw ambitie. Met een plan en opvolging.", line: "COBBLES Performance" },
  { id: "03", image: "https://media.base44.com/images/public/6ac2337be23d3a71e0f5c308/521b16a79_generated_image.png", pillar: "performance", title: "Wielerbeleving", tagline: "Rijd de legendarische wegen met professionele ondersteuning.", description: "Begeleide ritten over de kasseien en hellingen van de Vlaamse Ardennen. Met lokale kennis, en alles geregeld.", line: "COBBLES Performance" },
  { id: "04", image: "https://media.base44.com/images/public/6ac2337be23d3a71e0f5c308/12b4ec1a3_generated_image.png", pillar: "performance", title: "Executive performance", tagline: "Een gerichte retreat om bij te komen, scherp te presteren en te herstellen.", description: "Korte, intense programma's voor wie weinig tijd heeft en resultaat wil.", line: "COBBLES Performance" },
  { id: "05", image: "https://media.base44.com/images/public/6ac2337be23d3a71e0f5c308/dd9a9b0b0_generated_image.png", pillar: "health", title: "Vitaliteitssessies", tagline: "Vitaliteit en welzijn, afgestemd op jou.", description: "Begeleide sessies rond herstel, energie en veerkracht — afgestemd op jouw behoeften en ritme.", line: "COBBLES Herstel" },
  { id: "06", image: "https://media.base44.com/images/public/6ac2337be23d3a71e0f5c308/1aa3adb07_generated_image.png", pillar: "health", title: "Gezondheidsconsult", tagline: "Professionele begeleiding voor je gezondheid op lange termijn.", description: "Een consult dat helder maakt waar je staat en waar je best op inzet. Persoonlijk en nuchter.", line: "COBBLES Gezondheid" },
  { id: "07", image: "https://media.base44.com/images/public/6ac2337be23d3a71e0f5c308/ed446a387_generated_image.png", pillar: "health", title: "Herstelverblijf", tagline: "Rust en herstel, in een stille omgeving.", description: "Verblijven rond rust en herstel: de tijd en de begeleiding om echt te recupereren.", line: "COBBLES Herstel" },
  { id: "08", image: "https://media.base44.com/images/public/6ac2337be23d3a71e0f5c308/a53662eea_generated_image.png", pillar: "performance", title: "Kracht & conditie", tagline: "Kracht en veerkracht, met een programma dat klopt.", description: "Krachttraining onder begeleiding, als duurzame basis voor performance én het dagelijkse leven.", line: "COBBLES Performance" },
  { id: "09", image: "https://media.base44.com/images/public/6ac2337be23d3a71e0f5c308/d5e5438d6_generated_image.png", pillar: "health", title: "Gezondheid voor het hele gezin", tagline: "Zorg die het hele gezin vooruithelpt.", description: "Programma's voor elke generatie, zodat herstel en gezondheid iets van het hele gezin worden.", line: "COBBLES Gezondheid" },
  { id: "10", image: "https://media.base44.com/images/public/6ac2337be23d3a71e0f5c308/9fccc5f71_generated_image.png", pillar: "health", title: "Fysiotherapie & revalidatie", tagline: "Weer vrij bewegen, met professionele revalidatie.", description: "Persoonlijke revalidatie die beweging, vertrouwen en kracht herstelt.", line: "COBBLES Herstel" },
  { id: "11", image: "https://media.base44.com/images/public/6ac2337be23d3a71e0f5c308/74848d0d2_generated_image.png", pillar: "experiences", title: "Gastro Bar Ci.Ju", tagline: "Seizoenskeuken, met de streek op het bord.", description: "Een gastvrije tafel met seizoensgerechten uit de streek. Ontspannen, en royaal.", line: "COBBLES Beleving" },
  { id: "12", image: "https://media.base44.com/images/public/6ac2337be23d3a71e0f5c308/a03813f35_generated_image.png", pillar: "health", title: "Privéspa", tagline: "Een privéspa, met tijd voor elkaar.", description: "De privéspa voor jezelf: ruimte, warmte en rust, op jouw tempo.", line: "COBBLES Wellness" },
  { id: "13", image: "https://media.base44.com/images/public/6ac2337be23d3a71e0f5c308/ce76814a5_generated_image.png", pillar: ["health", "experiences"], title: "Vallei-wellness", tagline: "Wellness waarin gezondheid en beleving samenkomen.", description: "Wellness in het landschap. Je lichaam herstelt, je hoofd komt tot rust.", line: "COBBLES Wellness" },
  { id: "14", image: "https://media.base44.com/images/public/6ac2337be23d3a71e0f5c308/9175d8cb1_generated_image.png", pillar: "experiences", title: "E-bike & natuur", tagline: "Ontdek de Vlaamse Ardennen in je eigen tempo.", description: "E-bikeroutes door de heuvels en dorpen. Vrij, buiten, op ontdekking.", line: "COBBLES Beleving" },
  { id: "15", image: "https://media.base44.com/images/public/6ac2337be23d3a71e0f5c308/47cce4aae_generated_image.png", pillar: "experiences", title: "COBBLES Verblijf", tagline: "Blijf slapen, en beleef COBBLES van ’s ochtends tot ’s avonds.", description: "Een comfortabel verblijf waarin je alles op de bestemming kunt combineren.", line: "COBBLES Verblijf" },
  { id: "16", image: "https://media.base44.com/images/public/6ac2337be23d3a71e0f5c308/1f65d5918_generated_image.png", pillar: "health", title: "Voeding & levensstijl", tagline: "Gewoontes die je volhoudt, voor vitaliteit die blijft.", description: "Praktische begeleiding rond voeding en dagelijkse gewoontes. Kleine stappen die samen voor blijvende energie zorgen.", line: "COBBLES Gezondheid" },
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
    description: "Consult en begeleiding rond leefstijl, voor vitaliteit die blijft.",
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
    description: "Privéspa en wellness midden in de natuur.",
    image: "https://media.base44.com/images/public/6ac2337be23d3a71e0f5c308/a03813f35_generated_image.png",
  },
  {
    id: "stay",
    label: "Verblijf",
    description: "Overnachten, en COBBLES van ’s ochtends tot ’s avonds beleven.",
    image: "https://media.base44.com/images/public/6ac2337be23d3a71e0f5c308/47cce4aae_generated_image.png",
  },
  {
    id: "experiences",
    label: "Beleving",
    description: "Eten, natuur en tijd samen, op de bestemming.",
    image: images.gastronomy,
    zoom: true, // snijdt de galerij-UI aan de rand van de bronfoto weg
  },
];

export const customerJourneys = [
  {
    title: "Het Performance-pad",
    description:
      "Zie waar je staat, train gericht en herstel goed. Van de eerste meting tot het resultaat.",
    steps: [
      { name: "Diagnostiek", detail: "Zie waar je start" },
      { name: "Coaching", detail: "Bouw een persoonlijk plan" },
      { name: "Training", detail: "Train met begeleiding" },
      { name: "Herstel", detail: "Rust en herstel" },
    ],
  },
  {
    title: "Het Herstelverblijf",
    description:
      "Rust en herstel, zonder wie je dierbaar is thuis te laten.",
    steps: [
      { name: "Herstelverblijf", detail: "Rust in een stille omgeving" },
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
      "Even weg van de agenda: scherp presteren en in de natuur ontspannen. Voor wie het druk heeft.",
    steps: [
      { name: "Executive retreat", detail: "Even weg, even bijtanken" },
      { name: "Performance-sessie", detail: "Scherp, en met resultaat" },
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
    text: "Vier dagen op de legendarische wegen van de Ronde van Vlaanderen, met begeleiding en daarna herstel.",
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
  "Deze arrangementen bundelen wat vandaag al op de locatie boekbaar is. Ze kunnen meteen als ‘deze week uitgelicht’ op de website, en als pakket in het boekingssysteem.";

export const destinationPillars = [
  { label: "Expertise", text: "Zorg en begeleiding door mensen die hun vak kennen." },
  { label: "Gastvrijheid", text: "Service die warm aanvoelt, nooit afstandelijk." },
  { label: "Natuur", text: "De Vlaamse Ardennen, overal om je heen." },
  { label: "Beleving", text: "Momenten om te delen, met wie je meeneemt." },
];

export const opportunityPoints = [
  { label: "Meerdere doelgroepen", text: "Atleten, gezinnen, professionals, koppels en groepen — elk vinden hier iets." },
  { label: "Meerdere motieven", text: "Gezondheid, performance, herstel en beleving. Verschillende redenen, die elkaar raken." },
  { label: "Combineerbare diensten", text: "Gasten komen zelden voor één ding. Daarom is de bestemming gemaakt om te combineren." },
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
  { title: "Merken & materiaal", text: "Partners in fietsen, voeding en hersteltechnologie, zichtbaar in wat de gast beleeft." },
  { title: "Gezondheid & wetenschap", text: "Toegepast onderzoekspartnerschap, waaronder het normobare zuurstoftherapieprogramma." },
  { title: "Corporate health", text: "Performance- en welzijnsprogramma's voor bedrijven en hun teams." },
  { title: "Reizen & toerisme", text: "Wielertoerisme, clubs en partners die de juiste gasten aanbrengen." },
];

export const ctas = {
  explore: "Bekijk het portfolio",
  partner: "Bespreek een partnership",
  contact: "Neem contact op",
};