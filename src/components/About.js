import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import { CssIcon, ReactIcon, HtmlIcon, NodejsIcon } from "./Interface";

export default class About extends Component {
  render() {
    return (
      <div id="about-me" className="aboutme-con">
        <Fade left cascade>
          <div className="wrap section">
            <div className="title about">
              <h2>About Me</h2>
            </div>
            <div className="about-body">
              <div className="about-body-left">
                {/* <div className="left-about">
                  <img src="" alt="" />
                </div> */}
                <div className="right-about">
                  <p>
                    Hi again, my name is Gökay, and I am a full-stack web
                    developer based in Vancouver. I am in love with two things:
                    geology and magic. I have a degree in the first one and for
                    the second, I am currently studying software development.
                    Creating and building something unique on the web is the
                    closest one can get to real life magic.
                  </p>
                  <br />
                  <p>
                    I started my journey of becoming a software developer on
                    June 18th, 2018. Yes, I do remember the date because that is
                    the day I made a firm decision to become one after years of
                    interest. Since then, I have been teaching myself web and
                    mobile application development and creating apps that use
                    various technologies in my spare time. By the end of 2019, I
                    decided to have a formal education in software development.
                    After long research, I enrolled in the Software System
                    Developer program at BCIT, one of Canada's most reputable
                    institutions. Having a strong interest and experience in
                    both frontend and backend languages, I am excited to further
                    my career as a full-stack web and mobile application
                    developer.
                  </p>
                  <a className="btn" href="/assets/resume.pdf" target="_blank">
                    My Resume
                  </a>
                </div>
              </div>
              <div className="about-body-right">
                <h3>Stack I use</h3>
                <div className="tech-icon-con">
                  <div className="tech-icon">
                    <HtmlIcon />
                  </div>
                  <div className="tech-icon">
                    <CssIcon />
                  </div>
                  <div className="tech-icon">
                    <ReactIcon />
                  </div>
                  <div className="tech-icon">
                    <NodejsIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}
