import style from './Title.module.css';

const textStyle = {
  fontSize: '18px',
  color: 'gray',
  fontWeight: 700,
};

const Title = ({ children }) => {
  return (
    <header className="row p-4">
      <div className="col-5">
        <img src="./next.svg" alt="logo" />
      </div>
      <div className="col-7 text-center">
        <h1 className={style.myText}>{children}</h1>
        <h2 style={textStyle}>Книги по программированию</h2>
      </div>
    </header>
  );
};

export default Title;
