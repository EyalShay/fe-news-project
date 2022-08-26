import { useEffect, useState } from "react";
import { fetchArticles } from "../api";
import { Link, useParams } from "react-router-dom";
import Sorting from "./Sorting";
import Errors from "./Errors";

export default function Articles() {
  const [articlesArray, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [orderBy, setOrderBy] = useState("desc");
  const [sortBy, setSortBy] = useState("created_at");
  const { topic } = useParams();
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetchArticles({ sortBy, orderBy, topic })
      .then(({ articles }) => {
        setIsLoading(false);
        setArticles(articles);
      })
      .catch((err) => {
        setError({ err });
      });
  }, [sortBy, orderBy, topic]);

  if (error) {
    return <Errors />;
  }

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <ul>
        <Sorting
          setOrderBy={setOrderBy}
          setSortBy={setSortBy}
          orderBy={orderBy}
        />
        {articlesArray.map(
          ({ article_id, title, author, topic, created_at }) => {
            return (
              <li className="articles" key={article_id}>
                <p className="topic">
                  Topic:{" "}
                  <Link to={`/topics/${topic}`}>
                    <button className="button-2">{topic}</button>
                  </Link>
                </p>
                <Link to={`/articles/${article_id}`}>
                  <h3>
                    {title} by {author}{" "}
                    <span id="published">
                      {new Date(created_at).toDateString()}
                    </span>
                  </h3>
                </Link>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
}
