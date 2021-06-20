/* @flow */
import React from "react";
import { useSelector } from "react-redux";

import i18n from "./i18n";

function Project(props) {
  return (
    <div className="project-cell">
      <a href={props.github}>
        <img
          className="project-image"
          src={`images/logos/${props.imgName}.png`}
          alt={props.name}
        />
      </a>
      <div className="project-name">
        <a href={props.github}>{props.name}</a>
      </div>
      <div className="project-desc">{props.desc}</div>
    </div>
  );
}

export function Projects() {
  const lang = useSelector((state) => state.config.language);

  return (
    <div className="main-body">
      <div className="heading-container">
        <div className="introduction">
          {i18n.projects[lang]}
          <p className="subtitle">
            <a href="https://github.com/HugoKawamata">
              {i18n.viewMyGithub[lang]}
              <i className="fa fa-github" aria-hidden="true" />
            </a>
          </p>
        </div>
      </div>
      <div className="project-row">
        <Project
          github="https://github.com/HugoKawamata/for-value"
          imgName="forvalue"
          name={i18n.forValueTitle[lang]}
          desc={i18n.forValueDesc[lang]}
        />
        <Project
          github="https://www.issei.com.au"
          imgName="issei"
          name={i18n.isseiTitle[lang]}
          desc={i18n.isseiDesc[lang]}
        />
        <Project
          github="https://github.com/HugoKawamata/InLieu"
          imgName="inloo"
          name={i18n.inLieuTitle[lang]}
          desc={i18n.inLieuDesc[lang]}
        />
        <Project
          github="https://github.com/HugoKawamata/Bonsai-Design-Website"
          imgName="bonsai"
          name={i18n.bonsaiDesignTitle[lang]}
          desc={i18n.bonsaiDesignDesc[lang]}
        />
        <Project
          github="https://github.com/HugoKawamata/SeinQuotePy"
          imgName="sein"
          name={i18n.seinQuoteTitle[lang]}
          desc={i18n.seinQuoteDesc[lang]}
        />
        <Project
          github="https://github.com/MaxwellBo/suq"
          imgName="suq"
          name={i18n.syncUQTitle[lang]}
          desc={i18n.syncUQDesc[lang]}
        />
      </div>
    </div>
  );
}

export default Projects;
