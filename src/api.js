import axios from "axios";

export const fetchArticles = ({ sortBy, orderBy, topic }) => {
  return axios
    .get(`https://eyalshay-nc-news-be.cyclic.app/api/articles`, {
      params: { sort_by: sortBy, order: orderBy, topic: topic },
    })
    .then((res) => {
      return res.data;
    });
};

export const fetchArticle = (article_id) => {
  return axios.get(
    `https://eyalshay-nc-news-be.cyclic.app/api/articles/${article_id}`
  );
};

export const fetchTopics = () => {
  return fetch("https://eyalshay-nc-news-be.cyclic.app/api/topics").then(
    (res) => {
      return res.json();
    }
  );
};

export const fetchUsers = () => {
  return axios.get(`https://eyalshay-nc-news-be.cyclic.app/api/users`);
};

export const fetchComments = (article_id) => {
  return axios.get(
    `https://eyalshay-nc-news-be.cyclic.app/api/articles/${article_id}/comments`
  );
};

export const patchArticle = (article_id, vote_count) => {
  return axios.patch(
    `https://eyalshay-nc-news-be.cyclic.app/api/articles/${article_id}`,
    { inc_votes: vote_count }
  );
};

export const postComment = (article_id, newComment) => {
  return axios.post(
    `https://eyalshay-nc-news-be.cyclic.app/api/articles/${article_id}/comments`,
    newComment
  );
};

export const deleteCommentById = (comment_id) => {
  return axios.delete(
    `https://eyalshay-nc-news-be.cyclic.app/api/comments/${comment_id}`
  );
};
