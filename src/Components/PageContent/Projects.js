import React from 'react';

export default class Projects extends React.Component {
  render() {
    return ( 
      <div className="main-body">
          <div className="heading-container">
              <div className="introduction">
                  Projects
                  <p className="subtitle">
                      <a href="https://github.com/HugoKawamata" >
                          Visit my Github 
                          <i className="fa fa-github" aria-hidden="true"></i>
                      </a>
                  </p>
              </div>
          </div>
          <div className="project-row">
              <div className="project-cell">
                  <a href="https://www.facebook.com/forvaluemtg" >
                      <img className="project-image" src="images/forvalue.png" alt="For Value"/>
                  </a>
                  <div className="project-name">
                      <a href="https://github.com/HugoKawamata/for-value" >
                          <i className="fa fa-github" aria-hidden="true"></i>
                      </a>
                      <a href="https://www.facebook.com/forvaluemtg" >
                          For Value: MTG Price Calculator
                      </a>
                  </div>
                  <div className="project-desc">
                      A chatbot that allows users to quickly query MTG card prices.
                  </div>
              </div>
              <div className="project-cell">
                  <img className="project-image" src="images/hugokawamata.png" alt="HugoKawamata.com" />
                  <div className="project-name">
                      <a href="https://github.com/HugoKawamata/hugok-website" >
                          <i className="fa fa-github" aria-hidden="true"></i>
                          HugoKawamata.com
                      </a>
                  </div>
                  <div className="project-desc">
                      A personal portfolio website for showcasing webdev experience.
                  </div>
              </div>
              <div className="project-cell">
                  <a href="http://bonsaidesign.com.au/">
                      <img className="project-image" src="images/bonsai.png" alt="Bonsai Design" />
                  </a>
                  <div className="project-name">
                      <a href="https://github.com/HugoKawamata/Bonsai-Design-Website" >
                          <i className="fa fa-github" aria-hidden="true"></i>
                      </a>
                      <a href="http://bonsaidesign.com.au/">
                          Bonsai Design
                      </a>
                      
                  </div>
                  <div className="project-desc">
                      A pure html/css website to promote my web design business.
                  </div>
              </div>
          </div>
          <div className="project-row">
              <div className="project-cell">
                  <a href="https://github.com/HugoKawamata/SeinQuotePy" >
                      <img className="project-image" src="images/seinquote.png" alt="SeinQuote"/>
                  </a>
                  <div className="project-name">
                      <a href="https://github.com/HugoKawamata/SeinQuotePy" >
                          <i className="fa fa-github" aria-hidden="true"></i>
                          SeinQuote
                      </a>
                  </div>
                  <div className="project-desc">
                      A command line python program which searches for Seinfeld episodes based on quotes.
                  </div>
              </div>
              <div className="project-cell">
                  <a href="https://www.syncuq.com/">
                      <img className="project-image" src="images/syncuq.png" alt="SyncUQ" />
                  </a>
                  <div className="project-name">
                      <a href="https://github.com/MaxwellBo/suq">
                          <i className="fa fa-github" aria-hidden="true"></i>
                      </a>
                      <a href="https://www.syncuq.com/">
                          SyncUQ
                      </a>
                  </div>
                  <div className="project-desc">
                      A full stack web app (Postgres/Flask/Elm) which lets UQ students know when their friends are free at uni.
                  </div>
              </div>
              <div className="project-cell">
                  <a href="https://github.com/HugoKawamata/scpnet">
                      <img className="project-image" src="images/scpnet.png" alt="SCPnet" />
                  </a>
                  <div className="project-name">
                      <a href="https://github.com/HugoKawamata/scpnet">
                          <i className="fa fa-github" aria-hidden="true"></i>
                          SCPnet
                      </a>
                  </div>
                  <div className="project-desc">
                      A command line python program which allows users to read SCP articles from the CLI.
                  </div>
              </div>
          </div>
      </div>
    );
  }
}