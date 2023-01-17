import React, {useState} from 'react';
import WeatherFooter from '../cards/WeatherFooter';
import WeatherRow from '../cards/WeatherRow';
import {historicalWeather} from '../../services/weather';

export function WeatherContainer(props) {
  const {
    place,
    setError,
    weather,
    weatherSetState
  } = props;

  const weatherHelpText = 'To view more weather info please click the weather row.  To see historical data click the button below.';

  const loadHistoricalData = () => {
    const geometry = {
      lat: weather.geometry.lat,
      lon: weather.geometry.lon
    }
    historicalWeather(geometry, setError, weather, weatherSetState);
  }

  return(
    <React.Fragment>
      <p className='main-body'>{weatherHelpText}</p>
      <div className='weather-card'>
        <div className='weather-header weather-row-content center'>Historical Weather In {place}</div>
        { weather.weatherData.length > 0 && weather.weatherData.map((data, index) => <WeatherRow
                                        key={index}
                                        data={data} />)}
        { weather.weatherData.length === 1 &&
          <WeatherFooter loadHistoricalData={loadHistoricalData} />
        }
      </div>
    </React.Fragment>
  )
}

export default WeatherContainer;
