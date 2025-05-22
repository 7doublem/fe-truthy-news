import VoteCard from "../VoteCard.jsx";
import bin from "../../deleteIcon/bin.svg";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { deleteCommentById } from "../../Api.js";

function CommentCard({ comment }) {
  const { user } = useContext(UserContext);
  const [error, setError] = useState(null);
  const [isDeletingComment, setIsDeletingComment] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [message, setMessage] = useState("");

  function deleteComment() {
    setIsDeletingComment(true);
    setError(null);
    deleteCommentById(comment.comment_id)
      .then(() => {
        setIsDeleted(true);
        setMessage("Comment deleted successfully!");
      })
      .catch(() => {
        setError("Failed to delete. Please try again");
      })
      .finally(() => {
        setIsDeletingComment(false);
      });
  }
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
        {user?.username === comment.author && !isDeleted && (
          <div>
            <button>
              <img
                src={bin}
                alt="Delete Comment"
                width={24}
                height={24}
                onClick={deleteComment}
                disabled={isDeletingComment}
              />
            </button>
            
          </div>
        )}
        {message && <p>{message}</p>}
        {error && <p>{error}</p>}
      </section>
    </div>
  );
}

export default CommentCard;
