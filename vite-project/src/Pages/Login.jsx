import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Login.css'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
      setMsg("Login successful!");

      // Check if the user is admin
      const role = res.data.role; // Assuming backend sends role (admin or user)

      if (role === 'admin') {
        // Redirect to admin panel if admin
        navigate("/api/admin");
      } else {
        // Redirect to shop if user
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
