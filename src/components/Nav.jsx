import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <section>
      <nav>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/articles">
          <button>Articles</button>
        </Link>
        <Link to="/topics">
          <button>Topics</button>
        </Link>
      </nav>
    </section>
  );
}
