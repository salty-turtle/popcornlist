import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useSelector } from "react-redux";
import "./Movies.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../styles/_datepicker.scss";
import API from "../../api/api";

function Movies() {
  const [startDate, setStartDate] = useState(new Date());
  const animatedComponents = makeAnimated();
  const genreOptions = [];
  const genres = useSelector((state) => state.genres.genreList);
  if (genres.length > 1) {
    genres[0].map((genre) =>
      genreOptions.push({ value: genre.id, label: genre.name })
    );
  }

  const sortOptions = [
    { value: "popularity.desc", label: "Popularity Descending" },
    { value: "popularity.asc", label: "Popularity Ascending" },
    { value: "vote_average.desc", label: "Rating Descending" },
    { value: "vote_average.asc", label: "Rating Ascending" },
    { value: "primary_release_date.desc", label: "Release Date Descending" },
    { value: "primary_release_date.asc", label: "Release Date Ascending" },
  ];

  const [selectedGenre, setSelectedGenre] = React.useState(genreOptions[0]);

  const [selectedOption, setSelectedOption] = useState(sortOptions[0]);

  const createMovieRequest = (sortSelection, genreSelection) => {
    let genreRequests = "";
    if (Array.isArray(genreSelection)) {
      let genreArr = [];
      genreSelection.map((selection) => genreArr.push(selection.value));
      genreRequests = genreArr.join(",");
    } else if (genreSelection) {
      genreRequests = genreSelection.value;
    }
    console.log(genreRequests, "Genre ids to search for");
    let movieParams = {
      params: {
        language: "en-US",
        region: "US",
        sort_by: sortSelection,
        with_genres: genreRequests,
        include_adult: false,
      },
    };
    API.get("/discover/movie", movieParams).then((res) =>
      console.log(res.data.results, "Search results")
    );
  };

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
    multiValue: (provided, state) => ({
      ...provided,
      backgroundColor: "#db3636",
    }),
    multiValueLabel: (provided, state) => ({
      ...provided,
      color: "#303030",
    }),
    multiValueRemove: (provided, state) => ({
      ...provided,
      color: "#303030",
      "&:hover": {
        opacity: "0.6",
        // backgroundColor: "#f1e7e3",
        // color: "#303030",
        backgroundColor: "#f1e7e3",
        color: "#db3636",
      },
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
          <Select
            styles={selectStyle}
            options={sortOptions}
            defaultValue={sortOptions[0]}
            value={selectedOption}
            onChange={(option) => setSelectedOption(option.value)}
          />
        </div>
        <div className="discover-genre-container">
          <div className="discover-secondary-title">Genre</div>
          <Select
            styles={selectStyle}
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            defaultValue={selectedGenre}
            value={selectedGenre}
            options={genreOptions}
            onChange={(selectedOptions) => {
              setSelectedGenre(selectedOptions);
            }}
          />
        </div>
        <div className="discover-date-container">
          <div className="discover-secondary-title">Date</div>
          <DatePicker
            className="date-picker"
            dateFormat="yyyy-MM-dd"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <div className="discover-date-menu"></div>
        </div>
        {/* <div className="discover-date-container">
          <div className="discover-secondary-title">Date</div>
          <div className="discover-date-menu">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
        </div> */}
        <button
          onClick={() => createMovieRequest(selectedOption, selectedGenre)}
        >
          Search
        </button>
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
