import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/index'
import Footer from './components/Footer/index'
import Home from './pages/Home.jsx'
import ContactPage from './pages/Contact'
import AboutPage from './pages/About'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route exact path="/contact" element={<ContactPage />} />
        <Route exact path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
