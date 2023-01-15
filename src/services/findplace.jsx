import axios from 'axios';

export function findPlace(event, setError, placeState) {
  const locationValue = event.currentTarget.dataset.placeId;
  const locationName = event.currentTarget.dataset.location;

  axios.get(`http://localhost:3004/result?place_id=${locationValue}`)
       .then(res => {
         placeState.setGeometry({
           "lat": res.data.geometry.location.lat,
           "long": res.data.geometry.location.lon
         });
         placeState.setPlace(locationName);
         placeState.setDisplayWeather(true);
         setError({
           error_triggered: false
         });
       }).catch((error) => {
         setError({
           error_message: "Unable to retrieve locations geometry from the Endpoint",
           error_triggered: true
         })
       })
};

export default findPlace;
