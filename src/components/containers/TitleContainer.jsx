import logo from '../../assets/Weather.svg';
import { H2 } from '../titles/Title';
import ResetButton from '../inputs/ResetButton';

export function TitleContainer(props) {
  const {appState, title} = props;

  return (
    <div className="title-container">
      <ResetButton setDisplayWeather={appState.setDisplayWeather}/>
      <H2 title={title}/>
      <img src={logo} className="App-logo" alt="weather logo" />
    </div>
  )
}

export default TitleContainer;
