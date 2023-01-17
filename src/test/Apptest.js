import { DisplayWeatherProvider } from '../context/displayWeatherContext';
import { ErrorProvider } from '../context/errorContext';
import { WeatherProvider } from '../context/weatherContext';

function AppTest(props) {
  const { weather, setWeather } = props;

  return (
    <div className="App">
      <DisplayWeatherProvider>
        <WeatherProvider value={{ weather, setWeather }}>
          <ErrorProvider>
            {props.children}
          </ErrorProvider>
        </WeatherProvider>
      </DisplayWeatherProvider>
    </div>
  );
}

export default AppTest;
