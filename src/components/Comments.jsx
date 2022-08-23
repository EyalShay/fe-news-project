import { useState } from "react";
import NewComment from "./NewComment";
import { fetchComments } from "../api";

export default function Comments({ article_id, comment_count }) {
  const [isLoading, setIsLoading] = useState(null);
  const [comments, setComments] = useState([]);
  const handleClick = () => {
    setIsLoading(true);
    fetchComments(article_id).then(({ data }) => {
      setIsLoading(false);
      setComments(data.comments);
    });
  };

  return (
    <section>
      <button id="view-comment" onClick={handleClick}>
        View Comments
      </button>
      <NewComment
        article_id={article_id}
        comment_count={comment_count}
        setComments={setComments}
      />
      <ul>
        {isLoading === true ? (
          <p>Loading...</p>
        ) : (
          comments.map(({ body, comment_id, author, votes, created_at }) => {
            return (
              <li id="comments-list" key={comment_id}>
                <p className="author">comment by: {author}</p>
                <p className="comments">{body}</p>
                <p className="date">{new Date(created_at).toDateString()}</p>
                <p id="votes">votes: {votes}</p>
              </li>
            );
          })
        )}
      </ul>
    </section>
  );
}
