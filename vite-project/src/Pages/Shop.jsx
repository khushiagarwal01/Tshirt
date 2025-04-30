import { useEffect, useState } from "react";
import axios from "axios";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        setProducts(res.data);
      } catch (err) {
        console.log("Error fetching products:", err);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="products-list">
      {products.map((product) => (
        <div key={product._id} className="product-card">
          <img
            src={`http://localhost:5000/uploads/${product.image}`} // Ensure this path is correct
            alt={product.name}
            className="product-image"
          />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Shop;
