
export function weatherFooter(props) {
  const { loadHistoricalData } = props;

  return(
    <div className='weather-row-content'>
      <button
        className='weather-footer'
        onClick={loadHistoricalData}>
        Load Historical Data
      </button>
    </div>
  )
}

export default weatherFooter;
