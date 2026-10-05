const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

// COBBLES — Onderschreven concepten, met achtergrond per concept.
// De inhoud is gebaseerd op wat de bestaande locatie vandaag operationeel aanbiedt
// (Performance Lab / DXA, health chamber, Restaurant Ci-Ju, fitness met infraroodsauna's)
// en op de ambities uit het uitbouwplan van de bestemming.

const email = "hello@cobbles.be";
const mail = (subject) => `mailto:${email}?subject=${encodeURIComponent(subject)}`;

export const concepts = [
  {
    slug: "performance-lab",
    label: "Performance Lab",
    endorsement: "door COBBLES",
    description: "Een eigen ruimte voor diagnostiek, testen en programma's onder begeleiding.",
    status: "Vandaag boekbaar",
    tagline: "Diagnostiek die je lichaam laat begrijpen.",
    lead:
      "Een eigen ruimte op de locatie voor diagnostiek, testen en programma's onder begeleiding. De DXA-scan is het startpunt: een pijnloze analyse van vet, spier en bot, gevolgd door een persoonlijk gesprek met een bewegingsdeskundige.",
    image:
      "https://media.db.com/images/public/6ac2337be23d3a71e0f5c308/bdff33f59_dxa5.jpg",
    imageAlt: "DXA-scanner in het Performance Lab",
    facts: [
      { value: "6 minuten", label: "Scantijd" },
      { value: "Vet · spier · bot", label: "Analyse" },
      { value: "3–6 maanden", label: "Opvolgingsritme" },
    ],
    sections: [
      {
        title: "De DXA-scan",
        body:
          "DXA — Dual-Energy X-ray Absorptiometry — is een snelle en pijnloze scan die met twee röntgenstralen van laag vermogen botmineraal, spiermassa en vetmassa van elkaar onderscheidt. Het toestel heeft een open ontwerp: je ligt comfortabel op de tafel, zonder dat het benauwd aanvoelt.",
      },
      {
        title: "Wat je meekrijgt",
        body:
          "Na de scan krijg je een meerlagig rapport met percentages, absolute massa's en geannoteerde beelden. Een bewegingsdeskundige loopt de resultaten met je door en vertaalt ze naar aanbevelingen op maat — of het doel nu vet verliezen, spiermassa opbouwen of botdichtheid opvolgen is.",
        list: [
          "Analyse van vet, spiermassa en botdichtheid",
          "Persoonlijk gesprek met een bewegingsdeskundige",
          "Rapport voor je eigen dossier",
        ],
      },
      {
        title: "Opvolging",
        body:
          "Een lichaamssamenstelling herhaal je het best elke drie tot zes maanden, botdichtheid jaarlijks. Zo wordt vooruitgang zichtbaar in cijfers in plaats van in gevoel.",
      },
      {
        title: "Goed om te weten",
        body: "Een paar eenvoudige afspraken zorgen voor de meest betrouwbare resultaten.",
        list: [
          "Kom goed gehydrateerd en eet drie uur vooraf niet",
          "Draag lichte kleding en laat metaal — horloge, ritsen, sieraden — achterwege",
          "Niet mogelijk bij (mogelijke) zwangerschap",
          "Plan de scan niet binnen twee weken na een onderzoek met contrastvloeistof",
        ],
      },
    ],
    cta: {
      label: "Boek een DXA-scan",
      href: "https://flanderscobblestoneparadise.clubplanner.app/client/registration/bookingwizard/2",
      note: "Je tijdslot wordt bevestigd via de bestaande planning van de locatie.",
    },
  },
  {
    slug: "sanctum",
    label: "Sanctum",
    endorsement: "door COBBLES",
    description: "Een stille retreat voor herstel, reflectie en rust.",
    status: "Vandaag boekbaar",
    tagline: "Een stille kamer waar je lichaam opnieuw op adem komt.",
    lead:
      "Sanctum — vandaag operationeel als de health chamber — is de herstelkamer van COBBLES: een normobare cabine waarin je een geoptimaliseerd mengsel van gassen inademt. Meer zuurstof op celniveau, voor sneller spierherstel, minder ontsteking en een grotere weerstand tegen vermoeidheid.",
    image:
      "https://db.app/api/apps/6ac2337be23d3a71e0f5c308/files/mp/public/6ac2337be23d3a71e0f5c308/b43f09b45_landing_chamber.png",
    imageAlt: "De normobare health chamber",
    facts: [
      { value: "Normobaar", label: "Druk + zuurstof" },
      { value: "Normocare", label: "Technologiepartner" },
      { value: "Ter plaatse", label: "Tijdens je verblijf" },
    ],
    sections: [
      {
        title: "Hoe het werkt",
        body:
          "In de cabine wordt de luchtdruk licht verhoogd. Onder die druk nemen je longen meer zuurstof op dan onder normale omstandigheden, en bereikt zuurstof ook spieren en weefsels waar de doorbloeding beperkt is.",
      },
      {
        title: "Wat een sessie doet",
        body:
          "Dezelfde zuurstof die je inspanning mogelijk maakt, versnelt ook het opruimen erna. Een sessie werkt in op herstel, ontsteking en spierspanning — en is net zo goed een voorbereiding vóór een zware trainingsdag.",
        list: [
          "Meer zuurstof naar spieren en weefsels",
          "Sneller herstel en minder ontsteking",
          "Vlottere afvoer van afvalstoffen zoals melkzuur",
          "Minder spierspanning en een betere voorbereiding",
        ],
      },
      {
        title: "Zachter dan klassieke drukkamertherapie",
        body:
          "Klassieke HBOT werkt met 100% zuurstof onder hoge druk. De aanpak in Sanctum is lichter, comfortabeler en toegankelijker, met een verhoogde hoeveelheid kooldioxide en waterstof als aanvulling. We werken daarvoor samen met Normocare.",
      },
    ],
    quote: {
      text:
        "Hier komen voelt als een stap in het verleden én de toekomst tegelijk. Je ervaart de kasseien — de rauwe, klassieke wielerbeleving — maar je hebt ook moderne faciliteiten zoals de health chamber, die je dag na dag weer op de fiets helpen.",
      source: "Marcel, lokale renner en vaste gast",
    },
    cta: {
      label: "Reserveer een sessie",
      href: "https://flanderscobblestoneparadise.clubplanner.app/client/registration/bookingwizard/4",
      note: "Onze mensen begeleiden elke sessie en bevestigen je tijdslot.",
    },
  },
  {
    slug: "gastro-bar-ci-ju",
    label: "Gastro Bar Ci.Ju",
    endorsement: "bij COBBLES",
    description: "Seizoensgebonden, regionale keuken die mensen samenbrengt.",
    status: "Vandaag boekbaar",
    tagline: "Tapas, Belgisch-Frans en huisbereid — aan één lange tafel.",
    lead:
      "Ci.Ju is de keuken van de bestemming: tapas om te delen, klassiekers uit de Belgisch-Franse keuken en gerechten die in huis worden gemaakt, in een ontspannen bistro. Wat de streek op dat moment te bieden heeft, bepaalt wat er op tafel komt.",
    image:
      "https://media.db.com/images/public/6ac2337be23d3a71e0f5c308/b42be3ab4_FB-001.png",
    imageAlt: "Gerechten uit de keuken van Gastro Bar Ci.Ju",
    zoom: true,
    facts: [
      { value: "Tapas & klassiekers", label: "Keuken" },
      { value: "15+", label: "Groepen op aanvraag" },
      { value: "3e verdieping", label: "Team kitchen" },
    ],
    sections: [
      {
        title: "De keuken",
        body:
          "Seizoensgebonden en regionaal, met de huisbereiding als uitgangspunt. Ontbijt op aanvraag, lunch, diner en recepties — voor gasten van de appartementen én voor wie van buiten komt.",
        list: ["Tapas en Belgisch-Franse klassiekers", "Huisbereide gerechten", "Groepscatering vanaf 15 personen op aanvraag"],
      },
      {
        title: "Openingsuren",
        body: "Reservatie vooraf is vereist, ook voor kleine gezelschappen.",
        list: [
          "Maandag 10:30 – 23:00",
          "Dinsdag & woensdag gesloten — open voor groepen vanaf 15 personen op aanvraag",
          "Donderdag – zondag 10:30 – 23:00",
        ],
      },
      {
        title: "Team kitchen",
        body:
          "Op de derde verdieping ligt een privéruimte met een volledig uitgeruste keuken. Ideaal voor privékoks, teams die zelf koken en externe catering — en voor de maaltijden die horen bij een trainings- of herstelprogramma.",
      },
    ],
    cta: {
      label: "Reserveer een tafel",
      href: mail("Reservatie Ci-Ju"),
      note: "Reservatie vooraf vereist; groepscatering op aanvraag.",
    },
  },
  {
    slug: "private-spa",
    label: "Private Spa",
    endorsement: "door COBBLES",
    description: "Een privé-wellnesservaring rond tijd voor elkaar.",
    status: "Concept in ontwikkeling",
    note: "Dit is een voorstel binnen de merkarchitectuur. Het concept is nog niet operationeel; de infraroodsauna's en de herstelbegeleiding bestaan vandaag al.",
    tagline: "Tijd voor elkaar, achter een gesloten deur.",
    lead:
      "Een privé-wellnesservaring rond het enige dat echt schaars is: ongestoorde tijd samen. Geen publieke wellness met andere gasten, maar een eigen ruimte die op jouw moment klaarstaat.",
    image:
      "https://media.db.com/images/public/6ac2337be23d3a71e0f5c308/a03813f35_generated_image.png",
    imageAlt: "Private spa-ruimte met warmte en rust",
    facts: [
      { value: "Privé", label: "Exclusief gebruik" },
      { value: "Koppels & kleine groepen", label: "Gezelschap" },
      { value: "Sauna's bestaan al", label: "Basis vandaag" },
    ],
    sections: [
      {
        title: "Het idee",
        body:
          "De private spa wordt exclusief voor jouw gezelschap geopend: warmte, water en rust, zonder andere gasten en zonder tijdsdruk van buitenaf. Je reserveert ze zoals je een tafel reserveert.",
      },
      {
        title: "Waar het op aansluit",
        body:
          "De infraroodsauna's in de fitnessruimte en de herstelsessies in de health chamber bestaan vandaag al. De private spa maakt daar een afgesloten ervaring van — het sluitstuk na een herstelverblijf, of het moment waarop een koppel de bestemming even voor zichzelf heeft.",
      },
      {
        title: "Vandaag en straks",
        body:
          "Dit concept is een voorstel binnen de uitbouw van de bestemming. Wat er al is — sauna's, herstelbegeleiding, verblijf en de keuken van Ci.Ju — vormt de basis waarop het wordt gebouwd.",
      },
    ],
    cta: {
      label: "Bespreek dit concept",
      href: mail("Concept Private Spa"),
      note: "Dit concept is nog niet boekbaar. We bespreken het graag met je.",
    },
  },
  {
    slug: "valley-wellness",
    label: "Valley Wellness",
    endorsement: "door COBBLES",
    description: "Immersieve wellness in het landschap van de Vlaamse Ardennen.",
    status: "Concept in ontwikkeling",
    note: "Dit is een voorstel binnen de merkarchitectuur. Het concept is nog niet operationeel; de health chamber, de sauna's en de wandelroutes bestaan vandaag al.",
    tagline: "Wellness die het landschap binnenbrengt.",
    lead:
      "Wellness in de vallei rond de bestemming: het groen, de stilte en het water van de Vlaamse Ardennen als deel van de ervaring. Waar gezondheid en beleving samenkomen.",
    image:
      "https://media.db.com/images/public/6ac2337be23d3a71e0f5c308/ce76814a5_generated_image.png",
    imageAlt: "Wellness in het landschap van de Vlaamse Ardennen",
    facts: [
      { value: "Gezondheid × Beleving", label: "Pijlers" },
      { value: "Vallei & bos", label: "Landschap" },
      { value: "Concept", label: "Status" },
    ],
    sections: [
      {
        title: "Het idee",
        body:
          "Een wellnesservaring die niet binnen blijft. Wandelingen langs de bronnen en de beekvallei, een terras in het groen, en ruimtes waarin het landschap zelf de therapie is. Rust als ervaring in plaats van als bijzaak.",
      },
      {
        title: "Waarom hier",
        body:
          "De bestemming ligt in een vallei met bos, bronnen en wandelpaden op wandelafstand — het Brakelbos alleen al is meer dan 200 hectare. Dat landschap is geen decor, maar het materiaal waarmee een wellnessprogramma kan worden opgebouwd dat je elders niet vindt.",
      },
      {
        title: "Vandaag en straks",
        body:
          "Een voorstel binnen de uitbouw van de bestemming. Wat vandaag al ter plaatse is — de health chamber, de infraroodsauna's, de wandelroutes en de keuken van Ci.Ju — geeft aan waarop dit concept verder bouwt.",
      },
    ],
    cta: {
      label: "Bespreek dit concept",
      href: mail("Concept Valley Wellness"),
      note: "Dit concept is nog niet boekbaar. We bespreken het graag met je.",
    },
  },
];

// De korte kaarten in de merkarchitectuur (sectie 06).
export const conceptSummaries = concepts.map(
  ({ slug, label, endorsement, description, image }) => ({
    slug,
    label,
    endorsement,
    description,
    image,
  })
);