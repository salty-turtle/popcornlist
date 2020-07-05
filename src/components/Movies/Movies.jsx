import React, {useState} from "react";
import "./Movies.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Movies() {
    const [startDate, setStartDate] = useState(new Date());

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
