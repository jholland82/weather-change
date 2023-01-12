import logo from '../../assets/Weather.svg';
import { H2 } from '../titles/Title'

export function TitleContainer(props) {
  const {title} = props;

  return (
    <div className="title-container">
        <H2 title={title}/>
        <img src={logo} className="App-logo" alt="weather logo" />
    </div>
  )
}

export default TitleContainer;
