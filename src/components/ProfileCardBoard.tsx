import React, { FC } from "react";

import Profile from "../models/Profile";
import ProfileCard from "./ProfileCard";

interface CardBoardProps {
  profiles: Profile[];
}

const ProfileCardBoard: FC<CardBoardProps> = ({ profiles }) => {
  return (
    <div className="main-container-body">
      {profiles.map((profile, index) => (
        <ProfileCard
          key={index}
          id={profile.id}
          name={profile.name}
          link={profile.link}
          tags={profile.tags}
        />
      ))}
      {profiles.length === 0 && <h2>No portfolios found ...</h2>}
    </div>
  );
};

export default ProfileCardBoard;
