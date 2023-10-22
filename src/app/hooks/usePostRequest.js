import { useCallback, useState } from 'react';
import { loadingStatus } from '../const/loading-status';

export const usePostRequest = (url) => {
  const [loadingState, setLoadingState] = useState(loadingStatus.loading);

  const post = useCallback(
    async (data) => {
      setLoadingState(loadingStatus.loading);
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        const result = await response.json();
        setLoadingState(loadingStatus.loaded);
        return result;
      } catch {
        setLoadingState(loadingStatus.isError);
      }
    },
    [url]
  );

  return { post, loadingState };
};
