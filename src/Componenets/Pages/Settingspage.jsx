import React, { useState, useEffect } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";

const SettingsPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    profilePic: "",
  });

  const [message, setMessage] = useState("");

  // Fetch current user details
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch("http://localhost:5000/api/users/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (res.ok) {
          setFormData({
            username: data.username,
            email: data.email,
            profilePic:
              data.profilePic ||
              "https://www.w3schools.com/w3images/avatar2.png",
          });
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.error("Error loading user data", error);
      }
    };
    fetchUser();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:9000/api/users/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("Profile updated successfully ✅");
      } else {
        setMessage(data.message || "Failed to update profile ❌");
      }
    } catch (error) {
      setMessage("Server error ❌");
    }
  };

  return (
    <div className="w-full min-h-screen bg-slate-900 text-white">
      <Header />

      <div className="flex">
        <Sidebar />

        <div className="flex-1 px-16 py-12">
          <h1 className="text-3xl font-bold mb-10">Account Settings</h1>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 max-w-lg bg-slate-800 p-8 rounded-xl shadow-md"
          >
            {/* Profile Pic */}
            <div className="flex flex-col items-center gap-4">
              <img
                src={formData.profilePic}
                alt="Profile"
                className="w-28 h-28 rounded-full border-4 border-slate-600 shadow-lg"
              />
              <input
                type="text"
                name="profilePic"
                value={formData.profilePic}
                onChange={handleChange}
                placeholder="Profile Picture URL"
                className="w-full p-2 rounded bg-slate-700 focus:outline-none"
              />
            </div>

            {/* Username */}
            <div>
              <label className="block text-lg mb-2">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full p-2 rounded bg-slate-700 focus:outline-none"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-lg mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 rounded bg-slate-700 focus:outline-none"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold"
            >
              Save Changes
            </button>

            {/* Status Message */}
            {message && <p className="mt-4 text-center text-lg">{message}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
