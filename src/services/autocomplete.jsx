import axios from 'axios';

export function searchPlaces(event, setError, setLocations) {
  if (event.key !== 'Enter') return;

  const locationValue = event.target.value;

  if (locationValue.length < 3) return;

  axios.get(`http://localhost:3004/predictions`)
       .then(res => {
         setLocations(res.data);
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
