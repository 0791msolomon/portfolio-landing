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
          <h3 style={{ fontFamily: "open sans, roboto" }}>
            Matthew Solomon <i class="fas fa-cog fa-spin" />
          </h3>
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
            <Link to="/">
              About <i class="far fa-question-circle " />
            </Link>
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
                title="Incomplete, components under construction but it is viewable"
              >
                <a
                  rel="noopener noreferrer"
                  href="http://matthew-s-blog.herokuapp.com"
                  target="_blank"
                >
                  Blog <i class="fas fa-comment" />
                </a>
              </li>
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
                  Weather <i class="fas fa-umbrella" />
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
                  HigherLower <i class="fas fa-sort" />
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
                  Restaurant Menu <i class="far fa-calendar-minus" />
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
            <Link to="/demo">
              Activity <i class="fas fa-chart-line" />
            </Link>
          </li>
          <li>
            <Link to="/contact">
              Contact <i class="far fa-comment-alt" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Sidebar;
