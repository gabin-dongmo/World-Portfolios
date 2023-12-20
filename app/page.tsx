"use client";

import MainLogic from "@/utils/mainLogic";
import NavBar from "@/components/Navbar";
import Section from "@/components/Section";
import TagList from "@/components/TagList";
import extractTags from "@/utils/extractTags";
import CardList from "@/components/CardList";
import { portfolios } from "@/helpers/portfolios";

const getPortfolios = (slug?: string) => {
  return slug ? portfolios.filter((p) => p.country === slug) : portfolios;
};

export default function Home() {
  const data = getPortfolios();
  const { filteredData, selectedTags, setTag, filterByName } = MainLogic(data);

  return (
    <>
      <NavBar onChangeValue={filterByName} />
      <Section />
      <main className="main">
        <div className="main-container">
          <aside className="main-container-aside">
            <TagList
              filteredData={filteredData}
              tags={extractTags(data)}
              setTag={setTag}
              selectedTags={selectedTags}
            />
          </aside>
          <div className="main-container-body">
            <CardList filteredData={filteredData} />
          </div>
        </div>
      </main>
    </>
  );
}
