import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCart } from "../CartContext"; // 👈 Import cart context
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { syncCartToBackend } = useCart(); // 👈 Access cart sync

const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post("http://localhost:5000/api/auth/login", {
      
      email,
      password,
    });

    // Log response to check the userId
    console.log("Login Response:", res.data);

    // Ensure userId is present in the response
    if (res.data.userId) {
      // Save userId to localStorage
      localStorage.setItem("user", JSON.stringify(res.data));

      console.log("Saved userId to localStorage:", res.data.userId);
    } else {
      console.log("UserId is missing in response");
    }

    setMsg("Login successful!");

    const role = res.data.role;

    // Sync cart to backend (using the userId)
    await syncCartToBackend(res.data.userId);

    // Navigate based on role
    if (role === "admin") {
      navigate("/api/admin");
    } else {
      navigate("/shop");
    }
  } catch (err) {
    setMsg(err.response.data.message || "Login failed");
  }
};


  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>{msg}</p>
    </div>
  );
};

export default Login;
