import refreshIcon from '../../assets/refresh.svg';

export function ResetButton(props) {
  const {setDisplayWeather, setError} = props;

  const resetApp = () => {
    setDisplayWeather(false);
    setError({
      error_triggered: false
    });
  }

  return (
    <div onClick={resetApp}>
      <button className="reset-button">Reset</button>
      <img className='refresh-icon' src={refreshIcon} alt='Reset Button'/>
    </div>
  )
}

export default ResetButton;
