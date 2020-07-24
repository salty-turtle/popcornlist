import React from "react";
import "./Pagination.scss";

function Pagination(props) {
  function displayPreviousButton() {
    if (props.items.page > 1) {
      return (
        <button
          className="pagination-button"
          onClick={() => props.paginate(props.items.page - 1)}
        >
          <i class="fas fa-arrow-left prev"></i>
          {`Page ${props.items.page - 1}`}
        </button>
      );
    }
  }

  function displayNextButton() {
    if (props.items.page < props.items.total_pages) {
      return (
        <button
          className="pagination-button"
          onClick={() => props.paginate(props.items.page + 1)}
        >
          {`Page ${props.items.page + 1}`}
          <i class="fas fa-arrow-right next"></i>
        </button>
      );
    }
  }

  return (
    <div
      className={`pagination-button-container ${
        props.items.page === 1 ? "one-button" : "both-buttons"
      }`}
    >
      {displayPreviousButton()}
      {displayNextButton()}
    </div>
  );
}

export default Pagination;
