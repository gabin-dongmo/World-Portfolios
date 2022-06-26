import React, { useState } from "react";

import profiles from "../data/Profiles";
import {
  ProfileCardBoard,
  Footer,
  NavBar,
  SearchBox,
  Section,
} from "../components";

const Home = () => {
  const [currentProfiles, setCurrentProfiles] = useState(profiles);
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

  const onSelectTag = (tag: string) => {
    if (tag === "All tags") setCurrentProfiles(profiles);
    else
      setCurrentProfiles(
        profiles.filter((profile) =>
          profile.tags
            .map((tag) => tag.toLowerCase())
            .includes(tag.toLowerCase())
        )
      );
  };

  return (
    <React.Fragment>
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
            />
            <ProfileCardBoard profiles={currentProfiles} />
          </div>
        </main>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Home;
