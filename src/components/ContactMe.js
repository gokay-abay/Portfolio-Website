import React, { Component } from "react";
import Fade from "react-reveal/Fade";

export default class ContactMe extends Component {
  render() {
    return (
      <div id="contact" className="form-cont">
        <Fade bottom cascade>
          <div className="wrap section">
            <h2>Let's Talk</h2>
            <form className="form">
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Name"
              />

              <input type="email" id="email" name="email" placeholder="Email" />

              <textarea
                id="message"
                name="message"
                placeholder="Message.."
                style={{ height: 200 + "px" }}
              ></textarea>

              <input className="btn" type="submit" value="Submit" />
            </form>
          </div>
        </Fade>
      </div>
    );
  }
}
