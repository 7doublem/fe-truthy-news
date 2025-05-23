import NavBar from "../navigation/NavBar";
import { useState, useEffect } from "react";
import { getSortedArticles } from "../../Api";
import ArticleCard from "./ArticleCard";
import SortArticles from "./SortArticles";
import { useSearchParams } from "react-router-dom";
import GlobalErrorHandler from "../errors/GlobalErrorHandler";
import { handleApiError } from "../utils/handleApiError";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoadingArticles, setisLoadingArticles] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = searchParams.get("sort_by") || "created_at";
  const order = searchParams.get("order") || "desc";
  const topic = searchParams.get("topic");

  useEffect(() => {
    getSortedArticles({ sortBy, order, topic })
      .then((res) => {
        setArticles(res.data.articles);
        setisLoadingArticles(false);
      })
      .catch((err) => {
        const message = handleApiError(err);
        setError(message);
        setisLoadingArticles(false);
      });
  }, [sortBy, order, topic]);

  if (isLoadingArticles) {
    return <p>Loading articles..</p>;
  }
  if (error) {
    return (
      <div>
        <GlobalErrorHandler status={error.status} message={error.message} />
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      <h2>{topic ? `Articles about ${topic}` : "All Articles"}</h2>
      <SortArticles
        sortBy={sortBy}
        order={order}
        setSearchParams={setSearchParams}
      />
      {articles.map((article) => (
        <ArticleCard key={article.article_id} article={article} />
      ))}
    </div>
  );
}

export default Articles;
