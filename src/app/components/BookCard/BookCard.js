import { useContext } from 'react';
import { navContext } from '../App';
import CommentsSection from '../CommentsSection/CommentsSection';

const BookCard = () => {
  const { param: book } = useContext(navContext);
  return (
    <>
      <div className="row">
        <div className="col-6">
          <div className="row">
            <img
              className="img-fluid"
              src={
                book.image
                  ? `./book-images/${book.image}.webp`
                  : './book-images/default-book.jpeg'
              }
              alt="book pic"
            />
          </div>
        </div>
        <div className="col-6">
          <div className="row mt-2">
            <h5 className="col-12">{book.title}</h5>
          </div>
          <div className="row">
            <h3 className="col-12">{book.author}</h3>
          </div>
        </div>
      </div>

      <CommentsSection bookId={book.id} />
    </>
  );
};

export default BookCard;
