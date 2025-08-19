import React, { useState } from "react";
import Header from "../Header";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // 🔐 API call for login
    alert(`Logging in with ${email}`);
  };

  return (
    <div className="w-full min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <Header />

      <div className="flex justify-center items-center py-16">
        <div className="bg-slate-800 rounded-2xl shadow-lg p-10 w-[400px]">
          <h2 className="text-3xl font-bold text-center mb-8">Login</h2>

          <form onSubmit={handleLogin} className="flex flex-col gap-6">
            {/* Email */}
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 rounded-lg bg-slate-700 outline-none text-lg"
              required
            />

            {/* Password */}
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-4 py-3 rounded-lg bg-slate-700 outline-none text-lg"
              required
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-500 transition rounded-lg py-3 text-lg font-semibold"
            >
              Login
            </button>
          </form>

          {/* Signup redirect */}
          <p className="text-slate-400 text-center mt-6">
            Don’t have an account?{" "}
            <a href="/signup" className="text-blue-400 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
