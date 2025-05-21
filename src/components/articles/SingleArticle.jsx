import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleById } from "../../Api.js";
import NavBar from "../NavBar.jsx";
import VoteCard from "../VoteCard.jsx";
import CommentSection from "../comments/CommentSection";
import PostComment from "../comments/PostComment.jsx";

function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoadingArticle, setisLoadingArticle] = useState(true);
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
        <VoteCard
          initialVotes={article.votes}
          id={article.article_id}
          type="article"
        />
        <CommentSection commentCount={article.comment_count} />
        <PostComment article_id={article.article_id} />
      </section>
    </div>
  );
}

export default SingleArticle;
