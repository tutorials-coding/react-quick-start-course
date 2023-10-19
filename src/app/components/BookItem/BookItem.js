import React from 'react';

const BookItem = ({ book }) => {
  let isReadTd;

  if (book.isRead) {
    isReadTd = <td className="p-2 text-success">{String(book.isRead)}</td>;
  } else {
    isReadTd = <td className="p-2">{String(book.isRead)}</td>;
  }

  return (
    <tr>
      <td className="p-2">{book.id}</td>
      <td className="p-2">{book.author}</td>
      <td className="p-2">{book.title}</td>
      {isReadTd}
    </tr>
  );
};

export const BookItemMemoized = React.memo(BookItem);

export default BookItem;
