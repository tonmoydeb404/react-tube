import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ id, image, title, channelTitle }) => {
  return (
    <div className="card">
      <Link to={`/watch/${id}`} className="d-block text-decoration-none">
        <img
          src={image}
          alt={title}
          title={title}
          className="card-img-top img-fluid"
        />
      </Link>

      <div className="card-body">
        <Link to={`/watch/${id}`} className="d-block text-decoration-none">
          <h2 className="card-title fs-6 text-dark truncate-text">{title}</h2>
        </Link>
        <small className="text-muted">{channelTitle}</small>
      </div>
    </div>
  );
};

export default VideoCard;
