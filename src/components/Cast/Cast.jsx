import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import "../../styles/_carousel.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Cast.scss";
import placeholder from "../../images/placeholder.png";

function Cast({ credits }) {
  const config = useSelector((state) => state.config);

  useEffect(() => {
    var castSwiper = new Swiper(".cast-swiper", {
      breakpoints: {
        // 480: {
        //   slidesPerView: 2,
        //   spaceBetween: 10,
        // },
        // 640: {
        //   slidesPerView: 2,
        //   spaceBetween: 10,
        // },
        1: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        800: {
          slidesPerView: 4,
          spaceBetween: 60,
        },
        1400: {
          slidesPerView: 7,
          spaceBetween: 20,
        },
        1600: {
          slidesPerView: 9,
          spaceBetween: 30,
        },
      },
    });
  });

  return (
    <div className="swiper-container cast-swiper">
      <div className="swiper-wrapper cast-swiper-wrapper">
        {credits.cast.map((cast) => {
          return (
            <div className="swiper-slide cast-slide">
              {cast.profile_path ? (
                <Link to={`/people/${cast.id}`}>
                  <img
                    className="cast-card-img"
                    src={`${config.images.secure_base_url}${config.images.profile_sizes[1]}${cast.profile_path}`}
                  />
                </Link>
              ) : (
                <Link to={`/people/${cast.id}`}>
                  <img className="cast-card-img" src={placeholder} />
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cast;
