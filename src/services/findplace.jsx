import axios from 'axios';

export function findPlace(event, appState) {
  const locationValue = event.currentTarget.dataset.placeId;

  axios.get(`http://localhost:3004/result?place_id=${locationValue}`)
       .then(res => {
         appState.setLat(res.data.geometry.location.lat);
         appState.setLong(res.data.geometry.location.long);
         appState.setDisplayWeather(true)
       })
};

export default findPlace;
