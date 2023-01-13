import SearchInput from '../inputs/SearchInput'

export function SearchContainer(props) {
  const { body, searchPlaces, getLocations } = props;

  return (
    <div className="main-body">
      { body }
      <SearchInput searchPlaces={searchPlaces} getLocations={getLocations}/>
    </div>
  )
}

export default SearchContainer;
