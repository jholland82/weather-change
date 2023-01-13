import axios from 'axios';

export function historicalweather(appState) {
  const arrayOfYears = [1, 2]; //, 5, 10, 20, 40];
  const lat = 52.52000659999999;
  const lon = 13.404954;
  const units = 'imperial';
  let weatherData = [];

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

  // buildRequestUrls().map((url, index) => {
  //   axios.get(url, { responseType: 'json' }).then(res => {
  //     weatherData[index] = res.data.data[0]
  //   })
  // })
  axios.get('http://localhost:3004/weather').then(res => {
    weatherData[0] = res.data[0].data[0]
    weatherData[1] = res.data[1].data[0]
    appState.getWeather(weatherData);
  })

  //appState.getWeather(weatherData);
}

export default historicalweather;
