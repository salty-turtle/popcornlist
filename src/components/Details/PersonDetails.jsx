import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { requestPerson } from "../../redux/actions/index";
import Rating from "react-rating";
import "./Details.scss";
import ItemCard from "../Carousel/ItemCard";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";

function PersonDetails(props) {
  const { personId } = useParams();
  const dispatch = useDispatch();

  const config = useSelector((state) => state.config);
  const person = useSelector((state) => state.person);

  useEffect(() => {
    dispatch(requestPerson(personId));
  }, []);

  console.log(person);

  // useEffect(() => {
  //   var recommendedShowSwiper = new Swiper(".recommended-show-swiper", {
  //     breakpoints: {
  //       320: {
  //         slidesPerView: 1,
  //         spaceBetween: 20,
  //       },
  //       480: {
  //         slidesPerView: 2,
  //         spaceBetween: 20,
  //       },
  //       640: {
  //         slidesPerView: 3,
  //         spaceBetween: 40,
  //       },
  //       768: {
  //         slidesPerView: 4,
  //         spaceBetween: 70,
  //       },
  //       1024: {
  //         slidesPerView: 5,
  //         spaceBetween: 90,
  //       },
  //       1600: {
  //         slidesPerView: 6,
  //         spaceBetween: 110,
  //       },
  //     },
  //     scrollbar: {
  //       el: ".scrollbar-1",
  //       draggable: true,
  //     },
  //   });
  // });

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
            <img
              src={`${config.images.secure_base_url}${config.images.profile_sizes[2]}${person.profile_path}`}
            ></img>
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
      {/* <div className="carousel-container">
        <div className="carousel-header">
          <span className="carousel-title">Recommended</span>
        </div>
        <div className="carousel-wrapper">
          <div className="swiper-container recommended-show-swiper">
            <div className="swiper-wrapper">
              {person.recommendations.results.map((item) => (
                <ItemCard
                  item={item}
                  config={config}
                  genreList={genreList}
                  selection={false}
                  url={"/shows/"}
                />
              ))}
            </div>
            <div className="swiper-scrollbar scrollbar-1"></div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
export default PersonDetails;
