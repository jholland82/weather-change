import React, {useEffect, useState} from 'react';

import ErrorContainer from './ErrorContainer';
import SearchContainer from './SearchContainer';
import TitleContainer from './TitleContainer'
import WeatherContainer from './WeatherContainer';
import {historicalweather} from '../../services/historicalweather';
import {useIsMount} from '../../utils/useIsMount';

export function AppContainer(props) {
  const apiKey = process.env.REACT_APP_PLACES_SECRET;
  const { body } = props;
  const isMount = useIsMount();
  const [displayWeather, setDisplayWeather] = useState(false)
  const [error, setError] = useState({
    error_triggered: false
  });
  const [place, setPlace] = useState({});
  const [weather, setWeather] = useState([]);

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
        ? <SearchContainer
            apiKey={apiKey}
            body={body.searchBody}
            error={error}
            setDisplayWeather={setDisplayWeather}
            setError={setError}
            setPlace={setPlace}
            setWeather={setWeather}/>
        : <WeatherContainer
            error={error}
            place={place}
            weather={weather} />
      }

      { error.error_triggered === true &&
        <ErrorContainer error={error.error_message} />
      }
    </div>
  )
}

export default AppContainer;
