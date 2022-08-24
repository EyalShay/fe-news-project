import axios from "axios";

export const fetchArticles = (topic) => {
  let url = "https://eyal-ncnews.herokuapp.com/api/articles";
  if (topic) {
    url += `?topic=${topic}`;
  }

  return fetch(url).then((res) => {
    return res.json();
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

export const fetchComments = (article_id) => {
  return axios.get(
    `https://eyal-ncnews.herokuapp.com/api/articles/${article_id}/comments`
  );
};
