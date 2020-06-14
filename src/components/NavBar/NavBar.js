import React, { Component } from "react";
import "./NavBar.scss";
import logo from "../../images/popcorn.png";

class NavBar extends Component {
  render() {
    return (
      <div className="nav-container">
        <div className="nav-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="search-container">
          <input
            type="text"
            className="search-box"
            placeholder="Search Movies, TV Shows..."
          />
          <div className="search-btn">
            <i className="fas fa-search"></i>
          </div>
        </div>
        <nav className="nav-items">
          <ul>
            <li>
              <a href="#">Movies</a>
            </li>
            <li>
              <a href="#">TV Shows</a>
            </li>
            <li>
              <a href="#">People</a>
            </li>
            <li></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavBar;
