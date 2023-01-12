export function SearchInput(props) {
  const { handleTypeAhead } = props;

  return (
    <input type='search' id='location-search' name='q' onKeyDown={handleTypeAhead} />
  )
}

export default SearchInput;
