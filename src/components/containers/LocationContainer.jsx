import { LocationCard } from '../cards/LocationCard'

export function LocationContainer(props) {
  const {locations} = props;

  //useEffect(() => {
  //      console.log(locations, '- Has changed')
  //  },[locations]) // <-- here put the parameter to listen

  return (
    <div>
      {locations.map(data => <LocationCard key={data} location={data} />)}
    </div>
  )
}

export default LocationContainer
