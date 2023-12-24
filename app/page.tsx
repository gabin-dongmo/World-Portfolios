"use client";

import NavBar from "@/app/Navbar";
import Section from "@/app/Section";
import TagList from "@/app/TagList";
import CardList from "@/app/components/CardList";

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
