import { useState } from 'react';

export const CommentForm = ({ onSubmit }) => {
  const [comment, setComment] = useState({
    text: '',
    userName: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(comment);
  };

  const handleChange = (e) => {
    setComment((comment) => ({
      ...comment,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label for="commentText">Комментарий</label>
        <textarea
          id="commentText"
          className="form-control"
          name="text"
          value={comment.text}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label for="commentUserName">Ваше имя</label>
        <input
          id="commentUserName"
          className="form-control"
          name="userName"
          value={comment.userName}
          onChange={handleChange}
        />
      </div>

      <button className="btn btn-primary" type="submit">
        Добавить комментарий
      </button>
    </form>
  );
};
