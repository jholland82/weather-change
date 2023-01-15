import logo from '../../assets/Weather.svg';
import { H2 } from '../titles/Title';
import ResetButton from '../inputs/ResetButton';

export function TitleContainer(props) {
  const {setDisplayWeather, setError, title} = props;

  return (
    <div className="title-container">
      <ResetButton setDisplayWeather={setDisplayWeather} setError={setError} />
      <H2 title={title} />
      <img src={logo} className="App-logo" alt="weather logo" />
    </div>
  )
}

export default TitleContainer;
