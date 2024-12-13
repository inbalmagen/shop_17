import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  const increaseQuantity = (productId) => {
    setCart(cart.map(item =>
      item.id === productId
        ? { ...item, quantity: item.quantity + 1, total: (item.quantity + 1) * item.price }
        : item
    ));
  };

  const decreaseQuantity = (productId) => {
    setCart(cart.map(item =>
      item.id === productId
        ? { ...item, quantity: item.quantity - 1, total: (item.quantity - 1) * item.price }
        : item
    ).filter(item => item.quantity > 0));
  };

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
            <button onClick={() => increaseQuantity(item.id)}>+</button>
            <button onClick={() => decreaseQuantity(item.id)}>-</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;