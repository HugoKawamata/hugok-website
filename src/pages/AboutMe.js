import React from 'react';
import Screen from '../components/Screen';
import { myLifeIntro, tandaMain, boardGamesMain } from '../copy'

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
    name: "",
    artist: "KIDS SEE GHOSTS",
    image: "../../public/images/albums/kidsseeghosts.png"
  },
]

export default function AboutMe() {
  return (
    <Screen>
      <Header title="My Life" subtitle="Welcome to my twisted mind" />
      <CenterFloatingText>{myLifeIntro}</CenterFloatingText>

      <Collapsible title="My Job">
        <Split imageOnSide="right" copy={tandaMain} image={'../../public/images/tandaSplit.png'} />
        {/* insert info about Tanda here */}
      </Collapsible>
      <Collapsible title="Board Games">
        <Split imageOnSide="left" copy={boardGamesMain} image={'../../public/images/myBoardGamesSplit.png'} />
        {/* insert info about the board games I like here */}
        {/* "If you want to know more about my own game design, check out my projects" */}
      </Collapsible>
      <Collapsible title="Super Smash Bros. Ultimate">
        {/* insert info about SSBU here */}
        {/* maybe put nice transparent PNGs of my mains and secondaries here */}
      </Collapsible>
      <Collapsible title="Magic: the Gathering">
        {/* insert info about MTG here */}
        {/* migrate the EDH deck ifo from the old site to here */}
        <MagicDecks />
      </Collapsible>
      <Collapsible title="Music">
        {/* insert info about music here */}
        {/* add cool album art tesselation effect */}
        <Albums data={albumData} />
      </Collapsible>
      <Collapsible title="SCP">
        {/* insert info about MTG here */}
        {/* migrate the EDH deck ifo from the old site to here */}
      </Collapsible>
    </Screen>
  )
}
