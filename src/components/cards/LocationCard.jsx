export function LocationCard(props) {
  const {location} = props;


  return (
    <div className='location-card'>
      <div>{location.description}</div>
    </div>
  )
}

export default LocationCard;
