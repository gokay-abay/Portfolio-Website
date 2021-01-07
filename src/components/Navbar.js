import React, { Component } from "react";
import { Link } from "react-scroll";
// import { slide as Menu } from "react-burger-menu";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar">
        <div className="logo-container">
          <a href="/">
            <span>Gökay Abay</span>
          </a>
        </div>
        <div className="nav-item-container">
          <div className="toggle-con">
            <button
              onClick={this.props.click}
              id="toggle"
              className={
                "hamburger hamburger--emphatic " +
                (this.props.sidebarOpen ? "is-active" : "")
              }
              type="button"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>
          <ul className="overlay-content">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="about-me"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
