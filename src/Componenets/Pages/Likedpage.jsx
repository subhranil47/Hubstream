import React, { useEffect, useState } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";

const Likedpage = () => {
  const [likedVideos, setLikedVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLikedVideos = async () => {
      try {
        const token = localStorage.getItem("token"); // assuming JWT stored in localStorage
        const res = await fetch("http://localhost:9000/api/videos/liked", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        setLikedVideos(data);
      } catch (error) {
        console.error("Error fetching liked videos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLikedVideos();
  }, []);

  return (
    <div className="w-full min-h-screen bg-slate-900 text-white">
      <Header />

      <div className="flex">
        <Sidebar />

        {/* Content Area */}
        <div className="flex-1 p-10">
          <h1 className="text-3xl font-bold mb-6">Liked Videos</h1>

          {loading ? (
            <p className="text-slate-400">Loading your liked videos...</p>
          ) : likedVideos.length === 0 ? (
            <p className="text-slate-400">You haven’t liked any videos yet.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {likedVideos.map((video) => (
                <div
                  key={video._id}
                  className="bg-slate-800 rounded-lg shadow-lg hover:shadow-xl transition p-3"
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <h2 className="mt-3 text-lg font-semibold">{video.title}</h2>
                  <p className="text-slate-400 text-sm">
                    {video.channel || "Unknown Channel"}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Likedpage;
