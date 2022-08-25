import { useState, useEffect, useContext } from "react";
import { fetchUsers } from "../api";
import { UserContext } from "../contexts/user";

export default function Users() {
  const [isLoading, setIsLoading] = useState(true);
  const [usersArray, setUsers] = useState([]);
  const { setLoggedInUser } = useContext(UserContext);
  useEffect(() => {
    setIsLoading(true);
    fetchUsers().then(({ data }) => {
      setIsLoading(false);
      setUsers(data.users);
    });
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <section>
      <ul>
        {usersArray.map((user) => {
          return (
            <li id="user-list" key={user.username}>
              <h2>
                <button
                  className="button-5"
                  onClick={() => setLoggedInUser(user)}
                >
                  {user.username}
                </button>
              </h2>
              <img
                className="user-img"
                src={user.avatar_url}
                alt={user.username}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
