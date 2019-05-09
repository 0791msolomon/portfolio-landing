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
      <div>
        <div>Demos</div>
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column"
          }}
        >
          <div
            id="carouselExampleIndicators"
            class="carousel slide container"
            data-ride="carousel"
            data-interval="false"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
              />
              <li data-target="#carouselExampleIndicators" data-slide-to="1" />
              <li data-target="#carouselExampleIndicators" data-slide-to="2" />
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  class="d-block w-100 img-responsive"
                  src={weather}
                  alt="First slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100 img-responsive"
                  src={higherlower}
                  alt="Second slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100 img-responsive"
                  src="https://i.ytimg.com/vi/xDhzYQ4VyCw/maxresdefault.jpg"
                  alt="Third slide"
                />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true" />
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true" />
              <span class="sr-only">Next</span>
            </a>
          </div>{" "}
        </div>
        <div style={{ textAlign: "center" }} className="display-2">
          what up
        </div>
      </div>
    );
  }
}
export default Portfolio;
