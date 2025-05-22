import { useParams, useNavigate, useLocation, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleById } from "../../Api.js";
import NavBar from "../navigation/NavBar.jsx";
import VoteCard from "../votes/VoteCard.jsx";
import PostComment from "../comments/PostComment.jsx";
import GlobalErrorHandler from "../errors/GlobalErrorHandler.jsx";
import { handleApiError } from "../utils/handleApiError.js";

function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoadingArticle, setisLoadingArticle] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const isCommentsRoute = location.pathname.endsWith("/comments");

  const toggleComments = () => {
    if (isCommentsRoute) {
      navigate(`/articles/${article_id}`);
    } else {
      navigate(`/articles/${article_id}/comments`);
    }
  };
  useEffect(() => {
    getArticleById(article_id)
      .then((res) => {
        setArticle(res.data.article);
      })
      .catch((err) => {
        const message = handleApiError(err);
        setError(message);
      })
      .finally(() => {
        setisLoadingArticle(false);
      });
  }, [article_id]);

  if (isLoadingArticle) {
    return <p>Loading article..</p>;
  }

  if (error) {
    return (
      <div>
        <GlobalErrorHandler status={error.status} message={error.message} />
        <button onClick={() => navigate("/articles")}>Go Back</button>
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      <section>
        <p>{article.topic}</p>
        <p>
          {article.article_id}:{article.title}
        </p>
        <img src={article.article_img_url} alt={article.title} />
        <p>{article.body}</p>
        <p>{article.author}</p>
        <p>{new Date(article.created_at).toLocaleString()}</p>
        <VoteCard
          initialVotes={article.votes}
          id={article.article_id}
          type="article"
        />
        <button onClick={toggleComments}>
          {isCommentsRoute ? "Hide Comments" : "Show Comments"}
        </button>
        <Outlet />
        <PostComment article_id={article.article_id} />
      </section>
    </div>
  );
}

export default SingleArticle;
