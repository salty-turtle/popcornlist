import React from "react";
import "./NotFound.scss";
import notFound404 from "../../images/404.svg";

function NotFound() {
  return (
    <div className="notfound-container">
      <div className="notfound-text">404</div>
      <div className="notfound-text">Page not found.</div>
      <img src={notFound404} alt="404" className="notfound-image"></img>
    </div>
  );
}

export default NotFound;
