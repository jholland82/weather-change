export function ResetButton(props) {
  const {setDisplayWeather} = props;

  const resetApp = () => {
    setDisplayWeather(false);
  }

  return (
      <button className="reset-button" onClick={resetApp}>Reset</button>
  )
}

export default ResetButton;
