import Card from "./Card";
import { useContext } from "react";
import { DataContext } from "@/app/components/contexts/dataContext";

const CardList = () => {
  const { filteredProfiles } = useContext(DataContext);
  return (
    <>
      {filteredProfiles.map((profile, index) => (
        <Card key={index} profile={profile} />
      ))}
      {filteredProfiles.length === 0 && <h2>No portfolios found ...</h2>}
    </>
  );
};

export default CardList;
