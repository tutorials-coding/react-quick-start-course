import { useCallback, useState } from 'react';
import { loadingStatus } from '../const/loading-status';

export const useGetRequest = (url) => {
  const [loadingState, setLoadingState] = useState(loadingStatus.loading);

  const get = useCallback(async () => {
    setLoadingState(loadingStatus.loading);
    try {
      const response = await fetch(url);
      const result = await response.json();
      setLoadingState(loadingStatus.loaded);
      return result;
    } catch {
      setLoadingState(loadingStatus.isError);
    }
  }, [url]);

  return { get, loadingState };
};
