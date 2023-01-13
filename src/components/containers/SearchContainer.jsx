import SearchInput from '../inputs/SearchInput'

export function SearchContainer(props) {
  const { body, searchPlaces, getLocations } = props;

  return (
    <div className="main-body">
      { body }
      <div className='search-input'>
        <SearchInput searchPlaces={searchPlaces} getLocations={getLocations}/>
      </div>
    </div>
  )
}

export default SearchContainer;
