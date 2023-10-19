'use client';

import { useState } from 'react';
import Title from './Title/Title';
import ReadingList from './ReadingList/ReadingList';
import BookCard from './BookCard/BookCard';

const App = () => {
  const [selectedBook, setSelectedBook] = useState();

  return (
    <>
      <Title>Мой список для чтения</Title>
      {selectedBook ? <BookCard book={selectedBook} /> : <ReadingList />}
    </>
  );
};

export default App;
