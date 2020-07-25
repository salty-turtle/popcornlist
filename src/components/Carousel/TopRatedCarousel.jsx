import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ItemCard from "./ItemCard.jsx";
import "./Carousel.scss";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";

function TopRatedCarousel(props) {
  const movies = useSelector((state) => state.movies);
  const config = useSelector((state) => state.config);
  const genres = useSelector((state) => state.genres);
  const shows = useSelector((state) => state.shows);
  const [selection, toggleSelection] = useState(true);
  const media = () => {
    return selection ? movies : shows;
  };
  const genreList = new Map();
  genres.genreList.forEach((item) =>
    item.map((genre) => genreList.set(genre.id, genre.name))
  );

  useEffect(() => {
    var topRatedSwiper = new Swiper(".top-rated-swiper", {
      breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 70,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 90,
        },
        1600: {
          slidesPerView: 6,
          spaceBetween: 110,
        },
      },
      scrollbar: {
        el: ".scrollbar-2",
        draggable: true,
      },
    });
  });

  return media().topRated.loading ? (
    <div></div>
  ) : (
    <div className="carousel-container">
      <div className="carousel-header">
        <span className="carousel-title">Top Rated</span>
        <button
          className="toggle-media"
          onClick={() => toggleSelection(!selection)}
        >
          <span
            style={
              selection
                ? { color: "#db3636", transition: "0.3s" }
                : { color: "#f1e7e3", transition: "0.3s" }
            }
          >
            Movies
          </span>{" "}
          <span
            style={
              !selection
                ? { color: "#db3636", transition: "0.3s" }
                : { color: "#f1e7e3", transition: "0.3s" }
            }
          >
            Shows
          </span>
        </button>
      </div>
      <div className="carousel-wrapper">
        <div className="swiper-container top-rated-swiper">
          <div className="swiper-wrapper">
            {media()
              .topRated.results.slice(0, 20)
              .map((item) => (
                <ItemCard
                  item={item}
                  config={config}
                  genreList={genreList}
                  selection={selection}
                  url={selection ? "/movies/" : "/shows/"}
                />
              ))}
          </div>
          <div class="swiper-scrollbar scrollbar-2"></div>
        </div>
      </div>
    </div>
  );
}

export default TopRatedCarousel;
