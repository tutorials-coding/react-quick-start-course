import style from './Title.module.css';

const Title = ({ children }) => {
  return (
    <header className="row p-4">
      <div className="col-5">
        <img src="./next.svg" alt="logo" />
      </div>
      <div className="col-7 text-center">
        <h1 className={style.myText}>{children}</h1>
      </div>
    </header>
  );
};

export default Title;
