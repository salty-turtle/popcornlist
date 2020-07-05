import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { requestSearchPeople } from "../../redux/actions/index";
import "./Search.scss";
import poster from "../../images/poster.svg";
import Pagination from "../Pagination/Pagination";
import { useEffect } from "react";

function SearchPeople(props) {
  const dispatch = useDispatch();
  const { searchQuery } = useParams();

  const config = useSelector((state) => state.config);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(requestSearchPeople(searchQuery, currentPage));
  }, [currentPage]);

  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return props.people.loading ? (
    <div></div>
  ) : (
    <>
      <div className="search-container">
        {props.people.results.map((person) => {
          return (
            <Link to={`/people/${person.id}`} className="search-item">
              {person.profile_path ? (
                <img
                  src={`${config.images.secure_base_url}${config.images.profile_sizes[2]}${person.profile_path}`}
                  className="search-img"
                ></img>
              ) : (
                <img src={poster} className="search-img-placeholder"></img>
              )}
              <div className="search-item-title">{person.name}</div>
            </Link>
          );
        })}
      </div>
      <Pagination items={props.people} paginate={paginate} />
    </>
  );
}

export default SearchPeople;
