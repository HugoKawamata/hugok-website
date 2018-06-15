import React from 'react';

import Hero from '../Hero';
import Panels from '../Panels';

export default class About extends React.Component {
  render() {
    return (
      <div className="main-body">
          <Hero />
          <Panels />
          <div id="content">
              <div className="home-section">
                  <div className="home-icon">
                      <span role="img" aria-label="waving-hugo">🙋🏽‍♂️</span>
                  </div>
                  <div className="home-text">
                      <h2>Me</h2>
                      <p>I'm a software developer living in Brisbane, Australia. I have a ton of experience and interest
                          in web development, and have previously owned and operated a freelance web development business called
                          Bonsai Design.
                      </p>
                  </div>
              </div>
              <div className="home-section">
                  <div className="home-icon">
                      <span role="img" aria-label="working-hugo">👨🏽‍💻</span>
                  </div>
                  <div className="home-text">
                      <h2>I want to work with you</h2>
                      <p>I'm currently looking for internships and work experience in the industry.
                          I'm very proficient with 
                          HTML, CSS and Javascript (especially CSS), and am also experienced with React, Java, C, Python and Requirements Engineering.
                          I'm currently studying computer science at the University of Queensland. 
                      </p>
                  </div>
              </div>
              <div className="home-section">
                  <div className="home-icon">
                      <span role="img" aria-label="dice">🎲</span>
                      
                  </div>
                  <div className="home-text">
                      <h2>Game Design</h2>
                      <p>I'm also a huge fan of Mark Rosewater (Head Designer of Magic: The Gathering). Game theory and game design (particularly tabletop) 
                          are big interests of mine. Of course, I'm also an avid Magic player, so hit me up if you'd be interested in 
                          playing some EDH.
                      </p>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}