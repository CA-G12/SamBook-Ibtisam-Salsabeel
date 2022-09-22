import React from "react";

export default function SearchBar(props) {
  return (
    <div className="searchContainer">
      <input
        type="text"
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            props.handleSearchValue(e)};
        }}

        placeholder="Enter your Favorite Book to Know More"
      />
      <i className="fa-solid fa-magnifying-glass"></i>
    </div>
  );
}
