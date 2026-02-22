// you.data.js (aligned to fol.data.js structure)
window.__PAGE_DATA = {
  meta: {
    locale: "fr",
    title: "Fontaine d’Amour",
    description:
      "Entrepreneuriat conscient et relationnel : back-office, réseau et bibliothèque en échange de contribution, transparence et soin de soi."
  },

  header: {
    brandName: "Fontaine d’Amour",
    nav: [
      { label: "Ce que c’est", href: "#ground" },
      { label: "Ancré", href: "#experience" },
      { label: "Le Chemin", href: "#polarity" },
      { label: "Offre", href: "#offer" },
      { label: "Principes", href: "#harmony" },
      { label: "L’Accord", href: "#promises" },
      { label: "Invitation", href: "#invitation" }
    ],
    primaryCta: {
      label: "Est-ce que cela résonne pour vous ?",
      href: "#invitation"
    }
  },

  sections: {
    stance: {
      id: "stance",
      title: "Entrepreneuriat <span class='hero-love'>relationnel</span> conscient.",
      subtitle:
        "Je vous aide. Vous m’aidez. Ensemble, nous aidons à construire une ASBL qui normalise la transparence et le soin de soi.",
      intro:
        "Ceci est un champ entrepreneurial pour celles et ceux qui veulent grandir sans se perdre.\nPas de trucs. Pas de pression.\nMais : soutien, réseau, bibliothèque et un jeu clair de réciprocité.",
      rootedInLead: "Ceci est enraciné dans :",
      rootedIn: [
        "Réciprocité sans comptabilité : accords clairs, collaboration chaleureuse.",
        "Croissance avec colonne vertébrale : soutien back-office et commercial pour que vous restiez dans votre zone.",
        "La transparence comme muscle : pas besoin d’être parfait, mais rester visible."
      ],
      weDoNotLead: "Ce n’est pas :",
      weDoNot: [
        "Un incubateur où vous devenez dépendant du ‘coach’.",
        "Un réseau où vous devez performer pour appartenir.",
        "Un modèle qui maximise le profit au détriment de vous-même ou des autres."
      ],
      actions: {
        primary: { label: "Voir l’offre", href: "#offer" },
        secondary: { label: "Lire l’accord", href: "#promises" }
      },
      visual: { src: "./you.png" }
    },

    ground: {
      id: "ground",
      title: "Ce que c’est",
      intro:
        "Fontaine d’Amour est une collaboration pratique autour de l’entrepreneuriat : vous développez votre activité, nous soutenons la structure porteuse et ouvrons un champ de connexion.\nL’amour signifie ici : sécurité, vérité et réciprocité capables de soutenir une vraie croissance.",
      notTitle: "Ce n’est pas",
      notItems: [
        "« Rejoignez notre communauté et tout ira bien »",
        "Des promesses vagues sans accords",
        "Une dépendance déguisée en soin",
        "Un bypass spirituel de la réalité"
      ],
      meansTitle: "C’est",
      meansItems: [
        "Un soutien back-office concret (administration et structure)",
        "Un réseau qui active des opportunités (vente par la connexion)",
        "Bibliothèque : connaissances, templates et terrains de jeu",
        "Un ancrage ASBL : contribution et transparence comme valeur partagée"
      ],
      closing:
        "Un champ où entreprendre devient humain : clair, connecté et soutenu."
    },

    experience: {
      id: "experience",
      title: "Ce que cela vous apporte",
      intro:
        "En tant qu’individu, vous ne recevez pas de la ‘motivation’. Vous recevez un soutien qui compte dans votre agenda, votre chiffre d’affaires et votre système nerveux.",
      cards: [
        {
          title: "Un back-office qui apaise",
          text:
            "Administration, suivi et structure. Moins de ‘je dois’. Plus d’espace pour créer."
        },
        {
          title: "Un réseau qui ouvre des portes",
          text:
            "Nous proposons des connexions là où votre travail correspond réellement. Pas de spam, mais de la résonance."
        },
        {
          title: "Une bibliothèque qui accélère",
          text:
            "Templates réutilisables, frameworks et connaissances. Moins réinventer, plus construire."
        }
      ]
    },

    polarity: {
      id: "polarity",
      title: "Du portage solitaire au portage partagé",
      intro:
        "Beaucoup d’entrepreneurs portent trop seuls. Cela semble ‘fort’, mais c’est souvent une tension prolongée avec une facture plus tard.",
      pain: {
        title: "Ce que nous reconnaissons",
        items: [
          "L’administration comme bruit et culpabilité",
          "La vente comme ‘quelque chose que je dois encore faire’",
          "Un réseau qui coûte surtout de l’énergie",
          "Une croissance qui entre en conflit avec le soin de soi",
          "Une transparence qui ressemble à un risque"
        ],
        note: "Vous n’avez pas besoin de travailler plus dur. Vous avez besoin d’un meilleur contenant."
      },
      comparison: {
        currentTitle: "Porter seul",
        currentItems: ["Heures supplémentaires", "Éteindre des feux", "Culpabilité", "Isolement", "Limites floues"],
        futureTitle: "Construire ensemble",
        futureItems: ["Structure", "Flow", "Opportunités", "Soin de soi", "Accords clairs"]
      },
      pathway: {
        title: "Le Triangle du rêve (Empowerment dynamics)",
        steps: [
          {
            title: "Boussole comme Coach",
            text:
              "Vous recevez une direction sans dépendance : clarté, choix et prochaines étapes."
          },
          {
            title: "Creator Lab comme Créateur",
            text:
              "Vous construisez et lancez depuis votre force. La création comme remède à la stagnation."
          },
          {
            title: "Miroir comme Challenger",
            text:
              "Un feedback honnête sans drame. La transparence comme muscle de croissance, pas comme honte."
          }
        ]
      }
    },

    offer: {
      id: "offer",
      title: "Offre",
      intro:
        "C’est une collaboration réciproque : nous investissons dans votre croissance, vous contribuez au champ et à l’ASBL.",
      items: [
        {
          title: "Soutien back-office",
          text:
            "Administration, suivi, structure, sérénité des processus. Pour que votre esprit vous appartienne à nouveau.",
          linkLabel: "Je veux cela",
          href: "#invitation"
        },
        {
          title: "Réseau & vente par la connexion",
          text:
            "Nous ouvrons des portes quand cela s’aligne. Des introductions chaleureuses, pas de prospection froide.",
          linkLabel: "Comment cela fonctionne ?",
          href: "#promises"
        },
        {
          title: "Bibliothèque (templates & frameworks)",
          text:
            "Modèles réutilisables, documents, outils et connaissances. Moins de friction, plus d’élan.",
          linkLabel: "Montrez-moi la bibliothèque",
          href: "#invitation"
        }
      ]
    },

    system: {
      id: "system",
      title: "Comment le champ fonctionne",
      intro:
        "La collaboration est un contenant qui augmente votre capacité : la structure réduit le bruit, la connexion active les opportunités, la transparence protège l’intégrité.",
      flow: [
        { key: "Structure", text: "Back-office et accords réduisent la charge mentale." },
        { key: "Connexion", text: "Un réseau chaleureux ouvre des portes quand il y a un vrai alignement." },
        { key: "Transparence", text: "La visibilité sans honte rend la croissance durable." }
      ],
      practicalTitle: "Concrètement",
      practicalItems: [
        "Administration et suivi",
        "Introductions et dealflow via le réseau",
        "Templates, frameworks et bibliothèque",
        "Accords qui restent clairs"
      ]
    },

    harmony: {
      id: "harmony",
      title: "Nos principes de travail",
      intro:
        "Le soin de soi ici n’est pas du bien-être superficiel. C’est de la maturité : rythme, limites et honnêteté, pour que la croissance ne se fasse pas au détriment de votre corps.",
      principles: [
        { title: "Le soin de soi comme condition", text: "Rythme et limites rendent la croissance durable." },
        { title: "La transparence comme muscle", text: "Rester visible sans perfection." },
        { title: "Croissance par la création", text: "Pas seulement parler, mais construire et agir." },
        { title: "Réciprocité sans comptabilité", text: "Jeu clair, collaboration chaleureuse." },
        { title: "Pas de dépendance", text: "Direction sans ‘construction gourou’." },
        { title: "Économie humaine", text: "Le profit est acceptable, l’extraction ne l’est pas." }
      ]
    },

    promises: {
      id: "promises",
      title: "L’Accord",
      intro:
        "Nous gardons cela simple, juste et durable : un prix de base pour ce qui est difficile à mesurer, et un modèle d’upside partagé pour ce qui croît de manière mesurable.",
      notTitle: "Nous ne faisons pas",
      notItems: [
        "Des conditions cachées ou des définitions floues des ‘extras’",
        "Des acrobaties juridiques à la place de la confiance",
        "Du contrôle et de la méfiance déguisés en ‘collaboration’",
        "Une pression pour aller plus vite que votre capacité"
      ],
      doTitle: "Nous faisons",
      doItems: [
        "Prix fixe pour le soutien structurel (back-office + contenant + accompagnement de base).",
        "20 % sur le revenu additionnel démontrable créé via pricing, dealflow ou activation du réseau.",
        "Si vous êtes réellement aligné : don du même montant à l’ASBL (non obligatoire, mais signal d’alignement).",
        "Accord de transparence : définir ensemble les ‘extras’, auditables sans méfiance, simplicité plutôt que complexité."
      ]
    },

    scale: {
      id: "scale",
      title: "Transparence & gouvernance",
      intro: "Pour que ce champ existe, nous le gardons clair : accords, contribution et intention restent visibles.",
      accordion: [
        {
          title: "Ancrage ASBL",
          bodyType: "text",
          body: [
            "L’ASBL est la boussole morale : contribution et transparence comme valeur partagée, afin que le champ ne devienne pas une ‘propriété privée’."
          ]
        },
        {
          title: "Accords simples",
          bodyType: "text",
          body: [
            "Nous définissons ensemble ce que signifie ‘revenu additionnel’ et le rendons vérifiable sans méfiance."
          ]
        },
        {
          title: "Le soin de soi comme rythme",
          bodyType: "text",
          body: [
            "Pas de croissance au détriment de votre corps. Les limites et le pacing font partie de la collaboration."
          ]
        }
      ]
    },

    resonance: {
      id: "resonance",
      title: "La résonance est optionnelle",
      paragraphs: [
        "Ceci est pour toute personne qui souhaite grandir.",
        "Vous pouvez d’abord observer. Vous pouvez entrer lorsque vous êtes prêt. Vous pouvez partir clairement si cela ne s’aligne pas.",
        "La connexion sans liberté n’est pas une connexion."
      ],
      action: { label: "Vérifier l’alignement", href: "#invitation" }
    },

    invitation: {
      id: "invitation",
      title: "Invitation",
      intro: "Si vous sentez : « c’est ce que je cherchais », alors la prochaine étape est simple.",
      paragraphs: [
        "Dites-nous ce que vous construisez, où vous bloquez et ce que vous souhaitez alléger.",
        "Nous reflétons si ce champ peut vous porter et quelle forme convient."
      ],
      list: [
        "1 court entretien (clarté et adéquation)",
        "Proposition (accords fixe + upside)",
        "Démarrage : back-office + réseau + bibliothèque"
      ],
      action: { label: "Entrer dans le Champ", href: "#contact" }
    }
  },

  footer: {
    links: [
      { label: "Confidentialité", href: "#" },
      { label: "Conditions", href: "#" },
      { label: "Principes ASBL", href: "#" }
    ]
  }
};
