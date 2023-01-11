import logo from '../../assets/Weather.svg';
import { H2 } from './jhTitle'

export function TitleContainer(props) {
  const {title} = props;

  return (
    <div>
        <H2 title={title}/>
        <img src={logo} className="App-logo" alt="logo" />
    </div>
  )
}

export default TitleContainer;
