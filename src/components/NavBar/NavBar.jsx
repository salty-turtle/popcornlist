import React from "react";
import "./NavBar.scss";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <div className="nav-container">
        <nav className="nav-items">
          <ul>
            <li>
              <div className="nav-logo">
                <Link to="/">
                  <img src={logo} alt="logo" />
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/movies">Movies</Link>
            </li>
            <li className="nav-item">
              <Link to="/shows">TV Shows</Link>
            </li>
            <li className="nav-item">
              <Link to="/people">People</Link>
            </li>
          </ul>
        </nav>
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
      </div>
      <div className="nav-padding"></div>
    </div>
  );
}

export default NavBar;
