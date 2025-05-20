import axios from "axios";

const truthyNewsApi = axios.create({
  baseURL: "https://truthy-news.onrender.com/api/",
});

export const fetchArticles = () => {
  return truthyNewsApi.get("/articles");
};

export const fetchArticleById = (article_id) => {
  return truthyNewsApi.get(`/articles/${article_id}`);
};

export const fetchCommentsByArticleId = (article_id) => {
    return truthyNewsApi.get(`/articles/${article_id}/comments`)
}