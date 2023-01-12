import './App.css';
import { TitleContainer } from './components/containers/jhTitleContainer'
import { AppContainer } from './components/containers/jhAppContainer'

function App() {
  const body = {
    searchBody: 'First, we need to find a location to search historical weather data.  Please search for a location below.',
    weatherBody: 'Click the card to view more data'
  };

  return (
    <div className="App">
      <header>
        <TitleContainer title="Weather Change" className="App-header"/>
      </header>
      <AppContainer className="app-container" body={body}/>
    </div>
  );
}

export default App;
