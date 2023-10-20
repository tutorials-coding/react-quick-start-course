'use client';

import { useState } from 'react';
import Title from './Title/Title';
import ReadingList from './ReadingList/ReadingList';
import BookCard from './BookCard/BookCard';

const App = () => {
  const [selectedBook, setSelectedBook] = useState();

  const handleSelectBook = (book) => {
    // TODO: проверки объекта book
    setSelectedBook(book);
  };

  return (
    <>
      <Title>Мой список для чтения</Title>
      {selectedBook ? (
        <BookCard book={selectedBook} />
      ) : (
        <ReadingList onSelectBook={handleSelectBook} />
      )}
    </>
  );
};

export default App;
