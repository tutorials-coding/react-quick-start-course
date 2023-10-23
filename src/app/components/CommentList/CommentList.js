export const CommentList = ({ comments }) => {
  return (
    <>
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
