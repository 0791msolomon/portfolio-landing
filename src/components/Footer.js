import React from "react";
import "../index.css";
const Footer = props => {
  return (
    <div className="container footer">
      <hr />
      <div
        className="text-center center-block col-lg-8 col-sm-12 "
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between"
        }}
      >
        <br />
        <a href="https://www.facebook.com/mateo.solomon.16" target="_blank">
          <i
            id="social-fb"
            className="fab fa-facebook-square fa-4x iconHover"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/matthew-solomon-a14683140/"
          target="_blank"
        >
          <i
            id="social-gp"
            className="fab fa-linkedin-square fa-4x iconHover"
          />
        </a>
        <a href="https://github.com/0791msolomon" target="_blank">
          <i id="social-em" className="fab fa-github-square fa-4x iconHover" />
        </a>
      </div>
    </div>
  );
};
export default Footer;
