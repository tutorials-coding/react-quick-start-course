import { useEffect, useState } from 'react';
import { useGetRequest } from './useGetRequest';

export const useBooks = () => {
  const [books, setBooks] = useState([]);
  const { get, loadingState } = useGetRequest('/api/reading-list');

  useEffect(() => {
    const fetchReadingList = async () => {
      const readingList = await get();
      setBooks(readingList);
    };
    fetchReadingList();
  }, [get]);

  return { books, setBooks, loadingState };
};
