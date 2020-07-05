import React, { useState } from "react";
import "./Movies.scss";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useSelector } from "react-redux";
import chroma from 'chroma-js';


function Movies() {
  const animatedComponents = makeAnimated();
  const options = [];
  const genres = useSelector((state) => state.genres.genreList);
  if (genres.length > 1) {
    genres[0].map((genre) =>
      options.push({ value: genre.id, label: genre.name })
    );
  }
  const [selectedGenre, setSelectedGenre] = React.useState([]);
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
          <div>[DROPDOWN]</div>
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
