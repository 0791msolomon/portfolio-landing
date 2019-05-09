import React from "react";
import me from "./photos/me.png";
import puppers from "./photos/puppers.png";
import dunc from "./photos/dunc.png";
import hux from "./photos/hux.png";
import us from "./photos/us.png";
import { Collapse } from "react-collapse";

import "../index.css";
class About extends React.Component {
  state = {
    open: false,
    front: false,
    middle: false,
    back: false,
    other: false
  };

  display = level => {
    console.log(level);
  };
  render() {
    return (
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}
      >
        <div
          className="col-12  "
          style={{
            alignSelf: "center",
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            justifyContent: "center",
            textAlign: "center"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingBottom: "3%"
            }}
          >
            <h2
              style={{
                fontFamily: "open sans, roboto",
                alignSelf: "center",
                fontWeight: "bold",
                display: "flex",
                flexDirection: "row"
              }}
            >
              <u>ABOUT ME</u>
            </h2>
            <h5 style={{ alignSelf: "center", textAlign: "center" }}>
              Allow me to introduce myself.
              <hr style={{ fontWeight: "bold" }} />
            </h5>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around"
          }}
        >
          <div
            className="col-lg-4 col-sm-12"
            style={{
              display: "flex",
              flexDirection: "column"
            }}
          >
            <div
              className="img-responsive"
              style={{ padding: "5%", margin: "3%" }}
            >
              <img
                src={us}
                style={{ border: "solid 15px #17a2b8" }}
                className="d-block w-100 img-responsive rotate90"
              />
            </div>
            <div
              className="img-responsive"
              style={{ padding: "5%", margin: "3%" }}
            >
              <img
                src={dunc}
                style={{ border: "solid 15px #17a2b8" }}
                className="d-block w-100 img-responsive rotate10"
              />
            </div>
            <div
              className="img-responsive"
              style={{ padding: "5%", margin: "3%" }}
            >
              <img
                src={hux}
                style={{ border: "solid 15px #17a2b8" }}
                className="d-block w-100 img-responsive rotate90"
              />
            </div>
          </div>
          <div
            className="col-lg-5 col-sm-12  "
            style={{
              margin: "4%"
            }}
          >
            <p style={{ marginBottom: "4%", color: "black" }} c>
              <div style={{ textIndent: "50px" }}>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus id quod maxime placeat facere possimus, omnis voluptas
                assumenda est, omnis dolor repellendus. Temporibus autem
                quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                eveniet ut et voluptates repudiandae sint et molestiae non
                recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
                ut aut reiciendis voluptatibus maiores alias consequatur aut
                perferendis doloribus asperiores repellat.At vero eos et
                accusamus et iusto odio dignissimos ducimus qui blanditiis
                praesentium voluptatum deleniti atque corrupti quos dolores et
                quas molestias excepturi sint occaecati cupiditate non
                provident, similique sunt in culpa qui officia deserunt mollitia
                animi, id est laborum et dolorum fuga. Et harum quidem rerum
                facilis est et expedita distinctio. Nam libero tempore, cum
                soluta nobis est eligendi optio cumque nihil impedit quo minus
                id quod maxime placeat facere possimus, omnis voluptas assumenda
                est, omnis dolor repellendus. Temporibus autem quibusdam et aut
                officiis debitis aut rerum necessitatibus saepe eveniet ut et
                voluptates repudiandae sint et molestiae non
              </div>
            </p>

            <br />
            <div
              className="col-12"
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap"
              }}
            >
              <div
                className="col-12"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "center"
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignSelf: "center",
                    justifyContent: "center"
                  }}
                >
                  <h4 style={{ textAlign: "center" }}>TECHNOLOGIES I USE</h4>
                  <i
                    style={{ alignSelf: "center" }}
                    class="fas fa-chevron-down fa-lg"
                  />
                </div>
                <div
                  className="col-12"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "3%"
                  }}
                >
                  <button
                    style={{
                      backgroundColor: "#17a2b8",
                      color: "white",
                      fontWeight: "bold"
                    }}
                    className="form-control collapseBtn"
                    onClick={() => this.setState({ front: !this.state.front })}
                  >
                    Front End
                  </button>
                  <Collapse
                    isOpened={this.state.front}
                    style={{ textAlign: "center" }}
                  >
                    <li style={{ listStyle: "none" }}>JavaScript</li>
                    <li style={{ listStyle: "none" }}>React.js</li>
                    <li style={{ listStyle: "none" }}>Redux</li>
                    <li style={{ listStyle: "none" }}>jQuery</li>
                    <li style={{ listStyle: "none" }}>CSS3</li>
                    <li style={{ listStyle: "none" }}>CSS Flexbox</li>
                    <li style={{ listStyle: "none" }}>Twitter Bootstrap</li>
                    <li style={{ listStyle: "none" }}>HTML5</li>
                    <li style={{ listStyle: "none" }}>AJAX</li>
                    <li style={{ listStyle: "none" }}>Material-UI</li>
                  </Collapse>
                </div>
                <div
                  className="col-12"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "3%"
                  }}
                >
                  <button
                    style={{
                      backgroundColor: "#17a2b8",

                      color: "white",
                      fontWeight: "bold"
                    }}
                    className="form-control collapseBtn"
                    onClick={() =>
                      this.setState({ middle: !this.state.middle })
                    }
                  >
                    Middle Tier
                  </button>
                  <Collapse
                    isOpened={this.state.middle}
                    style={{ textAlign: "center" }}
                  >
                    <li style={{ listStyle: "none" }}>Node.js</li>
                    <li style={{ listStyle: "none" }}>ExpressJS</li>
                  </Collapse>
                </div>
                <div
                  className="col-12"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "3%"
                  }}
                >
                  <button
                    style={{
                      backgroundColor: "#17a2b8",

                      color: "white",
                      fontWeight: "bold"
                    }}
                    className="form-control collapseBtn"
                    onClick={() => this.setState({ back: !this.state.back })}
                  >
                    Back End
                  </button>
                  <Collapse
                    isOpened={this.state.back}
                    style={{ textAlign: "center" }}
                  >
                    <li style={{ listStyle: "none" }}>MongoDB</li>
                    <li style={{ listStyle: "none" }}>Firebase</li>
                  </Collapse>
                </div>
                <div
                  className="col-12"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "3%"
                  }}
                >
                  <button
                    style={{
                      backgroundColor: "#17a2b8",

                      color: "white",
                      fontWeight: "bold"
                    }}
                    className="form-control collapseBtn"
                    onClick={() => this.setState({ other: !this.state.other })}
                  >
                    Other
                  </button>
                  <Collapse
                    isOpened={this.state.other}
                    style={{ textAlign: "center" }}
                  >
                    <li style={{ listStyle: "none" }}>VS Code</li>
                    <li style={{ listStyle: "none" }}>Robo 3T</li>
                    <li style={{ listStyle: "none" }}>Advanced REST Client</li>
                    <li style={{ listStyle: "none" }}>Postman</li>
                    <li style={{ listStyle: "none" }}>TFS</li>
                    <li style={{ listStyle: "none" }}>Git</li>
                    <li style={{ listStyle: "none" }}>Trello</li>
                    <li style={{ listStyle: "none" }}>Agile/Scrum</li>
                    <li style={{ listStyle: "none" }}>Heroku</li>
                  </Collapse>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div
            className="col-lg-2 col-sm-12"
            style={{
              marginTop: "10%",
              display: "flex",
              flexDirection: "column"
              // justifyContent: "center"
            }}
          >
            <h6
              style={{
                alignSelf: "center",
                color: "#7386D5",
                fontWeight: "bold"
              }}
            >
              Work History
            </h6>
            <h5
              style={{
                alignSelf: "center",
                color: "#7386D5",
                fontWeight: "bold"
              }}
            >
              {"&"}
            </h5>
            <h6
              style={{
                alignSelf: "center",
                color: "#7386D5",
                fontWeight: "bold"
              }}
            >
              Timeline
            </h6>
            <br />
            <i
              style={{ alignSelf: "center", color: "grey", fontWeight: "bold" }}
              className="fa fa-chevron-down	"
            />
            <br />
            <p style={{ alignSelf: "center", color: "#17a2b8" }}>Seqqure</p>
            <p style={{ alignSelf: "center", color: "#17a2b8" }}>
              Full Stack Dev
            </p>
            <p style={{ alignSelf: "center", color: "#17a2b8" }}>
              Jan 2018-Sep 2018
            </p>
            <i
              style={{ alignSelf: "center", color: "grey", fontWeight: "bold" }}
              className="fa fa-chevron-down	"
            />{" "}
            <i
              style={{ alignSelf: "center", color: "grey", fontWeight: "bold" }}
              className="fa fa-chevron-down	"
            />
            <br />
            <p style={{ alignSelf: "center", color: "#17a2b8" }}>RTR</p>
            <p style={{ alignSelf: "center", color: "#17a2b8" }}>React Dev</p>
            <p style={{ alignSelf: "center", color: "#17a2b8" }}>
              Sep 2018-Present
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default About;

const plusBox = {
  color: "#7386D5",
  marginBottom: "3%",
  padding: "0%"
};
