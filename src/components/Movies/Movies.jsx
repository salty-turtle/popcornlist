import React, { useState } from "react";
import "./Movies.scss";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useSelector } from "react-redux";
import chroma from 'chroma-js';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function Movies() {
  const [startDate, setStartDate] = useState(new Date());
  const animatedComponents = makeAnimated();
  const options = [];
  const genres = useSelector((state) => state.genres.genreList);
  if (genres.length > 1) {
    genres[0].map((genre) =>
      options.push({ value: genre.id, label: genre.name })
    );
  }
  const [selectedGenre, setSelectedGenre] = React.useState([]);

  const sortOptions = [
    { value: "popularity.desc", label: "Popularity Descending" },
    { value: "popularity.asc", label: "Popularity Ascending" },
    { value: "vote_average.desc", label: "Rating Descending" },
    { value: "vote_average.asc", label: "Rating Ascending" },
    { value: "primary_release_date.desc", label: "Release Date Descending" },
    { value: "primary_release_date.asc", label: "Release Date Ascending" },
  ];

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

  const colourStyles = {
    control: styles => ({ ...styles, backgroundColor: 'white' }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      const color = chroma("black");
      return {
        ...styles,
        backgroundColor: isDisabled
          ? null
          : isSelected
          ? "black"
          : isFocused
          ? color.alpha(0.1).css()
          : null,
        color: isDisabled
          ? '#ccc'
          : isSelected
          ? chroma.contrast(color, 'white') > 2
            ? 'white'
            : '"black"'
          : "black",
        cursor: isDisabled ? 'not-allowed' : 'default',
  
        ':active': {
          ...styles[':active'],
          backgroundColor: !isDisabled && (isSelected ? "black" : color.alpha(0.3).css()),
        },
      };
    },
    multiValue: (styles, { data }) => {
      const color = chroma("black");
      return {
        ...styles,
        backgroundColor: color.alpha(0.1).css(),
      };
    },
    multiValueLabel: (styles, { data }) => ({
      ...styles,
      color: "black",
    }),
    multiValueRemove: (styles, { data }) => ({
      ...styles,
      color: "black",
      ':hover': {
        backgroundColor: "black",
        color: 'white',
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
          <Select styles={selectStyle} options={sortOptions} />
        </div>
        <div className="discover-genre-container">
          <div className="discover-secondary-title">Genre</div>
          <Select
            className="genres-dropdown"
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            value={selectedGenre}
            options={options}
            onChange={(selectedOptions) => {
              setSelectedGenre(selectedOptions);
              console.log(selectedOptions,"Selected genre options");
            }}
            styles={colourStyles}
          />
        </div>
        <div className="discover-date-container">
          <div className="discover-secondary-title">Date</div>
          <div className="discover-date-menu">
            <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
      />
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
