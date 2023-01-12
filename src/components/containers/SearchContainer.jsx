import SearchInput from '../inputs/SearchInput'

export function SearchContainer(props) {
  const { body, handleTypeAhead } = props;

  return (
    <div className="main-body">
      { body }
      <SearchInput handleTypeAhead={handleTypeAhead} />
    </div>
  )
}

export default SearchContainer;
