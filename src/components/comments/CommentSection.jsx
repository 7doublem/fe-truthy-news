import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCommentsByArticleId } from "../../Api.js";
import CommentCard from "./CommentCard.jsx";

function CommentSection() {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const [isLoadingComments, setIsLoadingComments] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoadingComments(true);
    getCommentsByArticleId(article_id)
      .then((res) => {
        setComments(res.data.comments);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoadingComments(false);
      });
  }, [article_id]);

  if (isLoadingComments) {
    return <p>Loading comments..</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <section>
      <p>Comments</p>
      {comments.length === 0 ? (
        <p>No comments yet</p>
      ) : (
        comments.map((comment) => (
          <CommentCard key={comment.comment_id} comment={comment} />
        ))
      )}
    </section>
  );
}
export default CommentSection;
