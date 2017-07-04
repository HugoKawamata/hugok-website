import React from 'react';

export default class Navbar extends React.Component {
    render() {
        return (
            <div className="nav-container">
                <nav className="nav">
                    <div className="nav-left">
                        <a className={this.props.current === "about" ? "nav-item nav-current" : "nav-item"}
                            onClick={() => this.props.changePage("about")}
                        >
                            About
                        </a>
                        <a className={this.props.current === "projects" ? "nav-item nav-current" : "nav-item"}
                            onClick={() => this.props.changePage("projects")}
                        >
                            Projects
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
                        <a className={this.props.current === "personal" ? "nav-item nav-current" : "nav-item"}
                            onClick={() => this.props.changePage("personal")}
                        >
                            Personal
                        </a>
                        <a href="http://bonsaidesign.com.au/" className={this.props.current === "bonsai" ? "nav-item nav-current" : "nav-item"}>
                            Bonsai
                        </a>
                    </div>
                </nav>
            </div>
        );
    }
}