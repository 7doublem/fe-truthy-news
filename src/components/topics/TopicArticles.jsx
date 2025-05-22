import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticlesByTopic } from "../../Api";
import ArticleCard from "../articles/ArticleCard";
import NavBar from "../navigation/NavBar";

function TopicArticles() {
  const { topic_slug } = useParams();
  const [articles, setArticles] = useState([]);
  const [isLoadingArticles, setIsLoadingArticles] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getArticlesByTopic(topic_slug)
      .then((res) => {
        setArticles(res.data.articles);
        setIsLoadingArticles(false);
      })
      .catch((err) => {
        setIsLoadingArticles(false);
        setError(err);
      });
  }, [topic_slug]);

  if (isLoadingArticles) {
    return <p>Loading articles for {topic_slug}..</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <NavBar />
      <h2>Articles about: {topic_slug}</h2>
      {articles.map((article) => (
        <ArticleCard key={article.article_id} article={article} />
      ))}
    </div>
  );
}

export default TopicArticles;
