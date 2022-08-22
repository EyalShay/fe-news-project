export const fetchArticles = () => {
  return fetch("https://eyal-ncnews.herokuapp.com/api/articles").then((res) => {
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
