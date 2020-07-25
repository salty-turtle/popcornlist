import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { requestPerson } from "../../redux/actions/index";
import "./Details.scss";
import "swiper/css/swiper.min.css";
import poster from "../../images/poster.svg";

function PersonDetails(props) {
  const { personId } = useParams();
  const dispatch = useDispatch();

  const config = useSelector((state) => state.config);
  const person = useSelector((state) => state.person);

  useEffect(() => {
    dispatch(requestPerson(personId));
  }, []);

  function displayInfo(birthLocation, birthday, deathday) {
    const result = [];

    result.push(birthLocation);

    result.push(`Born: ${birthday}`);

    if (deathday) {
      result.push(`Passed: ${deathday}`);
    }

    return result.join(" | ");
  }

  function displayImdb(id) {
    if (id) {
      return (
        <React.Fragment>
          <a href={`https://www.imdb.com/name/${id}`} target="_blank">
            <button className="button2">
              <i className="fab fa-imdb"></i> IMDb
            </button>
          </a>
        </React.Fragment>
      );
    }
  }

  function displayWebsite(homepage) {
    if (homepage) {
      return (
        <React.Fragment>
          <a href={homepage} target="_blank">
            <button className="button3">
              <i className="fas fa-link"></i> Website
            </button>
          </a>
        </React.Fragment>
      );
    }
  }

  return person.loading ? (
    <div></div>
  ) : (
    <div>
      <div className="item-wrapper">
        <div className="item-container">
          <div className="item-poster">
            {person.profile_path ? (
              <img
                src={`${config.images.secure_base_url}${config.images.profile_sizes[2]}${person.profile_path}`}
                alt=""
              ></img>
            ) : (
              <img src={poster} alt="" className="item-placeholder"></img>
            )}
          </div>
          <div className="item-text-container">
            <div className="item-title">{person.name}</div>
            <div className="item-info">
              {displayInfo(
                person.place_of_birth,
                person.birthday,
                person.deathday
              )}
            </div>
            <div className="item-secondary-title">Biography</div>
            <div className="item-synopsis">{person.biography}</div>
            <div className="buttons-container">
              {displayImdb(person.imdb_id)}
              {displayWebsite(person.homepage)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PersonDetails;
