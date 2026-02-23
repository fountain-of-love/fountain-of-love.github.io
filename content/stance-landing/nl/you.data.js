// you.data.js (aligned to fol.data.js structure)
window.__PAGE_DATA = {
  meta: {
    locale: "nl",
    title: "Fontein van Liefde",
    description:
      "Bewust verbindend ondernemen: back-office, netwerk en bibliotheek in ruil voor bijdrage, transparantie en zelfzorg."
  },

  header: {
    brandName: "Fontein van Liefde",
    nav: [
      { label: "Wat dit is", href: "#ground" },
      { label: "Gegrond", href: "#experience" },
      { label: "Het Pad", href: "#polarity" },
      { label: "Aanbod", href: "#offer" },
      { label: "Principes", href: "#harmony" },
      { label: "De Deal", href: "#promises" },
      { label: "Uitnodiging", href: "#invitation" }
    ],
    primaryCta: {
      label: "Klopt dit voor jou?",
      href: "#invitation"
    }
  },

  sections: {
    stance: {
      id: "stance",
      title: "Bewust <span class='hero-love'>verbindend</span> ondernemen.",
      subtitle:
        "Ik steun jou. Jij steunt mij. Samen bouwen we een vzw die transparantie en zelfzorg normaliseert.",
      intro:
        "Dit is een ondernemerschapsveld voor mensen die willen groeien zonder zichzelf te verliezen.\nGeen trucjes. Geen druk.\nWel: ondersteuning, netwerk, bibliotheek en een helder spel van wederkerigheid.",
      rootedInLead: "Dit is geworteld in:",
      rootedIn: [
        "Wederkerigheid zonder boekhouding: duidelijke afspraken, warme samenwerking.",
        "Groei met ruggengraat: back-office en verkoopondersteuning zodat jij in je zone blijft.",
        "Transparantie als spier: niet perfect zijn, wel zichtbaar blijven."
      ],
      weDoNotLead: "Dit is niet:",
      weDoNot: [
        "Een incubator waar je afhankelijk wordt van ‘de coach’.",
        "Een netwerk waar je moet performen om erbij te horen.",
        "Een model dat winst maximaliseert ten koste van jezelf of anderen."
      ],
      actions: {
        primary: { label: "Bekijk het aanbod", href: "#offer" },
        secondary: { label: "Lees de deal", href: "#promises" }
      },
      visual: { src: "./you.png" }
    },

    ground: {
      id: "ground",
      title: "Wat dit is",
      intro:
        "Fontein van Liefde is een praktische samenwerking rond ondernemen: jij bouwt jouw werk uit, wij ondersteunen de draagstructuur en openen een veld van verbinding.\nLiefde betekent hier: veiligheid, waarheid en wederkerigheid die echte groei kan dragen.",
      notTitle: "Het is niet",
      notItems: [
        "‘Kom in onze community en alles komt goed’",
        "Vage beloftes zonder afspraken",
        "Afhankelijkheid verpakt als zorg",
        "Een spirituele bypass van realiteit"
      ],
      meansTitle: "Het is wel",
      meansItems: [
        "Concrete back-office ondersteuning (administratie en structuur)",
        "Netwerk dat kansen activeert (verkoop via verbinding)",
        "Bibliotheek: kennis, templates en speelvelden",
        "Een vzw-anker: bijdrage en transparantie als gedeelde waarde"
      ],
      closing:
        "Een veld waar ondernemen menselijk wordt: helder, verbonden en gedragen."
    },

    // Mapped from former `forYou`
    experience: {
      id: "experience",
      title: "Wat is er in voor jou",
      intro:
        "Als individu krijg je geen ‘motivatie’. Je krijgt ondersteuning die meetelt in je agenda, je omzet en je zenuwstelsel.",
      cards: [
        {
          title: "Back-office die rust brengt",
          text:
            "Administratie, opvolging en structuur. Minder ‘moeten’. Meer ruimte om te creëren."
        },
        {
          title: "Netwerk dat deuren opent",
          text:
            "Wij bieden verbindingen aan waar jouw werk echt matcht. Geen spam, wel resonantie."
        },
        {
          title: "Bibliotheek die versnelt",
          text:
            "Herbruikbare templates, frameworks en kennis. Minder uitvinden, meer bouwen."
        }
      ]
    },

    polarity: {
      id: "polarity",
      title: "Van alleen dragen naar samen dragen",
      intro:
        "Veel ondernemers dragen te veel alleen. Dat lijkt ‘sterk’, maar het is vaak gewoon langdurige spanning met een factuur later.",
      pain: {
        title: "Wat we herkennen",
        items: [
          "Administratie als ruis en schuldgevoel",
          "Verkoop als ‘iets dat ik ook nog moet doen’",
          "Een netwerk dat vooral energie kost",
          "Groei die botst met zelfzorg",
          "Transparantie die voelt als risico"
        ],
        note: "Je hoeft niet harder te werken. Je hebt een betere container nodig."
      },
      comparison: {
        currentTitle: "Solo dragen",
        currentItems: ["Overuren", "Brandjes blussen", "Schuldgevoel", "Isolatie", "Vage grenzen"],
        futureTitle: "Verbonden bouwen",
        futureItems: ["Structuur", "Flow", "Kansen", "Zelfzorg", "Heldere afspraken"]
      },
      pathway: {
        title: "De droomdriehoek (Empowerment dynamics)",
        steps: [
          {
            title: "Kompas als Coach",
            text:
              "Je krijgt richting zonder afhankelijkheid: helderheid, keuzes en next steps."
          },
          {
            title: "Creator Lab als Creator",
            text:
              "Je bouwt en lanceert vanuit jouw kracht. Creatie als medicijn tegen stagnatie."
          },
          {
            title: "Spiegel als Challenger",
            text:
              "Eerlijke feedback zonder drama. Transparantie als groeispier, niet als schaamte."
          }
        ]
      }
    },

    offer: {
      id: "offer",
      title: "Aanbod",
      intro:
        "Dit is een wederkerige samenwerking: wij investeren in jouw groei, jij draagt bij aan het veld en de vzw.",
      items: [
        {
          title: "Back-office ondersteuning",
          text:
            "Administratie, opvolging, structuur, procesrust. Zodat jouw hoofd weer van jou is.",
          linkLabel: "Dit wil ik",
          href: "#invitation"
        },
        {
          title: "Netwerk & verkoop via verbinding",
          text:
            "Wij openen deuren wanneer het klopt. Warm intro’s, geen koude acquisitie-roulette.",
          linkLabel: "Hoe werkt dit?",
          href: "#promises"
        },
        {
          title: "Bibliotheek (templates & frameworks)",
          text:
            "Herbruikbare modellen, documenten, tooling en kennis. Minder frictie, meer momentum.",
          linkLabel: "Toon me de bibliotheek",
          href: "#invitation"
        }
      ]
    },

    // Optional but keeps parity with fol if your template expects it
    system: {
      id: "system",
      title: "Hoe het veld werkt",
      intro:
        "De samenwerking is een container die je draagkracht vergroot: structuur vermindert ruis, verbinding activeert kansen, transparantie beschermt integriteit.",
      flow: [
        { key: "Structuur", text: "Back-office en afspraken verminderen mentale belasting." },
        { key: "Verbinding", text: "Warm netwerk opent deuren wanneer er echte fit is." },
        { key: "Transparantie", text: "Zichtbaarheid zonder schaamte maakt groei duurzaam." }
      ],
      practicalTitle: "Concreet",
      practicalItems: [
        "Administratie en opvolging",
        "Intro’s en dealflow via netwerk",
        "Templates, frameworks en bibliotheek",
        "Afspraken die helder blijven"
      ]
    },

    // Mapped from former `selfcare` (and enriched to match fol’s `principles` list format)
    harmony: {
      id: "harmony",
      title: "Onze werkprincipes",
      intro:
        "Zelfzorg is hier geen wellness. Het is volwassenheid: ritme, grenzen en eerlijkheid, zodat groei niet ten koste gaat van je lichaam.",
      principles: [
        { title: "Zelfzorg als voorwaarde", text: "Ritme en grenzen maken groei houdbaar." },
        { title: "Transparantie als spier", text: "Zichtbaar blijven zonder perfectie." },
        { title: "Groei door creatie", text: "Niet alleen praten, ook bouwen en doen." },
        { title: "Wederkerigheid zonder boekhouding", text: "Helder spel, warme samenwerking." },
        { title: "Geen afhankelijkheid", text: "Richting zonder ‘guru-constructie’." },
        { title: "Menselijke economie", text: "Winst is oké, extractie is dat niet." }
      ]
    },

    // Re-shaped to fol’s `promises` schema (so it renders)
    promises: {
      id: "promises",
      title: "De Deal",
      intro:
        "We maken het simpel, eerlijk en toekomstbestendig: een basisprijs voor wat moeilijk te meten is, en een gedeeld upside-model voor wat wél meetbaar groeit.",
      notTitle: "Wij doen niet",
      notItems: [
        "Verborgen voorwaarden of onduidelijke definities van ‘extra’s’",
        "Juridische acrobatie als vervanging van vertrouwen",
        "Controle en wantrouwen als ‘samenwerking’",
        "Druk om sneller te gaan dan jouw draagkracht"
      ],
      doTitle: "Wij doen wel",
      doItems: [
        "Fixed price voor structurele ondersteuning (back-office + container + basisbegeleiding).",
        "20% op extra opbrengst die aantoonbaar ontstaat door pricing, dealflow of netwerkactivatie.",
        "Als je echt verbindt: doneer je hetzelfde bedrag aan de vzw (niet verplicht, wel als alignment-signaal).",
        "Transparantie-afspraak: samen zichtbaar maken wat ‘extra’s’ zijn, controleerbaar zonder wantrouwen, eenvoud boven complexiteit."
      ]
    },

    // Optional parity section (accordion) similar to fol `scale`
    scale: {
      id: "scale",
      title: "Transparantie & governance",
      intro: "Om dit veld te laten bestaan, houden we het helder: afspraken, bijdrage en intentie blijven zichtbaar.",
      accordion: [
        {
          title: "VZW-anker",
          bodyType: "text",
          body: [
            "De vzw is het morele kompas: bijdrage en transparantie als gedeelde waarde, zodat het veld niet ‘privé eigendom’ wordt."
          ]
        },
        {
          title: "Eenvoudige afspraken",
          bodyType: "text",
          body: [
            "We definiëren samen wat ‘extra opbrengst’ is, en houden het auditbaar zonder wantrouwen."
          ]
        },
        {
          title: "Zelfzorg als ritme",
          bodyType: "text",
          body: [
            "Geen groei ten koste van je lichaam. Grenzen en pacing zijn onderdeel van de samenwerking."
          ]
        }
      ]
    },

    resonance: {
      id: "resonance",
      title: "Resonantie is optioneel",
      paragraphs: [
        "Dit is voor iedereen die wil groeien.",
        "Je mag eerst observeren. Je mag instappen wanneer je er klaar voor bent. Je mag helder vertrekken als het niet klopt.",
        "Verbondenheid zonder vrijheid is geen verbondenheid."
      ],
      action: { label: "Check of dit matcht", href: "#invitation" }
    },

    invitation: {
      id: "invitation",
      title: "Uitnodiging",
      intro: "Als je voelt: ‘dit is wat ik zocht’, dan is de volgende stap eenvoudig.",
      paragraphs: [
        "Vertel ons wat je bouwt, waar je vastloopt, en wat je wil dat er lichter wordt.",
        "Wij spiegelen of dit veld je kan dragen en welke vorm past."
      ],
      list: [
        "1 korte intake (helderheid en fit)",
        "Voorstel (fixed + upside afspraken)",
        "Start: back-office + netwerk + bibliotheek"
      ],
      action: { label: "Stap in het Veld", href: "#contact" }
    }
  },

  footer: {
    links: [
      { label: "Privacy", href: "#" },
      { label: "Voorwaarden", href: "#" },
      { label: "VZW-principes", href: "#" }
    ]
  }
};
