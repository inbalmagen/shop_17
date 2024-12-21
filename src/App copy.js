import React from 'react';
import './App.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import CartSummary from './components/CartSummary';

function App() {
  return (
    <div className="App">
      <ProductList />
      <Cart />
      <CartSummary />
    </div>
  );
}

export default App;