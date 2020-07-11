import React from 'react';

class Quote extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <a href={this.props.link}>
        <div className="quote-wrapper">
          <p className="quote">"{this.props.quote}"</p>
          <p className="quote-person">- {this.props.person}</p>
        </div>
      </a>
    )
  }
}

class MagicCell extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="magic-cell">
        <img src={"images/magic/"+this.props.imgName+".jpg"} alt={this.props.imgName}/>
        {this.props.deckName}
      </div>
    )
  }
}

class PartnerMagicCell extends React.Component {
  render() {
    return (
      <div className="magic-cell">
        <div className="magic-partners">
          <img src={"images/magic/"+this.props.frontImgName+".jpg"} alt={this.props.frontImgName} />
          <img src={"images/magic/"+this.props.backImgName+".jpg"} alt={this.props.backImgName} />
        </div>
        {this.props.deckName}
      </div>
    )
  }
}

export default class Personal extends React.Component {
  render() {
    return (
      <div className="main-body">
        <div className="heading-container">
          <div className="introduction">
            Personal
          </div>
        </div>
        <div className="personal-section">
          <div className="home-text">
            <h2>Hierarchy</h2>
            <p>
              In 2019, I published my first tabletop game, Hierarchy. It's an abstract strategy game with only 14 cards
              and open information. You and your opponent take turns playing cards with a higher rank than the last,
              until one player can't play a card.
            </p>
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
            <img className="hierarchy-splash" src="images/hierarchy.png" alt="Hierarchy splash art" />
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
            <h2>Magic</h2>
            <p>
              Since childhood I've loved card games of all kinds, and I still love playing Magic.
              I try to play at least once a week, with my friends and other regulars at my local
              game store, Vault Games.
              I mainly play EDH, but I've also enjoyed standard and drafting. My EDH decks are currently: 
            </p>

            <div className="magic-row">
              <MagicCell imgName="sidisi" deckName="Graveyard Combo"/>
              <MagicCell imgName="horde" deckName="Elemental Tribal"/>
              <MagicCell imgName="omnath" deckName="Big Ramp"/>
              <MagicCell imgName="gitrog" deckName="Basic Frog's Eggs"/>
              <MagicCell imgName="sygg" deckName="Rogues and Ninjas"/>
              <MagicCell imgName="vorel" deckName="2^n Tribal"/>
              <MagicCell imgName="roon" deckName="Clone Hug"/>
              <MagicCell imgName="obnix" deckName="Big Ramp 2: Demon Boogaloo"/>
              <PartnerMagicCell frontImgName="sidar" backImgName="bruse" deckName="Oof"/>
            </div>
          </div>
        </div>

        <div className="personal-section">
          <div className="home-text">
            <h2>Other Interests</h2>
            <p>Some of my other interests include drinking tea, reading (currently reading 
              <a href="https://parahumans.wordpress.com/" target="_blank"> Worm</a>), lifting heavy objects, making memes,
              binge watching YouTube videos, and the occasional video game or TV show (Seinfeld, Silicon Valley, and
              Community are favourites).
            </p>
          </div>
        </div>

      </div>
    );
  }
}