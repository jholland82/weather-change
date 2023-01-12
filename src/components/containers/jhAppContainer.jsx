import SearchContainer from './jhSearchContainer'

export function AppContainer(props) {
  const { body } = props;

  return (
    <div className='app-container'>
      <SearchContainer body={body.searchBody} />
    </div>
  )
}

export default AppContainer;
