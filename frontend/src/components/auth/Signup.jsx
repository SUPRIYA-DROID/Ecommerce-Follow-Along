import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("http://localhost:8000/user/signup", {
        name,
        email,
        password,
      });

      if (response.status === 201) {
        console.log("Signup successful! Please login.");
        navigate("/login"); // Redirect to login page
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-extrabold text-center text-rose-600 mb-6">
          Create Account ✨
        </h2>

        {error && (
          <p className="text-red-500 text-center mb-4 font-medium">
            {error}
          </p>
        )}

        <form className="space-y-5" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-rose-300 rounded-full focus:outline-none focus:ring-2 focus:ring-rose-400 transition"
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-rose-300 rounded-full focus:outline-none focus:ring-2 focus:ring-rose-400 transition"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-rose-300 rounded-full focus:outline-none focus:ring-2 focus:ring-rose-400 transition"
            required
          />

          <button
            type="submit"
            className="w-full bg-rose-500 text-white py-3 rounded-full shadow-md transition-transform duration-300 hover:bg-rose-600 hover:scale-105"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center mt-6 text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-rose-600 font-semibold hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
