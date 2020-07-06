import React from "react";
import "./Movies.scss";

function Movies() {
  return (
    <div className="discover-container">
      <div className="discover-title-container">
        <div className="discover-title">Discover Movies</div>
      </div>
      <div className="discover-filter-container">
        <div className="discover-sort-container">
          <div className="discover-secondary-title">Sort By</div>
          <div>[DROPDOWN]</div>
        </div>
        <div className="discover-genre-container">
          <div className="discover-secondary-title">Genre</div>
          <div>[DROPDOWN]</div>
        </div>
        <div className="discover-date-container">
          <div className="discover-secondary-title">Date</div>
          <div className="discover-date-menu">
            <div>[YYYY]</div>
            <div>[MM]</div>
            <div>[DD]</div>
          </div>
        </div>
      </div>
      <div className="results-container">
        <div className="result-item">
          <div>[SEARCH RESULTS]</div>
        </div>
        <div className="result-item">
          <div>[SEARCH RESULTS]</div>
        </div>
        <div className="result-item">
          <div>[SEARCH RESULTS]</div>
        </div>
        <div className="result-item">
          <div>[SEARCH RESULTS]</div>
        </div>
        <div className="result-item">
          <div>[SEARCH RESULTS]</div>
        </div>
        <div className="result-item">
          <div>[SEARCH RESULTS]</div>
        </div>
        <div className="result-item">
          <div>[SEARCH RESULTS]</div>
        </div>
        <div className="result-item">
          <div>[SEARCH RESULTS]</div>
        </div>
        <div className="result-item">
          <div>[SEARCH RESULTS]</div>
        </div>
        <div className="result-item">
          <div>[SEARCH RESULTS]</div>
        </div>
      </div>
    </div>
  );
}

export default Movies;
