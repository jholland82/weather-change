export function convertTemp(temp) {
  return Math.floor(temp) + 'º';
}

export function buildIconUrl(icon) {
  return `http://openweathermap.org/img/wn/${icon}.png`
}

export default convertTemp;
