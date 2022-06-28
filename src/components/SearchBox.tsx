import React, { FC } from "react";

import Tag from "../models/Tag";

interface SearchBoxProps {
  changeSearchTerm: (searchTerm: string) => void;
  onSelectTag: (tag: Tag) => void;
  tags: Tag[];
}

const SearchBox : FC<SearchBoxProps> = ({ changeSearchTerm, onSelectTag, tags }) => {
  const defaultTag = tags.filter((t) => t.text === "All tags")[0];
  tags = tags.filter((t, i, a) => t !== defaultTag);

  return (
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
        <button
          onClick={() => onSelectTag(defaultTag)}
          className={defaultTag.isActive ? "active" : ""}
        >
          All tags
        </button>
        {tags.map((tag, index) => (
          <button
            onClick={() => onSelectTag(tag)}
            key={index}
            className={tag.isActive ? "active" : ""}
          >
            {tag.text}
          </button>
        ))}
      </div>
    </aside>
  );
};

export default SearchBox;
