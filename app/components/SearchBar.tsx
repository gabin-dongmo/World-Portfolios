import React, { useContext } from "react";
import { DataContext } from "@/app/components/contexts/dataContext";

const SearchBar = () => {
  const { filterByName } = useContext(DataContext);

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
