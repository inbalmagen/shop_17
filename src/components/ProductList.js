import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { CartContext } from '../CartContext';
import { addToCart } from '../api/cartApi';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    axios.get("http://localhost:3005/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} width="200" />
            <p>Price: ₪ {product.price}</p>
            <button onClick={() => addToCart(cart, setCart,product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;