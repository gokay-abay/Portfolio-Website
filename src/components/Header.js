import React, { Component } from "react";
import Navbar from "./Navbar";
import Typist from "react-typist";
import Drawer from "@material-ui/core/Drawer";
import Sidebar from "./Sidebar";
import Backdrop from "./Backdrop";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
    };
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.backdropClickHandler = this.backdropClickHandler.bind(this);
  }

  toggleSidebar() {
    this.setState((prevState) => {
      return { sidebarOpen: !prevState.sidebarOpen };
    });
  }

  backdropClickHandler() {
    this.setState({ sidebarOpen: false });
  }

  render() {
    let sidebar;
    let backdrop;

    if (this.state.sidebarOpen) {
      //sidebar = <Sidebar />;
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div id="header" className="header-con wrap">
        <Navbar
          click={this.toggleSidebar}
          sidebarOpen={this.state.sidebarOpen}
        />
        {backdrop}
        <div className="sidebar-con">
          <Sidebar show={this.state.sidebarOpen} />
        </div>
        <div className="intro-con">
          <div className="header-group">
            <Typist cursor={{ show: false }}>
              <h2>Hi,</h2>
              <h2>
                I am <span>Gökay Abay</span>.
              </h2>
              <h3>a full-stack web developer.</h3>
            </Typist>
            <div className="social-icons-cont">
              <a href="mailto:abaygokay@gmail.com" target="_blank">
                <i class="far fa-envelope"></i>
              </a>
              <a href="https://www.linkedin.com/in/gokay-abay/" target="_blank">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/gokay-abay" target="_blank">
                <i class="fab fa-github"></i>
              </a>
              <a href="https://twitter.com/abay_gokay" target="_blank">
                <i class="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          <Fade duration={2000} delay={1500}>
            <div className="btn-con">
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <button className="btn">My Work</button>
              </Link>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}
