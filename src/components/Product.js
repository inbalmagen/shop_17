import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { CartContext } from '../CartContext';
import { addToCart } from '../api/cartApi';

function Product() {
    const [products, setProducts] = useState([]);
    const { cart, setCart } = useContext(CartContext);
  
    useEffect(() => {
      axios.get("http://localhost:3005/products").then((response) => {
        setProducts(response.data);
      });
    }, []);

  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <div className="col-sm-4" key={product.id}>
            <div className="panel panel-primary">
              <div className="panel-heading">{product.name}</div>
              <div className="panel-body">
                <img src={product.image} className="img-responsive" style={{ width: "100%" }} alt={product.name} />
              </div>
              <div className="panel-footer">
                Price: ₪ {product.price}
                <button className="btn btn-success" onClick={() => addToCart(cart, setCart, product)} style={{ marginLeft: '10px' }}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product