import {createContext, useContext, useMemo, useState} from 'react';

const WeatherContext = createContext();

function useWeather() {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error('useWeather must be used within a WeatherProvider')
  }
  return context;
}

function WeatherProvider(props) {
  const [weather, setWeather] = useState({});

  const value = useMemo(() => ({ weather, setWeather }), [weather]);
  return <WeatherContext.Provider value={value} {...props} />
}

export {WeatherProvider, useWeather};
