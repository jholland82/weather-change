import React, {useState} from 'react';
import LocationContainer from './LocationContainer'
import SearchContainer from './SearchContainer'

import axios from 'axios';

export function AppContainer(props) {
  var locationData;
  const { body } = props;
  const [locations, getLocations] = useState([{"description": "Berlin"}]);

  const buildLocations = () => {
    locationData = locations.map((data) => {
      return(
        <div>{data.description}</div>
      )
    })
  }

  const handleTypeAhead = (event) => {
    //if (event.key !== 'Enter') return;

    const locationValue = event.target.value;

    if (locationValue.length < 3) return;

    axios.get(`http://localhost:3004/predictions`)
         .then(res => {
           getLocations(res.data);
           //console.log(locationValue);
           //console.log(locations);
           buildLocations();
           console.log(locationData);
         })
  };

  return (
    <div className='app-container'>
      <SearchContainer body={body.searchBody} handleTypeAhead={handleTypeAhead} />
      <LocationContainer locations={locations}/>
    </div>
  )
}

export default AppContainer;
