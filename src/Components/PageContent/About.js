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
                      <h2>My Work</h2>
                      <p>
                        I've been working at Tanda since 2018. The tech I use on a daily basis includes React Native, React,
                        Ruby on Rails, and GraphQL.
                      </p>
                  </div>
              </div>
              <div className="home-section">
                  <div className="home-icon">
                      <span role="img" aria-label="dice">🎲</span>
                      
                  </div>
                  <div className="home-text">
                      <h2>Game Design</h2>
                      <p>
                          As well as software, I also have an interest in tabletop game design. In 2019, I published my first
                          card game, Hierarchy, with Button Shy Games.
                      </p>
                  </div>
              </div>
              <div className="home-section">
                  <div className="home-icon">
                      <span role="img" aria-label="dice">⛩</span>
                      
                  </div>
                  <div className="home-text">
                      <h2>Japanese</h2>
                      <p>
                          I'm half Japanese, but I never really learned how to speak Japanese growing up. In 2019, I started
                          teaching myself Japanese with the goal of having a conversation when I went on holiday there in January 2020,
                          and it was a great success! The experience of frantically teaching myself conversational Japanese inspired me
                          to start work on a language learning app, Issei.
                      </p>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}