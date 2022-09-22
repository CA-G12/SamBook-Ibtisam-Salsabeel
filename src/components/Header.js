import SearchBar from "./SearchBar";

const Header = ({ data, handleSearchValue }) => {
    
  return (
    <header>
      <nav>
        <h1 className='logo-nav'>Readly</h1>
        <SearchBar data={data} handleSearchValue={handleSearchValue} />
        <div className="categories">
          <i className="fa-solid fa-bars"></i>
          Categories
        </div>   
      </nav>
    </header>
  );
};

export default Header;
