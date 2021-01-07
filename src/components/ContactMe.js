import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import { firestore } from "../firebase";

export default class ContactMe extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    isSubmitted: false,
  };

  //this.addLead = this.addLead(bind).this

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addLead = (e) => {
    e.preventDefault();

    firestore.collection("leads").add({
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    });

    this.setState({ name: "", email: "", message: "" });
  };

  confirm = () => {
    this.setState({ isSubmitted: true });
    setTimeout(() => {
      this.setState({ isSubmitted: false });
    }, 2000);
  };

  render() {
    const { name, email, message } = this.state;

    return (
      <div id="contact" className="form-cont">
        {!this.state.isSubmitted ? (
          <Fade bottom cascade>
            <div className="wrap section">
              <h2>Let's Talk!</h2>
              <form onSubmit={this.addLead} className="form">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  onChange={this.handleChange}
                  value={name}
                  required
                />

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  onChange={this.handleChange}
                  value={email}
                  required
                />

                <textarea
                  id="message"
                  name="message"
                  placeholder="Message.."
                  style={{ height: 200 + "px" }}
                  onChange={this.handleChange}
                  value={message}
                ></textarea>

                <input
                  className="btn"
                  type="submit"
                  value="Submit"
                  onClick={this.confirm}
                />
              </form>
            </div>
          </Fade>
        ) : (
          <div className="wrap section confirm-cont">
            <h2>Your Message Sent!</h2>
            <i class="far fa-check-circle"></i>
          </div>
        )}
      </div>
    );
  }
}
