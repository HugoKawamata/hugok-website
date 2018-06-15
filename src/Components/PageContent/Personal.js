import React from 'react';

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
              <div className="magic-cell">
                <img src="images/magic/sidisi.jpg" alt="Sidisi"/>
                Graveyard Combo
              </div>
              <div className="magic-cell">
                <img src="images/magic/horde.jpg" alt="Horde"/>
                Elemental Tribal
              </div>
              <div className="magic-cell">
                <img src="images/magic/omnath.jpg" alt="Omnath"/>
                Big Ramp
              </div>
              <div className="magic-cell">
                <img src="images/magic/gitrog.jpg" alt="Gitrog"/>
                Basics Only Frog's Eggs
              </div>
              <div className="magic-cell">
                <img src="images/magic/sygg.jpg" alt="Sygg"/>
                Rogues and Ninjas
              </div>
            </div>

            <div className="magic-row">
              <div className="magic-cell">
                <img src="images/magic/vorel.jpg" alt="Vorel"/>
                Punch you for 256
              </div>
              <div className="magic-cell">
                <img src="images/magic/roon.jpg" alt="Roon"/>
                Clone Hug
              </div>
              <div className="magic-cell">
                <img src="images/magic/obnix.jpg" alt="Ob Nixilis"/>
                Big Ramp 2: Demon Boogaloo
              </div>
              <div className="magic-cell">
                <img src="images/magic/sidar.jpg" alt="Sidar"/>
                Infect Boys
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}