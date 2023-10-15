const textStyle = {
  fontSize: '18px',
  color: 'gray',
  fontWeight: 700,
};

const readingList = [
  {
    id: 1,
    title: 'Чистый код: Создание, анализ и рефакторинг',
    author: 'Роберт С. Мартин',
  },
  {
    id: 2,
    title: 'Карьера программиста',
    author: 'Г. Лакман Макдауэлл',
  },
  {
    id: 3,
    title: 'Совершенный код',
    author: 'Стив Макконнелл',
  },
];

const ReadingList = () => {
  return (
    <>
      <div className="row mb-2">
        <h3 style={textStyle}>Книги по программированию</h3>
      </div>

      <table class="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Автор</th>
            <th>Заголовок</th>
          </tr>
        </thead>

        <tbody>
          {readingList.map((item) => (
            <tr key={item.id}>
              <td className="p-2">{item.id}</td>
              <td className="p-2">{item.author}</td>
              <td className="p-2">{item.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ReadingList;
