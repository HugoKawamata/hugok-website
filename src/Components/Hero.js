import React from 'react';


export default class Hero extends React.Component {
    render() {
        return (
            <div className="big-hero">
                <div className="hero-text-cont">
                    <div className="hero-text">
                        <p className="hello-world">
                            Hello World!
                        </p>
                        <p className="introduction">
                            I'm Hugo.
                        </p>
                        <div className="hero-img">
                            <img className="profile-img" src="images/me.png" alt="Hugo-Profile"/><br/>
                            <i className="fa fa-angle-double-down" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}