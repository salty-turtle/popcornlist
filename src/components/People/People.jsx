import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./People.scss";
import poster from "../../images/poster.svg";
import Pagination from "../Pagination/Pagination";
import API from "../../api/api";

function People() {
  const config = useSelector((state) => state.config);

  const [discoverPeople, setDiscoverPeople] = useState({ loading: true });
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    createPeopleRequest(currentPage);
  }, [currentPage]);

  const createPeopleRequest = (page) => {
    setDiscoverPeople({
      ...discoverPeople,
      loading: true,
    });

    API.get("/person/popular", {
      params: {
        page,
      },
    }).then((res) =>
      setDiscoverPeople({
        ...discoverPeople,
        ...res.data,
        loading: false,
      })
    );
  };

  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return discoverPeople.loading ? (
    <div></div>
  ) : (
    <div className="discover-container">
      <div className="discover-title-container">
        <div className="discover-title">Discover People</div>
      </div>
      <div className="results-container">
        {discoverPeople.results.map((person) => {
          return (
            <Link to={`/people/${person.id}`} className="result-item">
              {person.profile_path ? (
                <img
                  src={`${config.images.secure_base_url}${config.images.profile_sizes[2]}${person.profile_path}`}
                  className="result-img"
                ></img>
              ) : (
                <img src={poster} className="result-img-placeholder"></img>
              )}
              <div className="result-item-title">{person.name}</div>
            </Link>
          );
        })}
      </div>
      <Pagination items={discoverPeople} paginate={paginate} />
    </div>
  );
}

export default People;
