import {useState} from 'react';

export const useWeatherState = props => {
  const [displayWeather, setDisplayWeather] = useState(false)
  const [error, setError] = useState({
    error_triggered: false
  });
  const [locations, setLocations] = useState([]);
  const [place, setPlace] = useState({});
  const [weather, setWeather] = useState([]);

  const errorState = {
    error: error,
    setError: setError
  }
  const locationState = {
    locations: locations,
    setLocations: setLocations
  }

  const weatherState = {
    displayWeather: displayWeather,
    place: place,
    setPlace: setPlace,
    setDisplayWeather: setDisplayWeather,
    setWeather: setWeather,
    weather: weather
  }

  return {
    errorState: errorState,
    locationState: locationState,
    weatherState: weatherState
  }
}

export default useWeatherState;
