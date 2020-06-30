import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import "../../styles/_carousel.scss";
import { useSelector } from "react-redux";
import "./Cast.scss";
import placeholder from "../../images/placeholder.png";

function Cast() {
  const config = useSelector((state) => state.config);
  const credits = useSelector((state) => state.credits);

  useEffect(() => {
    var castSwiper = new Swiper(".cast-swiper", {
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        // 480: {
        //   slidesPerView: 2,
        //   spaceBetween: 10,
        // },
        // 640: {
        //   slidesPerView: 2,
        //   spaceBetween: 10,
        // },
        900: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1000: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 20,
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
                <img
                  className="cast-card-img"
                  src={`${config.images.secure_base_url}${config.images.profile_sizes[1]}${cast.profile_path}`}
                />
              ) : (
                <img className="cast-card-img" src={placeholder} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cast;
