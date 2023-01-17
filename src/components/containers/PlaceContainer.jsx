import React from 'react';

import { PlaceCard } from '../cards/PlaceCard'
import SearchContainer from './SearchContainer';

export function PlaceContainer(props) {
  const {
    body,
    locationState,
    setWeather,
    setError
  } = props;

  return (
    <React.Fragment>
      <SearchContainer body={body}
                       error={setError}
                       setLocations={locationState.setLocations}/>
        {locationState.locations.map((data, index) => (
            <PlaceCard
              error={setError}
              key={index}
              location={data}
              setWeather={setWeather}/>
        ))}
    </React.Fragment>
  )
}

export default PlaceContainer;
