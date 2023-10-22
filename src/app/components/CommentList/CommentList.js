import { useGetRequest } from '@/app/hooks/useGetRequest';
import { useEffect, useState } from 'react';
import { CommentForm } from '../CommentForm/CommentForm';
import { usePostRequest } from '@/app/hooks/usePostRequest';

export const CommentList = ({ bookId }) => {
  const [comments, setComments] = useState([]);

  const { get } = useGetRequest(`/api/comments/${bookId}`);
  const { post } = usePostRequest(`/api/comments/${bookId}`);

  useEffect(() => {
    const fetchComments = async () => {
      const bookComments = await get();
      setComments(bookComments);
    };
    fetchComments();
  }, [get]);

  const handleSubmit = (comment) => {
    post(comment);
    setComments((_comments) => [comment, ..._comments]);
  };

  return (
    <>
      <CommentForm onSubmit={handleSubmit} />
      <h4 className="mt-4">Комментарии:</h4>
      {comments.map((comment) => (
        <p key={comment.id}>
          <span className="font-weight-bold">{comment.userName}: </span>
          {comment.text}
        </p>
      ))}
    </>
  );
};
