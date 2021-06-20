/* @flow */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { changeLanguage } from "../../store/config";
import i18n from "./i18n";

const NavbarWR = withRouter((props) => <Navbar {...props} />);
export default NavbarWR;

export function Navbar(props) {
  const lang = useSelector((state) => state.config.language);
  const dispatch = useDispatch();

  return (
    <div className="nav-container">
      <nav className="nav">
        <div className="nav-left">
          <Link
            to="/"
            className={
              props.location.pathname === "/"
                ? "nav-item nav-current"
                : "nav-item"
            }
          >
            {i18n.navHome[lang]}
          </Link>
          <Link
            to="/projects"
            className={
              props.location.pathname === "/projects"
                ? "nav-item nav-current"
                : "nav-item"
            }
          >
            {i18n.navProjects[lang]}
          </Link>
        </div>
        <div className="nav-center">
          <a
            className="nav-item"
            onClick={() =>
              dispatch(changeLanguage(lang === "ja" ? "en" : "ja"))
            }
          >
            <div className="logo-container">
              <span className="flag" role="img" aria-label="language-switcher">
                {lang === "ja" ? "🇦🇺" : "🇯🇵"}
              </span>
            </div>
          </a>
        </div>
        <div className="nav-right">
          <Link
            to="/personal"
            className={
              props.location.pathname === "/personal"
                ? "nav-item nav-current"
                : "nav-item"
            }
          >
            {i18n.navPersonal[lang]}
          </Link>
          <a href="https://www.issei.com.au" className="nav-item">
            {i18n.navIssei[lang]}
          </a>
        </div>
      </nav>
    </div>
  );
}
