/* @flow */
import React from "react";
import { useSelector } from "react-redux";
import i18n from "./i18n";

function Quote(props) {
  return (
    <a href={props.link}>
      <div className="quote-wrapper">
        <p className="quote">"{props.quote}"</p>
        <p className="quote-person">- {props.person}</p>
      </div>
    </a>
  );
}

function MagicCell(props) {
  return (
    <div className="magic-cell">
      <img src={`images/magic/${props.imgName}.jpg`} alt={props.imgName} />
      {props.deckName}
    </div>
  );
}

function PartnerMagicCell(props) {
  return (
    <div className="magic-cell">
      <div className="magic-partners">
        <img
          src={`images/magic/${props.frontImgName}.jpg`}
          alt={props.frontImgName}
        />
        <img
          src={`images/magic/${props.backImgName}.jpg`}
          alt={props.backImgName}
        />
      </div>
      {props.deckName}
    </div>
  );
}

export function Personal(props) {
  const lang = useSelector((state) => state.config.language);
  return (
    <div className="main-body">
      <div className="heading-container">
        <div className="introduction">{i18n.personal[lang]}</div>
      </div>
      <div className="personal-section">
        <div className="home-text">
          <h2>{i18n.hierarchyTitle[lang]}</h2>
          <p>{i18n.hierarchyBody[lang]}</p>
          <div className="quotes-wrapper">
            <Quote
              quote="I highly recommend checking this out. This is a brilliant little game."
              person="Jamey Stegmaier"
              link="https://www.youtube.com/watch?v=UFSN2s0QAeg"
            />
            <Quote
              quote="A wallet-sized marvel."
              person="1-2-Punchboard"
              link="http://1-2-punchboard.com/2020/05/21/weekly-pnp-hierarchy/"
            />
          </div>
          <img
            className="hierarchy-splash"
            src="images/hierarchy.png"
            alt="Hierarchy splash art"
          />
          <div className="quotes-wrapper">
            <Quote
              quote="Hierarchy is another strong entry in Button Shy’s line of card games that rethink the limits of limitations."
              person="Casual Game Revolution"
              link="https://casualgamerevolution.com/blog/2019/10/preview-start-as-a-lowly-assassin-and-become-a-beloved-king-in-hierarchy"
            />
            <Quote
              quote="For such a compact and ‘light’ game, the strategy required for success keeps the game extremely engaging."
              person="Purple Phoenix Games"
              link="http://www.purplephoenixgames.com/hierarchy-preview/"
            />
          </div>
        </div>
      </div>

      <div className="personal-section">
        <div className="home-text">
          <h2>{i18n.magicTitle[lang]}</h2>
          <p>{i18n.magicBody[lang]}</p>
          <div className="magic-row">
            <MagicCell imgName="sidisi" deckName="Graveyard Combo" />
            <MagicCell imgName="horde" deckName="Elemental Tribal" />
            <MagicCell imgName="omnath" deckName="Big Ramp" />
            <MagicCell imgName="gitrog" deckName="Basic Frog's Eggs" />
            <MagicCell imgName="sygg" deckName="Rogues and Ninjas" />
            <MagicCell imgName="vorel" deckName="2^n Tribal" />
            <MagicCell imgName="roon" deckName="Clone Hug" />
            <MagicCell imgName="obnix" deckName="Big Ramp 2: Demon Boogaloo" />
            <PartnerMagicCell
              frontImgName="sidar"
              backImgName="bruse"
              deckName="Oof"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personal;
