import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { CartContext } from '../CartContext';
import { increaseQuantity, decreaseQuantity } from '../api/cartApi';

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    axios.get("http://localhost:3005/cart")
      .then((response) => {
        setCart(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the cart items:", error);
      });
  }, [setCart]);

  return (
    <div className="Cart">
      <h2>Cart</h2>
      <ul className="cart-list">
        {cart.map((item, index) => (
          <li key={index}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Price: ₪ {item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Total: {item.total}</p>
            <button onClick={() => increaseQuantity(cart, setCart, item.id)}>+</button>
            <button onClick={() => decreaseQuantity(cart, setCart, item.id)}>-</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;