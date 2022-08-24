import { postComment } from "../api";
import { useState } from "react";
import { fetchComments } from "../api";

export default function NewComment({ article_id, comment_count, setComments }) {
  const [message, setMessage] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [optimisticComments, setOptimisticComments] = useState(0);

  const incrementComments = () => {
    setOptimisticComments((currOptimisticComments) => {
      return currOptimisticComments + 1;
    });
  };

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
        incrementComments();
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
        <span className="comments">
          {optimisticComments + comment_count} Comments
        </span>
        <p>{message}</p>
        <p>
          <input
            id="author"
            author="author_name"
            type="text"
            placeholder="Author"
            onChange={(event) => setAuthor(event.target.value)}
            value={author}
            required
          />
        </p>
        <p>
          <input
            id="body"
            body="comment_body"
            type="text"
            placeholder="Comment Body"
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
