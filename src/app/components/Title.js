import styles from './Title.module.css';

const textStyles = {
  fontSize: "18px",
  color: "gray",
  fontWeight: 700
}

const Title = () => {
  return (
    <header className="row p-4">
      <div className="col-5">
        <img src="./next.svg" alt="logo" />
      </div>
      <div className="col-7 text-center">
        <p className={styles.myText}>Мой список чтения</p>
        <p style={textStyles}>Книги по программированию</p>
      </div>
    </header>
  );
};

export default Title;
