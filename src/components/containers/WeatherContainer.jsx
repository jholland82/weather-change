import React, {useState} from 'react';
import WeatherRow from '../cards/WeatherRow';

export function WeatherContainer(props) {
  const { weather } = props;

  return(
    <div className='weather-card'>
      <div>Header</div>
      { weather.map((data, index) => <WeatherRow
                                      key={index}
                                      data={data} />)}
    </div>
  )
}

export default WeatherContainer;
