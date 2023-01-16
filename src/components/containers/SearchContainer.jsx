import SearchInput from '../inputs/SearchInput'
import searchPlaces from '../../services/searchplaces';

export function SearchContainer(props) {
  const {
    body,
    error,
    setLocations
  } = props;

  const searchLocations = (e) => {
    document.querySelector('input').defautValue = '';
    searchPlaces(e, error, setLocations)
  }

  return (
    <div className="main-body">
      { body }
      <div className='search-input'>
        <SearchInput searchLocations={searchLocations}/>
      </div>
    </div>
  )
}

export default SearchContainer;
