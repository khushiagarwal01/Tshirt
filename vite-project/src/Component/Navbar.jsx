import { NavLink } from "react-router-dom";
import { useState } from "react";
import './Navbar.css';
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../CartContext"
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useCart();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo1" style={{ color: "white" }}>
          Infiq
        </span>
        <span className="logocolor">uency</span>
      </div>

      <div className={`nav-center ${isMenuOpen ? 'active' : ''}`}>
        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
        <NavLink to="/shop" className={({ isActive }) => isActive ? 'active' : ''}>Shop</NavLink>
      
      </div>

      <div className="nav-right">
        <NavLink to="/register" className="signup-btn">Signup</NavLink>
        <NavLink to="/cart" className="cart-icon">
          <FaShoppingCart size={24} color="white" />
        </NavLink>
      </div>

      {isMenuOpen && (
        <div className="mobile-extra">
          <NavLink to="/cart" className="cart-icon">
            <FaShoppingCart size={24} color="white" />
          </NavLink>
        </div>
      )}

      <div className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
