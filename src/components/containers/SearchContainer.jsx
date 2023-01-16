import Autocomplete from 'react-google-autocomplete';
import historicalweather from '../../services/historicalweather'

export function SearchContainer(props) {
  const { apiKey,
          body,
          error,
          setError,
          setPlace,
          setWeather,
          setDisplayWeather } = props;

  const findWeather = (place, geometry) => {
    setPlace(place);
    historicalweather(error, geometry, setError, setDisplayWeather, setWeather);
  }

  return (
    <div className="main-body">
      <div className='help-text'>
        { body }
      </div>
      <div>
        <Autocomplete
          apiKey={apiKey}
          onPlaceSelected={(place) => {
            findWeather(place.formatted_address,
                        {
                          lat: place.geometry.location.lat(),
                          lon: place.geometry.location.lng()
                        })
          }}
        />
      </div>
    </div>
  )
}

export default SearchContainer;
