export function SearchInput(props) {
  const { error, searchPlaces, setLocations} = props;

  const searchLocations = (e) => {
    searchPlaces(e, error, setLocations)
  }

  return (
    <input type='search' id='location-search' name='q' onKeyDown={searchLocations} />
  )
}

export default SearchInput;
