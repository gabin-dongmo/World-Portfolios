import React, { FC } from "react";

import Profile from "../models/Profile";
import "./../styles/card.scss";

const ProfileCard: FC<Profile> = ({ name, link, tags }) => {
  return (
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
  );
};

export default ProfileCard;
