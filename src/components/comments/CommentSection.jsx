import { useParams } from "react-router-dom";
import { useState } from "react";
import { getCommentsByArticleId } from "../../Api.js";
import CommentCard from "./CommentCard.jsx";
import PostComment from "./PostComment.jsx";

function CommentSection({ commentCount }) {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const [isLoadingComments, setIsLoadingComments] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [error, setError] = useState(null);

  const handleLoadingComments = () => {
    setIsLoadingComments(true);
    getCommentsByArticleId(article_id)
      .then((res) => {
        setComments(res.data.comments);
        setShowComments(true);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoadingComments(false);
      });
  };

  if (isLoadingComments) {
    return <p>Loading comments..</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <section>
        {!showComments && (
          <button onClick={handleLoadingComments} disabled={isLoadingComments}>
            {isLoadingComments
              ? `Loading ${commentCount} comments..`
              : `Load ${commentCount} comments`}
          </button>
        )}
        {error && <p>{error.message}</p>}

        {showComments && (
          <div>
            <p>Comments</p>
            {comments.map((comment) => (
              <CommentCard key={comment.comment_id} comment={comment} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default CommentSection;
