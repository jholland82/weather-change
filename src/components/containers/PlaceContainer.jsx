import { PlaceCard } from '../cards/PlaceCard'

export function PlaceContainer(props) {
  const {findPlace, appState} = props;

  return (
    <div>
      {appState.locations.map((data, index) => <PlaceCard
                                       key={index}
                                       location={data}
                                       appState={appState}
                                       clickHandler={findPlace}/>)}
    </div>
  )
}

export default PlaceContainer
