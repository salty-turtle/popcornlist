import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "./NavBar/NavBar.jsx";
import Home from "./Home/Home.jsx";
import Movies from "./Movies/Movies.jsx";
import Shows from "./Shows/Shows.jsx";
import People from "./People/People.jsx";
import MovieDetails from "./MovieDetails/MovieDetails.jsx";
import { requestConfig } from "../redux/actions/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from "../redux/store/index.jsx";

function App(props) {
  // const config = useSelector(state => state.config);
  const dispatch = useDispatch();
  const config = useSelector((state) => state.config);

  useEffect(() => {
    dispatch(requestConfig());
  }, []);

  store.subscribe(() => console.log(store.getState()));

  return config.loading ? (
    <div>LOADING...</div>
  ) : (
    <Router>
      <div>
        <NavBar />
      </div>
      <Switch>
        <Route exact path="/movies" component={Movies}></Route>
        <Route exact path="/movies/:movieId" component={MovieDetails}></Route>
        <Route exact path="/shows" component={Shows}></Route>
        <Route exact path="/people" component={People}></Route>
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default App;
