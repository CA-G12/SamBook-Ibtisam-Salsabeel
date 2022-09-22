import React from "react";

export default function SearchBar(props) {
  console.log(props);
  return (
    <div>
      <input
        type="text"
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            props.handleSearchValue(e)};
        }}
        defaultValue={props.data.searchValue}
      />
    </div>
  );
}
