import NavBar from "../navigation/NavBar";
import { useState, useEffect } from "react";
import { getSortedArticles } from "../../Api";
import ArticleCard from "./ArticleCard";
import SortArticles from "./SortArticles";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoadingArticles, setisLoadingArticles] = useState(true);
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("desc");
  const [error, setError] = useState(null);

  useEffect(() => {
    getSortedArticles(sortBy, order)
      .then((res) => {
        setArticles(res.data.articles);
        setisLoadingArticles(false);
      })
      .catch((err) => {
        setisLoadingArticles(false);
        setError(err);
      });
  }, [sortBy, order]);

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
      <SortArticles
        sortBy={sortBy}
        setSortBy={setSortBy}
        order={order}
        setOrder={setOrder}
      />
      {articles.map((article) => (
        <ArticleCard key={article.article_id} article={article} />
      ))}
    </div>
  );
}

export default Articles;
