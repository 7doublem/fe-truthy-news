import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchArticleById } from "../Api";
import NavBar from "./NavBar";

function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchArticleById(article_id).then((res) => {
      setArticle(res.data.article);
      setisLoading(false);
    }).catch((err) => {
        setisLoading(false)
        setError(err)
    })
  }, [article_id]);

    if (isLoading) {
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
        <p>{article.article_id}:{article.title}</p>
        <img src={article.article_img_url} alt={article.title} />
        <p>{article.body}</p>
        <p>{article.author}</p>
        <p>{new Date(article.created_at).toLocaleString()}</p>
        <p>Votes: {article.votes}</p>
        <p>Commments: {article.comment_count}</p>
        </section>
    </div>
  )
}


export default SingleArticle;