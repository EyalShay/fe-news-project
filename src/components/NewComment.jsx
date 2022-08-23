import { postComment } from "../api";
import { useState } from "react";
import { fetchComments } from "../api";

export default function NewComment({ article_id, comment_count, setComments }) {
  const [message, setMessage] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    setIsLoading(true);
    event.preventDefault();
    setAuthor("");
    setBody("");
    const newComment = {
      author: author,
      body: body,
    };
    let timer = 0;
    postComment(article_id, newComment)
      .then(() => {
        setIsLoading(false);
        setMessage(<span id="message">Comment Posted!</span>);
        fetchComments(article_id).then(({ data }) => {
          setComments(data.comments);
          clearTimeout(timer);
          timer = setTimeout(() => {
            setMessage();
            clearTimeout(timer);
          }, 3500);
        });
      })
      .catch(() => {
        setIsLoading(false);
        setMessage(<span id="error">Please input a valid author</span>);
        clearTimeout(timer);
        timer = setTimeout(() => {
          setMessage();
          clearTimeout(timer);
        }, 3000);
      });
  };
  if (isLoading) return <p>Loading...</p>;
  return (
    <section className="form">
      <form onSubmit={handleSubmit}>
        {message}
        <p>
          <label>Author:</label>
          <input
            id="author"
            author="author_name"
            type="text"
            onChange={(event) => setAuthor(event.target.value)}
            value={author}
            required
          />
        </p>
        <p>
          <label>Comment Body:</label>
          <input
            id="body"
            body="comment_body"
            type="text"
            onChange={(event) => setBody(event.target.value)}
            value={body}
            required
          />
        </p>
        <button type="submit">Add Comment</button>
      </form>
    </section>
  );
}
