import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleById } from "../Api";
import { getCommentsByArticleId } from "../Api";
import NavBar from "./NavBar";
import CommentCard from "./CommentCard.jsx";
import VoteCard from "./VoteCard.jsx";

function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [isLoadingArticle, setisLoadingArticle] = useState(true);
  const [isLoadingComments, setIsLoadingComments] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getArticleById(article_id)
      .then((res) => {
        setArticle(res.data.article);
        setisLoadingArticle(false);
      })
      .catch((err) => {
        setisLoadingArticle(false);
        setError(err);
      });
  }, [article_id]);

  const handleLoadingComments = () => {
    setIsLoadingComments(true);
    getCommentsByArticleId(article_id).then((res) => {
      setComments(res.data.comments);
      setShowComments(true);
      setIsLoadingComments(false);
    });
  };

  if (isLoadingArticle) {
    return <p>Loading article..</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <NavBar />
      <section>
        <p>Topic</p>
        <p>
          {article.article_id}:{article.title}
        </p>
        <img src={article.article_img_url} alt={article.title} />
        <p>{article.body}</p>
        <p>{article.author}</p>
        <p>{new Date(article.created_at).toLocaleString()}</p>
        <VoteCard initialVotes={article.votes} id={article.article_id} type="article"/>

        {!showComments && (
          <button onClick={handleLoadingComments}>
            {isLoadingComments
              ? `Loading ${article.comment_count} comments..`
              : `Load ${article.comment_count} comments`}
          </button>
        )}

        {showComments && (
          <div>
            {comments.map((comment) => (
              <CommentCard key={comment.comment_id} comment={comment} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default SingleArticle;
