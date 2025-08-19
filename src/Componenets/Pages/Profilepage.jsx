import React, { useState, useEffect } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";

const Profilepage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token"); // stored on login
        const res = await fetch("http://localhost:5000/api/users/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (res.ok) {
          setUser(data);
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.error("Failed to load user", error);
      }
    };

    fetchUser();
  }, []);

  if (!user) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-slate-900 text-white">
        <p className="text-xl">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <Header />

      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Profile Content */}
        <div className="flex-1 px-16 py-12">
          <h1 className="text-3xl font-bold mb-10">Your Profile</h1>

          <div className="flex items-center gap-8">
            {/* Profile Picture */}
            <img
              src={
                user.profilePic ||
                "https://www.w3schools.com/w3images/avatar2.png"
              }
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-slate-600 shadow-lg"
            />

            {/* Basic Info */}
            <div>
              <h2 className="text-2xl font-semibold">{user.username}</h2>
              <p className="text-slate-400">{user.email}</p>
              <p className="text-slate-400">Joined: {user.joined || "N/A"}</p>

              <button
                className="mt-4 px-5 py-2 rounded-full bg-slate-600 hover:bg-slate-500 transition"
                onClick={() => alert("Go to Edit Profile / Settings page")}
              >
                Edit Profile
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-700 mt-12 mb-8"></div>

          {/* Extra Details */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Account Details</h3>
            <ul className="space-y-3 text-slate-300 text-lg">
              <li>Membership: {user.membership || "Free"}</li>
              <li>Preferences: {user.preferences?.join(", ") || "Not set"}</li>
              <li>Saved Videos: {user.savedVideos?.length || 0}</li>
              <li>Liked Videos: {user.likedVideos?.length || 0}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profilepage;
