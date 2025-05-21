import VoteCard from "../VoteCard.jsx";

function CommentCard({ comment }) {
  return (
    <div>
      <section>
        <p>{comment.author} commented:</p>
        <p>{comment.body}</p>
        <p>{new Date(comment.created_at).toLocaleString()}</p>
        <VoteCard
          initialVotes={comment.votes}
          id={comment.comment_id}
          type="comment"
        />
      </section>
    </div>
  );
}


export default CommentCard;
