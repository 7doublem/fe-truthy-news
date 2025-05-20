function CommentCard({ comment }) {
  return (
    <div>
      <section>
          <p>Comments</p>
          <p>{comment.author} commented:</p>
          <p>{comment.body}</p>
          <p>{new Date(comment.created_at).toLocaleString()}</p>
          <p>Votes: {comment.votes}</p>
      </section>
    </div>
  );
}

export default CommentCard;
