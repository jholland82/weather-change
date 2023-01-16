import axios from 'axios';

export function searchPlaces(event, setError, setLocations) {
  const SEARCH_LIMIT = 5;
  if (event.key !== 'Enter') return;

  const locationValue = event.target.value;

  if (locationValue.length < 3) return;

  axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/`
            + `${locationValue}.json`
            + `?access_token=${process.env.REACT_APP_MAPBOX_SECRET}`
            + `&limit=${SEARCH_LIMIT}`)
       .then(res => {
         setLocations(res.data.features);
         setError({
           error_triggered: false
         });
       }).catch((error) => {
         setError({
           error_message: "Unable to retrieve locations from the Endpoint",
           error_triggered: true
         })
       })
};

export default searchPlaces;
