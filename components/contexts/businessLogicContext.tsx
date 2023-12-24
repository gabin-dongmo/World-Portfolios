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
  const [filteredProfiles, setFilteredProfiles] = useState(
    sortProfiles(profiles),
  );
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
        sortProfiles(profiles).filter((elem: any) => {
          return (
            elem.name.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1
          );
        }),
      );
    else setFilteredProfiles(sortProfiles(profiles));
  };

  useEffect(() => {
    if (selectedTags.indexOf("all") === -1 && selectedTags.length > 0) {
      setFilteredProfiles(
        sortProfiles(profiles).filter((elem: any) =>
          selectedTags.every((tag) =>
            elem.tags.map((e: string) => e.toLowerCase()).includes(tag),
          ),
        ),
      );
    } else setFilteredProfiles(sortProfiles(profiles));
  }, [selectedTags]);

  return (
    <BusinessLogicContext.Provider
      value={{ profiles, filteredProfiles, selectedTags, setTag, filterByName }}
    >
      {children}
    </BusinessLogicContext.Provider>
  );
};
