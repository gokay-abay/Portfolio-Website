import React, { Component } from "react";
import { LinkedinIcon, ViewCode, GithubIcon } from "./Interface";

//import { ViewCode } from "../../public/assets/images/";

export default class ProjectCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {/* <div className="card-con">
          <div className="proj-card">
            <div className="proj-img">
              <img
                className="img"
                src="https://cdn.smartbrief.com/sites/default/files/styles/originals_full_summary_banner_style/public/original-content/AdobeStock_295042621.jpeg?itok=n6VoXVrA"
                alt=""
              />
            </div>
            <div className="proj-detail">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="tech-tag">Javascript</div>
              <div className="card-btn-con">
                <a href="">
                  <button className="btn card-btn">View Code</button>
                </a>
                <a className href="">
                  <button className="btn card-btn">Visit Page</button>
                </a>
              </div>
            </div>
          </div>
        </div> */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={this.props.imageUrl} alt="" width="100%" />
            </div>
            <div className="flip-card-back">
              <div className="app-info">
                <h3>{this.props.title}</h3>
                <p>{this.props.info}</p>
              </div>
              <div className="btn-con">
                <a href={this.props.code} target="_blank">
                  <button className="btn card-btn">View Code</button>
                </a>
                <a className href={this.props.website} target="_blank">
                  <button className="btn card-btn">Visit Page</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
