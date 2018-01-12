import React from 'react';

import Hero from './Hero';
import Panels from './Panels';


export default class MainBody extends React.Component {

    render() {
        var page;
        switch(this.props.current) {
            case "about":
                page = (
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
                                        in web development, and currently own and operate a freelance web development business called
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
                                    <span role="img" aria-label="working-hugo">🎲</span>
                                    
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
                break;
            case "projects":
                page = (
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
                                        Palette Picker
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
                break;
            case "personal":
                page = (
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
                                    Varolz, Karlov, Tomorrow, Omnath, and Zedruu.
                                </p>
                                <div className="magic-row">
                                    <div className="magic-cell">
                                        <img src="images/magic/sidisi.jpg" alt="Sidisi"/>
                                        Dredge Combo
                                    </div>
                                    <div className="magic-cell">
                                        <img src="images/magic/horde.jpg" alt="Horde"/>
                                        Gatecount
                                    </div>
                                    <div className="magic-cell">
                                        <img src="images/magic/omnath.jpg" alt="Omnath"/>
                                        Wheelchair Access
                                    </div>
                                    <div className="magic-cell">
                                        <img src="images/magic/sygg.jpg" alt="Sygg"/>
                                        Rogue Tribal
                                    </div>
                                    <div className="magic-cell">
                                        <img src="images/magic/vorel.jpg" alt="Vorel"/>
                                        Doubling Season
                                    </div>
                                </div>
                                <div className="magic-row">
                                    <div className="magic-cell">
                                        <img src="images/magic/jhoira.jpg" alt="Jhoira"/>
                                        Not Magic
                                    </div>
                                    <div className="magic-cell">
                                        <img src="images/magic/obnix.jpg" alt="Ob-Nixilis"/>
                                        The Biggest, Blackest Deck
                                    </div>
                                    <div className="magic-cell">
                                        <img src="images/magic/isperia.jpg" alt="Isperia"/>
                                        Fluffytown
                                    </div>
                                    <div className="magic-cell">
                                        <img src="images/magic/roon.jpg" alt="Roon"/>
                                        Flickery Clones
                                    </div>
                                    <div className="magic-cell">
                                        <img src="images/magic/tomorrow.jpg" alt="Tomorrow"/>
                                        Dude, Where's My Win-con?
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                )
                break;
        }
        return page;
    }
}