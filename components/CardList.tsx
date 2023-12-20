"use client";

import Card from "./Card";
import { useContext } from "react";
import { BusinessLogicContext } from "@/components/contexts/businessLogicContext";

const CardList = () => {
  const { filteredData } = useContext(BusinessLogicContext);
  return (
    <>
      {filteredData.map((item, index) => (
        <Card
          key={index}
          name={item.name}
          link={item.link}
          tags={item.tags.map((tag) => tag.toLowerCase())}
          socials={item.socials}
        />
      ))}
      {filteredData.length === 0 && <h2>No portfolios found ...</h2>}
    </>
  );
};
export default CardList;
