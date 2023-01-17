import axios from 'axios';
import {resetErrors} from '../utils/errors'

export function currentWeather(event, setError, weatherSetState) {
  const locationName = event.currentTarget.dataset.location;
  const lat = event.currentTarget.dataset.lat;
  const lon = event.currentTarget.dataset.lon;
  const units = 'imperial';

  axios.get('https://api.openweathermap.org/data/3.0/onecall'
            + `?lat=${lat}`
            + `&lon=${lon}`
            + `&appId=${process.env.REACT_APP_WEATHER_SECRET}`
            + `&units=${units}`).then(res => {
              weatherSetState.setWeather(
                {
                  geometry: {
                    lat: lat,
                    lon: lon
                  },
                  weatherData: [
                res.data.current]
                });
              weatherSetState.setDisplayWeather(true);
              weatherSetState.setPlace(locationName);
            }).catch((error) => {
              setError({
                error_message: "Unable to retrieve weather information from the Endpoint",
                error_triggered: true
              })
            })
}

export function historicalWeather(geometry, setError, weather, weatherSetState) {
  const lat = geometry.lat;
  const lon = geometry.lon;
  const units = 'imperial';
  const weatherData = weather;

  const arrayOfYears = [1, 2, 5, 10, 20, 40];

  // Do the math to convert the arrayOfYears into the exact dates we want to use.
  // Uses Unix epoch timestamp
  const buildArrayOfYears = () => {
    return arrayOfYears.map(year => {
      const date = new Date();
      return Math.floor(date.setFullYear(date.getFullYear() - year) / 1000);
    })
  }

  const buildRequestUrls = () => {
    return buildArrayOfYears().map(year => {
      return 'https://api.openweathermap.org/data/3.0/onecall/timemachine'
        + `?lat=${lat}`
        + `&lon=${lon}`
        + `&dt=${year}`
        + `&appId=${process.env.REACT_APP_WEATHER_SECRET}`
        + `&units=${units}`
    })
  }

  const promiseFunction = () => {
    return new Promise(resolve => {
      setTimeout(() => resolve('222'), 100)
    })
  }

  const requestArr = buildRequestUrls().map(async (url, index) => {
    await promiseFunction(url);
    return axios.get(url).then(res => {
      resetErrors(setError);
      return res.data.data[0]
    }).catch((error) => {
     setError({
       error_message: "Unable to retrieve weather information from the Endpoint",
       error_triggered: true
     })
    })
  })

  Promise.all(requestArr).then((result) => {
    weatherSetState.setWeather(
      {
        geometry: {
          lat: lat,
          lon: lon
        },
        weatherData: weather.weatherData.concat(result)
        });
  })
}

export default currentWeather;
