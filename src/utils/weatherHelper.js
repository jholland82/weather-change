export function convertTemp(temp) {
  return Math.floor(temp) + 'º';
}

export function buildIconUrl(icon) {
  return `http://openweathermap.org/img/wn/${icon}.png`
}

export function handlePrecip(weatherData) {
  if(weatherData.hasOwnProperty('rain')) {
    return `${weatherData.rain['1h']} mm/hr`;
  }

  if(weatherData.hasOwnProperty('snow')) {
    return `${weatherData.snow['1h']} mm/hr`;
  }

  return 'No Precipitation';
}

export default convertTemp;
