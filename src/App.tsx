import Card from "./components/card";
import NavBar from "./components/navbar";
import Section from "./components/section";
import "./styles/App.scss";
import dataOrder from "./data/dataOrder";
import tags from "./data/tags";
import Footer from "./components/footer";
import { useState } from "react";

function App() {
  const [filteredData, setFilteredData] = useState(dataOrder);
  let filterValue = "";

  const changeFilterValue = (value: string) => {
    filterValue = value;
    filterDataByName();
  };

  const filterDataByName = () => {
    if (filterValue !== "") {
      setFilteredData(
        dataOrder.filter(
          ({ name }) =>
            name.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1
        )
      );
    } else {
      setFilteredData(dataOrder);
    }
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
      <NavBar onChangeValue={changeFilterValue} />
      <Section />
      <main className="main">
        <div className="main-container">
          <aside className="main-container-aside">
            <h2>Filter by</h2>
            <div className="main-container-aside-tags">
              <button className="active">All tags</button>
              {tags.map((tag, index) => (
                <button key={index}>{tag}</button>
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
