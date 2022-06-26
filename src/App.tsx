import Card from "./components/Card";
import NavBar from "./components/Navbar";
import Section from "./components/Section";
import "./styles/App.scss";
import profiles from "./data/Profiles";
import tags from "./data/Tags";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [filteredData, setFilteredData] = useState(profiles);
  let filterValue = "";

  const changeFilterValue = (value: string) => {
    filterValue = value;
    filterDataByName();
  };

  const filterDataByName = () => {
    if (filterValue !== "") {
      setFilteredData(
        profiles.filter(
          ({ name }) =>
            name.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1
        )
      );
    } else {
      setFilteredData(profiles);
    }
  };

  const onSelectTag = (tag: string) => {
    if (tag === "All tags") setFilteredData(profiles);
    else
      setFilteredData(
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
          <aside className="main-container-aside">
            <div className="main-container-aside-search">
              <input
                onChange={(e: { target: { value: string } }) =>
                  changeFilterValue(e.target.value)
                }
                type="text"
                placeholder="Find a portfolio..."
              />
            </div>
            <h2>Filter by</h2>
            <div className="main-container-aside-tags">
              <button
                onClick={() => onSelectTag("All tags")}
                className="active"
              >
                All tags
              </button>
              {tags.map((tag, index) => (
                <button onClick={() => onSelectTag(tag)} key={index}>
                  {tag}
                </button>
              ))}
            </div>
          </aside>
          <div className="main-container-body">
            {filteredData.map((profile, index) => (
              <Card
                key={index}
                id={profile.id}
                name={profile.name}
                link={profile.link}
                tags={profile.tags}
              />
            ))}
            {filteredData.length === 0 && <h2>No portfolios found ...</h2>}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
