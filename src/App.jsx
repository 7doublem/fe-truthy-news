import Header from "./components/navigation/Header";
import Footer from "./components/navigation/Footer";
import Landing from "./components/navigation/Landing";
import Articles from "./components/articles/Articles";
import SingleArticle from "./components/articles/SingleArticle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelectUser from "./components/users/SelectUser";
import { UserProvider } from "./context/UserContext";
import Topics from "./components/topics/Topics";
import TopicArticles from "./components/topics/TopicArticles";

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/users" element={<SelectUser />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:article_id" element={<SingleArticle />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/topics/:topic_slug" element={<TopicArticles />} />
          </Routes>
          <Footer />
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
