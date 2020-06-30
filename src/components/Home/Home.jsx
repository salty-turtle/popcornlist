import React from "react";
import HomeSlide from "../HomeSlide/HomeSlide";
import PopularCarousel from "../Carousel/PopularCarousel";
import TopRatedCarousel from "../Carousel/TopRatedCarousel";
import UpcomingCarousel from "../Carousel/UpcomingCarousel";

function Home() {
  return (
    <div>
      <HomeSlide />
      <UpcomingCarousel />
      <PopularCarousel />
      <TopRatedCarousel />
    </div>
  );
}

export default Home;
