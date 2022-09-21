import SearchBar from './SearchBar';

const Header = ({data}) => {
    // console.log(data)
    return ( 
        <header>
            <h1>This is header</h1>
            <SearchBar data= {data} />
        </header>
    );
}
 
export default Header;