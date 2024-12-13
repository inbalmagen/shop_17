import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { CartContext } from '../CartContext';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    axios.get("http://localhost:3005/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      const updatedCart = cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1, total: (item.quantity + 1) * item.price }
          : item
      );
      setCart(updatedCart);
    } else {
      const newCartItem = { ...product, quantity: 1, total: product.price };
      setCart([...cart, newCartItem]);
    }
  };

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} width="200" />
            <p>Price: ₪ {product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;