import React from "react";
import "./Movies.scss";
import Select from "react-select";

function Movies() {
  const sortOptions = [
    { value: "popularity.desc", label: "Popularity Descending" },
    { value: "popularity.asc", label: "Popularity Ascending" },
    { value: "vote_average.desc", label: "Rating Descending" },
    { value: "vote_average.asc", label: "Rating Ascending" },
    { value: "primary_release_date.desc", label: "Release Date Descending" },
    { value: "primary_release_date.asc", label: "Release Date Ascending" },
  ];

  const genreOptions = [{ value: "genre1", label: "genre1" }];

  const selectStyle = {
    menu: (provided, state) => ({
      ...provided,
      border: "0px",
      color: "#f1e7e3",
      backgroundColor: "#303030",
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "#1b181d" : "#f1e7e3",
      backgroundColor: state.isSelected ? "#db3636" : "#303030",
      "&:hover": {
        color: "#1b181d",
        backgroundColor: "#db3636",
      },
    }),
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "#303030",
      border: state.isFocused ? 0 : 0,
      boxShadow: state.isFocused ? 0 : 0,
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: "#f1e7e3",
    }),
    menuList: (provided, state) => ({
      ...provided,
      color: "#f1e7e3",
      backgroundColor: "#303030",
    }),
  };

  return (
    <div className="discover-container">
      <div className="discover-title-container">
        <div className="discover-title">Discover Movies</div>
      </div>
      <div className="discover-filter-container">
        <div className="discover-sort-container">
          <div className="discover-secondary-title">Sort By</div>
          <Select styles={selectStyle} options={sortOptions} />
        </div>
        <div className="discover-genre-container">
          <div className="discover-secondary-title">Genre</div>
          <Select styles={selectStyle} options={genreOptions} isMulti />
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
