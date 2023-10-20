import { useEffect, useState } from 'react';

export const useBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchReadingList = async () => {
      const response = await fetch('/api/reading-list');
      const readingList = await response.json();
      setBooks(readingList);
    };
    fetchReadingList();
  }, []);

  return { books, setBooks };
};
