export function SearchInput(props) {
  const { searchPlaces, getLocations} = props;

  const searchLocations = (e) => {
    searchPlaces(e, getLocations)
  }

  return (
    <input type='search' id='location-search' name='q' onKeyDown={searchLocations} />
  )
}

export default SearchInput;
