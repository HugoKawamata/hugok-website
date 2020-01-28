import React from 'react';
import Screen from '../components/Screen';
import { myLifeIntro, tandaMain, boardGamesMain } from '../copy'

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
