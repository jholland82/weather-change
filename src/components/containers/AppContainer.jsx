import { useState } from 'react';

import ErrorContainer from './ErrorContainer';
import PlaceContainer from './PlaceContainer';
import TitleContainer from './TitleContainer'
import WeatherContainer from './WeatherContainer';
import { useError } from '../../context/errorContext';
import { PlaceProvider } from '../../context/placeContext';
import { useDisplayWeather } from '../../context/displayWeatherContext';
import { useWeather } from '../../context/weatherContext';


export function AppContainer(props) {
  const { body } = props;
  const { displayWeather } = useDisplayWeather();
  const { error } = useError();
  const [locations, setLocations] = useState([]);
  const { setWeather } = useWeather();

  const locationState = {
    locations: locations,
    setLocations: setLocations
  }

  return (
    <div>
      <PlaceProvider>
        <TitleContainer
          title="Weather Change"
          setLocations={setLocations} />
        { displayWeather === false
          ? <PlaceContainer
              body={body.searchBody}
              locationState={locationState}
              setWeather={setWeather} />
          :  <WeatherContainer />
        }
      </PlaceProvider>
      { error.error_triggered === true &&
        <ErrorContainer error={error.error_message} />
      }

    </div>
  )
}

export default AppContainer;
