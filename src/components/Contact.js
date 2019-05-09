import React from "react";
import axios from "axios";
import TextInputGroup from "./TextInputGroup";
import validator from "validator";
import * as contactServices from "../services/ContactServices";
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", company: "", email: "", errors: {}, subject: "" };
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  clearForm = e => {
    e.preventDefault();
    this.setState({
      name: "",
      company: "",
      email: "",
      errors: {}
    });
  };
  sendInfo = e => {
    const { name, email, company } = this.state;
    //Check for errors
    e.preventDefault();
    if (name === "") {
      this.setState({
        errors: { name: "Name is required" }
      });
      return;
    }
    if (email === "" || !validator.isEmail(email)) {
      this.setState({
        errors: { email: "Email is required" }
      });
      return;
    }
    if (company === "") {
      this.setState({
        errors: { company: "Business is required" }
      });
      return;
    }
    contactServices.contactData(name, email, company).then(res => {
      console.log(res);
    });

    this.setState({
      errors: {}
    });
  };
  render() {
    const { errors } = this.state;
    return (
      <div
        className="col-12"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          color: "black",
          fontWeight: "bold"
        }}
      >
        <div
          className="col-12"
          style={{
            border: "solid 3px #17a2b8",
            padding: "3% 1% 1% 1%",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <h3
            style={{
              display: "flex",
              textAlign: "center",
              color: "black",
              fontWeight: "bold",
              alignSelf: "center"
            }}
          >
            Leave your info if you'd like me to contact you
          </h3>
          <form onSubmit={this.sendInfo}>
            <TextInputGroup
              label={"First & Last Name"}
              onChange={this.onChange}
              value={this.state.name}
              name={"name"}
              placeholder="Interested Person"
              error={errors.name}
            />
            <TextInputGroup
              label={"Contact Email"}
              onChange={this.onChange}
              value={this.state.email}
              name={"email"}
              placeholder="uniqueEmail@gmail.com"
              error={errors.email}
            />
            <TextInputGroup
              label={"Business Name"}
              onChange={this.onChange}
              value={this.state.company}
              name={"company"}
              placeholder="company name"
              error={errors.company}
            />
            <div className="form-group">
              <button
                className="btn-info form-control"
                onClick={this.sendInfo}
                style={{ fontWeight: "bold" }}
              >
                Contact me!
              </button>
            </div>
            <div className="form-group">
              <button
                className="btn-danger form-control"
                onClick={this.clearForm}
                style={{ fontWeight: "bold" }}
              >
                Clear Form
              </button>
            </div>
          </form>
        </div>
        <div style={{ alignSelf: "center" }} className="display-4">
          OR
        </div>
        <div
          className="col-12"
          style={{
            border: "solid 3px #7386D5",
            padding: "3% 1% 1% 1%",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <h3
            style={{
              display: "flex",
              textAlign: "center",
              color: "black",
              fontWeight: "bold",
              alignSelf: "center"
            }}
          >
            You can email me directly from here, and I'll get back to you as
            soon as I can.
          </h3>
          <form onSubmit={this.sendInfo}>
            <TextInputGroup
              label={"Subject"}
              onChange={this.onChange}
              value={this.state.subject}
              name={"subject"}
              // placeholder="uniqueEmail@gmail.com"
              error={errors.subject}
            />
            <TextInputGroup
              label={"Business Name"}
              onChange={this.onChange}
              value={this.state.company}
              name={"company"}
              placeholder="Best Company Out there"
              error={errors.company}
            />
            <div className="form-group">
              <button
                className="btn-info form-control"
                onClick={this.sendInfo}
                style={{ fontWeight: "bold" }}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Contact;
