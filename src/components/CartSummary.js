import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

const CartSummary = () => {
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.total, 0);

  return (
    <div className="CartSummary">
      <h2>Cart Summary</h2>
      <p>Total Items: {totalItems}</p>
      <p>Total Price: ₪ {totalPrice}</p>
    </div>
  );
};

export default CartSummary;