import React from "react";
import axios from "axios";
import weather from "./photos/weather.png";
import menu from "./photos/menu.png";
import higherlower from "./photos/higherlower.png";
import rtr from "./photos/rtr.png";
import rtr2 from "./photos/rtr2.png";
import rtr3 from "./photos/rtr3.png";
import seqqure from "./photos/seqqure.png";
import seqqure2 from "./photos/seqqure2.png";
import blog from "./photos/blog.png";
import realty from "./photos/realty.png";
import ReactModal from "react-modal";
import allListings from "./photos/allListings.png";
import higherLower2 from "./photos/higherLower2.png";
import propDetails from "./photos/propDetails.png";
import realtyPhoto from "./photos/realtyPhoto.png";
import seqqureSearch from "./photos/seqqureSearch.png";
import realtyModal from "./photos/realtyModal.png";
import moment from "moment";
import Chart from "./Chart";
import "../index.css";
const dotenv = require("dotenv");
dotenv.config();
class Portfolio extends React.Component {
  state = {
    weather: {
      name: "Weather Forecast",
      description:
        "Small app built to display humidity and temperature stats for a given area over the course of five days. This was built utilizing React & Bootstrap as well as OpenWeatherMap Api's to fetch the data. Project is fully responsive.",
      repo: "portfolio-weather",
      replacementName: "weather"
    },
    higherLower: {
      name: "Higher-Lower",
      description:
        "Small guessing game built out utilizing React & Bootstrap. This example is strictly a client side application not utilizing a database of any kind. React Router is also implemented to switch between higher/lower and Love calculator which is also included. Project is fully responsive.",
      repo: "portfolio-higherLower",
      replacementName: "higherLower"
    },
    menu: {
      name: "Restaurant Menu",
      description:
        "Restaurant Menu display built out utilizing React & Bootstrap. This example is stricly a client side application which was primarily built to show some different designs (includes parallax scroll). Redux is also implemented to choose between menu options. Project is fully responsive. ",
      repo: "portfolio-menu",
      replacementName: "menu"
    },
    blog: {
      name: "Blog",
      description:
        "Full stack application utilizing Mongo/Express/React/Node as well as Redux for state management. Project includes bootstrap for resonsive design. ",
      repo: "portfolio-blog",
      replacementName: "blog"
    },
    realty: {
      name: "Realty",
      description:
        "Full stack mock realtor application utilizing bootstrap for responsive layout. Images/addresses for example properties were acquired using Cheerio to scrape website. Project includes Redux for state management. Currently not viewable.",
      repo: "portfolio-realty",
      replacementName: "realty"
    },

    selectedRepo: {},
    commits: true,
    info: true,
    showModal: false,
    image: allListings
  };
  componentDidMount = () => {
    let promiseArr = Object.values(this.state).map(item => {
      if (!item.name) {
        return;
      } else {
        return axios
          .get(
            `https://api.github.com/repos/0791msolomon/${
              item.repo
            }/commits?client_id=${
              process.env.REACT_APP_CLIENTID
            }&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
          )
          .then(res => {
            let arr = [];
            let updatedItem = item;
            updatedItem.commits = res.data;
            updatedItem.commits.map(item => {
              arr.push(item.commit.author.date);
            });
            updatedItem.commitTimes = arr;

            this.setState({
              [item.replacementName]: updatedItem
            });
          });
      }
    });
    Promise.all(promiseArr)
      .then(() => this.setState({ selectedRepo: this.state.weather }))
      .catch(err => {
        console.log(err);
      });
  };
  setDisplay = e => {
    e.preventDefault();
    this.setState({ open: !this.state.open });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };
  changeRepo = repo => {
    const { weather, higherLower, menu, blog, realty } = this.state;
    let obj = {};
    repo === "menu"
      ? (obj = menu)
      : repo === "higherLower"
      ? (obj = higherLower)
      : repo === "blog"
      ? (obj = blog)
      : repo === "realty"
      ? (obj = realty)
      : (obj = weather);
    this.setState({
      selectedRepo: obj
    });
  };
  mapCommits = () => {
    let { selectedRepo } = this.state;
    let arr = [];
    selectedRepo.commits.map(commit => {
      let obj = {
        committer: commit.commit.committer.name,
        email: commit.commit.committer.email,
        commitTime: moment(commit.commit.committer.date).format("lll"),
        message: commit.commit.message
      };
      arr.push(obj);
    });
    return (
      <small style={{ display: "flex", flexDirection: "column" }}>
        {arr.map((item, i) => {
          return (
            <li style={{ listStyle: "none", marginBottom: "1%" }} key={i}>
              <small>{`-Time: ${item.commitTime}. Committer: ${
                item.committer
              }. Commit Message: ${item.message}. Email: ${item.email}`}</small>
            </li>
          );
        })}
      </small>
    );
  };
  render() {
    return (
      <div
        className="col-12"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column"
        }}
      >
        <div
          className="jumbotron jumbotron-fluid fadeInRightFirst"
          style={{
            backgroundColor: "#7386d5",
            color: "white",
            paddingTop: "1%",
            paddingBottom: "1%"
          }}
        >
          <div className="container" style={{}}>
            <h4 style={{ fontFamily: "open sans, roboto" }}>Github Repos</h4>
            <p className="lead">
              <small style={{ color: "white" }}>
                This is here to display the activity on some of the projects
                that I've got linked in the "small projects" tab queried from
                the github API as well as a quick description for the project,
                click on a repos image to view the commit history and some other
                information associated to that repo.
              </small>
            </p>
          </div>
        </div>
        <div
          className="col-12"
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          <div
            className="img-responsive col-lg-3 col-sm-12 fadeInLeft4"
            style={{ marginTop: "2%" }}
          >
            <h3
              style={{ textAlign: "center", fontFamily: "open sans, roboto" }}
            >
              {this.state.selectedRepo.name === "Weather Forecast" ? (
                <u style={{ color: "#7386d5" }}>Weather</u>
              ) : (
                "Weather"
              )}
            </h3>
            <img
              alt={" of weather app"}
              onClick={() => this.changeRepo("weather")}
              style={{ height: "200px", overflow: "hidden" }}
              src={weather}
              className="d-block w-100 img-responsive col-12 repoCard "
            />
          </div>

          <div
            className="img-responsive col-lg-3 col-sm-12  fadeInLeft3"
            style={{ marginTop: "2%" }}
          >
            <h3
              style={{ textAlign: "center", fontFamily: "open sans, roboto" }}
            >
              {this.state.selectedRepo.name === "Blog" ? (
                <u style={{ color: "#7386d5" }}>Blog</u>
              ) : (
                "Blog"
              )}
            </h3>
            <img
              alt={" Blog App"}
              onClick={() => this.changeRepo("blog")}
              style={{ height: "200px", overflow: "hidden" }}
              src={blog}
              className="d-block w-100 img-responsive col-12 repoCard "
            />
          </div>
          <div
            className="img-responsive col-lg-3 col-sm-12 fadeInLeft2"
            style={{ marginTop: "2%" }}
          >
            <h3
              style={{ textAlign: "center", fontFamily: "open sans, roboto" }}
            >
              {this.state.selectedRepo.name === "Higher-Lower" ? (
                <u style={{ color: "#7386d5" }}>Higher-Lower</u>
              ) : (
                "Higher-Lower"
              )}
            </h3>
            <img
              alt={" of higher-lower app"}
              onClick={() => this.changeRepo("higherLower")}
              style={{ height: "200px", overflow: "hidden" }}
              src={higherlower}
              className="d-block w-100 img-responsive col-12 repoCard "
            />
          </div>
          <div
            className="img-responsive col-lg-3 col-sm-12 fadeInLeft1"
            style={{ marginTop: "2%" }}
          >
            <h3
              style={{ textAlign: "center", fontFamily: "open sans, roboto" }}
            >
              {this.state.selectedRepo.name === "Restaurant Menu" ? (
                <u style={{ color: "#7386d5" }}>Menu</u>
              ) : (
                "Menu"
              )}
            </h3>
            <img
              alt={" of menu app"}
              onClick={() => this.changeRepo("menu")}
              style={{ height: "200px", overflow: "hidden" }}
              src={menu}
              className="d-block w-100 img-responsive col-12 repoCard "
            />
          </div>
          <div
            className="img-responsive col-lg-3 col-sm-12 fadeInRightFirst"
            style={{ marginTop: "2%" }}
          >
            <h3
              style={{ textAlign: "center", fontFamily: "open sans, roboto" }}
            >
              {this.state.selectedRepo.name === "Realty" ? (
                <u style={{ color: "#7386d5" }}>Realty</u>
              ) : (
                "Realty"
              )}
            </h3>
            <img
              alt={"realty app"}
              onClick={() => this.changeRepo("realty")}
              style={{ height: "200px", overflow: "hidden" }}
              src={realty}
              className="d-block w-100 img-responsive col-12 repoCard "
            />
          </div>
          <div
            className="col-lg-8 col-sm-12"
            style={{
              minHeight: "250px",
              alignSelf: "center",
              marginTop: "5%"
            }}
          >
            <Chart
              times={this.state.selectedRepo.commitTimes}
              name={this.state.selectedRepo.repo}
            />
          </div>
        </div>

        <div className="container col-12" style={{ marginTop: "3%" }}>
          <div
            className="col-12"
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "flex-start"
            }}
          >
            <p className="col-12">
              <a
                onClick={() => this.setState({ info: !this.state.info })}
                style={{ margin: "2%" }}
                className="btn btn-info col-lg-3 col-sm-12 fadeInRightFirst"
                data-toggle="collapse"
                href="#multiCollapseExample1"
                role="button"
                aria-expanded="false"
                aria-controls="multiCollapseExample1"
              >
                {this.state.info ? "Hide Description" : "Show Description"}
              </a>
              <a
                onClick={() => this.setState({ commits: !this.state.commits })}
                style={{ margin: "2%" }}
                className="btn btn-info col-lg-3 col-sm-12 fadeInRightSecond"
                data-toggle="collapse"
                href="#multiCollapseExample2"
                role="button"
                aria-expanded="false"
                aria-controls="multiCollapseExample2"
              >
                {this.state.commits ? "Hide Commits" : "Show Commits"}
              </a>
            </p>
            <b
              style={{
                fontFamily: "Didot, serif",
                display: "flex",
                flexDirection: "column"
              }}
              className="fadeInRightFirst"
            >
              <u> {this.state.selectedRepo.name}</u>
              <small>Link to repo</small>
              <a
                className="repoLink"
                href={`https://github.com/0791msolomon/${
                  this.state.selectedRepo.repo
                }`}
              >{`https://github.com/0791msolomon/${
                this.state.selectedRepo.repo
              }`}</a>
            </b>
          </div>

          <div className="row col-12">
            <div className="col-lg-6 col-sm-12 fadeInRightFirst">
              <div
                className="collapse multi-collapse show "
                id="multiCollapseExample1"
              >
                <div
                  className="card card-body "
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <p style={{ color: "black" }}>Project Description.</p>
                  {/* <p style={{ color: "black" }}> */}
                  <small>{this.state.selectedRepo.description}</small>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 fadeInRightSecond">
              <div
                className="collapse multi-collapse show  "
                id="multiCollapseExample2"
              >
                <div
                  className="card card-body  "
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <p style={{ color: "black" }}>Commit History.</p>
                  {this.state.selectedRepo.commits ? this.mapCommits() : null}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="jumbotron jumbotron-fluid fadeInLeft1"
          style={{
            marginTop: "3%",
            backgroundColor: "#7386d5",
            color: "white",
            paddingTop: "1%",
            paddingBottom: "1%"
          }}
        >
          <div className="">
            <h4
              style={{ fontFamily: "open sans, roboto", textAlign: "center" }}
            >
              Some example Images from different projects
            </h4>
          </div>
        </div>
        <div
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
          className="col-12 fadeInRightSecond"
        >
          <div
            onClick={() => this.setState({ showModal: true, image: rtr })}
            className="  col-lg-4 col-sm-12 "
            style={{ marginTop: "2%" }}
          >
            <img
              alt={" of menu app"}
              src={rtr}
              className="d-block w-100 img-fluid col-12  "
            />
          </div>
          <div
            className="  col-lg-4 col-sm-12 "
            onClick={() => this.setState({ showModal: true, image: rtr2 })}
            style={{ marginTop: "2%" }}
          >
            <img
              alt={" of menu app"}
              src={rtr2}
              className="d-block w-100 img-fluid col-12  "
            />
          </div>
          <div
            className=" col-lg-4 col-sm-12 "
            onClick={() => this.setState({ showModal: true, image: rtr3 })}
            style={{ marginTop: "2%" }}
          >
            <img
              alt={" of menu app"}
              src={rtr3}
              className="d-block w-100 img-fluid col-12  "
            />
          </div>
          <div
            className="col-lg-4 col-sm-12 "
            onClick={() => this.setState({ showModal: true, image: seqqure })}
            style={{ marginTop: "2%" }}
          >
            <img
              alt={" of menu app"}
              src={seqqure}
              className="d-block w-100 img-fluid col-12  "
            />
          </div>
          <div
            className="  col-lg-4 col-sm-12 "
            onClick={() => this.setState({ showModal: true, image: seqqure2 })}
            style={{ marginTop: "2%" }}
          >
            <img
              alt={" of menu app"}
              src={seqqure2}
              className="d-block w-100 img-fluid col-12  "
            />
          </div>
          <div
            className="  col-lg-4 col-sm-12 "
            onClick={() =>
              this.setState({ showModal: true, image: higherLower2 })
            }
            style={{ marginTop: "2%" }}
          >
            <img
              alt={" of menu app"}
              src={higherLower2}
              className="d-block w-100 img-fluid col-12  "
            />
          </div>
          <div
            className="  col-lg-4 col-sm-12 "
            onClick={() =>
              this.setState({ showModal: true, image: propDetails })
            }
            style={{ marginTop: "2%" }}
          >
            <img
              alt={" of menu app"}
              src={propDetails}
              className="d-block w-100 img-fluid col-12  "
            />
          </div>
          <div
            className="  col-lg-4 col-sm-12 "
            onClick={() =>
              this.setState({ showModal: true, image: allListings })
            }
            style={{ marginTop: "2%" }}
          >
            <img
              alt={" of menu app"}
              src={allListings}
              className="d-block w-100 img-fluid col-12  "
            />
          </div>
          <div
            className="  col-lg-4 col-sm-12 "
            onClick={() =>
              this.setState({ showModal: true, image: realtyPhoto })
            }
            style={{ marginTop: "2%" }}
          >
            <img
              alt={" of menu app"}
              src={realtyPhoto}
              className="d-block w-100 img-fluid col-12  "
            />
          </div>
          <div
            className="  col-lg-4 col-sm-12 "
            onClick={() =>
              this.setState({ showModal: true, image: seqqureSearch })
            }
            style={{ marginTop: "2%" }}
          >
            <img
              alt={" of menu app"}
              src={seqqureSearch}
              className="d-block w-100 img-fluid col-12  "
            />
          </div>
          <div
            className="  col-lg-4 col-sm-12 "
            onClick={() =>
              this.setState({ showModal: true, image: realtyModal })
            }
            style={{ marginTop: "2%" }}
          >
            <img
              alt={" of menu app"}
              src={realtyModal}
              className="d-block w-100 img-fluid col-12  "
            />
          </div>
        </div>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
        >
          <button
            className="btn btn-danger btn-sm"
            onClick={this.handleCloseModal}
            style={{ marginBottom: "3%" }}
          >
            Close Modal
          </button>

          <img src={this.state.image} className="img-fluid" />
        </ReactModal>
      </div>
    );
  }
}
export default Portfolio;
