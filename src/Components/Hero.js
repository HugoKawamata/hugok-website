import React from 'react';
import { useSelector } from 'react-redux';
import i18n from "./i18n"


const scroll = () => {
    window.scrollTo({top: 725, left: 0, behavior: "smooth"})
}

export function Hero() {
    const lang = useSelector((state) => state.config.language)
    return (
        <div className="big-hero">
            <div className="hero-text-cont">
                <div className="hero-text">
                    <p className="hello-world">{i18n.helloWorld[lang]}</p>
                    <p className="introduction">{i18n.imHugo[lang]}</p>
                    <div className="hero-img">
                        <img className="profile-img" src="images/me.png" alt="Hugo-Profile"/><br/>
                        <a onClick={scroll}><i className="fa fa-angle-double-down" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero