// The purpose of this is to keep track of the first time a component mounts.
// We don't want to do a weather search when the app initially loads.
import { useRef, useEffect } from 'react';

export function useIsMount() {
  const isMountRef = useRef(true);
  useEffect(() => {
    isMountRef.current = false;
  }, []);
  return isMountRef.current;
};
