import NavBar from "../NavBar";
import { useState, useEffect } from "react";
import { getAllArticles } from "../../Api";
import ArticleCard from "./ArticleCard";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoadingArticles, setisLoadingArticles] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllArticles()
      .then((res) => {
        setArticles(res.data.articles);
        setisLoadingArticles(false);
      })
      .catch((err) => {
        setisLoadingArticles(false);
        setError(err);
      });
  }, []);

  if (isLoadingArticles) {
    return <p>Loading articles..</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <NavBar />
      <h2>Articles</h2>
      {articles.map((article) => (
        <ArticleCard key={article.article_id} article={article} />
      ))}
    </div>
  );
}

export default Articles;
