import { useEffect, useState } from "react";
import axios from "axios";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then(res => {
        setProducts(res.data);
        console.log("Products from API:", products);
 // ya res.data.products if wrapped inside {products: [...]}
      })
      .catch(err => {
        console.error("Error fetching products:", err);
      });
  }, []);

  return (
    <div style={{ color: "white", padding: "2rem" }}>
      <h2>Shop</h2>
      <div className="product-grid">
        {products.map(product => (
          <div key={product._id} className="product-card">
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
