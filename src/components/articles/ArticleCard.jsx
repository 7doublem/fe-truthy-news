import { Link } from "react-router-dom";
import thumbsUp from "../../votesIcons/thumbsUp.svg";
import thumbsDown from "../../votesIcons/thumbsDown.svg";
import { useNavigate } from "react-router-dom";

function ArticleCard({ article }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/articles/${article.article_id}`);
  }
  return (
    <div>
      <section>
        <p>Article Number {article.article_id}</p>
        <Link to={`/articles/${article.article_id}`}>
          <img
            src={article.article_img_url}
            alt={`${article.author}'s image`}
            width={100}
            height={100}
          />
        </Link>
        <p>Topic: {article.topic}</p>
        <p>By {article.author}</p>
        <p>{new Date(article.created_at).toLocaleString()}</p>
        <p>Votes:{article.votes}</p>
        <button onClick={handleClick}>
          <img src={thumbsUp} alt="Thumbs Up" width={24} height={24} />
        </button>
        <button onClick={handleClick}>
          <img src={thumbsDown} alt="Thumbs Down" width={24} height={24} />
        </button>
        <p>Comments: {article.comment_count}</p>
        <Link to={`/articles/${article.article_id}`}>
          <p>{article.title}</p>
        </Link>
      </section>
    </div>
  );
}

export default ArticleCard;
