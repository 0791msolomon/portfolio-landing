import React from "react";
import axios from "axios";
import weather from "./photos/weather.png";
import menu from "./photos/menu.png";
import higherlower from "./photos/higherlower.png";
import moment from "moment";
import "../index.css";
class Portfolio extends React.Component {
  state = {
    weather: { name: "Weather Forecast" },
    higherLower: { name: "Higher-Lower" },
    menu: { name: "Restaurant Menu" },
    selectedRepo: { name: "Weather Forecast" },
    open: false
  };
  componentDidMount = () => {
    let arr = [];
    axios
      .get(
        "https://api.github.com/repos/0791msolomon/portfolio-weather/commits"
      )
      .then(res => {
        res.data.map(commit => {
          arr.push(commit);
        });
      })
      .then(() => console.log(arr));
  };
  setDisplay = e => {
    e.preventDefault();
    this.setState({ open: !this.state.open });
  };
  changeRepo = repo => {
    console.log(repo);
    const { weather, higherLower, menu } = this.state;
    let obj = {};
    repo === "menu"
      ? (obj = menu)
      : repo === "higherLower"
      ? (obj = higherLower)
      : (obj = weather);
    this.setState(
      {
        selectedRepo: obj
      },
      () => console.log(this.state.selectedRepo)
    );
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
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h4 style={{ fontFamily: "open sans, roboto" }}>Github Repos</h4>
            <p className="lead">
              <small>
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
            className="img-responsive col-lg-4 col-sm-12 "
            style={{ marginTop: "2%" }}
          >
            <h3
              style={{ textAlign: "center", fontFamily: "open sans, roboto" }}
            >
              Weather Forecast
            </h3>
            <img
              onClick={() => this.changeRepo("weather")}
              style={{ height: "250px", overflow: "hidden" }}
              src={weather}
              className="d-block w-100 img-responsive col-12 repoCard "
            />
          </div>
          <div
            className="img-responsive col-lg-4 col-sm-12 "
            style={{ marginTop: "2%" }}
          >
            <h3
              style={{ textAlign: "center", fontFamily: "open sans, roboto" }}
            >
              Higher-Lower
            </h3>
            <img
              onClick={() => this.changeRepo("higherLower")}
              style={{ height: "250px", overflow: "hidden" }}
              src={higherlower}
              className="d-block w-100 img-responsive col-12 repoCard "
            />
          </div>
          <div
            className="img-responsive col-lg-4 col-sm-12 "
            style={{ marginTop: "2%" }}
          >
            <h3
              style={{ textAlign: "center", fontFamily: "open sans, roboto" }}
            >
              Restaurant Menu
            </h3>
            <img
              onClick={() => this.changeRepo("menu")}
              style={{ height: "250px", overflow: "hidden" }}
              src={menu}
              className="d-block w-100 img-responsive col-12 repoCard "
            />
          </div>
        </div>
        <div className="container" style={{ marginTop: "3%" }}>
          <p>
            <button
              className="btn "
              data-toggle="collapse"
              href="#collapseExample"
              role="button"
              style={{ backgroundColor: "#138496", color: "white" }}
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <span>Click to Hide or Show</span>
            </button>
          </p>
          <div className="collapse show" id="collapseExample">
            <b style={{ fontFamily: "Palatino, URW Palladio L, serif" }}>
              {this.state.selectedRepo.name}
            </b>
            <div className="card card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Portfolio;
