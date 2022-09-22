import React from "react";

export default function SearchBar(props) {
  console.log(props);
  return (
    <div className="searchContainer">
      <input
        type="text"
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            props.handleSearchValue(e)};
        }}
        // defaultValue={props.data.searchValue}
        placeholder="Enter your Favorite Book to Know More"
      />
      <i class="fa-solid fa-magnifying-glass"></i>
    </div>
  );
}
