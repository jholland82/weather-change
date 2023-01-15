import {useState} from 'react';

import { PlaceCard } from '../cards/PlaceCard'
import {searchPlaces} from '../../services/autocomplete';
import SearchContainer from './SearchContainer';

export function PlaceContainer(props) {
  const {
    body,
    findPlace,
    locationState,
    placeState,
    setError
  } = props;

  return (
    <div>
      <SearchContainer body={body}
                       error={setError}
                       searchPlaces={searchPlaces}
                       setLocations={locationState.setLocations}/>
      {locationState.locations.map((data, index) => <PlaceCard
                                                     key={index}
                                                     location={data}
                                                     placeState={placeState}
                                                     error={setError}
                                                     clickHandler={findPlace}/>)}
    </div>
  )
}

export default PlaceContainer;
