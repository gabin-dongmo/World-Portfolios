import Card from "./Card";
import { useContext } from "react";
import { DataContext } from "@/app/components/contexts/dataContext";

const CardList = () => {
  const { filteredProfiles } = useContext(DataContext);
  return (
    <>
      {filteredProfiles.length === 0 && (
        <h3 className="main-container-section-head">No portfolios found ...</h3>
      )}
      <h3 className="main-container-section-head">
        {filteredProfiles.length} portfolio
        {filteredProfiles.length > 1 ? "s" : ""} found.
      </h3>
      <div className="main-container-section-body">
        {filteredProfiles.map((profile, index) => (
          <Card key={index} profile={profile} />
        ))}
      </div>
    </>
  );
};

export default CardList;
