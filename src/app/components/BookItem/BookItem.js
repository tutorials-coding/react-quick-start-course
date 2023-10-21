import React, { useContext } from 'react';
import { navContext } from '../App';
import { navValues } from '@/app/const/nav-values';

const BookItem = ({ book }) => {
  const { navigate } = useContext(navContext);
  return (
    <tr onClick={() => navigate(navValues.book, book)}>
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
