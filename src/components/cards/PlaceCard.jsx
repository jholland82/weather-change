export function PlaceCard(props) {
  const {clickHandler, location, appState} = props;

  const findPlace = (e) => {
    clickHandler(e, appState);
  }

  return (
    <div className='location-card' onClick={findPlace} data-place-id={location.place_id} >
      <div>{location.description}</div>
    </div>
  )
}

export default PlaceCard;
