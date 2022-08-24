import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Comments from "./Comments";
import { fetchArticle } from "../api";
import Votes from "./Votes";

export default function Article() {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchArticle(article_id).then(({ article }) => {
      setIsLoading(false);
      setArticle(article);
    });
  }, [article_id]);

  const { created_at, author, title, topic, votes, comment_count, body } =
    article;

  if (isLoading) return <p>Loading...</p>;

  return (
    <section>
      <p className="topic">{topic}</p>
      <h2>
        {title} by {author}
      </h2>
      <p id="published">Published {new Date(created_at).toDateString()}</p>
      <p id="article-body">{body}</p>
      <p>
        <Votes votes={votes} article_id={article_id} />
      </p>
      <Comments article_id={article_id} comment_count={comment_count} />
    </section>
  );
}
