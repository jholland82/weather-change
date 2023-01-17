import {createContext, useContext, useMemo, useState} from 'react';

const PlaceContext = createContext();

function usePlace() {
  const context = useContext(PlaceContext);
  if (!context) {
    throw new Error('usePlace must be used within a PlaceProvider')
  }
  return context;
}

function PlaceProvider(props) {
  const [place, setPlace] = useState(false);

  const value = useMemo(() => ({ place, setPlace }), [place]);
  return <PlaceContext.Provider value={value} {...props} />
}

export {PlaceProvider, usePlace};
