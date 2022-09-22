import { fetchArticles } from "../api";
import { useEffect, useState } from "react";

export default function Home() {
  const [articlesArray, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchArticles("created_at").then(({ articles }) => {
      setIsLoading(false);
      setArticles(articles);
    });
  }, []);

  if (isLoading) return <p>Loading...</p>;

  const random = Math.floor(Math.random() * articlesArray.length);
  const { title, author, body } = articlesArray[random];
  return (
    <div>
      <img
        id="home-image"
        src="https://media.giphy.com/media/gb5fshVgkJtjm6tmDx/giphy.gif"
        alt="a man reading the newspaper"
      />
      <h2>Article of the Day: </h2>
      <h3>
        {title} by {author}
      </h3>
      <br></br>
      <p id="article-body">{body}</p>
    </div>
  );
}
