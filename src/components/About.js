import React from "react";
// import me from "./photos/me.png";
// import puppers from "./photos/puppers.png";
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
        className="container  "
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
            className="fadeInDown2"
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
            className="col-lg-4 col-sm-12 "
            style={{
              display: "flex",
              flexDirection: "column"
            }}
          >
            <div
              className="img-responsive fadeInDown3"
              style={{ padding: "5%", margin: "3%" }}
            >
              <img
                alt={"matt and ashley"}
                src={us}
                style={{ border: "solid 15px #17a2b8" }}
                className="d-block w-100 img-responsive rotate90"
              />
            </div>
            <div
              className="img-responsive fadeInDown2"
              style={{ padding: "5%", margin: "3%" }}
            >
              <img
                alt={"my youngest pup dunc"}
                src={dunc}
                style={{ border: "solid 15px #17a2b8" }}
                className="d-block w-100 img-responsive rotate10"
              />
            </div>
            <div
              className="img-responsive fadeInDown1"
              style={{ padding: "5%", margin: "3%" }}
            >
              <img
                alt={"my oldest pup hux"}
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
            <div className="fadeInDown1 aboutMebio">
              <small style={{ marginBottom: "4%", color: "black" }}>
                My name is Matt Solomon. I’m a 27-year-old full stack web
                developer originally from Cleveland, Ohio. I graduated high
                school in 2010 and immediately left to join the Marines. Once I
                completed Bootcamp, I was stationed at Camp Pendleton,
                California where I spent the next 5 years of my enlistment as a
                Reconnaissance Marine. Between 2010 and 2015, I completed two
                deployments as well as conduct countless hours of training which
                taught me self-discipline, commitment, and leadership amongst
                other things, which I believe transfer over to what I'm doing
                now. In June 2015 I was honorably discharged. After leaving the
                Marine Corps, my initial plan was to pursue a career as a
                firefighter. With that goal in mind, I attended a few semesters
                of college courses. Some time in 2017, a friend of mine who is a
                software engineer introduced me to coding and recommended that I
                do some research and see if it was something I might be
                interested in. Up to that point, I didn't really have much
                experience with computers or coding, but decided I would give it
                a try. I invested in some courses on Codecademy as well as team
                Treehouse. I immediately became obsessed with the problem
                solving aspect that writing code offers and knew that it would
                be part of my future. I reached out to with my friend who had
                originally introduced me to the idea and he suggested that I
                look into coding bootcamps; He'd worked with some guys who took
                that route and said they’d highly recommended it. I did some
                probing and found a coding bootcamp in Los Angeles that allowed
                me to use my GI bill. I spent six months there and was put in
                touch with Seqqure company, along with a group of about 12 other
                developers, to build an MVP for them. After successful
                completion of building out the MVP, I started applying all over
                to begin my career as a developer. My job search led to an offer
                from Real Time Reviews in Flagstaff, Arizona. Dedicated to the
                idea of investing in my career and future, I accepted the offer,
                relocated, and worked there from September, 2018 through May,
                2019. Unfortunately, the company underwent some restructuring
                and chose to outsource most of their positions. I’m grateful for
                the experience and can say with certainty that my ability as a
                developer has grown exponentially during my time there. I am
                currently searching for a new position in southern California.
                Below, you will see some of the technologies that I'm competent
                with. I’m open and eager to learning new things and constantly
                working to improve my skills as a developer! If you'd like to
                get in touch, I can be reached at 440-488-8856 or you can visit
                the Contact Tab and send me an email. I look forward to hearing
                from you!
              </small>
            </div>
            {/* </p> */}

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
                className="col-12 fadeInDown1"
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
                    <li style={{ listStyle: "none" }}>Puppeteer</li>
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
            className="col-lg-2 col-sm-12 "
            style={{
              marginTop: "10%",
              display: "flex",
              flexDirection: "column"
              // justifyContent: "center"
            }}
          >
            <h6
              className="fadeInDown3"
              style={{
                alignSelf: "center",
                color: "#7386D5",
                fontWeight: "bold"
              }}
            >
              Work History
            </h6>
            <h5
              className="fadeInDown3"
              style={{
                alignSelf: "center",
                color: "#7386D5",
                fontWeight: "bold"
              }}
            >
              {"&"}
            </h5>
            <h6
              className="fadeInDown3"
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
              className="fa fa-chevron-down	fadeInDown3"
            />
            <br />
            <p
              style={{ alignSelf: "center", color: "#7386D5" }}
              className="fadeInDown2"
            >
              <small>USMC</small>
            </p>
            <p
              style={{ alignSelf: "center", color: "#17a2b8" }}
              className="fadeInDown2"
            >
              <small>Recon Marine</small>
            </p>
            <p
              style={{ alignSelf: "center", color: "#17a2b8" }}
              className="fadeInDown2"
            >
              <small>Jun 2010-June 2015</small>
            </p>
            <i
              style={{ alignSelf: "center", color: "grey", fontWeight: "bold" }}
              className="fa fa-chevron-down	fadeInDown2"
            />{" "}
            <i
              style={{ alignSelf: "center", color: "grey", fontWeight: "bold" }}
              className="fa fa-chevron-down	fadeInDown2"
            />
            <p
              style={{ alignSelf: "center", color: "#7386D5" }}
              className="fadeInDown1"
            >
              <small>Seqqure</small>
            </p>
            <p
              style={{ alignSelf: "center", color: "#17a2b8" }}
              className="fadeInDown1"
            >
              <small>Full Stack Dev</small>
            </p>
            <p
              style={{ alignSelf: "center", color: "#17a2b8" }}
              className="fadeInDown1"
            >
              <small>Jan 2018-Sep 2018</small>
            </p>
            <i
              style={{ alignSelf: "center", color: "grey", fontWeight: "bold" }}
              className="fa fa-chevron-down	fadeInDown1"
            />
            <i
              style={{ alignSelf: "center", color: "grey", fontWeight: "bold" }}
              className="fa fa-chevron-down	fadeInDown1"
            />{" "}
            <i
              style={{ alignSelf: "center", color: "grey", fontWeight: "bold" }}
              className="fa fa-chevron-down	fadeInDown1"
            />
            <br />
            <p
              style={{ alignSelf: "center", color: "#7386D5" }}
              className="fadeInDown1"
            >
              <small>RTR</small>
            </p>
            <p
              style={{ alignSelf: "center", color: "#17a2b8" }}
              className="fadeInDown1"
            >
              <small>React Dev</small>
            </p>
            <p
              style={{ alignSelf: "center", color: "#17a2b8" }}
              className="fadeInDown1"
            >
              <small>Sep 2018-Present</small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
