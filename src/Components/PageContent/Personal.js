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
        <div className="home-section">
          <div className="home-text">
            <h2>Magic</h2>
            <p>
              Since childhood I've loved card games of all kinds, and I still love playing Magic.
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
      </div>
    );
  }
}