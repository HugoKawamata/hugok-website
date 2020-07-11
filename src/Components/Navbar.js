import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const NavbarWR = withRouter(props => <Navbar {...props}/>);
export default NavbarWR;

class Navbar extends React.Component {
    render() {
        return (
            <div className="nav-container">
                <nav className="nav">
                    <div className="nav-left">
                        <Link to="/" className={this.props.location.pathname === "/" ? "nav-item nav-current" : "nav-item"}>
                            About
                        </Link>
                        <Link to="/projects" className={this.props.location.pathname === "/projects" ? "nav-item nav-current" : "nav-item"}>
                            Projects
                        </Link>
                    </div>
                    <div className="nav-center">
                        <a className="nav-item">
                            <div className="logo-container">
                                <img className="logo" src="images/logo.png" alt="HK logo"/>
                            </div>
                        </a>
                    </div>
                    <div className="nav-right">
                        <Link to="/personal" className={this.props.location.pathname === "/personal" ? "nav-item nav-current" : "nav-item"}>
                            Personal
                        </Link>
                        <a href="https://www.issei.com.au" className="nav-item">
                            Issei
                        </a>
                    </div>
                </nav>
            </div>
        );
    }
}