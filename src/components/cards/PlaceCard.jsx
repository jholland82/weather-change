import currentWeather from '../../services/weather';

export function PlaceCard(props) {
  const {error, location, weatherSetState} = props;

  const findPlace = (e) => {
    currentWeather(e, error, weatherSetState);
  }

  return (
    <div className='location-card'
         onClick={findPlace}
         data-location={location.place_name}
         data-lon={location.geometry.coordinates[0]}
         data-lat={location.geometry.coordinates[1]} >
      <div>{location.place_name}</div>
    </div>
  )
}

export default PlaceCard;
