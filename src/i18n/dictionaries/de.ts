import type { Dictionary } from "../types";

/** German. Keywords: KI-Text humanisieren, Text vermenschlichen, AI Humanizer Deutsch; Text umschreiben, paraphrasieren, umformulieren. */
export const de: Dictionary = {
  locale: "de",
  tool: {
    numberLocale: "de-DE",
    toolLabel: "Umformulierungs-Tool",
    styleLabel: "Stil",
    outputLanguage: "Ausgabesprache",
    sameAsInput: "Wie im Text",
    yourText: "Dein Text",
    rewrite: "Ergebnis",
    inputLabel: "Text zum Umschreiben",
    placeholder: "Füge deinen Text hier ein oder tippe ihn ein und klicke dann auf {action}.",
    wordCount: "{count} / {max} Wörter",
    outputWords: "{count} Wörter",
    edit: "Bearbeiten",
    clear: "Löschen",
    clickToEdit: "Zum Bearbeiten klicken",
    rewriting: "Wird umgeschrieben…",
    outputPlaceholder: "Hier erscheint dein umgeschriebener Text.",
    showChanges: "Änderungen anzeigen",
    copy: "Kopieren",
    copied: "Kopiert!",
    tipBefore: "Tipp: Drücke",
    ctrlKey: "Strg",
    tipAfter: "zum Absenden.",
    overLimit: "Kürze deinen Text auf höchstens {max} Wörter.",
    actionHumanize: "Humanisieren",
    actionParaphrase: "Umschreiben",
    busyHumanize: "Wird humanisiert…",
    busyParaphrase: "Wird umgeschrieben…",
    modes: {
      standard: { label: "Standard", hint: "Neue Worte, gleicher Sinn" },
      humanize: { label: "Humanisieren", hint: "Natürlich, wie von Menschen geschrieben" },
      fluent: { label: "Flüssig", hint: "Glatt und natürlich" },
      formal: { label: "Formell", hint: "Professioneller Ton" },
      simple: { label: "Einfach", hint: "Leicht verständlich" },
      creative: { label: "Kreativ", hint: "Lebendig und ausdrucksstark" },
      shorten: { label: "Kürzen", hint: "Weniger Wörter" },
      expand: { label: "Erweitern", hint: "Mehr Details" },
    },
    errors: {
      generic: "Etwas ist schiefgelaufen. Bitte versuche es gleich noch einmal.",
      invalid: "Ungültige Anfrage.",
      empty: "Bitte gib einen Text zum Umschreiben ein.",
      tooManyWords: "Dein Text darf höchstens {max} Wörter lang sein.",
      tooManyChars: "Dein Text darf höchstens 12.000 Zeichen lang sein.",
      tooLarge: "Dein Text ist zu lang.",
      unknownMode: "Unbekannter Stil.",
      unknownLanguage: "Unbekannte Sprache.",
      rateLimited: "Du hast in kurzer Zeit sehr viele Anfragen gesendet. Bitte warte ein paar Minuten und versuche es dann erneut.",
      botCheck: "Wir konnten deinen Browser nicht verifizieren. Bitte lade die Seite neu und versuche es noch einmal.",
      highDemand: "Gerade ist sehr viel los. Bitte versuche es in ein paar Minuten erneut.",
      refusal: "Dieser Text kann nicht umgeschrieben werden. Bitte versuche einen anderen.",
      truncated: "Das Ergebnis wurde abgeschnitten. Versuche es mit einem kürzeren Text.",
      network: "Netzwerkfehler. Bitte prüfe deine Verbindung und versuche es erneut.",
      copyFailed: "Automatisches Kopieren nicht möglich. Markiere den Text und kopiere ihn manuell.",
    },
  },
  chrome: {
    navHumanizer: "KI-Humanizer",
    navParaphraser: "Text umschreiben",
    cta: "Kostenlos humanisieren",
    themeToggle: "Dunkelmodus umschalten",
    languageMenu: "Sprache",
    footerTagline:
      "OG steht für original. Ein kostenloser KI-Humanizer und Umformulierer, damit deine Texte nach dir klingen. Ohne Anmeldung, ohne Credits.",
    footerTools: "Tools",
    footerMore: "Informationen",
    about: "Über uns",
    privacy: "Datenschutz",
    terms: "Nutzungsbedingungen",
    contact: "Kontakt",
    footerNote: "Nutze es für deine eigenen Texte und lies das Ergebnis immer, bevor du es verschickst.",
    adLabel: "Anzeige",
    facts: ["Keine Anmeldung", "Bis zu 1.000 Wörter pro Text", "Acht Schreibstile", "Zwölf Sprachen"],
    before: "Vorher",
    after: "Nachher",
    otherLanguages: "Andere Sprachen",
    englishOnlyNote: "Diese Seiten sind auf Englisch.",
  },
  home: {
    title: "KI-Text humanisieren: AI Humanizer Deutsch",
    description:
      "KI-Texte kostenlos humanisieren: Unser AI Humanizer macht steife ChatGPT-Entwürfe in Sekunden menschlich und natürlich, sodass sie nach dir klingen. Ohne Anmeldung.",
    eyebrow: "Kostenloser KI-Humanizer · Ohne Anmeldung",
    h1: ["KI-Text humanisieren, damit er nach ", "dir", " klingt"],
    intro:
      "Füge einen Entwurf ein, der wie vom Fließband klingt. OG Humanizer verändert den Rhythmus, streicht Füllwörter und ersetzt Floskeln durch klare, konkrete Sprache, ohne an deinen Fakten zu rütteln.",
    sections: [
      {
        label: "Die Idee",
        title: "Was es heißt, einen KI-Text zu humanisieren",
        lede: "KI-Tools schreiben erstaunlich flüssig, und genau das ist das Problem: Die Sätze stimmen, der Aufbau ist sauber, und trotzdem klingt das Ergebnis hohl, wie eine Rede für niemanden im Besonderen.",
        paragraphs: [
          "Einen KI-Text zu humanisieren heißt, diese Lücke zu schließen. Man nimmt einen technisch korrekten Entwurf und sorgt dafür, dass er klingt, als hätte ihn jemand mit eigener Haltung geschrieben: jemand, der weiß, wann er sich kurzfassen sollte, wann eine Erklärung nötig ist und wann ein einfaches Wort mehr sagt als drei gestelzte. Der Inhalt bleibt gleich; nur die Art, ihn zu erzählen, ändert sich.",
          "Genau dafür gibt es unseren KI-Humanizer. Wähle den Stil Humanisieren, füge deinen Entwurf ein, und nach wenigen Sekunden hast du eine Fassung mit lebendigerem Rhythmus, weniger Floskeln und deutlich weniger Füllstoff. Danach machst du, was jede gute Lektorin tun würde: Du behältst, was funktioniert, holst zurück, was dir besser gefiel, und triffst selbst die Entscheidung.",
        ],
      },
      {
        label: "Was sich ändert",
        title: "Sechs KI-Angewohnheiten, die der Humanizer glättet",
        lede: "KI-generierte Texte teilen ein paar typische Ticks. Einzeln ist keiner schlimm, zusammen verraten sie den Absender.",
        cards: [
          {
            title: "Leere Einleitungen",
            text: "„In der heutigen schnelllebigen Welt …“, „Es ist wichtig zu beachten, dass …“. Sätze, die sich warmlaufen, statt etwas zu sagen.",
          },
          {
            title: "Rhythmus wie ein Metronom",
            text: "Sätze von fast gleicher Länge, alle ordentlich und vollständig. Echte Texte werden schneller und langsamer. Mal ziehen sie sich. Mal brechen sie ab.",
          },
          {
            title: "Aufgeblähter Wortschatz",
            text: "Optimieren, Synergien, maßgeblich, essenziell, nachhaltig. Klingt wichtig, sagt wenig. Menschen greifen meist zum einfacheren Wort.",
          },
          {
            title: "Dreierlisten aus Gewohnheit",
            text: "Effizient, effektiv und ansprechend. Wenn jeder Gedanke im Dreierpack kommt, wirkt der Text wie vom Band.",
          },
          {
            title: "Die Pflicht-Zusammenfassung",
            text: "„Zusammenfassend lässt sich sagen …“ und dann alles noch einmal. Die meisten kurzen Texte kommen ohne aus.",
          },
          {
            title: "Absicherungen überall",
            text: "„Könnte potenziell dazu beitragen, … zu verbessern“. Ein wenig Vorsicht ist ehrlich; Vorsicht in jedem Satz wirkt unsicher.",
          },
        ],
      },
      {
        label: "Beispiele",
        title: "Vorher und nachher: ein humanisierter KI-Text",
        examples: [
          {
            label: "E-Mail",
            before:
              "Ich hoffe, diese E-Mail erreicht Sie bei bester Gesundheit. Hiermit möchte ich Sie darüber informieren, dass wir die Entscheidung getroffen haben, den Zeitplan des Projekts zu verschieben. Wir danken Ihnen für Ihr Verständnis und freuen uns auf die weitere Zusammenarbeit.",
            after:
              "Kurzes Update: Wir haben den Projektzeitplan verschoben. Danke für Ihre Geduld, wir freuen uns weiterhin auf die Zusammenarbeit.",
          },
          {
            label: "Blog",
            before:
              "In der heutigen digitalen Landschaft ist Zeitmanagement wichtiger denn je. In diesem Artikel tauchen wir tief in fünf effektive Strategien ein, mit denen Sie Ihre Produktivität steigern können.",
            after: "Zeitmanagement ist schwieriger geworden. Hier sind fünf Strategien, mit denen du mehr erledigt bekommst.",
          },
          {
            label: "Produkt",
            before:
              "Diese innovative Edelstahl-Trinkflasche vereint auf perfekte Weise Stil und Funktionalität und hält Ihre Getränke dank robustem, auslaufsicherem Design bis zu 24 Stunden kalt.",
            after: "Eine schöne Flasche aus Edelstahl, die Getränke bis zu 24 Stunden kalt hält. Und sie läuft nicht aus.",
          },
        ],
      },
      {
        label: "Einsatz",
        title: "Wann sich ein KI-Humanizer lohnt",
        cards: [
          {
            title: "E-Mails und Nachrichten",
            text: "Du wolltest vom Chatbot eine höfliche Antwort und hast eine Pressemitteilung bekommen. Humanisiere sie, und sie klingt wieder nach dir.",
          },
          {
            title: "Blogs und Newsletter",
            text: "KI ist eine gute Hilfe für die Gliederung und eine mittelmäßige Kolumnistin. Humanisiere den Text, damit deine Leser über den ersten Absatz hinauskommen.",
          },
          {
            title: "Bewerbungen",
            text: "Personaler lesen Hunderte Anschreiben, die gleich beginnen. Ein humanisierter Entwurf gibt deinem eine Chance, solange alles darin stimmt.",
          },
          {
            title: "Schreiben in einer Fremdsprache",
            text: "Wenn du KI genutzt hast, weil Deutsch nicht deine Muttersprache ist, hilft der Humanizer, dass der Text natürlich statt übersetzt klingt.",
          },
        ],
      },
      {
        label: "Klartext",
        title: "Ein ehrliches Wort zu KI-Detektoren",
        paragraphs: [
          "Viele Humanizer versprechen „100 % unerkennbare“ Texte. Wir nicht, aus zwei Gründen. Erstens sind KI-Detektoren unzuverlässig: Sie widersprechen sich gegenseitig und markieren regelmäßig Texte, die Menschen geschrieben haben, vor allem von Menschen, die nicht in ihrer Muttersprache schreiben. Ein Versprechen, das auf so einer wackligen Messung beruht, ist wenig wert.",
          "Zweitens sollte das Ziel nicht sein, jemanden zu täuschen. Wenn deine Hochschule, dein Kunde oder dein Arbeitgeber verlangt, dass du den Einsatz von KI angibst, dann gib ihn an. Unser Humanizer soll deine Texte klarer und natürlicher machen, und das lohnt sich, ob jemand nachprüft oder nicht.",
        ],
      },
    ],
    faqLabel: "Fragen",
    faqTitle: "Häufige Fragen zum KI-Humanizer",
    faq: [
      {
        q: "Was bedeutet es, einen KI-Text zu humanisieren?",
        a: "Es bedeutet, einen maschinell erzeugten Text so umzuschreiben, dass er klingt, wie ein Mensch es sagen würde: abwechslungsreiche Sätze, einfache Wörter, keine Füllfloskeln und ein Ton, der zum Leser passt. Die Ideen bleiben, die Form ändert sich.",
      },
      {
        q: "Ist der KI-Humanizer wirklich kostenlos?",
        a: "Ja. Keine Anmeldung, keine Testphase und keine Credits zum Kaufen. Du kannst bis zu 1.000 Wörter pro Anfrage humanisieren, so oft du willst.",
      },
      {
        q: "Funktioniert der Humanizer auf Deutsch?",
        a: "Ja. Füge deinen deutschen Text ein, und das Ergebnis kommt auf Deutsch zurück. Das Tool funktioniert auch auf Englisch, Spanisch, Portugiesisch, Französisch, Indonesisch und in weiteren Sprachen.",
      },
      {
        q: "Besteht der Text danach KI-Detektoren?",
        a: "Das versprechen wir nicht, und bei Anbietern, die es tun, solltest du skeptisch sein. Detektoren sind unzuverlässig und liegen bei menschlichen Texten oft falsch. Wir versprechen einen Text, der sich natürlich liest.",
      },
      {
        q: "Was ist der Unterschied zwischen Humanisieren und Umschreiben?",
        a: "Beim Umschreiben ändern sich die Wörter; beim Humanisieren ändern sie sich mit einem klaren Ziel: Der Text soll weniger mechanisch klingen. Wenn du nur eine andere Formulierung brauchst, nutze unser Tool zum Text umschreiben.",
      },
      {
        q: "Speichert ihr meine Texte?",
        a: "Nicht in lesbarer Form und nicht mit dir verknüpft. Ein Ergebnis kann bis zu sieben Tage zwischengespeichert werden, damit dieselbe Anfrage sofort beantwortet wird. Bitte füge keine Passwörter oder sensiblen Daten ein.",
      },
    ],
    cta: {
      title: ["Texte, die nach ", "dir", " klingen."],
      text: "Entwurf einfügen, auf Humanisieren klicken, noch einmal lesen. Kostenlos, immer, ohne Anmeldung.",
      button: "Meinen Text humanisieren",
    },
  },
  paraphraser: {
    title: "Text umschreiben und umformulieren kostenlos",
    description:
      "Text umschreiben, umformulieren und paraphrasieren: kostenlos in acht Stilen, von formell bis einfach, mit markierten Änderungen. Ohne Anmeldung und ohne Tageslimit.",
    eyebrow: "Kostenloser Umformulierer · Acht Stile",
    h1: ["", "Text umschreiben", " kostenlos, in Sekunden"],
    intro:
      "Füge einen Satz, einen Absatz oder eine ganze Seite ein, wähle einen Stil und erhalte in Sekunden eine neue Fassung, jede Änderung markiert. Ohne Konto, ohne Credit-Zähler und ohne Installation.",
    sections: [
      {
        label: "Warum",
        title: "Umformulieren: dasselbe sagen, nur besser",
        paragraphs: [
          "Paraphrasieren gehört zu den nützlichsten Fähigkeiten beim Schreiben: denselben Gedanken mit anderen Worten ausdrücken. Das hilft gegen Wiederholungen, passt den Ton an die Leser an, bringt einen Text unter eine Wortgrenze oder erklärt Fachliches für Laien. Schwierig ist nur, die eigenen Texte umzuformulieren: Du weißt ja schon, was du sagen wolltest, und überliest die holprigen Stellen.",
          "Ein Umformulierer liefert dir eine zweite Fassung zum Vergleichen. Manchmal übernimmst du sie unverändert; öfter behältst du die Hälfte, holst ein Wort zurück und landest bei etwas Besserem als beiden Versionen. Genau dafür ist er da: nicht, um für dich zu schreiben, sondern um dir eine andere Art zu zeigen, dasselbe zu sagen.",
        ],
      },
      {
        label: "Stile",
        title: "Acht Stile zum Text umformulieren",
        lede: "Jeder Stil ist eine andere Anweisung. Wähle den, der zu deinen Lesern passt.",
        cards: [
          { title: "Standard", text: "Die Grundeinstellung: neue Wörter und neuer Satzbau, ähnliche Länge und ähnlicher Ton." },
          { title: "Humanisieren", text: "Für Entwürfe, die nach Maschine klingen: mehr Rhythmus, weniger Floskeln, einfachere Wörter." },
          { title: "Flüssig", text: "Glättet holprige Formulierungen, kleine Fehler und Wiederholungen, damit der Text fließt." },
          { title: "Formell", text: "Für berufliche E-Mails, Bewerbungen und Berichte: professioneller Ton ohne Umgangssprache." },
          { title: "Einfach", text: "Kurze Wörter und kurze Sätze, damit jeder es beim ersten Lesen versteht." },
          { title: "Kreativ", text: "Lebendigere Sprache für Blogs, Social Media und Produkttexte." },
          { title: "Kürzen", text: "Kürzt den Text um ein Drittel bis die Hälfte, ohne Wesentliches zu verlieren." },
          { title: "Erweitern", text: "Baut Notizen oder zu knappe Antworten aus, ohne neue Fakten zu erfinden." },
        ],
      },
      {
        label: "Beispiele",
        title: "Beispiele zum Satz umformulieren",
        examples: [
          {
            label: "Formell",
            before: "Hey, kannst du mir die Zahlen bis Freitag schicken? Brauch sie für den Bericht.",
            after: "Könnten Sie mir die Zahlen bitte bis Freitag schicken? Ich benötige sie, um den Bericht fertigzustellen.",
          },
          {
            label: "Einfach",
            before:
              "Das Medikament ist zweimal täglich zu verabreichen, sofern keine unerwünschten gastrointestinalen Reaktionen auftreten.",
            after: "Nimm das Medikament zweimal am Tag, solange du keine Magenprobleme bekommst.",
          },
          {
            label: "Kürzen",
            before:
              "Zum gegenwärtigen Zeitpunkt sind wir leider nicht in der Lage, Ihnen eine Rückerstattung für den von Ihnen erworbenen Artikel anbieten zu können.",
            after: "Wir können Ihren Kauf derzeit leider nicht erstatten.",
          },
        ],
      },
      {
        label: "Tipps",
        title: "So gelingt das Umschreiben",
        cards: [
          {
            title: "Ganze Gedanken einfügen",
            text: "Ein ganzer Absatz liefert Kontext und erhält die Verbindungen zwischen den Sätzen. Ein einzelner Satz ohne Zusammenhang wirkt oft flach.",
          },
          {
            title: "An die Leser denken",
            text: "Schreibst du an deine Chefin? Formell. Erklärst du einem Kunden eine Rechnung? Einfach. Der Stil richtet sich nach den Lesern.",
          },
          {
            title: "Mehrmals probieren",
            text: "Jede Fassung fällt etwas anders aus. Wenn die erste fast passt, klick erneut oder probier den Nachbarstil.",
          },
          {
            title: "Namen und Zahlen prüfen",
            text: "Das Tool soll sie nicht verändern und hält sich fast immer daran, aber verschicken tust du den Text.",
          },
        ],
      },
      {
        label: "Fair bleiben",
        title: "Paraphrasieren ohne Plagiat",
        paragraphs: [
          "Ein umformulierter Satz bleibt die Idee von jemandem. Wenn die Idee nicht von dir stammt, braucht sie eine Quellenangabe, egal wie anders die Worte sind. Die Arbeit anderer durch einen Umformulierer zu schicken und als eigene abzugeben, ist ein Plagiat, und dafür ist diese Seite nicht gedacht. Nutze sie für deine eigenen Texte: Entwürfe, Notizen und E-Mails.",
        ],
      },
    ],
    faqLabel: "Fragen",
    faqTitle: "Häufige Fragen zum Umformulierer",
    faq: [
      {
        q: "Ist der Umformulierer kostenlos?",
        a: "Ja, vollständig. Ohne Anmeldung und ohne Tageslimit. Pro Anfrage sind bis zu 1.000 Wörter möglich.",
      },
      {
        q: "Was bedeutet paraphrasieren?",
        a: "Paraphrasieren heißt, den Inhalt eines Textes mit anderen Worten wiederzugeben, ohne den Sinn zu verändern. Das hilft gegen Wiederholungen, für einen anderen Ton oder zum Kürzen.",
      },
      {
        q: "Verändert sich der Sinn meines Textes?",
        a: "Das Tool soll Sinn, Fakten, Namen und Zahlen beibehalten und macht das zuverlässig. Lies trotzdem gegen: Geänderte Wörter werden markiert.",
      },
      {
        q: "Kann ich Texte in anderen Sprachen umschreiben?",
        a: "Ja. Das Tool funktioniert auf Deutsch, Englisch, Spanisch, Portugiesisch, Französisch, Indonesisch und in weiteren Sprachen. Du kannst auch eine andere Ausgabesprache wählen, um gleichzeitig zu übersetzen und umzuformulieren.",
      },
      {
        q: "Darf ich es für Hausarbeiten nutzen?",
        a: "Für deine eigenen Texte ja, sofern deine Hochschule Schreibhilfen erlaubt. Fremde Arbeiten umzuformulieren und als eigene auszugeben, ist ein Plagiat.",
      },
    ],
    cta: {
      title: ["Dein nächster Entwurf ist nur ", "einen Klick", " entfernt."],
      text: "Text einfügen, Stil wählen und eine neue Formulierung entdecken. Kostenlos, immer.",
      button: "Jetzt umschreiben",
    },
  },
};
