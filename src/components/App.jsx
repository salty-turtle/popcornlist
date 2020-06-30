import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "./NavBar/NavBar.jsx";
import Home from "./Home/Home.jsx";
import Movies from "./Movies/Movies.jsx";
import Shows from "./Shows/Shows.jsx";
import People from "./People/People.jsx";
import MovieDetails from "./MovieDetails/MovieDetails.jsx";
import ShowDetails from "./ShowDetails/ShowDetails.jsx";
import {
  requestConfig,
  requestMovieGenres,
  requestShowGenres,
} from "../redux/actions/index";
import { Switch, Route, useLocation } from "react-router-dom";
import store from "../redux/store/index.jsx";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../styles/_transition.scss";

function App(props) {
  const location = useLocation();
  console.log(location);
  const dispatch = useDispatch();
  const config = useSelector((state) => state.config);

  useEffect(() => {
    dispatch(requestConfig());
    dispatch(requestMovieGenres());
    dispatch(requestShowGenres());
  }, []);

  // store.subscribe(() => console.log(store.getState()));

  return config.loading ? (
    <div>LOADING...</div>
  ) : (
    <div>
      <div>
        <NavBar />
      </div>
      <TransitionGroup className="transition-container">
        <CSSTransition
          key={location.key}
          classNames="fade"
          timeout={{ enter: 500 }}
        >
          <section className="transition-routes">
            <Switch location={location}>
              <Route exact path="/movies" component={Movies}></Route>
              <Route
                exact
                path="/movies/:movieId"
                component={MovieDetails}
              ></Route>
              <Route exact path="/shows" component={Shows}></Route>
              <Route
                exact
                path="/shows/:showId"
                component={ShowDetails}
              ></Route>
              <Route exact path="/people" component={People}></Route>
              <Route exact path="/" component={Home}></Route>
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
