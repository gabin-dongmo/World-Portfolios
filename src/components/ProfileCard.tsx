import React from "react";

import Profile from "../models/Profile";
import "./../styles/card.scss";

const ProfileCard = ({ name, link, tags }: Profile) => {
  return (
    <React.Fragment>
      <div className="card">
        <div className="card-container">
          <h2>{name}</h2>
          <a href={link} target="_blank">
            {link}
          </a>
        </div>
        <div className="card-tags">
          {tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProfileCard;
