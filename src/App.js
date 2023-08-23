import Navbar from "./Components/Navbar";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Page from "./Components/Page";
import Categories from './Components/Categories'
import { CartProvider } from './Components/CartContext';
import Cart from './Components/Cart';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/pages" element={<Page />} />
            <Route path="/services" element={<Categories />} />
            <Route path="/cart" element={<Cart />} />    
            
          </Routes>
          <Footer />
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;
