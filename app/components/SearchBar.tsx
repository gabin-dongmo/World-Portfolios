import React, { useContext } from "react";
import Image from "next/image";
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
      <button>
        <Image
          src="assets/search-eye-line.svg"
          alt="search"
          width={22}
          height={22}
        />
      </button>
    </div>
  );
};

export default SearchBar;
