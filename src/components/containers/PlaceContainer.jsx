import {useState} from 'react';

import { PlaceCard } from '../cards/PlaceCard'
import SearchContainer from './SearchContainer';

export function PlaceContainer(props) {
  const {
    body,
    locationState,
    weatherSetState,
    setError
  } = props;

  return (
    <div>
      <SearchContainer body={body}
                       error={setError}
                       setLocations={locationState.setLocations}/>
      {locationState.locations.map((data, index) => <PlaceCard
                                                     error={setError}
                                                     key={index}
                                                     location={data}
                                                     weatherSetState={weatherSetState}/>)}
    </div>
  )
}

export default PlaceContainer;
