import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

const Sidebar = props => {
  return (
    <div
      class="wrapper"
      style={{ minHeight: "100%", margin: "0%", padding: "0%" }}
    >
      <nav id="sidebar" style={{ minHeight: "100%" }}>
        <div class="sidebar-header">
          <h3 style={{ fontFamily: "open sans, roboto" }}>Matthew Solomon</h3>
          <hr
            style={{
              fontWeight: "bold",
              color: "white",
              backgroundColor: "white"
            }}
          />
        </div>

        <ul class="list-unstyled components">
          <p>{"Info & Links"}</p>

          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <a
              href="#pageSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              class="dropdown-toggle"
            >
              Small Projects
            </a>
            <ul class="collapse list-unstyled" id="pageSubmenu">
              <li>
                <a
                  href="http://matthew-s-weather.herokuapp.com"
                  target="_blank"
                >
                  Weather
                </a>
              </li>
              <li>
                <a
                  href="http://matthew-s-higherLower.herokuapp.com"
                  target="_blank"
                >
                  HigherLower
                </a>
              </li>
              <li
                data-toggle="tooltip"
                data-placement="bottom"
                title="Under Construction"
              >
                <a>Voting</a>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/demo">Demo Action</Link>
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
