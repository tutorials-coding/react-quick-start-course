import { useContext } from 'react';
import style from './Title.module.css';
import { navContext } from '../App';
import { navValues } from '../../const/nav-values';

const Title = ({ children }) => {
  const { navigate } = useContext(navContext);
  return (
    <header className="row p-4">
      <div
        className={`col-5 ${style.logoContainer}`}
        onClick={() => navigate(navValues.books)}
      >
        <img src="./book-images/default-book.jpeg" alt="logo" />
      </div>
      <div className="col-7 text-center">
        <h1 className={style.myText}>{children}</h1>
      </div>
    </header>
  );
};

export default Title;
