import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/Routes";
import Sidebar from "./components/Sidebar";
import SidebarToggle from "./components/SidebarToggle";
import Footer from "./components/Footer";
function App() {
  return (
    <div
      style={{
        minHeight: "100%",
        display: "flex",
        flexDirection: "row",
        margin: "0%",
        padding: "0%"
      }}
    >
      <Router>
        <Sidebar />
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            padding: "0",
            margin: "0"
          }}
        >
          <SidebarToggle />
          <div
            className="content"
            style={{
              alignSelf: "center",
              paddingTop: "5%",
              paddingBottom: "5%",
              width: "100%"
            }}
          >
            <Routes />
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
