import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/admin/login", {
        email,
        password,
      });
      localStorage.setItem("adminToken", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white">
      <div className="w-full max-w-md bg-[rgba(29,28,28,0.9)] p-10 rounded-xl shadow-xl mt-10 text-center">
      <h2 style={{ fontFamily: "Dancing Script" }} className="text-3xl mb-4 text-red-500">
  Admin Login
</h2>


        {error && (
          <p className="text-red-500 text-sm mb-2 font-semibold">{error}</p>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 rounded-md text-black text-base bg-[#f4f4f4] focus:outline-none focus:border-[#f56161] focus:ring-2 focus:ring-[#f56161]"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-6 rounded-md text-black text-base bg-[#f4f4f4] focus:outline-none focus:border-[#f56161] focus:ring-2 focus:ring-[#f56161]"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-[#f56161] text-white text-lg py-3 rounded-md hover:bg-[#e65050] transition duration-300"
        >
          Login
        </button>

        <p className="mt-6 text-base">
          Forgot password?{" "}
          <a href="#" className="text-[#f56161] hover:underline">
            Click here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
