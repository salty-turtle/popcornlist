import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import "./Pagination.scss";

function Pagination(props) {
  const { searchQuery } = useParams();

  const location = useLocation();

  function displayPreviousButton() {
    if (props.movies.page > 1) {
      return (
        <Link to={`/search/${searchQuery}?page=${props.movies.page - 1}`}>
          <button className="pagination-button">
            <i class="fas fa-arrow-left prev"></i>
            {`Page ${props.movies.page - 1}`}
          </button>
        </Link>
      );
    }
  }

  function displayNextButton() {
    if (props.movies.page < props.movies.total_pages) {
      return (
        <Link to={`/search/${searchQuery}?page=${props.movies.page + 1}`}>
          <button className="pagination-button">
            {`Page ${props.movies.page + 1}`}
            <i class="fas fa-arrow-right next"></i>
          </button>
        </Link>
      );
    }
  }

  return (
    <div
      className={`pagination-button-container ${
        props.movies.page === 1 ? "one-button" : "both-buttons"
      }`}
    >
      {displayPreviousButton()}
      {displayNextButton()}
    </div>
  );
}

export default Pagination;
