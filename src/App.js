import axios from "axios";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts();
  }, []);

  function getProducts() {
    axios.get("http://localhost:3005/products").then((response) => {
      console.log(response.data);
      setProducts(response.data)
    });
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
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;