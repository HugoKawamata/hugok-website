
export const home = {
  meHeading: {
    en: "Me",
    ja: "僕"
  },
  meContent: {
    en: `I'm a senior full stack software developer living in Brisbane, Australia. I have a ton of
      experience in web development, and I have a lot of interest in other areas as well, just as
      language acquisition, tabletop game design, and philosophy."`,
    ja: `オーストラリアのブリスベン市に住んでいるシニアフルスタックエンジニアです。Web developmentの経験がたっぷり
      あって、他の分野に興味もあります。それは、第二言語習得や、テーブルゲームデザインや、哲学を含まれます。`
  },
  workHeading: {
    en: "My Work",
    ja: "僕の勤務"
  },
  workContent: {
    en: `I've been working at Tanda, a time and attendance software company, since 2018. The tech
      I use on a daily basis includes React Native, React, Ruby on Rails, and GraphQL.`,
    ja: `僕はTandaという勤怠管理システム会社に2018年から勤めます。日常のプログラム言語はReact NativeやReactや
      Ruby on RailsやGraphQLです。`
  },
  gamesHeading: {
    en: "Game Design",
    ja: "テーブルゲームデザイン"
  },
  gamesContent: {
    en: `As well as software, I also have an interest in tabletop game design. In 2019, I
      published my first card game, Hierarchy, with Button Shy Games.`,
    ja: `ソフトに追加で、テーブルゲームデザインに興味があります。2019年でButton Shy Gamesによって
      僕がHierarchyという初めてのゲームを発表しました。`
  },
  japaneseHeading: {
    en: "Japanese",
    ja: "日本語"
  },
  japaneseContent: {
    en: `I'm half Japanese, but I never really learned how to speak Japanese growing up. In 2019,
      I started teaching myself Japanese with the goal of having a conversation when I went on
      holiday there in January 2020, and it was a great success! The experience of frantically
      teaching myself conversational Japanese inspired me to start work on a language learning
      app, Issei.`,
    ja: `僕はハーフだけど子供の頃であまりお父さんに教えられないでした。でも、2019年6月ぐらいに日本語を自習し始めました
      目的は2020年1月に旅行に日本に行く時に会話できるようになりますということで、大成功でした！激しく自分に日本語を
      教える経験に僕は動かされて、「一斉」という言語習得アプリを作りました。`
  }
}

export const projects = {
  projects: {
    en: "Projects",
    ja: "プロジェクト"
  },
  viewMyGithub: {
    en: "View My Github",
    ja: "僕のギットハブはこちら"
  },
  forValueTitle: {
    en: "For Value: MTG Price Lookup",
    ja: "For Value: MTGカード値段検索アプリ"
  },
  forValueDesc: {
    en: "A Facebook chatbot that allows users to quickly query MTG card prices.",
    ja: "ユーザにマジック・ザ・ギャザリングのカードの値段を早速に検索させるフェースブックチャットボット。"
  },
  isseiTitle: {
    en: "Issei: Holistic Japanese Learning",
    ja: "一斉: ホリスティックな日本語習得"
  },
  isseiDesc: {
    en: "An app that teaches Japanese holistically, with an emphasis on context",
    ja: "仮名と単語と文法を一斉に、コンテキストを大事にして日本語を教えるReactアプリ。"
  },
  inLieuTitle: {
    en: "InLieu",
    ja: "InLieu"
  },
  inLieuDesc: {
    en: "A React web app which allows users to rate and review public toilets.",
    ja: "リアクトに書かれた公衆トイレ見つけさせるアプリ。"
  },
  bonsaiDesignTitle: {
    en: "Bonsai Design",
    ja: "盆栽デザイン"
  },
  bonsaiDesignDesc: {
    en: "A pure html/css website to promote my web design business.",
    ja: "自分のウェブデザイン会社をのためにHTML/CSSだけで書かれたウェブサイト。"
  },
  seinQuoteTitle: {
    en: "SeinQuote",
    ja: "SeinQuote"
  },
  seinQuoteDesc: {
    en: "A command line python program which searches for Seinfeld episodes based on quotes.",
    ja: "「となりのサインフェルド」のエピソードをセリフで検索できるパイソンに書かれたプログラム。"
  },
  syncUQTitle: {
    en: "SyncUQ",
    ja: "SyncUQ"
  },
  syncUQDesc: {
    en: `A full stack web app (Postgres/Flask/Elm) which lets UQ students know when their
      friends are free at uni.`,
    ja: "クイーンズランド大学生に友達が暇の時を手伝えるフルスタックウェブアプリ。"
  }
}

export const personal = {
  personal: {
    en: "Personal",
    ja: "個人的な事"
  },
  hierarchyTitle: {
    en: "Hierarchy",
    ja: "Hierarchy"
  },
  hierarchyBody: {
    en: `In 2019, I published my first tabletop game, Hierarchy. It's an abstract strategy
      game with only 14 cards and open information. You and your opponent take turns playing
      cards with a higher rank than the last, until one player can't play a card.`,
    ja: `2019年にHierarchyという僕の初めて発表したテーブルゲームを発表しました。14枚カードだけが含まれて、
      公開の手札があるアブストラクトゲームです。`
  },
  magicTitle: {
    en: "Magic: the Gathering",
    ja: "マジック・ザ・ギャザリング"
  },
  magicBody: {
    en: `Since childhood I've loved card games of all kinds, and I still love playing Magic.
      I find the social aspect really rewarding, and many of my closest friends today I met
      through playing Magic. I mainly play EDH, but I've also enjoyed standard and drafting.
      My EDH decks are currently:`,
    ja: `子供の頃からずっと全種類のカードゲームが好きでまだマジック・ザ・をやるのが好きです。マジックのせいで
      知り合った友達が多くて親しいから社会の側面が大事だと思います。主要に統率者というフォーマットをやるが、
      さらにスタンダードもドラフトもたまにやります。`
  }
}

export default {
  ...home,
  ...projects,
}