import SearchInput from '../inputs/SearchInput'

export function SearchContainer(props) {
  const { body, searchPlaces, setLocations } = props;

  return (
    <div className="main-body">
      { body }
      <div className='search-input'>
        <SearchInput searchPlaces={searchPlaces} setLocations={setLocations}/>
      </div>
    </div>
  )
}

export default SearchContainer;
