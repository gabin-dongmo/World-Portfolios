import React, { useContext } from "react";
import { BusinessLogicContext } from "@/app/components/contexts/businessLogicContext";

const SearchBar = () => {
  const { filterByName } = useContext(BusinessLogicContext);

  return (
    <div className="nav-container-menu-search">
      <input
        type="text"
        onChange={(e) => filterByName(e.target.value)}
        placeholder="Search a portfolio ..."
      />
    </div>
  );
};

export default SearchBar;
