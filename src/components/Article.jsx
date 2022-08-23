import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Comments from "./Comments";
import { fetchArticle } from "../api";

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
      <p class="topic">Topic: {topic}</p>
      <p>Published on: {new Date(created_at).toDateString()}</p>
      <h2>
        {title} by {author}
      </h2>

      <p>{body}</p>
      <p>
        votes: {votes} comments: {comment_count}
      </p>
      <Comments article_id={article_id} />
    </section>
  );
}
