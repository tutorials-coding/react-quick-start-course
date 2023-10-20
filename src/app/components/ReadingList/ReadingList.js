'use client';

import BookItem from '../BookItem/BookItem';
import { useBooks } from '../../hooks/useBooks';

const textStyle = {
  fontSize: '18px',
  color: 'gray',
  fontWeight: 700,
};

const ReadingList = ({ onSelectBook }) => {
  const { books, setBooks } = useBooks();

  const handleAdd = () => {
    setBooks((currentBooks) => [
      ...currentBooks,
      {
        id: 5,
        title: 'Искусство программирования',
        author: 'Дональд Кнут',
      },
    ]);
  };

  return (
    <>
      <div className="row mb-2">
        <h3 style={textStyle}>Книги по программированию</h3>
      </div>

      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Автор</th>
            <th>Заголовок</th>
            <th>Прочитано</th>
          </tr>
        </thead>

        <tbody>
          {books.map((item) => (
            <BookItem key={item.id} book={item} onSelectBook={onSelectBook} />
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={handleAdd}>
        Добавить
      </button>
    </>
  );
};

export default ReadingList;
