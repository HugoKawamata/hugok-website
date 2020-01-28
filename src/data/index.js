
const albumData = [
  {
    name: "Emotion",
    artist: "Carly Rae Jepsen",
    image: "../../public/images/albums/emotion.png"
  },
  {
    name: "Landmark",
    artist: "Hippo Campus",
    image: "../../public/images/albums/landmark.png"
  },
  {
    name: "Headroom",
    artist: "Men I Trust",
    image: "../../public/images/albums/headroom.png"
  },
  {
    name: "Migration",
    artist: "Bonobo",
    image: "../../public/images/albums/migration.png"
  },
  {
    name: "SATURATION II",
    artist: "BROCKHAMPTON",
    image: "../../public/images/albums/saturationii.png"
  },
  {
    name: "Love Songs for Other People",
    artist: "Cafuné",
    image: "../../public/images/albums/lovesongsforotherpeople.png"
  },
  {
    name: "Cinema",
    artist: "The Cat Empire",
    image: "../../public/images/albums/cinema.png"
  },
  {
    name: "Hollow Knight",
    artist: "Christopher Larkin",
    image: "../../public/images/albums/hollowknight.png"
  },
  {
    name: "Moth",
    artist: "Chairlift",
    image: "../../public/images/albums/moth.png"
  },
  {
    name: "Slice of Paradise",
    artist: "Cool Company",
    image: "../../public/images/albums/sliceofparadise.png"
  },
  {
    name: "The Much Much How How and I",
    artist: "Cosmo Sheldrake",
    image: "../../public/images/albums/themuchmuchhowhowandi.png"
  },
  {
    name: "Peace or Power",
    artist: "Deacon The Villain",
    image: "../../public/images/albums/peaceorpower.png"
  },
  {
    name: "Down to Earth",
    artist: "Flight Facilities",
    image: "../../public/images/albums/downtoearth.png"
  },
  {
    name: "How To Be A Human Being",
    artist: "Glass Animals",
    image: "../../public/images/albums/howtobeahumanbeing.png"
  },
  {
    name: "Plastic Beach",
    artist: "Gorillaz",
    image: "../../public/images/albums/plasticbeach.png"
  },
  {
    name: "Now, Not Yet",
    artist: "half·alive",
    image: "../../public/images/albums/nownotyet.png"
  },
  {
    name: "Dark Night Sweet Light",
    artist: "Hermitude",
    image: "../../public/images/albums/darknightsweetlight.png"
  },
  {
    name: "Hyperstory",
    artist: "hyperstory",
    image: "../../public/images/albums/hyperstory.png"
  },
  {
    name: "Hive Mind",
    artist: "The Internet",
    image: "../../public/images/albums/hivemind.png"
  },
  {
    name: "Vibras",
    artist: "J. Balvin",
    image: "../../public/images/albums/vibras.png"
  },
  {
    name: "Now, More Than Ever",
    artist: "Jim Guthrie",
    image: "../../public/images/albums/nowmorethanever.png"
  },
  {
    name: "Sword and Sworcery",
    artist: "Jim Guthrie",
    image: "../../public/images/albums/swordandsworcery.png"
  },
  {
    name: "Jungle",
    artist: "Jungle",
    image: "../../public/images/albums/jungle.png"
  },
  {
    name: "Quiet Ferocity",
    artist: "The Jungle Giants",
    image: "../../public/images/albums/quietferocity.png"
  },
  {
    name: "Bonito Generation",
    artist: "Kero Kero Bonito",
    image: "../../public/images/albums/bonitogeneration.png"
  },
  {
    name: "Kero & Azure",
    artist: "Kero One",
    image: "../../public/images/albums/keroandazure.png"
  },
  {
    name: "Reflection Eternal",
    artist: "Kero Uno",
    image: "../../public/images/albums/reflectioneternal.png"
  },
  {
    name: "KIDS SEE GHOSTS",
    artist: "KIDS SEE GHOSTS",
    image: "../../public/images/albums/kidsseeghosts.png"
  },
  {
    name: "Nonagon Infinity",
    artist: "King Gizzard & The Lizard Wizard",
    image: "../../public/images/albums/nonagoninfinity.png"
  },
  {
    name: "Yumeno Garden",
    artist: "Last Dinosaurs",
    image: "../../public/images/albums/yumenogarden.png"
  },
  {
    name: "1749",
    artist: "Lemaitre",
    image: "../../public/images/albums/1749.png"
  },
  {
    name: "Hippie Castle EP",
    artist: "Magic City Hippies",
    image: "../../public/images/albums/hippiecastleep.png"
  },
  {
    name: "Oncle Jazz",
    artist: "Men I Trust",
    image: "../../public/images/albums/onclejazz.png"
  },
  {
    name: "Mind the Moon",
    artist: "Milky Chance",
    image: "../../public/images/albums/mindthemoon.png"
  },
  {
    name: "Sadnecessary",
    artist: "Milky Chance",
    image: "../../public/images/albums/sadnecessary.png"
  },
  {
    name: "かけがえのないもの",
    artist: "MONO NO AWARE",
    image: "../../public/images/albums/kakegaenonaimono.png"
  },
  {
    name: "Mother Earth's Plantasia",
    artist: "Mort Garson",
    image: "../../public/images/albums/motherearthsplantasia.png"
  },
  {
    name: "Oh No",
    artist: "OK Go",
    image: "../../public/images/albums/ohno.png"
  },
  {
    name: "Changa",
    artist: "PNAU",
    image: "../../public/images/albums/changa.png"
  },
  {
    name: "Not a Trampoline",
    artist: "Rob Cantor",
    image: "../../public/images/albums/notatrampoline.png"
  },
  {
    name: "El Mal Querer",
    artist: "ROSALIA",
    image: "../../public/images/albums/elmalquerer.png"
  },
  {
    name: "Bloom",
    artist: "RUFUS DU SOL",
    image: "../../public/images/albums/bloom.png"
  },
  {
    name: "Stolen Season",
    artist: "S. J. Tucker",
    image: "../../public/images/albums/stolenseason.png"
  },
  {
    name: "Shakey Graves And The Horse He Rode In On",
    artist: "Shakey Graves",
    image: "../../public/images/albums/shakeygraves.png"
  },
  {
    name: "The Arcade Dream",
    artist: "Shirobon",
    image: "../../public/images/albums/thearcadedream.png"
  },
  {
    name: "Music from Braid",
    artist: "Sieber, Kammen, Fulton and Schatz",
    image: "../../public/images/albums/musicfrombraid.png"
  },
  {
    name: "Alternate Worlds",
    artist: "Son Lux",
    image: "../../public/images/albums/alternateworlds.png"
  },
  {
    name: "The Jitterbug EP",
    artist: "Stepcat",
    image: "../../public/images/albums/thejitterbugep.png"
  },
  {
    name: "The Hands That Thieve",
    artist: "Streetlight Manifesto",
    image: "../../public/images/albums/thehandsthatthieve.png"
  },
  {
    name: "Flow State",
    artist: "Tash Sultana",
    image: "../../public/images/albums/flowstate.png"
  },
  {
    name: "Whack World",
    artist: "Tierra Whack",
    image: "../../public/images/albums/whackworld.png"
  },
  {
    name: "Dusty Rainbow from the Dark",
    artist: "Wax Tailor",
    image: "../../public/images/albums/dustyrainbow.png"
  },
  {
    name: "Palo Santo",
    artist: "Years & Years",
    image: "../../public/images/albums/palosanto.png"
  },
  {
    name: "Nice Snakes",
    artist: "Yotam Perel",
    image: "../../public/images/albums/nicesnakes.png"
  },
  {
    name: "An Awesome Wave",
    artist: "Alt-J",
    image: "../../public/images/albums/anawesomewave.png"
  },
  {
    name: "Are You Serious",
    artist: "Andrew Bird",
    image: "../../public/images/albums/areyouserious.png"
  },
  {
    name: "Wildflower",
    artist: "The Avalanches",
    image: "../../public/images/albums/wildflower.png"
  },
  {
    name: "Dedicated",
    artist: "Carly Rae Jensen",
    image: "../../public/images/albums/dedicated.png"
  },
  {
    name: "Lighght",
    artist: "Kishi Bashi",
    image: "../../public/images/albums/lighght.png"
  },
  {
    name: "String Quartet Live!",
    artist: "Kishi Bashi",
    image: "../../public/images/albums/stringquartetlive.png"
  },
  {
    name: "Art Angels",
    artist: "Grimes",
    image: "../../public/images/albums/artangels.png"
  },
  {
    name: "good kid m.A.A.d city",
    artist: "Kendrick Lamar",
    image: "../../public/images/albums/goodkidmaadcity.png"
  },
  {
    name: "On And On",
    artist: "Jack Johnson",
    image: "../../public/images/albums/onandon.png"
  },
  {
    name: "Random Access Memories",
    artist: "Daft Punk",
    image: "../../public/images/albums/randomaccessmemories.png"
  },
  {
    name: "because the internet",
    artist: "Childish Gambino",
    image: "../../public/images/albums/becausetheinternet.png"
  },
  {
    name: "Geography",
    artist: "Tom Misch",
    image: "../../public/images/albums/geography.png"
  },
  {
    name: "空中キャンプ",
    artist: "Fishmans",
    image: "../../public/images/albums/kuuchuucamp.png"
  },
  {
    name: "Songs About Jane",
    artist: "Maroon 5",
    image: "../../public/images/albums/songsaboutjane.png"
  },
]
