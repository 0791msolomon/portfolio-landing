import React from "react";
import "../index.css";
const SidebarToggle = props => {
  return (
    <div id="content">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <button type="button" id="sidebarCollapse" class="btn btn-info">
            <i class="fas fa-align-left" />
            <span>Toggle Sidebar</span>
          </button>
        </div>
      </nav>
    </div>
  );
};
export default SidebarToggle;
