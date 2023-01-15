import React, {useEffect, useState} from 'react';

import ErrorContainer from './ErrorContainer';
import PlaceContainer from './PlaceContainer';
import TitleContainer from './TitleContainer'
import WeatherContainer from './WeatherContainer';
import {findPlace} from '../../services/findplace';
import {historicalweather} from '../../services/historicalweather';
import {useIsMount} from '../../utils/useIsMount';

export function AppContainer(props) {
  const { body } = props;
  const isMount = useIsMount();
  const [displayWeather, setDisplayWeather] = useState(false)
  const [error, setError] = useState({
    error_triggered: false
  });
  const [geometry, setGeometry] = useState({
    lat: "",
    lon: ""
  });
  const [locations, setLocations] = useState([]);
  const [place, setPlace] = useState({});
  const [weather, setWeather] = useState([]);

  const locationState = {
    locations: locations,
    setLocations: setLocations
  }

  const placeState = {
    setGeometry: setGeometry,
    setPlace: setPlace,
    setDisplayWeather: setDisplayWeather
  }

  useEffect(() => {
    if (isMount) {
    } else {
      historicalweather(setError, setWeather);
    }
  }, [displayWeather]);

  return (
    <div className='app-container'>
      <header>
        <TitleContainer
          title="Weather Change"
          className="App-header"
          setDisplayWeather={setDisplayWeather}
          setError={setError} />
      </header>
      { displayWeather === false
        ? <PlaceContainer
            body={body.searchBody}
            findPlace={findPlace}
            locationState={locationState}
            placeState={placeState}
            setError={setError} />
        : <WeatherContainer
            weather={weather}
            place={place} />
      }

      { error.error_triggered === true &&
        <ErrorContainer error={error.error_message} />
      }
    </div>
  )
}

export default AppContainer;
