
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 import Navbar from "./Component/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Shop from "./Pages/Shop";
import Footer from './Component/Footer';
import Referral from './Component/Referral';
// import {  useState } from "react";
import Register from './Pages/Register';
import Login from './Pages/Login';
import Cart from './Pages/Cart';

function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);  // Track login status

  // const loginHandler = () => setIsAuthenticated(true);
  // const logoutHandler = () => setIsAuthenticated(false);
  return (
    <>
    <Router>
       <Navbar /> 
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login"element={<Login />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
   
    <Footer></Footer>
    </>
  );
}

export default App
