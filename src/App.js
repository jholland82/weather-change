import './App.css';

import { AppContainer } from './components/containers/AppContainer'
import { DisplayWeatherProvider } from './context/displayWeatherContext';
import { ErrorProvider } from './context/errorContext';
import { WeatherProvider } from './context/weatherContext';

function App() {
  const body = {
    searchBody: 'First, we need to find a location to search historical weather data.  Please search for a location below.',
    weatherBody: 'Click the card to view more data'
  };

  return (
    <div className="App">
      <DisplayWeatherProvider>
        <WeatherProvider>
          <ErrorProvider>
            <AppContainer className="app-container" body={body}/>
          </ErrorProvider>
        </WeatherProvider>
      </DisplayWeatherProvider>
    </div>
  );
}

export default App;
