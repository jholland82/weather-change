export function SearchInput(props) {
  const { searchPlaces, setLocations} = props;

  const searchLocations = (e) => {
    searchPlaces(e, setLocations)
  }

  return (
    <input type='search' id='location-search' name='q' onKeyDown={searchLocations} />
  )
}

export default SearchInput;
