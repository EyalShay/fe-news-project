import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/user";

export default function Nav() {
  const { loggedInUser } = useContext(UserContext);
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
        <Link to="/users/:username">
          <button>Users</button>
        </Link>
      </nav>
      <div className="box">
        <span id="user">{loggedInUser.username} </span>
        <img
          id="current-user-img"
          src={loggedInUser.avatar_url}
          alt={loggedInUser.username}
        />
      </div>
    </section>
  );
}
