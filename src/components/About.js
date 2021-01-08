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
                    developer based in Vancouver. Science and computers have
                    always fascinated me. I went on to obtain a degree in
                    geology but part of me always wanted to learn more about the
                    language of computers. Thus, here I am, currently studying
                    software development at BCIT. The beauty of programming to
                    me is that creating something unique on the web is the
                    closest one can get to real life magic.
                  </p>
                  <br />
                  <p>
                    I started my journey to becoming a software developer on
                    June 18th, 2018. Yes, I do remember the exact date because
                    it was that day I made a firm decision to become one after
                    many years of interest. Since then, I have been teaching
                    myself web and mobile application development and creating
                    apps that use various technologies in my spare time. By the
                    end of 2019, I had decided to have a formal education in
                    software development. After an extensive research, I
                    enrolled in the Software System Developer program at BCIT,
                    one of Canada's most reputable institutions. Having a strong
                    interest and experience in both frontend and backend
                    languages, I am excited to further my career as a full-stack
                    web and mobile application developer.
                  </p>
                  <a href="/assets/resume.pdf" target="_blank">
                    <button className="btn">My Resume</button>
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
