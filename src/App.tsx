import NavBar from "./components/Navbar";
import Section from "./components/Section";
import "./styles/App.scss";
import profiles from "./data/Profiles";
import Footer from "./components/Footer";
import { useState } from "react";
import CardBoard from "./components/CardBoard";
import SearchBox from "./components/SearchBox";

function App() {
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
          <CardBoard profiles={currentProfiles} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
