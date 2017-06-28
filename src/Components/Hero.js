import React from 'react';

import Panels from './Panels';

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
                            My Nama <br/>
                            <span className="name">Jeff</span>
                        </p>
                    </div>
                </div>

                <div className="panels-container">
                    <Panels />
                </div>
            </div>

        )
    }
}