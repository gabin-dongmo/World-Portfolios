import React from "react";
import NavBar from "@/app/Navbar";
import Section from "@/app/Section";
import TagList from "@/app/TagList";
import CardListContainer from "@/app/components/CardListContainer";

export default function Home() {
  return (
    <main className="main">
      <div className="main-container">
        <aside className="main-container-aside">
          <TagList />
        </aside>
        <section className="main-container-section">
          <CardListContainer />
        </section>
      </div>
    </main>
  );
}
