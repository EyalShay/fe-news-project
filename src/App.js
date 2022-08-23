import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Title from "./components/Title";
import Articles from "./components/Articles";
import Article from "./components/Article";
import Topics from "./components/Topics";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Title />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:article_id" element={<Article />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/topics/:topic" element={<Articles />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
