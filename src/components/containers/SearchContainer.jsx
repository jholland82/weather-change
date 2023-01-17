import SearchInput from '../inputs/SearchInput'
import searchPlaces from '../../services/searchplaces';
import {useError} from '../../context/errorContext';

export function SearchContainer(props) {
  const {body, setLocations} = props;

  const { setError } = useError();

  const searchLocations = (e) => {
    document.querySelector('input').defautValue = '';
    searchPlaces(e, setError, setLocations)
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
