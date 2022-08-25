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
function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    username: "New User",
    avatar_url:
      "https://www.pngitem.com/pimgs/m/361-3618777_add-account-icon-add-account-icon-png-transparent.png",
    name: "User Man",
  });
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
        <div className="App">
          <Title />
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:article_id" element={<Article />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/topics/:topic" element={<Articles />} />
            <Route path="/users/:username" element={<Users />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
