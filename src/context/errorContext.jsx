import {createContext, useContext, useMemo, useState} from 'react';

const ErrorContext = createContext();

function useError() {
  const context = useContext(ErrorContext);
  if (!context) {
    throw new Error('useError must be used within a ErrorProvider')
  }
  return context;
}

function ErrorProvider(props) {
  const [error, setError] = useState(false);

  const value = useMemo(() => ({ error, setError }), [error]);
  return <ErrorContext.Provider value={value} {...props} />
}

export {ErrorProvider, useError};
