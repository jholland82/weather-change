import {useState} from 'react';

import convertDate from '../../utils/time.js';
import convertTemp, { buildIconUrl, handlePrecip } from '../../utils/weather.js';

export function WeatherRow(props) {
  const { data } = props;

  const [moreWeather, setMoreWeather] = useState(false)

  const expandWeather = () => {
    setMoreWeather(!moreWeather);
  }

  return (
    <div className='weather-row weather-row-content' onClick={expandWeather}>
      <div className='weather-data'>
        <div>{convertDate(data.dt)}</div>
        <div>{convertTemp(data.temp)}</div>
        <div>{data.humidity}% Humidity</div>
        <div>
          <img src={buildIconUrl(data.weather[0].icon)} alt={data.weather[0].description}/>
        </div>
      </div>
      { moreWeather === true &&
        <div className='weather-data'>
          <div>{data.pressure} mb</div>
          <div>Feels Like {convertTemp(data.feels_like)}</div>
          <div>{data.wind_speed} mph</div>
          <div>{handlePrecip(data)}</div>
        </div>
      }
    </div>
  )
}

export default WeatherRow;
