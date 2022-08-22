import { useEffect, useState } from "react";
import { fetchArticles } from "../api";
import { Link } from "react-router-dom";

export default function Articles() {
  const [articlesArray, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles().then(({ articles }) => {
      setArticles(articles);
    });
  }, []);

  return (
    <div>
      <ul>
        {articlesArray.map(({ article_id, title, author }) => {
          return (
            <li className="articles" key={article_id}>
              <Link to={`/articles/${article_id}`}>
                {title} by {author}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
