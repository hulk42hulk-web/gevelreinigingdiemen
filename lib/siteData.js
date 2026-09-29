export const companyData = {
  name: "Gevelreiniging Diemen",
  legalName: "Gevelreiniging Diemen",
  brandTagline: "Specialist in professionele gevelreiniging en gevelonderhoud",
  address: {
    street: "Diemermere 1",
    postalCode: "1112 TA",
    city: "Diemen",
    region: "Noord-Holland",
    country: "Nederland",
    full: "Diemermere 1, 1112 TA Diemen, Nederland"
  },
  contact: {
    phone: "0203 692 906",
    phoneHref: "tel:0203692906",
    email: "contact@gevelreinigingdiemen.com",
    emailHref: "mailto:contact@gevelreinigingdiemen.com",
    website: "https://gevelreinigingdiemen.com",
  },
  rating: {
    google: {
      score: "5,0",
      rawScore: 5.0,
      reviewsCount: 6,
      label: "5,0 ★ op Google",
      sublabel: "6 geverifieerde beoordelingen",
      source: "Google"
    },
    trustpilot: {
      available: true,
      label: "Geverifieerd op Trustpilot",
      source: "Trustpilot"
    }
  },
  coverageArea: [
    "Diemen",
    "Diemen-Zuid",
    "Diemen-Noord",
    "Amsterdam",
    "Amsterdam-Oost",
    "Amsterdam-Zuidoost",
    "Duivendrecht",
    "Ouderkerk aan de Amstel",
    "Weesp"
  ],
  coreValues: [
    {
      title: "Zorgvuldig",
      description: "Nauwkeurige beoordeling van de steen, voeg en ondergrond voor een veilige reiniging."
    },
    {
      title: "Betrouwbaar",
      description: "Duidelijke afspraken, stipt werk en professionele communicatie van begin tot oplevering."
    },
    {
      title: "Milieubewust",
      description: "Milieuvriendelijke reinigingsmethoden en waar mogelijk reiniging met heet water en stoom zonder chemie."
    },
    {
      title: "Transparant",
      description: "Vrijblijvende en heldere offertes zonder verrassingen vooraf of achteraf."
    }
  ],
  processSteps: [
    {
      step: "01",
      title: "Inspectie",
      description: "We beoordelen de staat van de gevel, het type metselwerk en de aard van de vervuiling."
    },
    {
      step: "02",
      title: "Advies",
      description: "We bepalen een passende reinigingsmethode die effectief reinigt zonder de ondergrond te beschadigen."
    },
    {
      step: "03",
      title: "Uitvoering",
      description: "We voeren de werkzaamheden zorgvuldig uit met professionele apparatuur en oog voor detail."
    },
    {
      step: "04",
      title: "Resultaat",
      description: "De gevel krijgt een frisse en verzorgde uitstraling met behoud van het authentieke karakter."
    }
  ],
  targetAudiences: [
    {
      title: "Woningen",
      subtitle: "Particulier",
      description: "Eengezinswoningen, hoekhuizen, herenhuizen en villa's in Diemen en omgeving.",
      focus: "Verwijdering van atmosferisch vuil, algen en mos; herstel van uitstraling en behoud van vastgoedwaarde."
    },
    {
      title: "Appartementen & VvE's",
      subtitle: "Particulier & Beheer",
      description: "Appartementencomplexen en Verenigingen van Eigenaren die structureel gevelonderhoud wensen.",
      focus: "Eenduidige aanpak voor complete gevelvlakken, galerijen, balkons en gemeenschappelijke geveldelen."
    },
    {
      title: "Winkelpanden",
      subtitle: "Zakelijk",
      description: "Winkels, showrooms en horecagevels waar de eerste visuele indruk doorslaggevend is.",
      focus: "Snelle verwijdering van straatvuil en graffiti, minimale hinder voor bezoekers en klanten."
    },
    {
      title: "Kantoren & Bedrijfspanden",
      subtitle: "Zakelijk",
      description: "Kantoorgebouwen, logistieke panden en bedrijfsterreinen in en rondom Diemen.",
      focus: "Representatieve uitstraling naar relaties, planmatige aanpak en reiniging buiten kantooruren mogelijk."
    }
  ],
  methods: [
    {
      id: "stoom",
      name: "Stoomreiniging (Lagedruk)",
      idealFor: "Lichte tot middelzware vervuiling, algen, mos, atmosferische aanslag",
      description: "Reiniging met water onder gecontroleerde temperatuur (tot circa 150°C) en lage druk. Veilig voor kwetsbaar historisch en modern metselwerk.",
      suitableSurfaces: "Baksteen, natuursteen, stucwerk, kalkzandsteen"
    },
    {
      id: "soft",
      name: "Nevelstralen / Soft cleaning",
      idealFor: "Matige vervuiling, hardnekkige roetaanslag, verfresten op gevoelige gevels",
      description: "Een milde wervelstraaltechniek waarbij een fijn inert straalmiddel met waternevel onder lage druk wordt aangebracht.",
      suitableSurfaces: "Historische baksteen, monumentale gevels, poreuze steen"
    },
    {
      id: "zandstralen",
      name: "Zandstralen",
      idealFor: "Zware industriële vervuiling, dikke verflagen, harde niet-poreuze stenen",
      description: "Krachtige reiniging voor harde ondergronden waar milde technieken ontoereikend zijn. Uitsluitend toegepast na zorgvuldige geschiktheidsinspectie.",
      suitableSurfaces: "Harde klinkers, zware betonvlakken, harde geveldelen"
    },
    {
      id: "algen",
      name: "Algen- & Mosverwijdering",
      idealFor: "Groene en zwarte biologische aanslag op noord- en schaduwzijden",
      description: "Grondige verwijdering van sporen en aangroei, gevolgd door preventieve nabehandeling om hergroei te vertragen.",
      suitableSurfaces: "Alle typen gevelstenen, betonpanelen, pleisterwerk"
    },
    {
      id: "impregneren",
      name: "Gevel Impregneren",
      idealFor: "Bescherming tegen indringend vocht en vuilaanhechting na reiniging",
      description: "Aanbrengen van een ademend, waterafstotend hydrofobeermiddel op een schone, droge gevel.",
      suitableSurfaces: "Poreuze baksteen, zuigend metselwerk, minerale voegen"
    }
  ],
  services: [
    {
      id: "gevelreiniging",
      number: "01",
      slug: "gevelreiniging",
      title: "Gevelreiniging",
      shortTitle: "Gevelreiniging",
      headline: "Professionele gevelreiniging afgestemd op uw type metselwerk",
      shortDescription: "Grondige reiniging van gevels met zorgvuldig gekozen technieken die vervuiling verwijderen zonder de steen aan te tasten.",
      fullDescription: "Gevelreiniging herstelt de uitstraling van uw woning of bedrijfspand door atmosferische aanslag, roet, straatvuil en oppervlakkige vervuiling veilig te verwijderen. Omdat elke gevelsteen unieke eigenschappen heeft, bepalen we na inspectie altijd eerst de meest geschikte reinigingstechniek.",
      targetAudience: "Particuliere woningen, VvE's, winkels en bedrijfspanden in Diemen en omgeving.",
      keyPoints: [
        "Beoordeling van steensoort, porositeit en voegconditie vooraf",
        "Milieuvriendelijke aanpak zonder onnodig agressieve middelen",
        "Passende waterdruk en temperatuur voor behoud van het geveloppervlak",
        "Geschikt voor zowel nieuwbouw als oudere Diemer panden"
      ],
      faqs: [
        {
          q: "Wat kost gevelreiniging in Diemen?",
          a: "De kosten voor gevelreiniging hangen af van het aantal vierkante meters, het type vervuiling (roet, algen of atmosferisch vuil), de bereikbaarheid van het pand en de vereiste reinigingstechniek. Daarom brengen we altijd een transparante, vrijblijvende offerte op maat uit na beoordeling."
        },
        {
          q: "Beschadigt gevelreiniging mijn gevelstenen of voegwerk?",
          a: "Nee, mits de juiste methode wordt toegepast. Juist daarom inspecteren wij vooraf de hardheid van de steen en de staat van het voegwerk. Bij kwetsbaar metselwerk gebruiken we stoomreiniging onder lage druk in plaats van harde straaltechnieken."
        },
        {
          q: "Hoe lang duurt het reinigen van een gemiddelde woninggevel?",
          a: "Voor een gemiddelde tussen- of hoekwoning duurt de reiniging doorgaans één tot twee werkdagen, afhankelijk van de mate van vervuiling en eventuele nabehandelingen zoals impregneren."
        }
      ]
    },
    {
      id: "zandstralen-nevelstralen",
      number: "02",
      slug: "zandstralen-nevelstralen",
      title: "Zandstralen / Nevelstralen",
      shortTitle: "Zand- & Nevelstralen",
      headline: "Gerichte straaltechnieken voor hardnekkig vuil en gevoelige oppervlakken",
      shortDescription: "Verwijdering van zware vervuiling, oude verflagen of roet met behulp van gecontroleerde straal- en neveltechnieken.",
      fullDescription: "Wanneer oppervlakkig reinigen met water of stoom niet toereikend is, bieden zandstralen en nevelstralen een doeltreffende oplossing. Nevelstralen combineert waternevel met een fijn inert straalmiddel onder lage druk, waardoor het bijzonder geschikt is voor monumentale en poreuze gevels. Zandstralen wordt gereserveerd voor hardere ondergronden met zware industriële verontreiniging.",
      targetAudience: "Eigenaren van panden met hardnekkige verflagen, diepe roetsporen of zware aanslag.",
      keyPoints: [
        "Nevelstralen als milde, gecontroleerde methode voor kwetsbare gevels",
        "Zandstralen voor robuuste ondergronden met zware verontreiniging",
        "Afstemming van korrelgrootte, druk en mengverhouding op de ondergrond",
        "Grondige bescherming van kozijnen, ramen en omliggende elementen"
      ],
      faqs: [
        {
          q: "Wat is het verschil tussen zandstralen en nevelstralen?",
          a: "Zandstralen werkt met een hogere druk en droog of licht bevochtigd straalmiddel voor zware vervuiling op harde stenen. Nevelstralen daarentegen omhult het fijne straalmiddel met een fijne waternevel onder lage druk, wat een wervelend en veel milder effect geeft op poreuze of historische stenen."
        },
        {
          q: "Is nevelstralen veilig voor monumentale bakstenen panden?",
          a: "Ja, nevelstralen is specifiek ontworpen om de originele 'baklaag' van historische bakstenen zoveel mogelijk te ontzien terwijl vuil en oude kalk- of verflagen voorzichtig worden losgeweekt."
        }
      ]
    },
    {
      id: "voegwerk",
      number: "03",
      slug: "voegwerk",
      title: "Voegwerk reinigen en herstellen",
      shortTitle: "Voegwerk",
      headline: "Reiniging en gericht herstel van aangetaste of poreuze voegen",
      shortDescription: "Zorgvuldige reiniging en herstel van gevelvoegen ter behoud van de waterkering en een uniforme gevelaanblik.",
      fullDescription: "Voegen bepalen voor een aanzienlijk deel de esthetiek en de weersbestendigheid van een gevel. Verweerde, uitgesleten of met mos begroeide voegen laten vocht toe tot in de spouwmuur. Wij reinigen voegwerk behoedzaam en herstellen plaatselijke gebreken met passende mortels die qua hardheid en kleur aansluiten bij het bestaande werk.",
      targetAudience: "Woningen en gebouwen met zanderige, verbrokkelde of met algen verzadigde voegen.",
      keyPoints: [
        "Reiniging zonder beschadiging van intacte voegconstructies",
        "Vervanging en bijwerken van losse, poreuze of ontbrekende voegen",
        "Kleur- en materiaalkeuze afgestemd op het oorspronkelijke metselwerk",
        "Belangrijke stap voorafgaand aan gevelimpregnering"
      ],
      faqs: [
        {
          q: "Wanneer moet voegwerk worden hersteld?",
          a: "Wanneer voegen verkorrelen, loslaten, scheuren vertonen of hol klinken, kan regenwater gemakkelijk binnendringen. Dit kan leiden tot vochtdoorslag en vorstschade. Een visuele inspectie geeft uitsluitsel over de actuele staat."
        },
        {
          q: "Moet altijd het hele voegwerk worden vervangen?",
          a: "Nee, afhankelijk van de situatie kan plaatselijk herstel volstaan als het overgrote deel van het voegwerk nog solide en dicht is."
        }
      ]
    },
    {
      id: "graffiti-verwijderen",
      number: "04",
      slug: "graffiti-verwijderen",
      title: "Graffiti verwijderen",
      shortTitle: "Graffiti verwijderen",
      headline: "Snel en verantwoord graffiti verwijderen van gevels en entrees",
      shortDescription: "Verwijdering van ongewenste verf en tags zonder blijvende schaduwplekken of beschadiging van de ondergrond.",
      fullDescription: "Graffiti op gevels, etalages of poorten tast het aanzicht van een pand onmiddellijk aan en kan uitnodigen tot meer vandalisme. Wij verwijderen graffiti met afgestemde biologisch verantwoorde reinigers en stoomtechniek, zodat inkt en pigmenten effectief uit de poriën worden gehaald zonder spookbeelden achter te laten.",
      targetAudience: "Winkels, bedrijven, VvE's en particuliere pandeigenaren in Diemen en regio Amsterdam.",
      keyPoints: [
        "Snelle actie mogelijk om verharding van pigmenten in de poriën te beperken",
        "Afgestemde techniek per ondergrond: baksteen, beton, glas of gecoate panelen",
        "Behoedzame werkwijze ter voorkoming van zogeheten 'schaduwen'",
        "Optie voor preventieve anti-graffiti nabehandeling waar zinvol"
      ],
      faqs: [
        {
          q: "Kan graffiti van elk type ondergrond verwijderd worden?",
          a: "Vrijwel alle minerale en niet-poreuze ondergronden kunnen behandeld worden. Bij zeer poreuze zandsteen of historische kalkstenen vereist dit extra fijne stoom- of neveltechniek om pigmenten diep uit de poriën te halen."
        },
        {
          q: "Blijft er na de reiniging een vlek of schaduw zichtbaar?",
          a: "Bij snelle aanpak en de juiste dosering wordt graffiti doorgaans zonder zichtbare resten verwijderd. Bij zeer oude tags kan een secundaire milde nabehandeling nodig zijn."
        }
      ]
    },
    {
      id: "gevel-impregneren",
      number: "05",
      slug: "gevel-impregneren",
      title: "Gevel impregneren",
      shortTitle: "Gevel impregneren",
      headline: "Hydrofoberende beschermlaag tegen vochtindringing en vuilaanhechting",
      shortDescription: "Duurzaam waterafstotend maken van schone gevels met behoud van het natuurlijke ademend vermogen van de stenen.",
      fullDescription: "Na een grondige gevelreiniging is het metselwerk schoon en open van structuur. Door de gevel te impregneren (hydrofoberen) trekt een waterafstotend middel diep in de poriën van de steen en de voeg. Hierdoor kan regenwater niet meer binnendringen, terwijl damp van binnenuit wel naar buiten kan ontsnappen.",
      targetAudience: "Pandeigenaren die vochtdoorslag willen voorkomen en de gereinigde gevel langer schoon willen houden.",
      keyPoints: [
        "Waterafstotend effect: regen rolt af en dringt niet dieper in het metselwerk",
        "Dampopen werking: de gevel blijft ademen en kan intern vocht kwijt",
        "Vertraagt hernieuwde aanslag door algen, mos en atmosferisch roet",
        "Verkleint het risico op vorstschade in de wintermaanden"
      ],
      faqs: [
        {
          q: "Wat is gevel impregneren precies?",
          a: "Gevel impregneren is het behandelen van het schone metselwerk met een hydrofobeervloeistof. De vloeistof dringt in de poriën en vormt een waterafstotende barrière zonder de kleur of het ademend vermogen van de gevel aan te tasten."
        },
        {
          q: "Kan elke gevel direct geïmpregneerd worden?",
          a: "Nee, de gevel moet eerst grondig schoon en droog zijn, en het voegwerk moet intact zijn. Impregneren over vuil of kapotte voegen sluit vocht juist op."
        }
      ]
    },
    {
      id: "stoomreiniging",
      number: "06",
      slug: "stoomreiniging",
      title: "Gevel stoomreiniging",
      shortTitle: "Stoomreiniging",
      headline: "Ecologische reiniging met oververhitte stoom onder lage druk",
      shortDescription: "Effectieve verwijdering van biologische aangroei en atmosferische film met heet water en stoom, veilig voor kwetsbare stenen.",
      fullDescription: "Stoomreiniging is een van de meest verantwoorde en milde methoden voor gevelonderhoud. Door water te verhitten tot stoomtemperaturen (tot 150°C) wordt de oppervlaktespanning van het vuil verbroken. Algen, mossen en vuildeeltjes laten vanzelf los onder minimale mechanische druk, waardoor het risico op beschadiging van stenen en voegmortel nihil is.",
      targetAudience: "Woningen, monumentale panden en gevels met lichte tot middelzware organische aanslag.",
      keyPoints: [
        "Minimale waterdruk: behoudt de structuur van de baksteen en voeg",
        "Thermische werking doodt alg- en mossporen tot diep in de porie",
        "Geen chemische toevoegingen vereist: 100% milieuvriendelijk",
        "Ideaal voor periodiek onderhoud en kwetsbaar historisch metselwerk"
      ],
      faqs: [
        {
          q: "Wat zijn de voordelen van stoomreiniging ten opzichte van hogedrukreiniging?",
          a: "Klassieke hogedrukreiniging kan de toplaag van zachte bakstenen en poreuze voegen onherstelbaar beschadigen. Stoomreiniging werkt daarentegen met hoge temperatuur en lage druk: de hitte weekt het vuil los, waardoor agressieve waterkracht niet nodig is."
        },
        {
          q: "Is stoomreiniging geschikt voor geschilderde of gestucte gevels?",
          a: "Ja, mits de ondergrond stabiel is en de temperatuur nauwkeurig wordt ingesteld door de vakspecialist."
        }
      ]
    },
    {
      id: "algen-mos-verwijderen",
      number: "07",
      slug: "algen-mos-verwijderen",
      title: "Algen- en mosverwijdering",
      shortTitle: "Algen & mos",
      headline: "Grondige aanpak van groene aanslag, korstmossen en sporengroei",
      shortDescription: "Volledige verwijdering van organische aangroei die het geveloppervlak aantast en vocht vasthoudt.",
      fullDescription: "Groene of donkere aanslag op gevels wordt veroorzaakt door algen, mossen en korstmossen die gedijen op schaduwrijke of vochtige geveldelen. Blijft deze begroeiing zitten, dan hechten de wortels zich in de poriën van het voegwerk en de bakstenen. Wij reinigen de gevel grondig met heet water of stoom en kunnen aansluitend een biologisch afbreekbare nabehandeling aanbrengen om hergroei tegen te gaan.",
      targetAudience: "Panden met noord- of westgevels, bosrijke omgevingen of schaduwrijke binnenplaatsen in Diemen.",
      keyPoints: [
        "Doeltreffende thermische verwijdering van algen zonder schade aan de steen",
        "Reiniging van zowel het gevelvlak als aansluitende randen en plinten",
        "Preventieve aanpak om hernieuwde algengroei aanzienlijk te vertragen",
        "Verbetering van de vochthuishouding van de buitenmuur"
      ],
      faqs: [
        {
          q: "Waarom ontstaan algen en mos op mijn gevel?",
          a: "Algen en mos vestigen zich vooral op gevels die minder zonlicht ontvangen, langere tijd vochtig blijven door regen of omringd zijn door bomen en dichte beplanting."
        },
        {
          q: "Hoe voorkom ik dat algen snel weer terugkeren?",
          a: "Naast een grondige thermische reiniging kan het aanbrengen van een ademende impregneerlaag het binnendringen van vocht voorkomen, waardoor de voedingsbodem voor algen drastisch afneemt."
        }
      ]
    }
  ],
  generalFaqs: [
    {
      q: "Wat kost gevelreiniging?",
      a: "De kosten voor gevelreiniging zijn afhankelijk van verschillende factoren, zoals het aantal vierkante meters, het type gevelmateriaal, de hardnekkigheid van het vuil en de bereikbaarheid van de gevel. Omdat iedere situatie verschilt, inventariseren we eerst de gevel en stellen we vervolgens een heldere, vrijblijvende offerte op maat op."
    },
    {
      q: "Welke gevelreinigingsmethode is geschikt voor mijn gevel?",
      a: "De geschikte reinigingsmethode hangt af van het materiaal (baksteen, kalkzandsteen, natuursteen, stucwerk), de staat van het voegwerk en het soort vervuiling (atmosferisch, roet, algen of graffiti). Tijdens de inspectie bepalen we exact of lagedruk stoomreiniging, nevelstralen of een andere aanpak het beste en veiligste resultaat oplevert."
    },
    {
      q: "Verwijderen jullie algen en mos?",
      a: "Ja, algen- en mosverwijdering is een van onze kernspecialisaties. We verwijderen de begroeiing met hete stoom of milde technieken, zodat de sporen tot in de poriën worden aangepakt zonder het metselwerk te beschadigen."
    },
    {
      q: "Kunnen jullie graffiti verwijderen?",
      a: "Ja, wij verwijderen graffiti vakkundig van woningen, winkels en bedrijfspanden. We stemmen het oplosmiddel en de temperatuur af op de verfsoort en ondergrond om schaduwen te voorkomen."
    },
    {
      q: "Wat is gevel impregneren?",
      a: "Gevel impregneren (hydrofoberen) is het aanbrengen van een onzichtbare, waterafstotende beschermlaag op een schone gevel. Het voorkomt dat regenwater in de stenen en voegen trekt, terwijl de muur wel dampopen blijft ademen."
    },
    {
      q: "Bieden jullie stoomreiniging?",
      a: "Ja, gevel stoomreiniging met lage druk en hoge watertemperatuur is een van onze meest toegepaste milieuvriendelijke methoden, met name geschikt voor kwetsbare bakstenen en historisch metselwerk."
    },
    {
      q: "Wat is zandstralen en nevelstralen?",
      a: "Zandstralen is een krachtige techniek voor hardnekkige vervuiling op harde stenen. Nevelstralen is een veel mildere variant waarbij waternevel met fijn straalmiddel onder lage druk wervelend over het oppervlak wordt geleid, geschikt voor monumentale of poreuze stenen."
    },
    {
      q: "Werken jullie voor particulieren?",
      a: "Ja, we reinigen en onderhouden regelmatig tussenwoningen, hoekhuizen, vrijstaande woningen en appartementen voor particuliere eigenaren."
    },
    {
      q: "Werken jullie voor bedrijven?",
      a: "Ja, wij werken voor winkels, kantoren, VvE's, bedrijfspanden en vastgoedbeheerders in Diemen en omliggende gemeenten."
    },
    {
      q: "In welke regio werken jullie?",
      a: "Wij zijn gevestigd in Diemen en richten ons op Diemen (Diemen-Centrum, Diemen-Noord, Diemen-Zuid), Amsterdam (Oost, Zuidoost, Centrum), Duivendrecht, Ouderkerk aan de Amstel, Weesp en directe omgeving."
    },
    {
      q: "Hoe vraag ik een offerte aan?",
      a: "U kunt direct telefonisch contact opnemen via 0203 692 906, mailen naar contact@gevelreinigingdiemen.com, of het contactformulier op onze website invullen voor een snelle, vrijblijvende reactie."
    }
  ]
};
