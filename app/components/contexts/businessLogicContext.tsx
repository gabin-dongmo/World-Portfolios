import React, { createContext, useEffect, useState } from "react";
import { portfolios } from "@/helpers/portfolios";
import sortProfiles from "@/utils/sortProfiles";
import { Portfolio } from "@/interfaces/portfolio.interface";

export const BusinessLogicContext = createContext({
  profiles: [] as Portfolio[],
  filteredProfiles: [] as Portfolio[],
  selectedTags: [""],
  setTag: (tag: string) => {},
  filterByName: (filterValue: string) => {},
});

export const BusinessLogicProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const profiles = portfolios;
  const sortedPortfolios = sortProfiles(profiles);
  const [filteredProfiles, setFilteredProfiles] = useState(sortedPortfolios);
  const [selectedTags, setSelectedTags] = useState(["all"]);

  const setTag = (tag: string) => {
    if (tag === "all") setSelectedTags(["all"]);
    else if (selectedTags.indexOf(tag) !== -1)
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    else
      setSelectedTags([...selectedTags.filter((t) => t !== "all"), ...[tag]]);
  };

  const filterByName = (filterValue: string) => {
    if (filterValue !== "")
      setFilteredProfiles(
        sortedPortfolios.filter(
          (portfolio: Portfolio) =>
            portfolio.name.toLowerCase().indexOf(filterValue.toLowerCase()) !==
            -1,
        ),
      );
    else setFilteredProfiles(sortedPortfolios);
  };

  useEffect(() => {
    if (selectedTags.indexOf("all") === -1 && selectedTags.length > 0) {
      setFilteredProfiles(
        sortedPortfolios.filter((portfolio: Portfolio) =>
          selectedTags.every((tag) =>
            portfolio.tags.map((e: string) => e.toLowerCase()).includes(tag),
          ),
        ),
      );
    } else setFilteredProfiles(sortedPortfolios);
  }, [selectedTags, sortedPortfolios]);

  return (
    <BusinessLogicContext.Provider
      value={{ profiles, filteredProfiles, selectedTags, setTag, filterByName }}
    >
      {children}
    </BusinessLogicContext.Provider>
  );
};
