import Header from "./components/navigation/Header";
import Footer from "./components/navigation/Footer";
import Landing from "./components/navigation/Landing";
import Articles from "./components/articles/Articles";
import SingleArticle from "./components/articles/SingleArticle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelectUser from "./components/users/SelectUser";
import { UserProvider } from "./context/UserContext";
import Topics from "./components/topics/Topics";
import NotFound from "./components/navigation/NotFound";
import CommentSection from "./components/comments/CommentSection";

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
            <Route path="/articles/:article_id" element={<SingleArticle />}>
              <Route path="comments" element={<CommentSection />} />
            </Route>
            <Route path="/topics" element={<Topics />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
