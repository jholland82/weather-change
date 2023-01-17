import logo from '../../assets/Weather.svg';
import { H2 } from '../titles/Title';
import ResetButton from '../inputs/ResetButton';
import {useDisplayWeather} from '../../context/displayWeatherContext';
import {useError} from '../../context/errorContext';

export function TitleContainer(props) {
  const { setLocations, title } = props;
  const { setDisplayWeather } = useDisplayWeather();
  const { setError } = useError();

  const resetApp = () => {
    setDisplayWeather(false);
    setError({
      error_triggered: false
    });
    setLocations([]);
  }

  return (
    <header className="title-container">
      <ResetButton resetApp={resetApp} />
      <H2 title={title} />
      <img src={logo} className="App-logo" alt="weather logo" />
    </header>
  )
}

export default TitleContainer;
