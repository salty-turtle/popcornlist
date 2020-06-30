import React from "react";
import { Link } from "react-router-dom";
import "./Carousel.scss";

function ItemCard(props) {
  return (
    <div className="swiper-slide card-slide">
      <Link to={`${props.url}${props.item.id}`}>
        <img
          className="card-img"
          src={`${props.config.images.secure_base_url}${props.config.images.poster_sizes[1]}${props.item.poster_path}`}
        />
      </Link>
      <div className="card-details-container">
        <div className="card-details-title">{`${
          props.selection ? props.item.title : props.item.name
        } `}</div>
        <div className="card-details-genre">
          {props.item.genre_ids
            .map((id) => `${props.genreList.get(id)}`)
            .join(", ")}
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
