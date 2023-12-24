import { useContext } from "react";
import { DataContext } from "@/app/components/contexts/dataContext";
import { Portfolio } from "@/interfaces/portfolio.interface";

const TagList = () => {
  const { profiles, filteredProfiles, selectedTags, setTag } =
    useContext(DataContext);
  const tags = extractTags(profiles) as string[];
  return (
    <>
      <h2>Filter by ({filteredProfiles.length}) </h2>
      <div className="main-container-aside-tags">
        <button
          onClick={() => setTag("all")}
          className={selectedTags.indexOf("all") !== -1 ? "active" : ""}
        >
          All tags
        </button>
        {tags.map((tag, index) => (
          <button
            onClick={() => setTag(tag)}
            className={selectedTags.indexOf(tag) !== -1 ? "active" : ""}
            key={index}
          >
            {tag}
          </button>
        ))}
      </div>
    </>
  );
};

const extractTags = (portfolios: Portfolio[]) => {
  return portfolios.reduce((result: string[], portfolio) => {
    portfolio.tags.forEach((tag) => {
      if (!result.map((a) => a.toLowerCase()).includes(tag.toLowerCase())) {
        result.push(tag.toLowerCase());
      }
    });
    return result;
  }, []);
};

export default TagList;
