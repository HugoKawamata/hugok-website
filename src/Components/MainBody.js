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
                                        HTML, CSS and Javascript (especially CSS), and am also experienced with Java, C, Python and Requirements Engineering.
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
                            </div>
                        </div>
                    </div>
                );
                break;
        }
        return page;
    }
}