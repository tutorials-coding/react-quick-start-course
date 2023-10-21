'use client';

import { createContext, useCallback, useState } from 'react';
import Title from './Title/Title';
import ReadingList from './ReadingList/ReadingList';
import BookCard from './BookCard/BookCard';
import { navValues } from '../const/nav-values';

export const navContext = createContext(navValues.book);

const App = () => {
  const navigate = useCallback((to) => {
    setNav((_nav) => ({ current: to, navigate: _nav.navigate }));
  }, []);

  const [nav, setNav] = useState({ current: navValues.book, navigate });

  return (
    <navContext.Provider value={nav}>
      <Title>Мой список для чтения</Title>
    </navContext.Provider>
  );
};

export default App;
