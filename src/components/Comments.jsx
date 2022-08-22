import { useState } from "react";
import axios from "axios";

export default function Comments({ article_id }) {
  const [isLoading, setIsLoading] = useState(null);
  const [comments, setComments] = useState([]);
  const url = `https://eyal-ncnews.herokuapp.com/api/articles/${article_id}/comments`;
  const handleClick = () => {
    setIsLoading(true);
    axios.get(url).then(({ data }) => {
      setIsLoading(false);
      console.log(data, "<<<data");
      setComments(data.comments);
    });
  };
  console.log(comments, "<<<comments");
  return (
    <section>
      <button onClick={handleClick}>View Comments</button>
      {console.log(comments, "<<<<<comments to map")}
      <ul>
        {isLoading === true ? (
          <p>Loading...</p>
        ) : (
          comments.map(({ body, comment_id, author, votes, created_at }) => {
            return (
              <li className="Comments" key={comment_id}>
                <p>comment by: {author}</p>
                <p>{body}</p>
                <p>{created_at}</p>
                <p>votes: {votes}</p>
              </li>
            );
          })
        )}
      </ul>
    </section>
  );
}
