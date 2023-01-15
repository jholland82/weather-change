export function PlaceCard(props) {
  const {clickHandler, error, location, placeState} = props;

  const findPlace = (e) => {
    clickHandler(e, error, placeState);
  }

  return (
    <div className='location-card'
         onClick={findPlace}
         data-place-id={location.place_id}
         data-location={location.description}>
      <div>{location.description}</div>
    </div>
  )
}

export default PlaceCard;
