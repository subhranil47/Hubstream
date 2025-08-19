import React from "react";
import { Link } from "react-router-dom";

const Videos = ({ videos, category, searchTerm }) => {
  // Ensure videos is always an array
  const list = Array.isArray(videos) ? videos : videos?.videos || [];
  const term = (searchTerm || "").toLowerCase();

  // Apply search filter
  const filteredVideos = term
    ? list.filter(
        (v) =>
          (v.title || "").toLowerCase().includes(term) ||
          (v.description || "").toLowerCase().includes(term) ||
          (v.author || "").toLowerCase().includes(term)
      )
    : list;

  // Handle empty case
  if (filteredVideos.length === 0) {
    return (
      <div className="text-white text-center flex justify-center text-4xl mt-10">
        ⚠ No videos found for this category.
      </div>
    );
  }

  return (
    <div className="px-32">
      <div
        key={category}
        className="w-full h-screen overflow-x-auto no-scrollbar py-5 px-10 gap-2 grid grid-cols-3"
      >
        {filteredVideos.map((items) => (
          <Link
            className="cursor-pointer"
            to={`/video/${category}/${items.id}`}
            key={items.id}
          >
            <div className="grid mt-10">
              <span className="w-[24rem] h-56 rounded-xl">
                <img
                  className="bg-cover w-full h-full rounded-xl style-scope yt-img-shadow"
                  draggable="false"
                  alt={items.title || "Video thumbnail"}
                  src={items.thumbnailUrl}
                />
              </span>
              <span className="text-white pt-3">
                <p className="text-xl">{items.title}</p>
                <p>{items.author}</p>
                {items.views}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Videos;
