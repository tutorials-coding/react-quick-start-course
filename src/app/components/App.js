'use client';

import { createContext, useState } from 'react';
import Title from './Title/Title';
import ReadingList from './ReadingList/ReadingList';
import BookCard from './BookCard/BookCard';
import { navValues } from '../const/nav-values';

export const navContext = createContext(navValues.book);

const App = () => {
  return (
    <>
      <Title>Мой список для чтения</Title>
    </>
  );
};

export default App;
