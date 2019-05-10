import React from "react";
import axios from "axios";
import weather from "./photos/weather.png";
import higherlower from "./photos/higherlower.png";
import moment from "moment";
import "../index.css";
class Portfolio extends React.Component {
  state = {
    apps: []
  };
  componentDidMount = () => {
    let arr = [];
    axios
      .get(
        "https://api.github.com/repos/0791msolomon/portfolio-weather/commits"
      )
      .then(res => {
        res.data.map(commit => {
          console.log(commit);
        });
      });
  };
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column"
        }}
      >
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h4 style={{ fontFamily: "open sans, roboto" }}>Github Repos</h4>
            <p class="lead">
              <small>
                This is a modified jumbotron that occupies the entire horizontal
                space of its parent.
              </small>
            </p>
          </div>
        </div>
        <div
          className="col-12"
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          <div
            className="img-responsive col-lg-4 col-sm-12"
            style={{ marginTop: "2%" }}
          >
            <img src={weather} className="d-block w-100 img-responsive  " />
          </div>
          <div
            className="img-responsive col-lg-4 col-sm-12"
            style={{ marginTop: "2%" }}
          >
            <img src={weather} className="d-block w-100 img-responsive  " />
          </div>
          <div
            className="img-responsive col-lg-4 col-sm-12"
            style={{ marginTop: "2%" }}
          >
            <img src={weather} className="d-block w-100 img-responsive  " />
          </div>
        </div>
      </div>
    );
  }
}
export default Portfolio;
