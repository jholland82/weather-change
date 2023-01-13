import React, {useEffect, useState} from 'react';
import PlaceContainer from './PlaceContainer';
import TitleContainer from './TitleContainer'
import WeatherContainer from './WeatherContainer';
import {findPlace} from '../../services/findplace';
import {historicalweather} from '../../services/historicalweather';

export function AppContainer(props) {
  const { body } = props;
  const [locations, getLocations] = useState([]);
  const [place, setPlace] = useState({});
  const [weather, setWeather] = useState([]);
  const [displayWeather, setDisplayWeather] = useState(false)
  const [lat, setLat] = useState();
  const [long, setLong] = useState();

  const appState = {
    locations: locations,
    getLocations: getLocations,
    place: place,
    setPlace: setPlace,
    weather: weather,
    setWeather: setWeather,
    displayWeather: displayWeather,
    setDisplayWeather: setDisplayWeather,
    lat: lat,
    setLat: setLat,
    long: long,
    setLong: setLong
  };

  useEffect(() => {
    historicalweather(appState);
  }, [displayWeather]);

  return (
    <div className='app-container'>
      <header>
        <TitleContainer title="Weather Change" className="App-header" appState={appState}/>
      </header>
      { displayWeather === false
        ? <PlaceContainer findPlace={findPlace} appState={appState} body={body.searchBody}/>
        : <WeatherContainer appState={appState} />
      }
    </div>
  )
}

export default AppContainer;
