import {createContext, useContext, useMemo, useState} from 'react';

const DisplayWeatherContext = createContext();

function useDisplayWeather() {
  const context = useContext(DisplayWeatherContext);
  if (!context) {
    throw new Error('useDisplayWeather must be used within a DisplayWeatherProvider')
  }
  return context;
}

function DisplayWeatherProvider(props) {
  const [displayWeather, setDisplayWeather] = useState(false);

  const value = useMemo(() => ({ displayWeather, setDisplayWeather }), [displayWeather]);
  return <DisplayWeatherContext.Provider value={value} {...props} />
}

export {DisplayWeatherProvider, useDisplayWeather};
