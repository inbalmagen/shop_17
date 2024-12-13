import axios from "axios";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  function getProducts() {
    axios.get("http://localhost:3005/products").then((response) => {
      console.log(response.data);
      setProducts(response.data)
    });
  }


  function addToCart(product) {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      const updatedCart = cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1, total: (item.quantity + 1) * item.price }
          : item
      );
      setCart(updatedCart);
      saveCartItem(existingProduct.id, existingProduct.quantity + 1, existingProduct.price);
    } else {
      const newCartItem = { ...product, quantity: 1, total: product.price };
      setCart([...cart, newCartItem]);
      saveCartItem(newCartItem.id, newCartItem.quantity, newCartItem.price);
    }
  }

  function saveCartItem(id, quantity, price) {
    axios.post("http://localhost:3005/cart", { id, quantity, total: quantity * price })
      .then(response => {
        console.log("Cart item saved:", response.data);
      })
      .catch(error => {
        console.error("Error saving cart item:", error);
      });
  }

  function increaseQuantity(productId) {
    setCart(cart.map(item =>
      item.id === productId
        ? { ...item, quantity: item.quantity + 1, total: (item.quantity + 1) * item.price }
        : item
    ));
  }

  function decreaseQuantity(productId) {
    setCart(cart.map(item =>
      item.id === productId
        ? { ...item, quantity: item.quantity - 1, total: (item.quantity - 1) * item.price }
        : item
    ).filter(item => item.quantity > 0));
  }


  return (
    <div className="App">
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
    </div>
  );
}

export default App;