import React, { useState, useEffect } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Discover.scss";
import poster from "../../images/poster.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../styles/_datepicker.scss";
import API from "../../api/api";
import Pagination from "../Pagination/Pagination";

function DiscoverMovies() {
  const config = useSelector((state) => state.config);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [discoverMovies, setDiscoverMovies] = useState({ loading: true });
  const [currentPage, setCurrentPage] = useState(1);

  const animatedComponents = makeAnimated();
  const genreOptions = [];
  const genres = useSelector((state) => state.genres);
  if (!genres.movies.loading) {
    genres.movies.genreList.map((genre) =>
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

  useEffect(() => {
    createMovieRequest(
      currentPage,
      selectedOption,
      selectedGenre,
      startDate,
      endDate
    );
  }, [currentPage]);

  const createMovieRequest = (
    page,
    sortSelection,
    genreSelection,
    startDate,
    endDate
  ) => {
    setDiscoverMovies({
      ...discoverMovies,
      loading: true,
    });

    let genreRequests = "";

    if (Array.isArray(genreSelection)) {
      let genreArr = [];
      genreSelection.map((selection) => genreArr.push(selection.value));
      genreRequests = genreArr.join(",");
    } else if (genreSelection) {
      genreRequests = genreSelection.value;
    }

    let movieParams = {
      params: {
        page: page,
        language: "en-US",
        region: "US",
        sort_by: sortSelection.value,
        with_genres: genreRequests,
        include_adult: false,
        "release_date.gte": startDate,
        "release_date.lte": endDate,
      },
    };

    API.get("/discover/movie", movieParams).then((res) =>
      setDiscoverMovies({
        ...discoverMovies,
        ...res.data,
        loading: false,
      })
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
      fontWeight: "700",
    }),
    multiValueRemove: (provided, state) => ({
      ...provided,
      color: "#303030",
      "&:hover": {
        opacity: "0.6",
        backgroundColor: "#f1e7e3",
        color: "#db3636",
      },
    }),
  };

  function handleSearch() {
    if (currentPage === 1) {
      createMovieRequest(
        currentPage,
        selectedOption,
        selectedGenre,
        startDate,
        endDate
      );
    } else {
      setCurrentPage(1);
    }
  }

  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return discoverMovies.loading ? (
    <div></div>
  ) : (
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
            onChange={(option) => setSelectedOption(option)}
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
          <div className="discover-input-container">
            <div className="discover-secondary-title">Start Date:</div>
            <DatePicker
              className="date-picker"
              dateFormat="yyyy-MM-dd"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              placeholderText="From"
            />
          </div>
          <br />
          <div className="discover-input-container">
            <div className="discover-secondary-title">End Date:</div>
            <DatePicker
              className="date-picker"
              dateFormat="yyyy-MM-dd"
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              placeholderText="To"
            />
          </div>
        </div>
        <div className="discover-button-container">
          <button className="discover-button" onClick={() => handleSearch()}>
            Search
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
      <hr className="discover-hr" />
      <div className="results-container">
        {discoverMovies.results.map((movie) => {
          return (
            <Link to={`/movies/${movie.id}`} className="result-item">
              {movie.poster_path ? (
                <img
                  src={`${config.images.secure_base_url}${config.images.poster_sizes[3]}${movie.poster_path}`}
                  alt=""
                  className="result-img"
                ></img>
              ) : (
                <img
                  src={poster}
                  alt=""
                  className="result-img-placeholder"
                ></img>
              )}
              <div className="result-item-title">{movie.title}</div>
            </Link>
          );
        })}
      </div>
      <Pagination items={discoverMovies} paginate={paginate} />
    </div>
  );
}

export default DiscoverMovies;
