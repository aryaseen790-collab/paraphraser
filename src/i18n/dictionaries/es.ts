import type { Dictionary } from "../types";

/** Spanish. Keywords: humanizar texto, humanizador de texto, humanizar texto ia; parafraseador, parafrasear, parafraseo. */
export const es: Dictionary = {
  locale: "es",
  tool: {
    numberLocale: "es-ES",
    toolLabel: "Herramienta de parafraseo",
    styleLabel: "Estilo",
    outputLanguage: "Idioma de salida",
    sameAsInput: "Igual que el texto",
    yourText: "Tu texto",
    rewrite: "Resultado",
    inputLabel: "Texto para reescribir",
    placeholder: "Pega o escribe tu texto aquí y pulsa {action}.",
    wordCount: "{count} / {max} palabras",
    outputWords: "{count} palabras",
    edit: "Editar",
    clear: "Borrar",
    clickToEdit: "Haz clic para editar",
    rewriting: "Reescribiendo…",
    outputPlaceholder: "Aquí aparecerá tu texto reescrito.",
    showChanges: "Ver cambios",
    copy: "Copiar",
    copied: "¡Copiado!",
    tipBefore: "Consejo: pulsa",
    ctrlKey: "Ctrl",
    tipAfter: "para {action}.",
    overLimit: "Acorta tu texto a {max} palabras o menos.",
    actionHumanize: "Humanizar",
    actionParaphrase: "Parafrasear",
    busyHumanize: "Humanizando…",
    busyParaphrase: "Parafraseando…",
    modes: {
      standard: { label: "Estándar", hint: "Otras palabras, mismo sentido" },
      humanize: { label: "Humanizar", hint: "Natural, como escrito por una persona" },
      fluent: { label: "Fluido", hint: "Natural y sin tropiezos" },
      formal: { label: "Formal", hint: "Tono profesional" },
      simple: { label: "Sencillo", hint: "Fácil de leer" },
      creative: { label: "Creativo", hint: "Vivo y expresivo" },
      shorten: { label: "Acortar", hint: "Menos palabras" },
      expand: { label: "Ampliar", hint: "Más detalle" },
    },
    errors: {
      generic: "Algo ha fallado. Inténtalo de nuevo en un momento.",
      invalid: "Solicitud no válida.",
      empty: "Escribe o pega un texto para reescribir.",
      tooManyWords: "El texto no puede superar las {max} palabras.",
      tooManyChars: "El texto no puede superar los 12.000 caracteres.",
      tooLarge: "El texto es demasiado largo.",
      unknownMode: "Estilo desconocido.",
      unknownLanguage: "Idioma desconocido.",
      rateLimited: "Has enviado muchas solicitudes en poco tiempo. Espera unos minutos y vuelve a intentarlo.",
      botCheck: "No hemos podido verificar tu navegador. Recarga la página e inténtalo de nuevo.",
      highDemand: "Ahora mismo hay mucha demanda. Vuelve a intentarlo en unos minutos.",
      refusal: "Este texto no se puede reescribir. Prueba con otro.",
      truncated: "El resultado se ha cortado. Prueba con un texto más corto.",
      network: "Error de conexión. Comprueba tu conexión a internet e inténtalo de nuevo.",
      copyFailed: "No se pudo copiar automáticamente. Selecciona el texto y cópialo a mano.",
    },
  },
  chrome: {
    navHumanizer: "Humanizador IA",
    navParaphraser: "Parafraseador",
    cta: "Humanizar gratis",
    themeToggle: "Cambiar modo oscuro",
    languageMenu: "Idioma",
    footerTagline:
      "OG de original. Un humanizador de IA y un parafraseador gratuitos para que tus textos suenen a ti. Sin registro y sin créditos.",
    footerTools: "Herramientas",
    footerMore: "Información",
    about: "Quiénes somos",
    privacy: "Privacidad",
    terms: "Condiciones de uso",
    contact: "Contacto",
    footerNote: "Úsalo con tus propios textos y revisa siempre el resultado antes de enviarlo.",
    adLabel: "Publicidad",
    facts: ["Sin registro", "Hasta 1.000 palabras por vez", "Ocho estilos de escritura", "Doce idiomas"],
    before: "Antes",
    after: "Después",
    otherLanguages: "Otros idiomas",
    englishOnlyNote: "Estas páginas están en inglés.",
  },
  home: {
    title: "Humanizar texto IA gratis: humanizador online",
    description:
      "Humaniza textos de IA gratis en segundos. Nuestro humanizador de texto convierte borradores rígidos de ChatGPT en una escritura natural que suena a ti. Sin registro.",
    eyebrow: "Humanizador de IA gratis · Sin registro",
    h1: ["Humanizar texto de IA para que suene a ", "ti", ""],
    intro:
      "Pega un borrador que parezca salido de una cadena de montaje. OG Humanizer cambia el ritmo, elimina el relleno y sustituye las frases genéricas por un lenguaje claro y concreto, sin tocar tus datos.",
    sections: [
      {
        label: "La idea",
        title: "Qué significa humanizar un texto de IA",
        lede: "Las herramientas de IA escriben con una soltura asombrosa, y precisamente ahí está el problema: las frases son correctas, la estructura es impecable y, aun así, el resultado suena hueco, como un discurso escrito para nadie en particular.",
        paragraphs: [
          "Humanizar un texto de IA consiste en cerrar esa distancia. Se trata de tomar un borrador técnicamente correcto y conseguir que suene como si lo hubiera escrito alguien con criterio propio: alguien que sabe cuándo ser breve, cuándo explicar y cuándo una palabra sencilla dice más que tres rebuscadas. El contenido no cambia; cambia la forma de contarlo.",
          "Para eso existe nuestro humanizador de texto. Elige el estilo Humanizar, pega tu borrador y, en pocos segundos, tendrás una versión con un ritmo más variado, menos frases hechas y bastante menos paja. Después haz lo que haría cualquier buen editor: quédate con lo que funciona, recupera lo que te gustaba más y decide tú la versión final.",
        ],
      },
      {
        label: "Qué cambia",
        title: "Seis hábitos de la IA que el humanizador corrige",
        lede: "Los textos generados por IA comparten unos cuantos tics. Ninguno es grave por sí solo, pero juntos delatan al autor.",
        cards: [
          {
            title: "Introducciones de relleno",
            text: "«En el mundo actual…», «Es importante destacar que…». Frases que calientan motores en lugar de decir algo.",
          },
          {
            title: "Ritmo de metrónomo",
            text: "Frases de longitud casi idéntica, todas ordenadas y completas. La escritura real acelera y frena. A veces se alarga. Otras, se corta.",
          },
          {
            title: "Vocabulario inflado",
            text: "Potenciar, optimizar, sinergia, fundamental, crucial. Suenan importantes y dicen muy poco. Una persona suele elegir la palabra más sencilla.",
          },
          {
            title: "Listas de tres por inercia",
            text: "Eficaz, eficiente y atractivo. Cuando cada idea llega en trío, el texto parece montado en serie.",
          },
          {
            title: "El resumen obligatorio",
            text: "«En conclusión…» seguido de lo mismo que el lector acaba de leer. La mayoría de los textos cortos están mejor sin él.",
          },
          {
            title: "Matices por todas partes",
            text: "«Podría contribuir potencialmente a mejorar…». Un poco de prudencia es honesta; prudencia en cada frase suena a inseguridad.",
          },
        ],
      },
      {
        label: "Ejemplos",
        title: "Antes y después: texto de IA humanizado",
        examples: [
          {
            label: "Correo",
            before:
              "Espero que este mensaje le encuentre bien. Me pongo en contacto con usted para informarle de que hemos tomado la decisión de posponer el calendario del proyecto. Agradecemos su comprensión y esperamos continuar con nuestra colaboración.",
            after:
              "Te escribo para avisarte de que hemos retrasado el calendario del proyecto. Gracias por la paciencia; seguimos con muchas ganas de trabajar juntos.",
          },
          {
            label: "Blog",
            before:
              "En el panorama digital actual, la gestión del tiempo se ha vuelto más importante que nunca. En este artículo, profundizaremos en cinco estrategias eficaces que pueden ayudarte a potenciar tu productividad.",
            after:
              "Gestionar el tiempo es más difícil que antes. Aquí tienes cinco estrategias que pueden ayudarte a sacar más trabajo adelante.",
          },
          {
            label: "Producto",
            before:
              "Esta innovadora botella de acero inoxidable combina a la perfección estilo y funcionalidad, manteniendo tus bebidas frías hasta 24 horas con un diseño robusto y antigoteo.",
            after: "Una botella de acero bonita que mantiene las bebidas frías hasta 24 horas. Y no gotea.",
          },
        ],
      },
      {
        label: "Usos",
        title: "Cuándo te ahorra trabajo un humanizador de IA",
        cards: [
          {
            title: "Correos y mensajes",
            text: "Pediste a un chatbot una respuesta educada y te devolvió un comunicado de empresa. Humanízalo y volverá a sonar a ti.",
          },
          {
            title: "Blogs y newsletters",
            text: "La IA es una buena ayudante para el esquema y una columnista mediocre. Humaniza la prosa para que tus lectores pasen del primer párrafo.",
          },
          {
            title: "Cartas de presentación",
            text: "Los reclutadores leen cientos de cartas que empiezan igual. Un borrador humanizado le da a la tuya una oportunidad, siempre que todo lo que diga sea verdad.",
          },
          {
            title: "Si escribes en otro idioma",
            text: "Si usaste IA porque el español no es tu lengua materna, el humanizador ayuda a que el texto suene natural y no traducido.",
          },
        ],
      },
      {
        label: "Con franqueza",
        title: "Una palabra sincera sobre los detectores de IA",
        paragraphs: [
          "Muchos humanizadores prometen textos «100 % indetectables». Nosotros no, por dos motivos. Primero, los detectores de IA no son fiables: se contradicen entre sí y marcan a menudo textos escritos por personas, sobre todo de quienes escriben en un idioma que no es el suyo. Una promesa basada en una medición tan frágil vale poco.",
          "Segundo, el objetivo no debería ser engañar a nadie. Si tu centro de estudios, tu cliente o tu empresa te pide que declares el uso de IA, decláralo. Nuestro humanizador sirve para que lo que escribes sea más claro y natural, y eso merece la pena tanto si alguien lo comprueba como si no.",
        ],
      },
    ],
    faqLabel: "Preguntas",
    faqTitle: "Preguntas frecuentes sobre el humanizador",
    faq: [
      {
        q: "¿Qué significa humanizar un texto de IA?",
        a: "Es reescribir un texto generado por una máquina para que se lea como lo diría una persona: frases variadas, palabras sencillas, nada de relleno y un tono adecuado para quien lo va a leer. Las ideas se mantienen; cambia la forma.",
      },
      {
        q: "¿El humanizador de texto es gratis?",
        a: "Sí. No hace falta registrarse, no hay periodo de prueba ni créditos que comprar. Puedes humanizar hasta 1.000 palabras por solicitud tantas veces como necesites.",
      },
      {
        q: "¿Pasará el texto los detectores de IA?",
        a: "No lo prometemos, y conviene desconfiar de quien lo haga. Los detectores no son fiables y a menudo se equivocan con textos humanos. Lo que sí prometemos es un texto que se lee con naturalidad.",
      },
      {
        q: "¿En qué se diferencia humanizar de parafrasear?",
        a: "Parafrasear cambia las palabras; humanizar las cambia con un objetivo concreto: que el texto suene menos mecánico. Si solo quieres otra redacción, prueba nuestro parafraseador.",
      },
      {
        q: "¿Funciona con textos en español?",
        a: "Sí. Pega tu texto en español y el resultado saldrá en español. También funciona en inglés, portugués, francés, alemán, indonesio y otros idiomas.",
      },
      {
        q: "¿Guardáis mis textos?",
        a: "No de forma legible ni vinculada a ti. Un resultado puede guardarse hasta siete días para que la misma petición responda al instante. Por favor, no pegues contraseñas ni datos sensibles.",
      },
    ],
    cta: {
      title: ["Que tus textos suenen a ", "ti", "."],
      text: "Pega tu borrador, pulsa Humanizar y léelo de nuevo. Gratis, siempre y sin registro.",
      button: "Humanizar mi texto",
    },
  },
  paraphraser: {
    title: "Parafraseador gratis para parafrasear textos",
    description:
      "Parafraseador online gratis: parafrasea textos en ocho estilos, de formal a sencillo, y reescribe cualquier texto en segundos. Sin registro y sin límites diarios.",
    eyebrow: "Parafraseador gratis · Ocho estilos",
    h1: ["El parafraseador gratis para ", "reescribir", " cualquier texto"],
    intro:
      "Pega una frase, un párrafo o una página entera, elige un estilo y obtén una nueva versión en segundos, con cada cambio resaltado. Sin cuenta, sin contador de créditos y sin instalar nada.",
    sections: [
      {
        label: "Por qué",
        title: "Parafrasear: decir lo mismo, pero mejor",
        paragraphs: [
          "El parafraseo es una de las habilidades más útiles de la escritura: expresar la misma idea con otras palabras. Sirve para evitar repeticiones, adaptar el tono a quien lee, ajustarse a un límite de palabras o explicar algo técnico a alguien que no lo es. Lo difícil es reescribir tus propios textos, porque ya sabes lo que querías decir y tus ojos saltan por encima de las partes torpes.",
          "Un parafraseador te da una segunda versión con la que comparar. A veces la usarás tal cual; más a menudo te quedarás con la mitad, recuperarás alguna palabra y acabarás con algo mejor que cualquiera de las dos. Para eso está: no para escribir por ti, sino para enseñarte otra forma de decir lo mismo.",
        ],
      },
      {
        label: "Estilos",
        title: "Ocho estilos para parafrasear textos",
        lede: "Cada estilo es una instrucción distinta. Elige el que encaje con quien va a leer el texto.",
        cards: [
          { title: "Estándar", text: "La opción de siempre: cambia palabras y estructura manteniendo una longitud y un tono parecidos." },
          { title: "Humanizar", text: "Para borradores que suenan a máquina: más ritmo, menos frases hechas y palabras más sencillas." },
          { title: "Fluido", text: "Corrige expresiones torpes, pequeños errores y repeticiones para que el texto se lea con naturalidad." },
          { title: "Formal", text: "Para correos de trabajo, solicitudes e informes: tono profesional, sin coloquialismos." },
          { title: "Sencillo", text: "Palabras cortas y frases breves para que cualquiera lo entienda a la primera." },
          { title: "Creativo", text: "Lenguaje más vivo y variado para blogs, redes sociales y descripciones de producto." },
          { title: "Acortar", text: "Reduce el texto entre un tercio y la mitad sin perder las ideas principales." },
          { title: "Ampliar", text: "Desarrolla notas o respuestas demasiado cortas, sin inventar datos nuevos." },
        ],
      },
      {
        label: "Ejemplos",
        title: "Ejemplos de parafraseo",
        examples: [
          {
            label: "Formal",
            before: "Oye, ¿me pasas los números antes del viernes? Los necesito para el informe.",
            after: "¿Podría enviarme las cifras antes del viernes? Las necesito para completar el informe.",
          },
          {
            label: "Sencillo",
            before:
              "La medicación deberá administrarse dos veces al día, siempre y cuando no se produzcan reacciones gastrointestinales adversas.",
            after: "Toma el medicamento dos veces al día, siempre que no te siente mal al estómago.",
          },
          {
            label: "Acortar",
            before:
              "En este momento no nos encontramos en disposición de poder ofrecerle el reembolso del artículo que usted ha adquirido.",
            after: "Ahora mismo no podemos reembolsarte la compra.",
          },
        ],
      },
      {
        label: "Consejos",
        title: "Cómo reescribir un texto y que quede mejor",
        cards: [
          {
            title: "Pega ideas completas",
            text: "Un párrafo entero da contexto y permite mantener la relación entre las frases. Una frase suelta tiende a quedar plana.",
          },
          {
            title: "Piensa en quien lee",
            text: "¿Escribes a tu jefa? Formal. ¿Explicas una factura a un cliente? Sencillo. El estilo depende del lector, no del borrador.",
          },
          {
            title: "Pruébalo varias veces",
            text: "Cada versión sale un poco distinta. Si la primera casi te convence, vuelve a pulsar o prueba el estilo de al lado.",
          },
          {
            title: "Revisa nombres y cifras",
            text: "La herramienta tiene instrucciones de no tocarlos, y casi nunca lo hace, pero quien envía el texto eres tú.",
          },
        ],
      },
      {
        label: "Uso honesto",
        title: "Parafrasear sin plagiar",
        paragraphs: [
          "Una frase reescrita sigue siendo la idea de alguien. Si la idea no es tuya, necesita una cita, por muy distintas que sean las palabras. Pasar el trabajo de otra persona por un parafraseador y entregarlo como propio es plagio, y para eso no está esta web. Úsala con tus propios textos: tus borradores, tus apuntes, tus correos.",
        ],
      },
    ],
    faqLabel: "Preguntas",
    faqTitle: "Preguntas frecuentes sobre el parafraseador",
    faq: [
      {
        q: "¿El parafraseador es gratis?",
        a: "Sí, totalmente. Sin registro ni créditos diarios. Cada solicitud admite hasta 1.000 palabras.",
      },
      {
        q: "¿Qué es el parafraseo?",
        a: "Parafrasear es expresar con otras palabras lo que dice un texto, manteniendo su sentido. Es útil para evitar repeticiones, cambiar el tono o resumir.",
      },
      {
        q: "¿Cambiará el significado de mi texto?",
        a: "La herramienta tiene instrucciones de mantener el sentido, los datos, los nombres y las cifras, y lo hace bien. Aun así, revisa el resultado: las palabras cambiadas aparecen resaltadas.",
      },
      {
        q: "¿Puedo parafrasear textos en otros idiomas?",
        a: "Sí. Funciona en español, inglés, portugués, francés, alemán, indonesio y más. También puedes elegir otro idioma de salida para traducir y parafrasear a la vez.",
      },
      {
        q: "¿Puedo usarlo para trabajos de clase?",
        a: "Con tus propios textos, sí, si tu centro permite herramientas de escritura. Reescribir el trabajo de otra persona y presentarlo como tuyo es plagio.",
      },
    ],
    cta: {
      title: ["Tu próximo borrador está a ", "un clic", "."],
      text: "Pega tu texto, elige un estilo y descubre otra forma de decirlo. Gratis, siempre.",
      button: "Parafrasear ahora",
    },
  },
};
