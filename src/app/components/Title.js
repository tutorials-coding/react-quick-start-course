import styles from './Title.module.css';

const Title = () => {
  return (
    <header className="row">
      <div className="col-5">
        <img src="./next.svg" alt="logo" />
      </div>
      <div className="col-7">
        <p className={styles.myText}>Мой список чтения</p>
        <p style={{
            fontSize: "18px",
            color: "green",
            fontWeight: 700
        }}>Книги по программированию</p>
      </div>
    </header>
  );
};

export default Title;
