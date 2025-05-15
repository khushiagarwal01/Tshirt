import { useEffect, useState } from "react";
import axios from "axios";
import './Shop.css';
import { useCart } from "../CartContext";
import { FaCartPlus, FaRegCreditCard } from 'react-icons/fa'; // Importing FontAwesome icons

const Shop = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();
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
    <div className="product-grid-section">
      {products.map((product, index) => (
  <div key={product._id} className="product-card">
    <img
      src={`http://localhost:5000/${product.image}`}
      alt={product.name}
      className="product-image"
    />
    <h3 className="product-name">
      {index + 1}. {product.name}
    </h3>
    <p className="product-desc">{product.description}</p>
    <p className="product-price">₹{product.price}</p>

    <div className="buttons-row">
      <button className="icon-btn">
        <FaRegCreditCard />
      </button>
      <button className="icon-btn" onClick={() => addToCart(product)}>
        <FaCartPlus />
      </button>
    </div>
  </div>
))}


    </div>
  );
};

export default Shop;
