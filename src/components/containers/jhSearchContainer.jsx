import SearchInput from '../inputs/jhSearchInput'

export function SearchContainer(props) {
  const { body } = props;

  return (
    <div className="main-body">
      { body }
      <SearchInput />
    </div>
  )
}

export default SearchContainer;
