import { useEffect } from 'react';

export function useOnce(callback: () => void) {
  useEffect(() => {
    callback();
  }, []);
}
