import React, { useState } from "react";

import tags from "../data/Tags";

interface SearchBoxProps {
  changeSearchTerm: (searchTerm: string) => void;
  onSelectTag: (tag: string) => void;
}

const SearchBox = ({ changeSearchTerm, onSelectTag }: SearchBoxProps) => {
  const [currentTags] = useState(tags);
  return (
    <React.Fragment>
      <aside className="main-container-aside">
        <div className="main-container-aside-search">
          <input
            onChange={(e: { target: { value: string } }) =>
              changeSearchTerm(e.target.value)
            }
            type="text"
            placeholder="Find a portfolio..."
          />
        </div>
        <h2>Filter by</h2>
        <div className="main-container-aside-tags">
          <button onClick={() => onSelectTag("All tags")} className="active">
            All tags
          </button>
          {currentTags.map((tag, index) => (
            <button onClick={() => onSelectTag(tag)} key={index}>
              {tag}
            </button>
          ))}
        </div>
      </aside>
    </React.Fragment>
  );
};

export default SearchBox;
