import type { Dictionary } from "../types";

/** French. Keywords: humaniser un texte, humaniser texte ia; reformuler un texte, reformulation de texte, reformulateur. */
export const fr: Dictionary = {
  locale: "fr",
  tool: {
    numberLocale: "fr-FR",
    toolLabel: "Outil de reformulation",
    styleLabel: "Style",
    outputLanguage: "Langue du résultat",
    sameAsInput: "Identique au texte",
    yourText: "Votre texte",
    rewrite: "Résultat",
    inputLabel: "Texte à reformuler",
    placeholder: "Collez ou saisissez votre texte ici, puis cliquez sur {action}.",
    wordCount: "{count} / {max} mots",
    outputWords: "{count} mots",
    edit: "Modifier",
    clear: "Effacer",
    clickToEdit: "Cliquez pour modifier",
    rewriting: "Réécriture…",
    outputPlaceholder: "Votre texte réécrit apparaîtra ici.",
    showChanges: "Afficher les modifications",
    copy: "Copier",
    copied: "Copié !",
    tipBefore: "Astuce : appuyez sur",
    ctrlKey: "Ctrl",
    tipAfter: "pour {action}.",
    overLimit: "Raccourcissez votre texte à {max} mots maximum.",
    actionHumanize: "Humaniser",
    actionParaphrase: "Reformuler",
    busyHumanize: "Humanisation…",
    busyParaphrase: "Reformulation…",
    modes: {
      standard: { label: "Standard", hint: "D’autres mots, le même sens" },
      humanize: { label: "Humaniser", hint: "Naturel, comme écrit par une personne" },
      fluent: { label: "Fluide", hint: "Naturel et sans accroc" },
      formal: { label: "Formel", hint: "Ton professionnel" },
      simple: { label: "Simple", hint: "Facile à lire" },
      creative: { label: "Créatif", hint: "Vivant et expressif" },
      shorten: { label: "Raccourcir", hint: "Moins de mots" },
      expand: { label: "Développer", hint: "Plus de détails" },
    },
    errors: {
      generic: "Une erreur s’est produite. Réessayez dans un instant.",
      invalid: "Requête non valide.",
      empty: "Saisissez ou collez un texte à reformuler.",
      tooManyWords: "Votre texte ne doit pas dépasser {max} mots.",
      tooManyChars: "Votre texte ne doit pas dépasser 12 000 caractères.",
      tooLarge: "Votre texte est trop long.",
      unknownMode: "Style inconnu.",
      unknownLanguage: "Langue inconnue.",
      rateLimited: "Vous avez envoyé beaucoup de demandes en peu de temps. Patientez quelques minutes, puis réessayez.",
      botCheck: "Nous n’avons pas pu vérifier votre navigateur. Actualisez la page et réessayez.",
      highDemand: "Le service est très sollicité en ce moment. Réessayez dans quelques minutes.",
      refusal: "Ce texte ne peut pas être reformulé. Essayez avec un autre texte.",
      truncated: "Le résultat a été coupé. Essayez avec un texte plus court.",
      network: "Erreur réseau. Vérifiez votre connexion et réessayez.",
      copyFailed: "Copie automatique impossible. Sélectionnez le texte et copiez-le manuellement.",
    },
  },
  chrome: {
    navHumanizer: "Humaniseur IA",
    navParaphraser: "Reformulateur",
    cta: "Humaniser gratuitement",
    themeToggle: "Activer ou désactiver le mode sombre",
    languageMenu: "Langue",
    footerTagline:
      "OG comme original. Un humaniseur d’IA et un reformulateur gratuits pour que vos textes vous ressemblent. Sans inscription, sans crédits.",
    footerTools: "Outils",
    footerMore: "Informations",
    about: "À propos",
    privacy: "Confidentialité",
    terms: "Conditions d’utilisation",
    contact: "Contact",
    footerNote: "Utilisez-le pour vos propres textes et relisez toujours le résultat avant de l’envoyer.",
    adLabel: "Publicité",
    facts: ["Sans inscription", "Jusqu’à 1 000 mots par texte", "Huit styles d’écriture", "Douze langues"],
    before: "Avant",
    after: "Après",
    otherLanguages: "Autres langues",
    englishOnlyNote: "Ces pages sont en anglais.",
  },
  home: {
    title: "Humaniser un texte IA gratuitement",
    description:
      "Humanisez un texte IA gratuitement. Notre humaniseur transforme les brouillons rigides de ChatGPT en une écriture naturelle qui vous ressemble. Sans inscription.",
    eyebrow: "Humaniseur IA gratuit · Sans inscription",
    h1: ["Humaniser un texte IA pour qu’il ", "vous", " ressemble"],
    intro:
      "Collez un brouillon qui semble sorti d’une chaîne de montage. OG Humanizer en change le rythme, supprime le remplissage et remplace les formules toutes faites par un langage clair et précis, sans toucher à vos informations.",
    sections: [
      {
        label: "L’idée",
        title: "Ce que veut dire humaniser un texte IA",
        lede: "Les outils d’IA écrivent avec une aisance étonnante, et c’est justement là le problème : les phrases sont correctes, la structure est impeccable, et pourtant le résultat sonne creux, comme un discours écrit pour personne en particulier.",
        paragraphs: [
          "Humaniser un texte IA, c’est combler cet écart. Il s’agit de reprendre un brouillon techniquement correct pour qu’il ait l’air écrit par quelqu’un qui a un point de vue : quelqu’un qui sait quand être bref, quand expliquer, et quand un mot simple en dit plus que trois mots savants. Le fond ne change pas ; c’est la manière de le dire qui change.",
          "C’est le rôle de notre humaniseur. Choisissez le style Humaniser, collez votre brouillon et, en quelques secondes, vous obtenez une version au rythme plus varié, avec moins de formules toutes faites et nettement moins de remplissage. Faites ensuite ce que ferait tout bon éditeur : gardez ce qui fonctionne, reprenez ce que vous préfériez et tranchez vous-même.",
        ],
      },
      {
        label: "Ce qui change",
        title: "Six tics de l’IA que l’humaniseur corrige",
        lede: "Les textes générés par l’IA partagent quelques travers. Aucun n’est grave en soi, mais ensemble, ils trahissent leur auteur.",
        cards: [
          {
            title: "Les entrées en matière creuses",
            text: "« Dans le monde d’aujourd’hui… », « Il est important de noter que… ». Des phrases qui s’échauffent au lieu de dire quelque chose.",
          },
          {
            title: "Un rythme de métronome",
            text: "Des phrases de longueur presque identique, toutes bien rangées. Une vraie plume accélère et ralentit. Parfois elle s’étire. Parfois elle s’arrête net.",
          },
          {
            title: "Le vocabulaire gonflé",
            text: "Optimiser, synergie, levier, crucial, incontournable. Ces mots sonnent bien et disent peu. Une personne choisit souvent le mot le plus simple.",
          },
          {
            title: "Les listes de trois par réflexe",
            text: "Efficace, performant et engageant. Quand chaque idée arrive par trois, le texte paraît fabriqué en série.",
          },
          {
            title: "Le résumé obligatoire",
            text: "« En conclusion… » suivi de tout ce que le lecteur vient de lire. La plupart des textes courts s’en passent très bien.",
          },
          {
            title: "Des précautions partout",
            text: "« Pourrait potentiellement contribuer à améliorer… ». Un peu de prudence est honnête ; trop de prudence donne l’impression de ne rien affirmer.",
          },
        ],
      },
      {
        label: "Exemples",
        title: "Avant et après : un texte IA humanisé",
        examples: [
          {
            label: "E-mail",
            before:
              "J’espère que ce message vous trouve en bonne santé. Je me permets de vous contacter afin de vous informer que nous avons pris la décision de reporter le calendrier du projet. Nous vous remercions de votre compréhension et nous nous réjouissons de poursuivre notre collaboration.",
            after:
              "Petite information : nous avons décidé de décaler le calendrier du projet. Merci de votre patience, nous avons hâte de continuer à travailler ensemble.",
          },
          {
            label: "Blog",
            before:
              "Dans le paysage numérique actuel, la gestion du temps est devenue plus importante que jamais. Dans cet article, nous allons explorer cinq stratégies efficaces qui peuvent vous aider à booster votre productivité.",
            after: "Gérer son temps est plus difficile qu’avant. Voici cinq stratégies qui peuvent vous aider à abattre plus de travail.",
          },
          {
            label: "Produit",
            before:
              "Cette gourde innovante en acier inoxydable allie parfaitement style et fonctionnalité, en gardant vos boissons fraîches jusqu’à 24 heures grâce à un design robuste et étanche.",
            after: "Une jolie gourde en acier qui garde vos boissons fraîches jusqu’à 24 heures. Et elle ne fuit pas.",
          },
        ],
      },
      {
        label: "Usages",
        title: "Quand un humaniseur IA vous fait gagner du temps",
        cards: [
          {
            title: "E-mails et messages",
            text: "Vous avez demandé une réponse polie à un chatbot et reçu un communiqué de presse. Humanisez-le et il vous ressemblera à nouveau.",
          },
          {
            title: "Blogs et newsletters",
            text: "L’IA est une bonne assistante pour le plan et une chroniqueuse médiocre. Humanisez le texte pour que vos lecteurs dépassent le premier paragraphe.",
          },
          {
            title: "Lettres de motivation",
            text: "Les recruteurs lisent des centaines de lettres qui commencent toutes pareil. Un brouillon humanisé donne sa chance à la vôtre, à condition que tout y soit vrai.",
          },
          {
            title: "Écrire dans une autre langue",
            text: "Si vous avez utilisé l’IA parce que le français n’est pas votre langue maternelle, l’humaniseur aide votre texte à sonner naturel plutôt que traduit.",
          },
        ],
      },
      {
        label: "En toute franchise",
        title: "Un mot honnête sur les détecteurs d’IA",
        paragraphs: [
          "Beaucoup d’humaniseurs promettent des textes « 100 % indétectables ». Pas nous, pour deux raisons. D’abord, les détecteurs d’IA ne sont pas fiables : ils se contredisent et signalent souvent des textes écrits par des humains, surtout lorsque l’auteur écrit dans une langue qui n’est pas la sienne. Une promesse fondée sur une mesure aussi fragile ne vaut pas grand-chose.",
          "Ensuite, le but ne devrait pas être de tromper qui que ce soit. Si votre établissement, votre client ou votre employeur vous demande de déclarer l’usage de l’IA, déclarez-le. Notre humaniseur sert à rendre ce que vous écrivez plus clair et plus naturel, et cela vaut la peine, que quelqu’un vérifie ou non.",
        ],
      },
    ],
    faqLabel: "Questions",
    faqTitle: "Questions fréquentes sur l’humaniseur",
    faq: [
      {
        q: "Que signifie humaniser un texte IA ?",
        a: "C’est réécrire un texte produit par une machine pour qu’il se lise comme l’aurait formulé une personne : des phrases variées, des mots simples, pas de remplissage et un ton adapté au lecteur. Les idées restent ; la forme change.",
      },
      {
        q: "L’humaniseur est-il vraiment gratuit ?",
        a: "Oui. Pas d’inscription, pas d’essai ni de crédits à acheter. Vous pouvez humaniser jusqu’à 1 000 mots par demande, aussi souvent que nécessaire.",
      },
      {
        q: "Le texte passera-t-il les détecteurs d’IA ?",
        a: "Nous ne le promettons pas, et il vaut mieux se méfier de ceux qui le font. Les détecteurs ne sont pas fiables et se trompent souvent sur des textes humains. Nous promettons en revanche un texte qui se lit naturellement.",
      },
      {
        q: "Quelle différence entre humaniser et reformuler ?",
        a: "Reformuler change les mots ; humaniser les change dans un but précis : rendre le texte moins mécanique. Si vous voulez simplement une autre formulation, essayez notre reformulateur de texte.",
      },
      {
        q: "Est-ce que ça marche avec des textes en français ?",
        a: "Oui. Collez votre texte en français et le résultat sera en français. L’outil fonctionne aussi en anglais, espagnol, portugais, allemand, indonésien et dans d’autres langues.",
      },
      {
        q: "Conservez-vous mes textes ?",
        a: "Pas sous une forme lisible ni liée à vous. Un résultat peut être conservé jusqu’à sept jours pour qu’une demande identique s’affiche instantanément. Ne collez ni mots de passe ni données sensibles.",
      },
    ],
    cta: {
      title: ["Des textes qui ", "vous", " ressemblent."],
      text: "Collez votre brouillon, cliquez sur Humaniser et relisez. Gratuit, toujours, sans inscription.",
      button: "Humaniser mon texte",
    },
  },
  paraphraser: {
    title: "Reformuler un texte : reformulateur gratuit",
    description:
      "Reformulez un texte gratuitement en quelques secondes. Reformulation de texte en huit styles, du formel au simple, avec les modifications surlignées. Sans inscription.",
    eyebrow: "Reformulateur gratuit · Huit styles",
    h1: ["", "Reformuler un texte", " gratuitement, en quelques secondes"],
    intro:
      "Collez une phrase, un paragraphe ou une page entière, choisissez un style et obtenez une nouvelle version en quelques secondes, chaque modification surlignée. Sans compte, sans compteur de crédits et sans rien installer.",
    sections: [
      {
        label: "Pourquoi",
        title: "Reformuler : dire la même chose, mais mieux",
        paragraphs: [
          "La reformulation est l’un des savoir-faire les plus utiles en rédaction : exprimer la même idée avec d’autres mots. Elle permet d’éviter les répétitions, d’adapter le ton au lecteur, de respecter une limite de mots ou d’expliquer une notion technique à un non-spécialiste. Le plus difficile, c’est de reformuler son propre texte : vous savez déjà ce que vous vouliez dire, et vos yeux survolent les passages maladroits.",
          "Un reformulateur vous propose une deuxième version à comparer. Parfois vous la garderez telle quelle ; plus souvent, vous en conserverez la moitié, reprendrez un mot et obtiendrez un texte meilleur que les deux. C’est tout l’intérêt : l’outil n’écrit pas à votre place, il vous montre une autre façon de dire la même chose.",
        ],
      },
      {
        label: "Styles",
        title: "Huit styles pour paraphraser un texte",
        lede: "Chaque style correspond à une consigne différente. Choisissez celui qui convient à votre lecteur.",
        cards: [
          { title: "Standard", text: "L’option de base : change les mots et la structure en gardant une longueur et un ton proches." },
          { title: "Humaniser", text: "Pour les brouillons qui sonnent faux : plus de rythme, moins de formules toutes faites, des mots plus simples." },
          { title: "Fluide", text: "Corrige les tournures maladroites, les petites fautes et les répétitions pour un texte qui coule." },
          { title: "Formel", text: "Pour les e-mails professionnels, les candidatures et les rapports : ton soutenu, sans familiarités." },
          { title: "Simple", text: "Des mots courts et des phrases brèves pour être compris du premier coup." },
          { title: "Créatif", text: "Un langage plus vivant et varié pour les blogs, les réseaux sociaux et les fiches produits." },
          { title: "Raccourcir", text: "Réduit le texte d’un tiers à la moitié sans perdre l’essentiel." },
          { title: "Développer", text: "Étoffe des notes ou des réponses trop courtes, sans inventer de faits." },
        ],
      },
      {
        label: "Exemples",
        title: "Exemples de reformulation",
        examples: [
          {
            label: "Formel",
            before: "Salut, tu peux m’envoyer les chiffres avant vendredi ? J’en ai besoin pour le rapport.",
            after: "Pourriez-vous m’envoyer les chiffres d’ici vendredi ? J’en ai besoin pour finaliser le rapport.",
          },
          {
            label: "Simple",
            before:
              "Le médicament doit être administré deux fois par jour, sous réserve de l’absence d’effets indésirables gastro-intestinaux.",
            after: "Prenez le médicament deux fois par jour, sauf s’il vous donne mal au ventre.",
          },
          {
            label: "Raccourcir",
            before:
              "À l’heure actuelle, nous ne sommes malheureusement pas en mesure de pouvoir vous proposer le remboursement de l’article que vous avez acheté.",
            after: "Nous ne pouvons pas rembourser votre achat pour le moment.",
          },
        ],
      },
      {
        label: "Conseils",
        title: "Comment bien reformuler une phrase ou un texte",
        cards: [
          {
            title: "Collez des idées complètes",
            text: "Un paragraphe entier donne du contexte et préserve les liens entre les phrases. Une phrase isolée ressort souvent plate.",
          },
          {
            title: "Pensez à votre lecteur",
            text: "Vous écrivez à votre responsable ? Formel. Vous expliquez une facture à un client ? Simple. Le style dépend de qui lit.",
          },
          {
            title: "Essayez plusieurs fois",
            text: "Chaque version est un peu différente. Si la première vous plaît presque, relancez ou essayez le style voisin.",
          },
          {
            title: "Vérifiez noms et chiffres",
            text: "L’outil a pour consigne de ne pas y toucher, et il les respecte presque toujours, mais c’est vous qui envoyez le texte.",
          },
        ],
      },
      {
        label: "Usage honnête",
        title: "Reformuler sans plagier",
        paragraphs: [
          "Une phrase reformulée reste l’idée de quelqu’un. Si l’idée n’est pas la vôtre, elle doit être citée, aussi différents que soient les mots. Faire passer le travail d’une autre personne dans un reformulateur pour le rendre sous son nom, c’est du plagiat, et ce site n’est pas fait pour ça. Utilisez-le pour vos propres textes : vos brouillons, vos notes, vos e-mails.",
        ],
      },
    ],
    faqLabel: "Questions",
    faqTitle: "Questions fréquentes sur le reformulateur",
    faq: [
      {
        q: "Le reformulateur de texte est-il gratuit ?",
        a: "Oui, entièrement. Sans inscription ni crédits quotidiens. Chaque demande accepte jusqu’à 1 000 mots.",
      },
      {
        q: "Qu’est-ce que la reformulation de texte ?",
        a: "C’est exprimer avec d’autres mots ce que dit un texte, sans en changer le sens. Elle sert à éviter les répétitions, à changer de ton ou à condenser.",
      },
      {
        q: "Le sens de mon texte va-t-il changer ?",
        a: "L’outil a pour consigne de conserver le sens, les faits, les noms et les chiffres, et il le fait bien. Relisez tout de même : les mots modifiés sont surlignés.",
      },
      {
        q: "Puis-je reformuler dans d’autres langues ?",
        a: "Oui. L’outil fonctionne en français, anglais, espagnol, portugais, allemand, indonésien et d’autres langues. Vous pouvez aussi choisir une autre langue de sortie pour traduire et reformuler en une fois.",
      },
      {
        q: "Puis-je l’utiliser pour mes devoirs ?",
        a: "Pour vos propres textes, oui, si votre établissement autorise les outils d’aide à la rédaction. Reformuler le travail de quelqu’un d’autre et le présenter comme le vôtre, c’est du plagiat.",
      },
    ],
    cta: {
      title: ["Votre prochain brouillon est à ", "un clic", "."],
      text: "Collez votre texte, choisissez un style et découvrez une autre façon de le dire. Gratuit, toujours.",
      button: "Reformuler maintenant",
    },
  },
};
