import React from 'react';

class Project extends React.Component {
  render() {
    return (
      <div className="project-cell">
        <a href={this.props.github} >
          <img className="project-image" src={"images/logos/"+this.props.imgName+".png"} alt={this.props.imgAlt}/>
        </a>
        <div className="project-name">
          <a href={this.props.github} >
            {this.props.name}
          </a>
        </div>
        <div className="project-desc">
          {this.props.desc}
        </div>
      </div>
    )
  }
}

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
            <Project
              github="https://github.com/HugoKawamata/for-value"
              imgName="forvalue"
              imgAlt="For Value"
              name="For Value: MTG Price Lookup"
              desc="A chatbot thta allows users to quickly query MTG card prices."
            />
            <Project
              github="https://www.issei.com.au"
              imgName="issei"
              imgAlt="Issei"
              name="Issei: Holistic Japanese Learning"
              desc="An app that teaches Japanese holistically, with an emphasis on context."
            />
            <Project
              github="https://github.com/HugoKawamata/InLieu"
              imgName="inloo"
              imgAlt="InLieu"
              name="InLieu"
              desc="A React web app which allows users to rate and review public toilets."
            />
            <Project
              github="https://github.com/HugoKawamata/Bonsai-Design-Website"
              imgName="bonsai"
              imgAlt="Bonsai Design"
              name="Bonsai Design"
              desc="A pure html/css website to promote my web design business."
            />
            <Project
              github="https://github.com/HugoKawamata/SeinQuotePy"
              imgName="sein"
              imgAlt="SeinQuote"
              name="SeinQuote"
              desc="A command line python program which searches for Seinfeld episodes based on quotes."
            />
            <Project
              github="https://github.com/MaxwellBo/suq"
              imgName="suq"
              imgAlt="SyncUQ"
              name="SyncUQ"
              desc="A full stack web app (Postgres/Flask/Elm) which lets UQ students know when their friends are free at uni."
            />
          </div>
      </div>
    );
  }
}