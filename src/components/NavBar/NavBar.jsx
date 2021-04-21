import React, {useState} from 'react';
import './NavBar.scss';
import logo from '../../images/logo.svg';
import {Link, useHistory} from 'react-router-dom';

function NavBar() {
  let history = useHistory();

  const [searchStr, setSearchStr] = useState('');
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  function handleChange(e) {
    setSearchStr(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    history.push(`/search/${searchStr}`);
  }

  return (
    <div>
      <div className="nav-container">
        <button className="hamburger-menu" type="button" onClick={handleToggle}>
          {toggle ? <i class="fas fa-times" /> : <i class="fas fa-bars" />}
        </button>
        <nav className="nav-items">
          <ul className="menu">
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
        <div className="nav-search-container">
          <form className="nav-search-form" onSubmit={e => handleSubmit(e)}>
            <input
              type="text"
              className="nav-search-box"
              placeholder="Search Movies, TV Shows..."
              onChange={e => handleChange(e)}
            />
            <button type="submit" className="nav-search-btn">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>
      </div>
      <div className="nav-padding" />
      {toggle && (
        <nav className="nav-items">
          <ul className="menu-mobile">
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
      )}
    </div>
  );
}

export default NavBar;
