import { useContext } from "react";
import { BusinessLogicContext } from "@/components/contexts/businessLogicContext";
import extractTags from "@/utils/extractTags";

const TagList = () => {
  const { profiles, filteredData, selectedTags, setTag } =
    useContext(BusinessLogicContext);
  const tags = extractTags(profiles) as string[];
  return (
    <>
      <h2>Filter by ({filteredData.length}) </h2>
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

export default TagList;
