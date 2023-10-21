'use client';

import { createContext, useCallback, useState } from 'react';
import Title from './Title/Title';
import { navValues } from '../const/nav-values';
import { NavRouter } from './NavRouter/NavRouter';

export const navContext = createContext(navValues.books);

const App = () => {
  const navigate = useCallback((to, param) => {
    setNav((_nav) => ({ ..._nav, current: to, param }));
  }, []);

  const [nav, setNav] = useState({ current: navValues.books, navigate });

  return (
    <navContext.Provider value={nav}>
      <Title>Мой список для чтения</Title>
      <NavRouter location={nav.current} />
    </navContext.Provider>
  );
};

export default App;
