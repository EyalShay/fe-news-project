import { fetchTopics } from "../api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Topics() {
  const [isLoading, setIsLoading] = useState(true);
  const [topicsArray, setTopics] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetchTopics().then(({ topics }) => {
      setIsLoading(false);
      setTopics(topics);
    });
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <section>
      <ul>
        {topicsArray.map(({ slug, description }) => {
          return (
            <li>
              <p class="topic">
                Topic:{" "}
                <Link to={`/topics/${slug}`}>
                  <button id="button-2">{slug}</button>
                </Link>
              </p>
              <p>
                <h3>Description: {description}</h3>
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
