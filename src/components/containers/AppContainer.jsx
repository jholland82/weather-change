import {useState} from 'react';

import ErrorContainer from './ErrorContainer';
import PlaceContainer from './PlaceContainer';
import TitleContainer from './TitleContainer'
import WeatherContainer from './WeatherContainer';

export function AppContainer(props) {
  const { body } = props;
  const [displayWeather, setDisplayWeather] = useState(false)
  const [error, setError] = useState({
    error_triggered: false
  });
  const [locations, setLocations] = useState([]);
  const [place, setPlace] = useState({});
  const [weather, setWeather] = useState([]);

  const locationState = {
    locations: locations,
    setLocations: setLocations
  }

  const weatherSetState = {
    setPlace: setPlace,
    setDisplayWeather: setDisplayWeather,
    setWeather: setWeather
  }

  return (
    <div>
      <TitleContainer
        title="Weather Change"
        setDisplayWeather={setDisplayWeather}
        setLocations={setLocations}
        setError={setError} />
      { displayWeather === false
        ? <PlaceContainer
            body={body.searchBody}
            locationState={locationState}
            weatherSetState={weatherSetState}
            setError={setError} />
        : <WeatherContainer
            place={place}
            setError={setError}
            weather={weather}
            weatherSetState={weatherSetState} />
      }

      { error.error_triggered === true &&
        <ErrorContainer error={error.error_message} />
      }
    </div>
  )
}

export default AppContainer;
