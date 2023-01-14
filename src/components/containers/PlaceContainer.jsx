import { PlaceCard } from '../cards/PlaceCard'
import {searchPlaces} from '../../services/autocomplete';
import SearchContainer from './SearchContainer';

export function PlaceContainer(props) {
  const {body, findPlace, appState} = props;

  return (
    <div>
      <SearchContainer body={body} searchPlaces={searchPlaces} setLocations={appState.setLocations}/>
      {appState.locations.map((data, index) => <PlaceCard
                                       key={index}
                                       location={data}
                                       appState={appState}
                                       clickHandler={findPlace}/>)}
    </div>
  )
}

export default PlaceContainer
