import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Articles from "./components/articles/Articles";
import SingleArticle from "./components/articles/SingleArticle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelectUser from "./components/users/SelectUser";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/users" element={<SelectUser />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:article_id" element={<SingleArticle />} />
          </Routes>
          <Footer />
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
