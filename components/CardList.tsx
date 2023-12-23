"use client";

import Card from "./Card";
import { useContext } from "react";
import { BusinessLogicContext } from "@/components/contexts/businessLogicContext";

const CardList = () => {
  const { filteredProfiles } = useContext(BusinessLogicContext);
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
