import styles from './Title.module.css';

const textStyles = {
  fontSize: "18px",
  color: "green",
  fontWeight: 700
}

const Title = () => {
  return (
    <header className="row">
      <div className="col-5">
        <img src="./next.svg" alt="logo" />
      </div>
      <div className="col-7">
        <p className={styles.myText}>Мой список чтения</p>
        <p style={textStyles}>Книги по программированию</p>
      </div>
    </header>
  );
};

export default Title;
