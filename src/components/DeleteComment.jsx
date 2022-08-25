import { deleteCommentById } from "../api";
import { useContext, useState } from "react";
import { fetchComments } from "../api";
import { UserContext } from "../contexts/user";

export default function DeleteComment({
  comment_id,
  author,
  setComments,
  article_id,
  setOptimisticComments,
}) {
  const [message, setMessage] = useState("");
  const [isDeleting, setIsDeleting] = useState(null);
  const { loggedInUser } = useContext(UserContext);
  const decrementComments = () => {
    setOptimisticComments((currOptimisticComments) => {
      return currOptimisticComments - 1;
    });
  };
  let timer = 0;
  const handleClick = (event) => {
    event.preventDefault();
    if (loggedInUser.username === author) {
      setIsDeleting(true);
      deleteCommentById(comment_id).then(() => {
        decrementComments();
        setIsDeleting(false);
        fetchComments(article_id).then(({ data }) => {
          setComments(data.comments);
        });
      });
    }
    setMessage(<span id="red-message">Cannot delete, wrong username!</span>);
    clearTimeout(timer);
    timer = setTimeout(() => {
      setMessage();
      clearTimeout(timer);
    }, 3000);
  };
  if (isDeleting) return <p id="deleting">Deleting...</p>;
  return (
    <>
      <button className="button-3" onClick={handleClick}>
        delete comment
      </button>
      <p>{message}</p>
    </>
  );
}
