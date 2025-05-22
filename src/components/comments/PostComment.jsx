import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { postCommentByArticleId } from "../../Api";
import { useNavigate } from "react-router-dom";

function PostComment({ article_id }) {
  const { user } = useContext(UserContext);
  const [body, setBody] = useState("");
  const [isSubmittingComment, setIsSubmittingComment] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function mustLogIn() {
    setIsSubmittingComment(false);
    navigate("/users");
  }
  function submitComment() {
    setIsSubmittingComment(true);
    setError(null);

    const username = user.username;


    postCommentByArticleId(article_id, username, body)
      .then(() => {
        setBody("");
        setMessage("Comment submitted successfully");
      })
      .catch(() => {
        setError("Failed to submit comment. Please try again.");
      })
      .finally(() => {
        setIsSubmittingComment(false);
      });
  }
  return (
    <div>
      {!user ? (
        <div>
          <button onClick={mustLogIn}>Log in</button>
        </div>
      ) : (
        <div>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Enter your comment.."
            rows={4}
            cols={40}
          />
          <button onClick={submitComment} disabled={isSubmittingComment}>
            {isSubmittingComment ? "Submitting.." : "Submit"}
          </button>
          {message && <p>{message}</p>}
          {error && <p>{error}</p>}
        </div>
      )}
    </div>
  );
}

export default PostComment;
