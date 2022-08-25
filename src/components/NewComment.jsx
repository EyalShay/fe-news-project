import { postComment } from "../api";
import { useState, useContext } from "react";
import { UserContext } from "../contexts/user";
import { fetchComments } from "../api";

export default function NewComment({
  article_id,
  setComments,
  setOptimisticComments,
}) {
  const [message, setMessage] = useState("");
  const [body, setBody] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { loggedInUser } = useContext(UserContext);

  const incrementComments = () => {
    setOptimisticComments((currOptimisticComments) => {
      return currOptimisticComments + 1;
    });
  };

  const handleSubmit = (event) => {
    setIsLoading(true);
    event.preventDefault();
    const newComment = {
      author: loggedInUser.username,
      body: body,
    };
    let timer = 0;

    postComment(article_id, newComment)
      .then(() => {
        setBody("");
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
        setMessage(
          <span id="red-message">Please log-in to post comments</span>
        );
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
        <p>{message}</p>
        <button type="submit">Add Comment</button>
      </form>
    </section>
  );
}
