// api/cartApi.js
import axios from 'axios';

export const addToCart = (cart, setCart, product) => {
  const existingProduct = cart.find(item => item.id === product.id);
  if (existingProduct) {
    const updatedCart = cart.map(item =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + 1, total: (item.quantity + 1) * item.price }
        : item
    );
    setCart(updatedCart);
    axios.put(`http://localhost:3005/cart/${product.id}`, {
      ...existingProduct,
      quantity: existingProduct.quantity + 1,
      total: (existingProduct.quantity + 1) * existingProduct.price
    }).catch(error => {
      console.error("There was an error updating the cart item:", error);
    });
  } else {
    const newCartItem = { ...product, quantity: 1, total: product.price };
    setCart([...cart, newCartItem]);
    axios.post("http://localhost:3005/cart", newCartItem).catch(error => {
      console.error("There was an error adding the cart item:", error);
    });
  }
};

export const increaseQuantity = (cart, setCart, productId) => {
  const updatedCart = cart.map(item =>
    item.id === productId
      ? { ...item, quantity: item.quantity + 1, total: (item.quantity + 1) * item.price }
      : item
  );
  setCart(updatedCart);
  const updatedProduct = updatedCart.find(item => item.id === productId);
  axios.put(`http://localhost:3005/cart/${productId}`, updatedProduct).catch(error => {
    console.error("There was an error increasing the quantity:", error);
  });
};

export const decreaseQuantity = (cart, setCart, productId) => {
  const updatedCart = cart.map(item =>
    item.id === productId
      ? { ...item, quantity: item.quantity - 1, total: (item.quantity - 1) * item.price }
      : item
  ).filter(item => item.quantity > 0);
  setCart(updatedCart);
  const updatedProduct = updatedCart.find(item => item.id === productId);
  if (updatedProduct) {
    axios.put(`http://localhost:3005/cart/${productId}`, updatedProduct).catch(error => {
      console.error("There was an error decreasing the quantity:", error);
    });
  } else {
    axios.delete(`http://localhost:3005/cart/${productId}`).catch(error => {
      console.error("There was an error deleting the cart item:", error);
    });
  }
};