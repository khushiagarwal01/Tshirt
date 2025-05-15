import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// 🟢 Define the context
const CartContext = createContext();

// 🟢 Custom hook (define this BEFORE the component!)
export const useCart = () => useContext(CartContext);

// 🟢 Provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const userId = storedUser?._id;
    if (userId) fetchCartFromBackend(userId);
  }, []);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item._id === product._id);
      return existingItem
        ? prev.map((item) =>
            item._id === product._id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item._id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const syncCartToBackend = async (userId) => {
    try {
      await axios.post("http://localhost:5000/api/cart/update-cart", {
        userId,
        cartItems,
      });
      console.log("Cart synced to backend");
    } catch (err) {
      console.error("Error syncing cart:", err);
    }
  };

  const fetchCartFromBackend = async (userId) => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/cart/get-cart/${userId}`
      );
      setCartItems(res.data.cart);
    } catch (err) {
      console.error("Error fetching cart:", err);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        syncCartToBackend,
        fetchCartFromBackend,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
