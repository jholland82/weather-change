import currentWeather from '../../services/weather';
import {usePlace} from '../../context/placeContext';
import {useDisplayWeather} from '../../context/displayWeatherContext';

export function PlaceCard(props) {
  const {error, location, setWeather} = props;

  const { setPlace } = usePlace();
  const { setDisplayWeather } = useDisplayWeather();


  const findPlace = (e) => {
    currentWeather(e, error, setDisplayWeather, setPlace, setWeather);
  }

  return (
      <div className='location-card'
           onClick={findPlace}
           data-location={location.place_name}
           data-lon={location.geometry.coordinates[0]}
           data-lat={location.geometry.coordinates[1]} >
        {location.place_name}
      </div>
  )
}

export default PlaceCard;
