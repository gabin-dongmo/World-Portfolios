import React, { useContext } from "react";
import Card from "./Card";
import { DataContext } from "@/app/components/contexts/dataContext";
import {
  bodyStyle,
  containerStyle,
  headerStyle,
  searchStyle,
} from "@/app/components/CardListContainerStyles";

const CardListContainer = () => {
  const { filteredProfiles, filterByName } = useContext(DataContext);
  return (
    <>
      <div style={containerStyle}>
        <input
          style={searchStyle}
          type="text"
          onChange={(e) => filterByName(e.target.value)}
          placeholder="Search a portfolio ..."
        />
        <h4 style={headerStyle}>
          {filteredProfiles.length === 0 && "No portfolios found ..."}
          {filteredProfiles.length > 0 &&
            `${filteredProfiles.length} portfolio${
              filteredProfiles.length > 1 ? "s" : ""
            } found.`}
        </h4>
      </div>

      <div style={bodyStyle}>
        {filteredProfiles.map((profile, index) => (
          <Card key={index} profile={profile} />
        ))}
      </div>
    </>
  );
};

export default CardListContainer;
