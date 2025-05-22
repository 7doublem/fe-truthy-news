import axios from "axios";

const truthyNewsApi = axios.create({
  baseURL: "https://truthy-news.onrender.com/api/",
});

export const getAllUsers = () => {
  return truthyNewsApi.get("/users");
};

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

export const patchCommentById = (comment_id, inc_votes) => {
  return truthyNewsApi.patch(`/comments/${comment_id}`, { inc_votes });
};

export const postCommentByArticleId = (article_id, username, body) => {
  return truthyNewsApi.post(`/articles/${article_id}/comments`, {
    username,
    body,
  });
};

export const deleteCommentById = (comment_id) => {
  return truthyNewsApi.delete(`/comments/${comment_id}`);
};

export const getAllTopics = () => {
  return truthyNewsApi.get("/topics");
};

export const getArticlesByTopic = (topic) => {
  return truthyNewsApi.get(`/articles?topic=${topic}`);
};
