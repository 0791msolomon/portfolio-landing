import React from "react";
import axios from "axios";
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
      lastName: "",
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
    const { firstName, lastName, email, company, body } = this.state;
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
    // if (company === "") {
    //   this.setState({
    //     errors: { company: "Business is required" }
    //   });
    //   return;
    // }
    return console.log(this.state);
    let name = this.state.firstName + " " + this.state.lastName;
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
      // <div
      //   className="col-12"
      //   style={{
      //     display: "flex",
      //     justifyContent: "center",
      //     flexDirection: "row",
      //     flexWrap: "row",
      //     justifyContent: "space-evenly"
      //   }}
      // >
      //   <div
      //     className="col-lg-5 col-sm-12"
      //     style={{
      //       border: "solid 3px #17a2b8",
      //       padding: "3% 1% 1% 1%",
      //       display: "flex",
      //       flexDirection: "column"
      //     }}
      //   >
      //     <h3
      //       style={{
      //         display: "flex",
      //         textAlign: "center",
      //         color: "black",
      //         fontWeight: "bold",
      //         alignSelf: "center"
      //       }}
      //     >
      //       Leave your info if you'd like me to contact you
      //     </h3>
      //     <form onSubmit={this.sendInfo}>
      //       <TextInputGroup
      //         label={"First & Last Name"}
      //         onChange={this.onChange}
      //         value={this.state.name}
      //         name={"name"}
      //         placeholder="Interested Person"
      //         error={errors.name}
      //       />
      //       <TextInputGroup
      //         label={"Contact Email"}
      //         onChange={this.onChange}
      //         value={this.state.email}
      //         name={"email"}
      //         placeholder="uniqueEmail@gmail.com"
      //         error={errors.email}
      //       />
      //       <TextInputGroup
      //         label={"Business Name"}
      //         onChange={this.onChange}
      //         value={this.state.company}
      //         name={"company"}
      //         placeholder="company name"
      //         error={errors.company}
      //       />
      //       <div className="form-group">
      //         <button
      //           className="btn-info form-control"
      //           onClick={this.sendInfo}
      //           style={{ fontWeight: "bold" }}
      //         >
      //           Contact me!
      //         </button>
      //       </div>
      //       <div className="form-group">
      //         <button
      //           className="btn-danger form-control"
      //           onClick={this.clearForm}
      //           style={{ fontWeight: "bold" }}
      //         >
      //           Clear Form
      //         </button>
      //       </div>
      //     </form>
      //   </div>
      //   <div
      //     style={{ alignSelf: "center" }}
      //     className="display-4 col-lg-1 col-sm-12"
      //   >
      //     OR
      //   </div>
      //   <div
      //     className="col-lg-5 col-sm-12"
      //     style={{
      //       border: "solid 3px #7386D5",
      //       padding: "3% 1% 1% 1%",
      //       display: "flex",
      //       flexDirection: "column"
      //     }}
      //   >
      //     <h3
      //       style={{
      //         display: "flex",
      //         textAlign: "center",
      //         color: "black",
      //         fontWeight: "bold",
      //         alignSelf: "center"
      //       }}
      //     >
      //       You can email me directly from here, and I'll get back to you as
      //       soon as I can.
      //     </h3>
      //     <form onSubmit={this.sendInfo}>
      //       <TextInputGroup
      //         label={"Subject"}
      //         onChange={this.onChange}
      //         value={this.state.subject}
      //         name={"subject"}
      //         // placeholder="uniqueEmail@gmail.com"
      //         error={errors.subject}
      //       />
      //       <TextInputGroup
      //         label={"Business Name"}
      //         onChange={this.onChange}
      //         value={this.state.company}
      //         name={"company"}
      //         placeholder="Best Company Out there"
      //         error={errors.company}
      //       />
      //       <div className="form-group">
      //         <button
      //           className="btn-info form-control"
      //           onClick={this.sendInfo}
      //           style={{ fontWeight: "bold" }}
      //         >
      //           Send
      //         </button>
      //       </div>
      //     </form>
      //   </div>
      // </div>
      <div className="container contact">
        <div
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          <div class="col-lg-3 col-sm-12 colorContact">
            <div class="contact-info">
              <img
                src="https://image.ibb.co/kUASdV/contact-image.png"
                alt="image"
              />
              <h2>Contact Me</h2>
              <h4>I would love to hear from you!</h4>
            </div>
          </div>
          <div class="col-md-9 col-sm-12">
            <div class="contact-form col-md-9 col-sm-12">
              <div class="form-group col-sm-10">
                <TextInputGroup
                  label={"First Name *"}
                  onChange={this.onChange}
                  value={this.state.firstName}
                  name={"firstName"}
                  placeholder="John"
                  error={errors.firstName}
                />
              </div>
              <div class="form-group col-sm-10">
                <TextInputGroup
                  label={"Last Name"}
                  onChange={this.onChange}
                  value={this.state.lastName}
                  name={"lastName"}
                  placeholder="Doe"
                  // error={errors.firstName}
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
