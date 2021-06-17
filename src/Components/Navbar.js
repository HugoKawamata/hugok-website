import React from 'react';
import { useSelector, useDispatch } from "react-redux"
import { changeLanguage } from "../store/config"
import { withRouter, Link } from 'react-router-dom';

const NavbarWR = withRouter(props => <Navbar {...props}/>);
export default NavbarWR;

export function Navbar (props) {
  const language = useSelector((state) => state.config.language)
  const dispatch = useDispatch()

  return (
    <div className="nav-container">
      <nav className="nav">
        <div className="nav-left">
          <Link to="/" className={props.location.pathname === "/" ? "nav-item nav-current" : "nav-item"}>
            About
          </Link>
          <Link to="/projects" className={props.location.pathname === "/projects" ? "nav-item nav-current" : "nav-item"}>
            Projects
          </Link>
        </div>
          <div className="nav-center">
            <a className="nav-item" onClick={() => dispatch(changeLanguage("ja"))}>
              <div className="logo-container">
                <img className="logo" src="images/logo.png" alt="HK logo"/>
              </div>
            </a>
          </div>
          <div className="nav-right">
            <Link to="/personal" className={props.location.pathname === "/personal" ? "nav-item nav-current" : "nav-item"}>
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