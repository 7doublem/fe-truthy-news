import { Link } from "react-router-dom";

function ArticleCard({ article }) {
  return (
    <div>
      <section>
        <p>Article Number {article.article_id}</p>
        <Link to={`/articles/${article.article_id}`}>
          <button>
            <img
              src={article.article_img_url}
              alt={`${article.author}'s image`}
              width={100}
              height={100}
            />
          </button>
        </Link>
        <p>Topic: {article.topic}</p>
        <p>By {article.author}</p>
        <p>{new Date(article.created_at).toLocaleString()}</p>
        <p>Votes:{article.votes}</p>
        <p>Comments: {article.comment_count}</p>
        <Link to={`/articles/${article.article_id}`}>
          <button>
            <p>{article.title}</p>
          </button>
        </Link>
      </section>
    </div>
  );
}

export default ArticleCard;