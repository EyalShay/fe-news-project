import { useEffect, useState } from "react";
import { fetchArticles } from "../api";
import { Link, useParams } from "react-router-dom";

export default function Articles() {
  const [articlesArray, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(null);

  const { topic } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchArticles(topic).then(({ articles }) => {
      setIsLoading(false);
      setArticles(articles);
    });
  }, [topic]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <ul>
        {articlesArray.map(({ article_id, title, author, topic }) => {
          return (
            <li className="articles" key={article_id}>
              <p class="topic">
                Topic:{" "}
                <Link to={`/topics/${topic}`}>
                  <button id="button-2">{topic}</button>
                </Link>
              </p>
              <Link to={`/articles/${article_id}`}>
                <h3>
                  {title} by {author}{" "}
                </h3>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
