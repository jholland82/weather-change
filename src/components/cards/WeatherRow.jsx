import convertDate from '../../utils/time.js';
import convertTemp, { buildIconUrl } from '../../utils/weather.js';

export function WeatherRow(props) {
  const { data } = props;

  return (
    <div className='weather-row'>
      <div>{convertDate(data.dt)}</div>
      <div>{convertTemp(data.temp)}</div>
      <div>{data.humidity}% Humidity</div>
      <div>
        <img src={buildIconUrl(data.weather[0].icon)} alt={data.weather[0].description}/>
      </div>
    </div>
  )
}

export default WeatherRow;
