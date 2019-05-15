import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

const Sidebar = props => {
  return (
    <div
      className="wrapper"
      style={{ minHeight: "100%", margin: "0%", padding: "0%" }}
    >
      <nav id="sidebar" style={{ minHeight: "100%" }}>
        <div className="sidebar-header">
          <h3 style={{ fontFamily: "open sans, roboto" }}>Matthew Solomon</h3>
          <hr
            style={{
              fontWeight: "bold",
              color: "white",
              backgroundColor: "white"
            }}
          />
        </div>

        <ul className="list-unstyled components">
          <p>{"Info & Links"}</p>

          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              href="#pageSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              Small Projects
            </a>
            <ul className="collapse list-unstyled" id="pageSubmenu">
              <li
                data-toggle="tooltip"
                data-placement="bottom"
                title="Apps are hosted for free on Heroku so they may take a while to load initially, if page fails on first attempt just refresh"
              >
                <a
                  rel="noopener noreferrer"
                  href="http://matthew-s-weather.herokuapp.com"
                  target="_blank"
                >
                  Weather
                </a>
              </li>
              <li
                data-toggle="tooltip"
                data-placement="bottom"
                title="Apps are hosted for free on Heroku so they may take a while to load initially, if page fails on first attempt just refresh"
              >
                <a
                  href="http://matthew-s-higherLower.herokuapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  HigherLower
                </a>
              </li>
              <li
                data-toggle="tooltip"
                data-placement="bottom"
                title="Apps are hosted for free on Heroku so they may take a while to load initially, if page fails on first attempt just refresh"
              >
                <a
                  href="http://matthew-s-menu.herokuapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Restaurant Menu
                </a>
              </li>
              {/* <li
                data-toggle="tooltip"
                data-placement="bottom"
                title="Under Construction"
              >
                <a>Voting</a>
              </li> */}
            </ul>
          </li>
          <li>
            <Link to="/demo">Activity</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Sidebar;
