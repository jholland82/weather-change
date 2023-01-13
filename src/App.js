import './App.css';

import { AppContainer } from './components/containers/AppContainer'

function App() {
  const body = {
    searchBody: 'First, we need to find a location to search historical weather data.  Please search for a location below.',
    weatherBody: 'Click the card to view more data'
  };

  return (
    <div className="App">
      <AppContainer className="app-container" body={body}/>
    </div>
  );
}

export default App;
