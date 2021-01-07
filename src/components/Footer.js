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
          <div className="icon-group">
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
          <div className="info-box">
            <span>Gökay Abay &copy; 2021 </span>
          </div>
        </div>
      </div>
    );
  }
}
