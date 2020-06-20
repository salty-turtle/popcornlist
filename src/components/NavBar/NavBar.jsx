import React from "react";
import "./NavBar.scss";
import logo from "../../images/popcorn.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-container">
      <div className="nav-logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
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
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/shows">TV Shows</Link>
          </li>
          <li>
            <Link to="/people">People</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;