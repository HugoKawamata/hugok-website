import React from 'react';

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
            <h2>Music</h2>
            <p>
              I love how listening to music can immediately and vividly make you remember
              how you felt when you first heard it. I really enjoy discovering new music through various
              channels, like bandcamp, reddit, and friends' recommendations, and I try to listen
              to many different genres and artists.
            </p>
            <p>
              In 2017 I made a command line program called Spozberry which integrates with Mopidy, a music server
              which can stream music from your Spotify account. It constantly checks to see if your
              phone's MAC address is connected to your wifi, and starts playing music automatically
              if it is. It's currently extremely buggy and untested, but I hope to have a stable release
              by the end of 2018.
            </p>
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