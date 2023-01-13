import axios from 'axios';

export function searchPlaces(event, getLocations) {
  if (event.key !== 'Enter') return;

  const locationValue = event.target.value;

  if (locationValue.length < 3) return;

  axios.get(`http://localhost:3004/predictions`)
       .then(res => {
         getLocations(res.data);
       })
};

export default searchPlaces;
