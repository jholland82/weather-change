import axios from 'axios';
import {resetErrors} from '../utils/errors'

export function historicalweather(setError, setWeather) {
  const arrayOfYears = [1, 2, 5, 10, 20, 40];
  const lat = 52.52000659999999;
  const lon = 13.404954;
  const units = 'imperial';
  let weatherData = [];

  // Do the math to convert the arrayOfYears into the exact dates we want to use.
  // Uses Unix epoch timestamp
  const buildArrayOfYears = () => {
    return arrayOfYears.map(year => {
      const date = new Date();
      return Math.floor(date.setFullYear(date.getFullYear() - year) / 1000);
    })
  }

  // const buildRequestUrls = () => {
  //   return buildArrayOfYears().map(year => {
  //     return 'https://api.openweathermap.org/data/3.0/onecall/timemachine'
  //       + `?lat=${lat}`
  //       + `&lon=${lon}`
  //       + `&dt=${year}`
  //       + `&appId=${appId}`
  //       + `&units=${units}`
  //   })
  // }

  // const promiseFunction = () => {
  //   return new Promise(resolve => {
  //     setTimeout(() => resolve('222'), 100)
  //   })
  // }

  // const requestArr = buildRequestUrls().map(async (url, index) => {
  //   let waitForData = await promiseFunction(url);
  //   return axios.get(url, { responseType: 'json' }).then(res => {
  //     return res.data.data[0]
  //   })
  // })

  // Promise.all(requestArr).then((result) => {
  //   setWeather(result);
  // })

  axios.get('http://localhost:3004/weather').then(res => {
    weatherData[0] = res.data[0].data[0]
    weatherData[1] = res.data[1].data[0]
    setWeather(weatherData);
    resetErrors(setError);
   }).catch((error) => {
     setError({
       error_message: "Unable to retrieve weather information from the Endpoint",
       error_triggered: true
     })
  })
}

export default historicalweather;
