import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Jumbotron from './components/Jumbotron';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Cart from './components/Cart';
import CartSummary from './components/CartSummary';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Jumbotron />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/summary" element={<CartSummary />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;