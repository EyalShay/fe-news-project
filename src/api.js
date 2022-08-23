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
