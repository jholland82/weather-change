export function ErrorContainer(props) {
  const {error} = props

  return (
    <div className="error-message">{error}</div>
  )
}

export default ErrorContainer;
