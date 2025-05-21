import thumbsUp from '../votesIcons/thumbsUp.svg'
import thumbsDown from '../votesIcons/thumbsDown.svg'
import VoteCard from "./VoteCard.jsx";

function CommentCard({ comment }) {
  return (
    <div>
      <section>
          <p>Comments</p>
          <p>{comment.author} commented:</p>
          <p>{comment.body}</p>
          <p>{new Date(comment.created_at).toLocaleString()}</p>
          <VoteCard initialVotes={comment.votes} id={comment.comment_id} type="comment"/>
      </section>
    </div>
  );
}

export default CommentCard;
