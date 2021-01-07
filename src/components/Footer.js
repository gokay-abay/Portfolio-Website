import React, { Component } from "react";
import { LinkedinIcon, TwitterIcon, GithubIcon } from "./Interface";

export default class Footer extends Component {
  render() {
    return (
      <div className="bckgrnd">
        <div className="footer-cont wrap section">
          {/* <div className="icon-group">
            <a href="https://www.linkedin.com/in/gokay-abay/" target="_blank">
              <LinkedinIcon />
            </a>
            <a href="svg-cont">
              <TwitterIcon />
            </a>
            <a className="social-icon" href="svg-cont">
              <GithubIcon />
            </a>
          </div> */}
          <button>Up</button>
          <div className="info-box">
            <span>&copy; 2020 Gökay Abay</span>
          </div>
        </div>
      </div>
    );
  }
}
