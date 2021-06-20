import React from 'react';
import { useSelector } from 'react-redux';

import { home as i18n } from './i18n'
import Hero from '../Hero';
import Panels from '../Panels';

export function Home(props) {
  const lang = useSelector((state) => state.config.language)

  return (
    <div className="main-body">
      <Hero />
      <Panels />
      <div id="content">
        <section className="home-section">
          <div className="home-icon">
            <span role="img" aria-label="waving-hugo">🙋🏽‍♂️</span>
          </div>
          <div className="home-text">
            <h2>{i18n.meHeading[lang]}</h2>
            <p>{i18n.meContent[lang]}</p>
          </div>
        </section>
        <section className="home-section">
          <div className="home-icon">
            <span role="img" aria-label="working-hugo">👨🏽‍💻</span>
          </div>
          <div className="home-text">
            <h2>{i18n.workHeading[lang]}</h2>
            <p>{i18n.workContent[lang]}</p>
          </div>
        </section>
        <section className="home-section">
          <div className="home-icon">
            <span role="img" aria-label="dice">🎲</span>
          </div>
          <div className="home-text">
            <h2>{i18n.gamesHeading[lang]}</h2>
            <p>{i18n.gamesContent[lang]}</p>
          </div>
        </section>
        <section className="home-section">
          <div className="home-icon">
            <span role="img" aria-label="torii">⛩</span>
          </div>
          <div className="home-text">
            <h2>{i18n.japaneseHeading[lang]}</h2>
            <p>{i18n.japaneseContent[lang]}</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home