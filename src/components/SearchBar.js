import React from "react";

export default function SearchBar(props) {
  return (
    <div>
      <input
        type="text"
        onKeyPress={(e) => {
          if (e.key === "enter") props.handleSearchValue(e);
        }}
        defaultValue={this.props.data.searchValue}
      />
    </div>
  );
}
