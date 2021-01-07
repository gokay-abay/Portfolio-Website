import React, { Component } from "react";
import Navbar from "./Navbar";
import Typist from "react-typist";
import Drawer from "@material-ui/core/Drawer";
import Sidebar from "./Sidebar";
import Backdrop from "./Backdrop";
import Fade from "react-reveal/Fade";

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
      <div className="header-con wrap">
        <Navbar
          click={this.toggleSidebar}
          sidebarOpen={this.state.sidebarOpen}
        />
        {backdrop}
        <div className="sidebar-con">
          <Sidebar show={this.state.sidebarOpen} />
        </div>
        <div className="intro-con">
          <Typist cursor={{ show: false }}>
            <h2>
              Hello, I am <span>Gökay Abay</span>.
            </h2>
            <h3>a full-stack web developer.</h3>
          </Typist>
          <Fade duration={2000} delay={3500}>
            <div className="btn-con">
              <button className="btn">Contact</button>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}
