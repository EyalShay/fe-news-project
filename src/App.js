import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Title from "./components/Title";
import Articles from "./components/Articles";
import Article from "./components/Article";
import Topics from "./components/Topics";
import Users from "./components/Users";
import { UserContext } from "./contexts/user";
import Errors from "./components/Errors";
function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    username: "Unknown user",
    avatar_url:
      "https://static.vecteezy.com/system/resources/previews/004/590/519/original/people-line-icon-with-question-mark-business-solution-business-symbol-simple-illustration-editable-stroke-design-template-vector.jpg",
    name: "new user",
  });
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
        <div className="App">
          <Title />
          <Nav />
          <Routes>
            <Route path="*" element={<Errors />} />
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:article_id" element={<Article />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/topics/:topic" element={<Articles />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
