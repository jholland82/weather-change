import React, {useEffect, useState} from 'react';
import PlaceContainer from './PlaceContainer';
import SearchContainer from './SearchContainer';
import TitleContainer from './TitleContainer'
import WeatherContainer from './WeatherContainer';
import {findPlace} from '../../services/findplace';
import {historicalweather} from '../../services/historicalweather';
import {searchPlaces} from '../../services/autocomplete';

export function AppContainer(props) {
  const { body } = props;
  const [locations, getLocations] = useState([]);
  const [place, getPlace] = useState({});
  const [weather, getWeather] = useState([]);
  const [displayWeather, setDisplayWeather] = useState(false)
  const [lat, setLat] = useState();
  const [long, setLong] = useState();

  const appState = {
    locations: locations,
    getLocations: getLocations,
    place: place,
    getPlace: getPlace,
    weather: weather,
    getWeather: getWeather,
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
      <SearchContainer body={body.searchBody} searchPlaces={searchPlaces} getLocations={appState.getLocations}/>
      { displayWeather === false
      ? <PlaceContainer findPlace={findPlace} appState={appState}/>
      : <WeatherContainer weather={appState.weather} />
      }
    </div>
  )
}

export default AppContainer;
