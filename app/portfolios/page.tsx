import React from "react";
import TagList from "@/app/TagList";
import CardListContainer from "@/app/components/CardListContainer";

const PortfoliosPage = () => {
  return (
    <>
      <aside className="main-container-aside">
        <TagList />
      </aside>
      <section className="main-container-section">
        <CardListContainer />
      </section>
    </>
  );
};

export default PortfoliosPage;
