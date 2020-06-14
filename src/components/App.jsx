import React from "react";
import NavBar from "./NavBar/NavBar.jsx";
import Home from "./Home/Home.jsx";
import Movies from "./Movies/Movies.jsx";
import Shows from "./Shows/Shows.jsx";
import People from "./People/People.jsx";
import SearchBar from "./SearchBar/SearchBar.jsx";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
      </div>
      <Switch>
        <Route exact path="/movies" component={Movies}></Route>
        <Route exact path="/shows" component={Shows}></Route>
        <Route exact path="/people" component={People}></Route>
        <Route exact path="/searchbar" component={SearchBar}></Route>
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default App;
