import axios from "axios";

const truthyNewsApi = axios.create({
  baseURL: "https://truthy-news.onrender.com/api/",
});

export const getAllArticles = () => {
  return truthyNewsApi.get("/articles");
};

export const getArticleById = (article_id) => {
  return truthyNewsApi.get(`/articles/${article_id}`);
};

export const getCommentsByArticleId = (article_id) => {
  return truthyNewsApi.get(`/articles/${article_id}/comments`);
};

export const patchArticleById = (article_id, inc_votes) => {
  return truthyNewsApi.patch(`/articles/${article_id}`, { inc_votes });
};

export const patchCommentById = (inc_votes) => {
  return truthyNewsApi.patch(`/articles/${article_id}/comments`, { inc_votes });
};
