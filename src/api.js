import axios from "axios";

export const fetchArticles = ({ sortBy, orderBy, topic }) => {
  return axios
    .get(`https://eyal-ncnews.herokuapp.com/api/articles`, {
      params: { sort_by: sortBy, order: orderBy, topic: topic },
    })
    .then((res) => {
      return res.data;
    });
};

export const fetchArticle = (article_id) => {
  let url = "https://eyal-ncnews.herokuapp.com/api/articles";
  if (article_id) {
    url += `/${article_id}`;
  }
  return fetch(url).then((res) => {
    return res.json();
  });
};

export const fetchTopics = () => {
  return fetch("https://eyal-ncnews.herokuapp.com/api/topics").then((res) => {
    return res.json();
  });
};

export const fetchUsers = () => {
  return axios.get(`https://eyal-ncnews.herokuapp.com/api/users`);
};

export const fetchComments = (article_id) => {
  return axios.get(
    `https://eyal-ncnews.herokuapp.com/api/articles/${article_id}/comments`
  );
};

export const patchArticle = (article_id, vote_count) => {
  return axios.patch(
    `https://eyal-ncnews.herokuapp.com/api/articles/${article_id}`,
    { inc_votes: vote_count }
  );
};

export const postComment = (article_id, newComment) => {
  return axios.post(
    `https://eyal-ncnews.herokuapp.com/api/articles/${article_id}/comments`,
    newComment
  );
};

export const deleteCommentById = (comment_id) => {
  return axios.delete(
    `https://eyal-ncnews.herokuapp.com/api/comments/${comment_id}`
  );
};
