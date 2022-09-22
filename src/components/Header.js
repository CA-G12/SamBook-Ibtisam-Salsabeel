import SearchBar from "./SearchBar";

const Header = ({ data, handleSearchValue }) => {
    
  return (
    <header>
      <h1>This is header</h1>
      <SearchBar data={data} handleSearchValue={handleSearchValue} />
    </header>
  );
};

export default Header;
