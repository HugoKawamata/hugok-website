import React from 'react';

export default class Hero extends React.Component {
    render() {
        return (
            <div className="big-hero">
                <div className="hero-text">
                    <p className="hello-world">
                        Hello World!
                    </p>
                    <p className="introduction">
                        My Nama <br/>
                        <span className="name">Jeff</span>
                    </p>
                </div>

                <div className="cubes-container">
                </div>
            </div>

        )
    }
}