import React, {useState} from 'react';
import axios from 'axios';

export function SearchInput(props) {

  const [locations, getLocations] = useState({});

  const handleTypeAhead = (event) => {
    const locationValue = event.target.value;

    if (locationValue.length < 3) return;

    axios.get(`http://localhost:3004/predictions`)
         .then(res => {
           getLocations(res.data);
           console.log(locationValue);
           console.log(locations);
         })
  };

  return (
    <input type='search' id='location-search' name='q' onChange={handleTypeAhead} />
  )

}

export default SearchInput;
