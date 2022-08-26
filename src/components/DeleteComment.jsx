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
  const [isDeleting, setIsDeleting] = useState(null);
  const { loggedInUser } = useContext(UserContext);
  const decrementComments = () => {
    setOptimisticComments((currOptimisticComments) => {
      return currOptimisticComments - 1;
    });
  };
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
  };
  if (isDeleting) return <p id="deleting">Deleting...</p>;
  return (
    <>
      <button className="button-3" onClick={handleClick}>
        delete comment
      </button>
    </>
  );
}
