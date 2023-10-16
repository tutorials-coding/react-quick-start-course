const BookItem = ({ book }) => {
  return (
    <tr>
      <td className="p-2">{book.id}</td>
      <td className="p-2">{book.author}</td>
      <td className="p-2">{book.title}</td>
    </tr>
  );
};

export default BookItem;
