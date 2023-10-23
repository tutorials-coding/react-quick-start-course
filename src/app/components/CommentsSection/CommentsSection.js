import { useEffect, useState } from 'react';
import { CommentList } from '../CommentList/CommentList';
import { CommentForm } from '../CommentForm/CommentForm';
import { useGetRequest } from '@/app/hooks/useGetRequest';
import { usePostRequest } from '@/app/hooks/usePostRequest';

const CommentsSection = ({ bookId }) => {
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
      <CommentList comments={comments} />
    </>
  );
};

export default CommentsSection;
