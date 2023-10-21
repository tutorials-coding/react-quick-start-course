import { navValues } from '@/app/const/nav-values';
import BookCard from '../BookCard/BookCard';
import ReadingList from '../ReadingList/ReadingList';

export const NavRouter = ({ location }) => {
  switch (location) {
    case navValues.book:
      return <BookCard />;
    case navValues.books:
      return <ReadingList />;
    default:
      return <h3>Путь для {location} не найден</h3>;
  }
};
