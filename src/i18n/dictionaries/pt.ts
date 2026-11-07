import type { Dictionary } from "../types";

/** Portuguese (Brazil). Keywords: humanizar texto, humanizador de texto; reescrever texto, parafrasear, parafraseador. */
export const pt: Dictionary = {
  locale: "pt",
  tool: {
    numberLocale: "pt-BR",
    toolLabel: "Ferramenta de paráfrase",
    styleLabel: "Estilo",
    outputLanguage: "Idioma do resultado",
    sameAsInput: "Igual ao texto",
    yourText: "Seu texto",
    rewrite: "Resultado",
    inputLabel: "Texto para reescrever",
    placeholder: "Cole ou digite seu texto aqui e clique em {action}.",
    wordCount: "{count} / {max} palavras",
    outputWords: "{count} palavras",
    edit: "Editar",
    clear: "Limpar",
    clickToEdit: "Clique para editar",
    rewriting: "Reescrevendo…",
    outputPlaceholder: "Seu texto reescrito vai aparecer aqui.",
    showChanges: "Mostrar mudanças",
    copy: "Copiar",
    copied: "Copiado!",
    tipBefore: "Dica: pressione",
    ctrlKey: "Ctrl",
    tipAfter: "para {action}.",
    overLimit: "Reduza seu texto para {max} palavras ou menos.",
    actionHumanize: "Humanizar",
    actionParaphrase: "Reescrever",
    busyHumanize: "Humanizando…",
    busyParaphrase: "Reescrevendo…",
    modes: {
      standard: { label: "Padrão", hint: "Outras palavras, mesmo sentido" },
      humanize: { label: "Humanizar", hint: "Natural, com cara de gente" },
      fluent: { label: "Fluente", hint: "Natural e sem tropeços" },
      formal: { label: "Formal", hint: "Tom profissional" },
      simple: { label: "Simples", hint: "Fácil de ler" },
      creative: { label: "Criativo", hint: "Vivo e expressivo" },
      shorten: { label: "Encurtar", hint: "Menos palavras" },
      expand: { label: "Expandir", hint: "Mais detalhes" },
    },
    errors: {
      generic: "Algo deu errado. Tente de novo em instantes.",
      invalid: "Solicitação inválida.",
      empty: "Digite ou cole um texto para reescrever.",
      tooManyWords: "O texto pode ter no máximo {max} palavras.",
      tooManyChars: "O texto pode ter no máximo 12.000 caracteres.",
      tooLarge: "O texto é longo demais.",
      unknownMode: "Estilo desconhecido.",
      unknownLanguage: "Idioma desconhecido.",
      rateLimited: "Você enviou muitas solicitações em pouco tempo. Aguarde alguns minutos e tente de novo.",
      botCheck: "Não conseguimos verificar seu navegador. Atualize a página e tente de novo.",
      highDemand: "Estamos com muita procura agora. Tente de novo em alguns minutos.",
      refusal: "Não é possível reescrever este texto. Tente outro.",
      truncated: "O resultado foi cortado. Tente um texto mais curto.",
      network: "Erro de conexão. Verifique sua internet e tente de novo.",
      copyFailed: "Não foi possível copiar automaticamente. Selecione o texto e copie manualmente.",
    },
  },
  chrome: {
    navHumanizer: "Humanizador de IA",
    navParaphraser: "Reescrever texto",
    cta: "Humanizar grátis",
    themeToggle: "Alternar modo escuro",
    languageMenu: "Idioma",
    footerTagline:
      "OG de original. Um humanizador de IA e um parafraseador gratuitos para seus textos soarem como você. Sem cadastro e sem créditos.",
    footerTools: "Ferramentas",
    footerMore: "Informações",
    about: "Sobre nós",
    privacy: "Privacidade",
    terms: "Termos de uso",
    contact: "Contato",
    footerNote: "Use com seus próprios textos e sempre revise o resultado antes de enviar.",
    adLabel: "Publicidade",
    facts: ["Sem cadastro", "Até 1.000 palavras por vez", "Oito estilos de escrita", "Doze idiomas"],
    before: "Antes",
    after: "Depois",
    otherLanguages: "Outros idiomas",
    englishOnlyNote: "Estas páginas estão em inglês.",
  },
  home: {
    title: "Humanizar texto de IA grátis | Humanizador",
    description:
      "Humanize textos de IA de graça em segundos. Nosso humanizador de texto transforma rascunhos robóticos do ChatGPT em uma escrita natural, com a sua cara. Sem cadastro.",
    eyebrow: "Humanizador de IA grátis · Sem cadastro",
    h1: ["Humanizar texto de IA para soar como ", "você", ""],
    intro:
      "Cole um rascunho que parece ter saído de uma linha de montagem. O OG Humanizer muda o ritmo, corta o enchimento e troca frases genéricas por uma linguagem clara e concreta, sem mexer nos seus fatos.",
    sections: [
      {
        label: "A ideia",
        title: "O que significa humanizar um texto de IA",
        lede: "As ferramentas de IA escrevem com uma fluência impressionante, e o problema está justamente aí: as frases estão corretas, a estrutura é impecável e, mesmo assim, o resultado soa vazio, como um discurso escrito para ninguém.",
        paragraphs: [
          "Humanizar um texto de IA é fechar essa distância. É pegar um rascunho tecnicamente correto e fazer com que pareça escrito por alguém com opinião própria: alguém que sabe quando ser breve, quando explicar e quando uma palavra simples diz mais do que três rebuscadas. O conteúdo não muda; muda a forma de contar.",
          "É para isso que serve o nosso humanizador de texto. Escolha o estilo Humanizar, cole o rascunho e, em poucos segundos, você terá uma versão com ritmo mais variado, menos frases prontas e bem menos enrolação. Depois, faça o que qualquer bom editor faria: fique com o que funciona, recupere o que você preferia e dê a palavra final.",
        ],
      },
      {
        label: "O que muda",
        title: "Seis vícios da IA que o humanizador corrige",
        lede: "Textos gerados por IA costumam ter os mesmos tiques. Nenhum é grave sozinho, mas juntos entregam quem escreveu.",
        cards: [
          {
            title: "Introduções de enchimento",
            text: "“No mundo atual…”, “Vale ressaltar que…”. Frases que esquentam o motor em vez de dizer alguma coisa.",
          },
          {
            title: "Ritmo de metrônomo",
            text: "Frases quase do mesmo tamanho, todas certinhas. A escrita de verdade acelera e desacelera. Às vezes se alonga. Às vezes para.",
          },
          {
            title: "Vocabulário inflado",
            text: "Potencializar, alavancar, sinergia, fundamental, crucial. Parecem importantes e dizem pouco. Uma pessoa costuma escolher a palavra mais simples.",
          },
          {
            title: "Listas de três no automático",
            text: "Eficaz, eficiente e envolvente. Quando toda ideia chega em trio, o texto parece montado em série.",
          },
          {
            title: "O resumo obrigatório",
            text: "“Em conclusão…” seguido de tudo o que o leitor acabou de ler. A maioria dos textos curtos fica melhor sem isso.",
          },
          {
            title: "Ressalvas por toda parte",
            text: "“Pode potencialmente contribuir para melhorar…”. Um pouco de cautela é honesto; cautela em toda frase soa como insegurança.",
          },
        ],
      },
      {
        label: "Exemplos",
        title: "Antes e depois: texto de IA humanizado",
        examples: [
          {
            label: "E-mail",
            before:
              "Espero que este e-mail o encontre bem. Venho por meio deste informar que tomamos a decisão de adiar o cronograma do projeto. Agradecemos a compreensão e esperamos dar continuidade à nossa parceria.",
            after:
              "Passando para avisar que adiamos o cronograma do projeto. Obrigado pela paciência; seguimos animados para trabalhar juntos.",
          },
          {
            label: "Blog",
            before:
              "No cenário digital atual, a gestão do tempo se tornou mais importante do que nunca. Neste artigo, vamos explorar cinco estratégias eficazes que podem ajudar você a potencializar sua produtividade.",
            after: "Gerenciar o tempo está mais difícil do que antes. Aqui vão cinco estratégias que podem ajudar você a render mais.",
          },
          {
            label: "Produto",
            before:
              "Esta inovadora garrafa de aço inoxidável combina perfeitamente estilo e funcionalidade, mantendo suas bebidas geladas por até 24 horas com um design robusto e à prova de vazamentos.",
            after: "Uma garrafa de aço bonita que mantém a bebida gelada por até 24 horas. E não vaza.",
          },
        ],
      },
      {
        label: "Usos",
        title: "Quando um humanizador de IA facilita a sua vida",
        cards: [
          {
            title: "E-mails e mensagens",
            text: "Você pediu uma resposta educada a um chatbot e recebeu um comunicado corporativo. Humanize e ela volta a soar como você.",
          },
          {
            title: "Blogs e newsletters",
            text: "A IA é uma boa assistente para o roteiro e uma colunista mediana. Humanize o texto para o leitor passar do primeiro parágrafo.",
          },
          {
            title: "Cartas de apresentação",
            text: "Recrutadores leem centenas de cartas que começam igual. Um rascunho humanizado dá uma chance à sua, desde que tudo nele seja verdade.",
          },
          {
            title: "Escrevendo em outro idioma",
            text: "Se você usou IA porque o português não é sua primeira língua, o humanizador ajuda o texto a soar natural, e não traduzido.",
          },
        ],
      },
      {
        label: "Sem rodeios",
        title: "Uma palavra sincera sobre detectores de IA",
        paragraphs: [
          "Muitos humanizadores prometem textos “100% indetectáveis”. Nós não, por dois motivos. Primeiro, detectores de IA não são confiáveis: eles discordam entre si e com frequência acusam textos escritos por pessoas, principalmente de quem escreve em outro idioma. Uma promessa apoiada em uma medição tão frágil vale pouco.",
          "Segundo, o objetivo não deveria ser enganar ninguém. Se sua faculdade, seu cliente ou sua empresa pede que você declare o uso de IA, declare. Nosso humanizador existe para deixar o que você escreve mais claro e natural, e isso vale a pena com ou sem alguém conferindo.",
        ],
      },
    ],
    faqLabel: "Perguntas",
    faqTitle: "Perguntas frequentes sobre o humanizador",
    faq: [
      {
        q: "O que é humanizar texto de IA?",
        a: "É reescrever um texto gerado por máquina para que ele soe como uma pessoa falaria: frases variadas, palavras simples, sem enchimento e no tom certo para quem vai ler. As ideias continuam; muda a forma.",
      },
      {
        q: "O humanizador de texto é grátis?",
        a: "Sim. Não precisa de cadastro, não tem período de teste nem créditos para comprar. Você pode humanizar até 1.000 palavras por vez, quantas vezes precisar.",
      },
      {
        q: "O texto vai passar nos detectores de IA?",
        a: "Não prometemos isso, e é bom desconfiar de quem promete. Detectores não são confiáveis e erram com frequência em textos humanos. O que prometemos é um texto que se lê com naturalidade.",
      },
      {
        q: "Qual a diferença entre humanizar e reescrever?",
        a: "Reescrever muda as palavras; humanizar muda com um objetivo: deixar o texto menos mecânico. Se você só quer outra redação, use nossa ferramenta para reescrever texto.",
      },
      {
        q: "Funciona com textos em português?",
        a: "Sim. Cole o texto em português e o resultado sai em português. Também funciona em inglês, espanhol, francês, alemão, indonésio e outros idiomas.",
      },
      {
        q: "Vocês guardam meus textos?",
        a: "Não de forma legível nem ligada a você. Um resultado pode ficar salvo por até sete dias para que o mesmo pedido responda na hora. Não cole senhas nem dados sensíveis.",
      },
    ],
    cta: {
      title: ["Faça seu texto soar como ", "você", "."],
      text: "Cole o rascunho, clique em Humanizar e leia de novo. Grátis, sempre, sem cadastro.",
      button: "Humanizar meu texto",
    },
  },
  paraphraser: {
    title: "Reescrever texto grátis: parafraseador online",
    description:
      "Reescreva textos grátis em segundos. Parafrasear texto online em oito estilos, do formal ao simples, com as mudanças destacadas. Sem cadastro e sem limite diário.",
    eyebrow: "Parafraseador grátis · Oito estilos",
    h1: ["", "Reescrever texto", " grátis, em segundos"],
    intro:
      "Cole uma frase, um parágrafo ou uma página inteira, escolha um estilo e receba uma nova versão em segundos, com cada mudança destacada. Sem conta, sem contador de créditos e sem instalar nada.",
    sections: [
      {
        label: "Por quê",
        title: "Parafrasear: dizer a mesma coisa, só que melhor",
        paragraphs: [
          "Parafrasear é uma das habilidades mais úteis da escrita: expressar a mesma ideia com outras palavras. Serve para evitar repetições, ajustar o tom a quem vai ler, caber em um limite de palavras ou explicar algo técnico para quem não é da área. O difícil é reescrever o próprio texto, porque você já sabe o que quis dizer e seus olhos pulam as partes travadas.",
          "Um parafraseador entrega uma segunda versão para você comparar. Às vezes você vai usá-la como está; mais vezes vai ficar com metade, voltar uma palavra e terminar com algo melhor do que as duas. É para isso que ele serve: não para escrever por você, mas para mostrar outra forma de dizer a mesma coisa.",
        ],
      },
      {
        label: "Estilos",
        title: "Oito estilos para reformular texto",
        lede: "Cada estilo é uma instrução diferente. Escolha o que combina com quem vai ler.",
        cards: [
          { title: "Padrão", text: "A opção de sempre: troca palavras e estrutura mantendo tamanho e tom parecidos." },
          { title: "Humanizar", text: "Para rascunhos com cara de máquina: mais ritmo, menos frases prontas e palavras mais simples." },
          { title: "Fluente", text: "Corrige frases travadas, pequenos erros e repetições para o texto fluir." },
          { title: "Formal", text: "Para e-mails de trabalho, solicitações e relatórios: tom profissional, sem gírias." },
          { title: "Simples", text: "Palavras curtas e frases breves para qualquer pessoa entender de primeira." },
          { title: "Criativo", text: "Linguagem mais viva e variada para blogs, redes sociais e descrições de produto." },
          { title: "Encurtar", text: "Reduz o texto entre um terço e metade sem perder as ideias principais." },
          { title: "Expandir", text: "Desenvolve anotações ou respostas curtas demais, sem inventar dados novos." },
        ],
      },
      {
        label: "Exemplos",
        title: "Exemplos de paráfrase",
        examples: [
          {
            label: "Formal",
            before: "E aí, me manda os números até sexta? Preciso pro relatório.",
            after: "Você poderia me enviar os números até sexta-feira? Preciso deles para concluir o relatório.",
          },
          {
            label: "Simples",
            before:
              "O medicamento deverá ser administrado duas vezes ao dia, desde que não ocorram reações gastrointestinais adversas.",
            after: "Tome o remédio duas vezes por dia, desde que ele não faça mal ao estômago.",
          },
          {
            label: "Encurtar",
            before:
              "No presente momento, não nos encontramos em condições de oferecer o reembolso referente ao produto adquirido por você.",
            after: "No momento, não podemos reembolsar sua compra.",
          },
        ],
      },
      {
        label: "Dicas",
        title: "Como reescrever um texto e deixá-lo melhor",
        cards: [
          {
            title: "Cole ideias completas",
            text: "Um parágrafo inteiro dá contexto e mantém a ligação entre as frases. Uma frase solta costuma sair sem graça.",
          },
          {
            title: "Pense em quem vai ler",
            text: "Escrevendo para a chefe? Formal. Explicando uma conta para um cliente? Simples. O estilo depende do leitor.",
          },
          {
            title: "Tente mais de uma vez",
            text: "Cada versão sai um pouco diferente. Se a primeira quase convenceu, clique de novo ou teste o estilo ao lado.",
          },
          {
            title: "Confira nomes e números",
            text: "A ferramenta é instruída a não mexer neles, e quase nunca mexe, mas quem envia o texto é você.",
          },
        ],
      },
      {
        label: "Uso honesto",
        title: "Parafrasear sem plagiar",
        paragraphs: [
          "Uma frase reescrita continua sendo a ideia de alguém. Se a ideia não é sua, ela precisa de citação, por mais diferentes que sejam as palavras. Passar o trabalho de outra pessoa por um parafraseador e entregar como seu é plágio, e este site não existe para isso. Use com seus próprios textos: rascunhos, anotações e e-mails.",
        ],
      },
    ],
    faqLabel: "Perguntas",
    faqTitle: "Perguntas frequentes sobre a ferramenta",
    faq: [
      {
        q: "A ferramenta para reescrever texto é grátis?",
        a: "Sim, totalmente. Sem cadastro e sem créditos diários. Cada pedido aceita até 1.000 palavras.",
      },
      {
        q: "O que é parafrasear um texto?",
        a: "É dizer com outras palavras o que um texto diz, mantendo o sentido. Ajuda a evitar repetições, mudar o tom ou resumir.",
      },
      {
        q: "O sentido do meu texto vai mudar?",
        a: "A ferramenta é instruída a manter o sentido, os fatos, os nomes e os números, e faz isso bem. Mesmo assim, revise: as palavras alteradas aparecem destacadas.",
      },
      {
        q: "Dá para parafrasear em outros idiomas?",
        a: "Sim. Funciona em português, inglês, espanhol, francês, alemão, indonésio e outros. Você também pode escolher outro idioma de saída para traduzir e reescrever de uma vez.",
      },
      {
        q: "Posso usar em trabalhos da faculdade?",
        a: "Com seus próprios textos, sim, se a sua instituição permitir ferramentas de escrita. Reescrever o trabalho de outra pessoa e apresentar como seu é plágio.",
      },
    ],
    cta: {
      title: ["Seu próximo rascunho está a ", "um clique", "."],
      text: "Cole seu texto, escolha um estilo e veja outra forma de dizer a mesma coisa. Grátis, sempre.",
      button: "Reescrever agora",
    },
  },
};
