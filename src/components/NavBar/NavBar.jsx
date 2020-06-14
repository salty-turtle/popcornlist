import React, { Component } from "react";
import "./NavBar.scss";
import logo from "../../images/popcorn.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
        <div className="nav-container">
          <div className="nav-logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <nav className="nav-items">
            <ul>
              <li>
                <Link to="/movies">Movies</Link>
              </li>
              <li>
                <Link to="/shows">TV Shows</Link>
              </li>
              <li>
                <Link to="/people">People</Link>
              </li>
              <li>
              <Link to="/searchbar">Search Bar</Link>
              </li>
            </ul>
          </nav>
        </div>
    );
  }
}

export default NavBar;
