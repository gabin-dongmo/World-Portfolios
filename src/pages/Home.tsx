import React, { FC, useState } from "react";

import profiles from "../data/Profiles";
import {
  ProfileCardBoard,
  Footer,
  NavBar,
  SearchBox,
  Section,
} from "../components";
import Tag from "../models/Tag";
import tags from "../data/Tags";

const Home : FC = () => {
  const [currentProfiles, setCurrentProfiles] = useState(profiles);
  const [currentTags, setCurrentTags] = useState(tags);
  let searchTerm = "";

  

  const changeSearchTerm = (value: string) => {
    searchTerm = value;
    searchProfilesByName();
  };

  const searchProfilesByName = () => {
    if (searchTerm !== "") {
      setCurrentProfiles(
        profiles.filter(
          ({ name }) =>
            name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
        )
      );
    } else {
      setCurrentProfiles(profiles);
    }
  };

  const onSelectTag = (tag: Tag) => {
    if (tag.text === "All tags") {
      setCurrentProfiles(profiles);
    } else {
      setCurrentProfiles(
        profiles.filter((profile) =>
          profile.tags
            .map((tag) => tag.toLowerCase())
            .includes(tag.text.toLowerCase())
        )
      );
    }
    const currentTag = currentTags.filter((t) => t.text.toLowerCase() === tag.text.toLowerCase())[0];
    currentTag.isActive = true;
    currentTags.filter((t) => t.text.toLowerCase() !== tag.text.toLowerCase()).forEach(t => t.isActive = false);
    console.log(currentTags);
    
    setCurrentTags(currentTags);
  };

  return (
    <div className="App">
      <a href="#">
        <img
          className="to-top"
          src="assets/images/arrow-up-circle-fill.svg"
          alt="arrow-up"
        />
      </a>
      <NavBar />
      <Section />
      <main className="main">
        <div className="main-container">
          <SearchBox
            changeSearchTerm={changeSearchTerm}
            onSelectTag={onSelectTag}
            tags={currentTags}
          />
          <ProfileCardBoard profiles={currentProfiles} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
