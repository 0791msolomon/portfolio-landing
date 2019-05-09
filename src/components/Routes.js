import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
const Routes = props => {
  return (
    <div
      className="container col-12"
      style={{
        width: "100%",
        minHeight: "50vh"
      }}
    >
      <Route exact path="/" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/demo" component={Portfolio} />
    </div>
  );
};

export default Routes;
