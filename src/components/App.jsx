import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "./NavBar/NavBar.jsx";
import Home from "./Home/Home.jsx";
import DiscoverMovies from "./Discover/DiscoverMovies.jsx";
import DiscoverShows from "./Discover/DiscoverShows.jsx";
import DiscoverPeople from "./Discover/DiscoverPeople.jsx";
import MovieDetails from "./Details/MovieDetails.jsx";
import ShowDetails from "./Details/ShowDetails.jsx";
import PersonDetails from "./Details/PersonDetails.jsx";
import Search from "./Search/Search.jsx";
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
              <Route exact path="/movies" component={DiscoverMovies}></Route>
              <Route
                exact
                path="/movies/:movieId"
                component={MovieDetails}
              ></Route>
              <Route exact path="/shows" component={DiscoverShows}></Route>
              <Route
                exact
                path="/shows/:showId"
                component={ShowDetails}
              ></Route>
              <Route exact path="/people" component={DiscoverPeople}></Route>
              <Route
                exact
                path="/people/:personId"
                component={PersonDetails}
              ></Route>
              <Route
                exact
                path="/search/:searchQuery"
                component={Search}
              ></Route>
              <Route exact path="/" component={Home}></Route>
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
