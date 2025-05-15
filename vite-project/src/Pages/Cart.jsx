import React, { useEffect } from "react";
import { useCart } from "../CartContext";
import "./Cart.css";

const Cart = () => {
  const { cartItems, removeFromCart, fetchCartFromBackend } = useCart();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      fetchCartFromBackend(userId);
    }
  }, []);

  const getTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="cart-page">
      <h2 className="cart-title">Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="cart-list">
          {cartItems.map((item) => (
            <div className="cart-row" key={item._id}>
              <img
                src={`http://localhost:5000/${item.image}`}
                alt={item.name}
                className="cart-img"
              />

              <div className="cart-info">
                <h3>{item.name}</h3>
                <p>
                  ₹{item.price} × {item.quantity} =
                </p>
              </div>

              <div className="cart-right">
                <p className="item-total">
                  ₹{item.price * item.quantity}
                </p>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item._id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="cart-total">
            <h3>Total: ₹{getTotal()}</h3>
          </div>
          <button className="checkout-btn">Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
