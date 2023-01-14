import React, {useState} from 'react';
import WeatherRow from '../cards/WeatherRow';

export function WeatherContainer(props) {
  const { place, weather } = props;

  return(
    <div className='weather-card'>
      <div className='weather-row weather-header center'>Historical Weather In {place}</div>
      { weather.length > 0 && weather.map((data, index) => <WeatherRow
                                      key={index}
                                      data={data} />)}
    </div>
  )
}

export default WeatherContainer;
