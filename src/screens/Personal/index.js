/* @flow */
import React from "react";
import { useSelector } from "react-redux";
import { SingleMagicCell, PartnerMagicCell } from "./MagicCell";
import i18n from "./i18n";

type QuoteProps = {|
  link: string,
  person: string,
  quote: string,
|};

function Quote(props: QuoteProps) {
  return (
    <a href={props.link}>
      <div className="quote-wrapper">
        <p className="quote">"{props.quote}"</p>
        <p className="quote-person">- {props.person}</p>
      </div>
    </a>
  );
}

type Props = {||};

export function Personal(props: Props) {
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
            <SingleMagicCell imgName="sidisi" deckName="Graveyard Combo" />
            <SingleMagicCell imgName="horde" deckName="Elemental Tribal" />
            <SingleMagicCell imgName="omnath" deckName="Big Ramp" />
            <SingleMagicCell imgName="gitrog" deckName="Basic Frog's Eggs" />
            <SingleMagicCell imgName="sygg" deckName="Rogues and Ninjas" />
            <SingleMagicCell imgName="vorel" deckName="2^n Tribal" />
            <SingleMagicCell imgName="roon" deckName="Clone Hug" />
            <SingleMagicCell
              imgName="obnix"
              deckName="Big Ramp 2: Demon Boogaloo"
            />
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
