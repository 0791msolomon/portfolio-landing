import React from "react";
// import axios from "axios";
import TextInputGroup from "./TextInputGroup";
import validator from "validator";
import * as contactServices from "../services/ContactServices";
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      company: "",
      email: "",
      errors: {},
      subject: "",
      body: ""
    };
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
    const { firstName, email, body } = this.state;
    //Check for errors
    e.preventDefault();
    if (firstName.trim() === "") {
      this.setState({
        errors: { firstName: "Name is required" }
      });
      return;
    }
    if (email.trim() === "" || !validator.isEmail(email)) {
      this.setState({
        errors: { email: "Email is required" }
      });
      return;
    }

    let name = this.state.firstName;
    contactServices.contactData(name, email, body).then(res => {
      console.log(res);
    });

    this.setState({
      errors: {}
    });
  };
  render() {
    const { errors } = this.state;
    return (
      <div className="container contact">
        <div
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          <div class="col-lg-3 col-sm-12 colorContact">
            <div class="contact-info">
              <img
                src="https://image.ibb.co/kUASdV/contact-image.png"
                alt={"random "}
              />
              <h2>Contact Me</h2>
              <h4>I would love to hear from you!</h4>
            </div>
          </div>
          <div class="col-md-9 col-sm-12">
            <div class="contact-form col-md-9 col-sm-12">
              <div class="form-group col-sm-10">
                <TextInputGroup
                  label={"Name *"}
                  onChange={this.onChange}
                  value={this.state.firstName}
                  name={"firstName"}
                  placeholder="John"
                  error={errors.firstName}
                />
              </div>
              <div class="form-group col-sm-10">
                <TextInputGroup
                  label={"Email *"}
                  onChange={this.onChange}
                  value={this.state.email}
                  name={"email"}
                  placeholder="example@gmail.com"
                  error={errors.email}
                />
              </div>
              <div class="form-group">
                <label class="control-label col-sm-2" for="comment">
                  Comment:
                </label>
                <div class="col-sm-10">
                  <textarea
                    class="form-control"
                    rows="5"
                    id="comment"
                    name="body"
                    value={this.state.body}
                    onChange={this.onChange}
                  />
                </div>
              </div>
              <div class="form-group">
                <div class="col-md-6 col-sm-12">
                  <button
                    type="submit"
                    onClick={this.sendInfo}
                    class="btn btn-default form-control"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      // <div class="container contact">
      //   <div class="row">
      //     <div class="col-md-3">
      //       <div class="contact-info">
      //         <img
      //           src="https://image.ibb.co/kUASdV/contact-image.png"
      //           alt="image"
      //         />
      //         <h2>Contact Us</h2>
      //         <h4>We would love to hear from you !</h4>
      //       </div>
      //     </div>
      //     <div class="col-md-9">
      //       <div class="contact-form">
      //         <div class="form-group">
      //           <label class="control-label col-sm-2" for="fname">
      //             First Name:
      //           </label>
      //           <div class="col-sm-10">
      //             <input
      //               type="text"
      //               class="form-control"
      //               id="fname"
      //               placeholder="Enter First Name"
      //               name="fname"
      //             />
      //           </div>
      //         </div>
      //         <div class="form-group">
      //           <label class="control-label col-sm-2" for="lname">
      //             Last Name:
      //           </label>
      //           <div class="col-sm-10">
      //             <input
      //               type="text"
      //               class="form-control"
      //               id="lname"
      //               placeholder="Enter Last Name"
      //               name="lname"
      //             />
      //           </div>
      //         </div>
      //         <div class="form-group">
      //           <label class="control-label col-sm-2" for="email">
      //             Email:
      //           </label>
      //           <div class="col-sm-10">
      //             <input
      //               type="email"
      //               class="form-control"
      //               id="email"
      //               placeholder="Enter email"
      //               name="email"
      //             />
      //           </div>
      //         </div>
      //         <div class="form-group">
      //           <label class="control-label col-sm-2" for="comment">
      //             Comment:
      //           </label>
      //           <div class="col-sm-10">
      //             <textarea class="form-control" rows="5" id="comment" />
      //           </div>
      //         </div>
      //         <div class="form-group">
      //           <div class="col-sm-offset-2 col-sm-10">
      //             <button type="submit" class="btn btn-default">
      //               Submit
      //             </button>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}
export default Contact;
