"use client";

import NavBar from "@/components/Navbar";
import Section from "@/components/Section";
import TagList from "@/components/TagList";
import CardList from "@/components/CardList";

export default function Home() {
  return (
    <>
      <NavBar />
      <Section />
      <main className="main">
        <div className="main-container">
          <aside className="main-container-aside">
            <TagList />
          </aside>
          <div className="main-container-body">
            <CardList />
          </div>
        </div>
      </main>
    </>
  );
}
