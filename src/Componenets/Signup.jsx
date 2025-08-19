import React, { useState } from "react";
import Header from "../Header";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    // 🔐 API call for signup
    alert(`Creating account for ${username}`);
  };

  return (
    <div className="w-full min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <Header />

      <div className="flex justify-center items-center py-16">
        <div className="bg-slate-800 rounded-2xl shadow-lg p-10 w-[400px]">
          <h2 className="text-3xl font-bold text-center mb-8">Sign Up</h2>

          <form onSubmit={handleSignup} className="flex flex-col gap-6">
            {/* Username */}
            <input
              type="text"
              placeholder="Choose a username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="px-4 py-3 rounded-lg bg-slate-700 outline-none text-lg"
              required
            />

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
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-4 py-3 rounded-lg bg-slate-700 outline-none text-lg"
              required
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-500 transition rounded-lg py-3 text-lg font-semibold"
            >
              Sign Up
            </button>
          </form>

          {/* Login redirect */}
          <p className="text-slate-400 text-center mt-6">
            Already have an account?{" "}
            <a href="/login" className="text-blue-400 hover:underline">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
