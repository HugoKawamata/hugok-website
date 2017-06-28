import React from 'react';

export default class Navbar extends React.Component {
    render() {
        return (
            <div className="nav-container">
                <nav className="nav">
                    <div className="nav-left">
                        <a className="nav-item">
                            About
                        </a>
                        <a className="nav-item">
                            Projects
                        </a>
                    </div>
                    <div className="nav-center">
                        <a className="nav-item">
                            <div className="logo-container">
                                <img className="logo" src="images/logo.png" />
                            </div>
                        </a>
                    </div>
                    <div className="nav-right">
                        <a className="nav-item">
                            Resume
                        </a>
                        <a className="nav-item">
                            Bonsai
                        </a>
                    </div>
                </nav>
            </div>
        );
    }
}