import React from 'react';

export default class Navbar extends React.Component {
    render() {
        return (
            <div className="nav-container">
                <nav className="nav">
                    <div className="nav-left">
                        <a className={this.props.current === "about" ? "nav-item nav-current" : "nav-item"}>
                            <div className="nav-item-child">
                                About
                                <div className="nav-item-underline" />
                            </div>
                        </a>
                        <a className={this.props.current === "projects" ? "nav-item nav-current" : "nav-item"}>
                            <div className="nav-item-child">
                                Projects
                                <div className="nav-item-underline" />
                            </div>
                        </a>
                    </div>
                    <div className="nav-center">
                        <a className="nav-item">
                            <div className="logo-container">
                                <img className="logo" src="images/logo.png" alt="HK logo"/>
                            </div>
                        </a>
                    </div>
                    <div className="nav-right">
                        <a className={this.props.current === "resume" ? "nav-item nav-current" : "nav-item"}>
                            <div className="nav-item-child">
                                Resume
                                <div className="nav-item-underline" />
                            </div>
                        </a>
                        <a className={this.props.current === "bonsai" ? "nav-item nav-current" : "nav-item"}>
                            <div className="nav-item-child">
                                Bonsai
                                <div className="nav-item-underline" />
                            </div>
                        </a>
                    </div>
                </nav>
            </div>
        );
    }
}