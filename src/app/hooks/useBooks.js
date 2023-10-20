import { useEffect, useState } from 'react';
import { loadingStatus } from '../const/loading-status';

export const useBooks = () => {
  const [books, setBooks] = useState([]);
  const [loadingState, setLoadingState] = useState(loadingStatus.loading);

  useEffect(() => {
    const fetchReadingList = async () => {
      try {
        const response = await fetch('/api/reading-list');
        const readingList = await response.json();
        setBooks(readingList);
        setLoadingState(loadingStatus.loaded);
      } catch {
        setLoadingState(loadingStatus.isError);
      }
    };
    fetchReadingList();
  }, []);

  return { books, setBooks, loadingState };
};
