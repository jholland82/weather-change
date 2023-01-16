export function SearchInput(props) {
  const {searchLocations} = props;

  return (
    <input type='search' id='location-search' name='q' onKeyDown={searchLocations} />
  )
}

export default SearchInput;
