import React, { createContext, useEffect, useState } from "react";
import { portfolios } from "@/helpers/portfolios";
import type UserProfile from "@/interfaces/userProfile.interface";
import sortedData from "@/utils/sortedData";

interface Profile {
  id: string;
  name: string;
  link: string | string[];
  tags: string[];
  socials: { twitter: string; github: string; linkedin: string };
}

export const BusinessLogicContext = createContext({
  profiles: [] as UserProfile[],
  filteredData: [] as Profile[],
  selectedTags: [""],
  setTag: (tag: string) => {},
  filterByName: (filterValue: string) => {},
});

export const BusinessLogicProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const profiles = portfolios as UserProfile[];
  const [filteredData, setFilteredData] = useState(sortedData(profiles));
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
      setFilteredData(
        sortedData(profiles).filter((elem: any) => {
          return (
            elem.name.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1
          );
        }),
      );
    else setFilteredData(sortedData(profiles));
  };

  useEffect(() => {
    if (selectedTags.indexOf("all") === -1 && selectedTags.length > 0) {
      setFilteredData(
        sortedData(profiles).filter((elem: any) =>
          selectedTags.every((tag) =>
            elem.tags.map((e: string) => e.toLowerCase()).includes(tag),
          ),
        ),
      );
    } else setFilteredData(sortedData(profiles));
  }, [selectedTags]);

  return (
    <BusinessLogicContext.Provider
      value={{ profiles, filteredData, selectedTags, setTag, filterByName }}
    >
      {children}
    </BusinessLogicContext.Provider>
  );
};
