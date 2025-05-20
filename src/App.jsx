import Header from './components/Header'
import Footer from './components/Footer'
import Landing from './components/Landing'
import Articles from './components/Articles'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <div>
      <Header />
      <BrowserRouter>
      <Routes>
       <Route path="/" element={<Landing />} /> 
       <Route path="/articles" element={<Articles />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
