import axios from 'axios';
import {resetErrors} from '../utils/errors'

export function historicalweather(error, geometry, setError, setDisplayWeather, setWeather ) {
  const arrayOfYears = [1, 2]//, 5, 10, 20, 40];
  const units = 'imperial';

  if (geometry.lat === undefined || geometry.lon === undefined) return;
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
        + `?lat=${geometry.lat}`
        + `&lon=${geometry.lon}`
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
    return axios.get(url, { responseType: 'json' }).then(res => {
      return res.data.data[0]
    }).catch((error) => {
      setError({
        error_message: "Unable to retrieve locations geometry from the Endpoint",
        error_triggered: true
      })
    })
  })

  Promise.all(requestArr).then((result) => {
    if (error.error_triggered === true) return
    setWeather(result);
    setDisplayWeather(true);
  })
}

export default historicalweather;
