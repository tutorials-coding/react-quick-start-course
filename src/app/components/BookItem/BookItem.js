import React from 'react';

const BookItem = ({ book, onSelectBook }) => {
  return (
    <tr onClick={() => onSelectBook(book)}>
      <td className="p-2">{book.id}</td>
      <td className="p-2">{book.author}</td>
      <td className="p-2">{book.title}</td>
      <td className={`p-2 ${book.isRead ? 'text-success' : ''}`}>
        {String(book.isRead)}
      </td>
    </tr>
  );
};

export const BookItemMemoized = React.memo(BookItem);

export default BookItem;
