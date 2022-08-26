import { useContext, useState } from "react";
import NewComment from "./NewComment";
import { fetchComments } from "../api";
import DeleteComment from "./DeleteComment";
import { UserContext } from "../contexts/user";

export default function Comments({ article_id, comment_count }) {
  const [optimisticComments, setOptimisticComments] = useState(0);
  const [isLoading, setIsLoading] = useState(null);
  const [comments, setComments] = useState([]);
  const { loggedInUser } = useContext(UserContext);
  const handleClick = () => {
    setIsLoading(true);
    fetchComments(article_id).then(({ data }) => {
      setIsLoading(false);
      setComments(data.comments);
    });
  };
  function orderByDate(a, b) {
    let total = 0;
    a.created_at > b.created_at ? (total = -1) : (total = 1);
    return total;
  }
  return (
    <section>
      <button id="view-comment" onClick={handleClick}>
        View Comments
      </button>
      <p className="comments">{optimisticComments + comment_count} Comments</p>
      <NewComment
        article_id={article_id}
        setComments={setComments}
        setOptimisticComments={setOptimisticComments}
      />
      <ul>
        {isLoading === true ? (
          <p>Loading...</p>
        ) : (
          comments
            .sort(orderByDate)
            .map(({ body, comment_id, author, votes, created_at }) => {
              return (
                <li id="comments-list" key={comment_id}>
                  <p className="author">
                    {author}
                    <span id="comment-date">
                      {new Date(created_at).toDateString()}
                    </span>
                  </p>
                  <p id="comments-body">{body}</p>
                  <span id="votes">{votes} votes </span>
                  {loggedInUser.username === author ? (
                    <DeleteComment
                      comment_id={comment_id}
                      author={author}
                      setComments={setComments}
                      article_id={article_id}
                      setOptimisticComments={setOptimisticComments}
                    />
                  ) : null}
                </li>
              );
            })
        )}
      </ul>
    </section>
  );
}
