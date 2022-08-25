export default function Sorting({ setSortBy, setOrderBy, orderBy }) {
  const handleOrderBy = () => {
    setOrderBy((prevState) => {
      if (prevState === "asc") {
        setOrderBy("desc");
      } else {
        setOrderBy("asc");
      }
    });
  };

  return (
    <div id="sorting">
      <p>
        <span id="sort_by">
          Sort Articles By <span id="arrow">↓</span>
        </span>
      </p>
      <button className="button-4" onClick={() => setSortBy("created_at")}>
        date
      </button>
      <button className="button-4" onClick={() => setSortBy("title")}>
        title
      </button>
      <button className="button-4" onClick={() => setSortBy("comment_count")}>
        most commented
      </button>
      <button className="button-4" onClick={() => setSortBy("votes")}>
        votes
      </button>
      <p>
        <button className="button-5" onClick={handleOrderBy}>
          {` Order by ${orderBy}`}
        </button>
      </p>
    </div>
  );
}
