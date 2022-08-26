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
      <span id="sort_by">
        Sort By <span id="arrow">➤</span>
      </span>

      <button className="button-4" onClick={() => setSortBy("created_at")}>
        date
      </button>
      <button className="button-4" onClick={() => setSortBy("title")}>
        title
      </button>
      <button className="button-4" onClick={() => setSortBy("comment_count")}>
        comments
      </button>
      <button className="button-4" onClick={() => setSortBy("votes")}>
        votes
      </button>
      <p>
        <button className="button-5" onClick={handleOrderBy}>
          {`Order ${orderBy !== undefined ? orderBy : "desc"}`}
        </button>
      </p>
    </div>
  );
}
