import React, {useState} from 'react';
import WeatherRow from '../cards/WeatherRow';

export function WeatherContainer(props) {
  const { appState} = props;

  return(
    <div className='weather-card'>
      <div>
        <div className='weather-row weather-header center'>{appState.place}</div>
        { appState.weather.map((data, index) => <WeatherRow
                                                 key={index}
                                                 data={data} />)}

      </div>
    </div>
  )
}

export default WeatherContainer;
