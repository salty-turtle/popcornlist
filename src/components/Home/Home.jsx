import React from "react";
import HomeSlide from "../HomeSlide/HomeSlide";
import PopularMovieCarousel from "../Carousel/PopularMovieCarousel";
import TopRatedMovieCarousel from "../Carousel/TopRatedMovieCarousel";
import UpcomingMovieCarousel from "../Carousel/UpcomingMovieCarousel";

function Home() {
  return (
    <div>
      <HomeSlide />
      <UpcomingMovieCarousel />
      <PopularMovieCarousel />
      <TopRatedMovieCarousel />
    </div>
  );
}

export default Home;
