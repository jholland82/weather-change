import refreshIcon from '../../assets/refresh.svg';

export function ResetButton(props) {
  const {resetApp} = props;

  return (
    <div onClick={resetApp}>
      <button className="reset-button">Reset</button>
      <img className='refresh-icon' src={refreshIcon} alt='Reset Button'/>
    </div>
  )
}

export default ResetButton;
