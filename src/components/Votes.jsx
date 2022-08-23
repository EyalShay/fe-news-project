import { patchArticle } from "../api";
import { useState } from "react";

export default function Votes({ votes, article_id }) {
  const [optimisticVotes, setOptimisticVotes] = useState(0);

  const incrementVotes = () => {
    patchArticle(article_id, 1);
    setOptimisticVotes((currOptimisticVotes) => {
      return currOptimisticVotes + 1;
    });
  };
  const decrementVotes = () => {
    patchArticle(article_id, -1);
    setOptimisticVotes((currOptimisticVotes) => {
      return currOptimisticVotes - 1;
    });
  };

  return (
    <span id="votes">
      Votes: {votes + optimisticVotes}&emsp;
      <button className="button-3" onClick={incrementVotes}>
        Upvote
      </button>
      <button className="button-3" onClick={decrementVotes}>
        Downvote
      </button>
    </span>
  );
}
