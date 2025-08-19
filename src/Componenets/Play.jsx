import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Componenets/Header";
import Sidebar from "../Componenets/Sidebar";

import {
  AiFillLike,
  AiOutlineLike,
  AiFillDislike,
  AiOutlineDislike,
} from "react-icons/ai";
import { BsBookmarkFill, BsBookmark } from "react-icons/bs";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

import ShoppingData from "../Datapage/Shoppingpage.json";
import GamingData from "../Datapage/Gamepage.json";
import MusicData from "../Datapage/Music.json";
import HistoryData from "../Datapage/Historypage.json";
import LifestyleData from "../Datapage/Lifestyle.json";

const dataMap = {
  shopping: ShoppingData,
  gaming: GamingData,
  music: MusicData,
  lifestyle: LifestyleData,
  history: HistoryData,
};

const Play = () => {
  const { category, id } = useParams();
  const dataset = dataMap[category] || [];
  const currentVideo = dataset.find((video) => video.id.toString() === id);

  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [favourite, setFavourite] = useState(false);

  if (!currentVideo) {
    return <div className="text-white text-center mt-20">Video not found!</div>;
  }

  const [isExpanded, setIsExpanded] = useState(false);


  return (
    <div className="w-full h-full bg-slate-800">
      <Header />
      <div className="flex">
        <Sidebar />

        {/* Main content layout */}
        <div className="flex w-full px-6 py-4 gap-6">
          {/* Video Player + Details */}
          <div className="flex-1 flex flex-col gap-5">
            {/* Video Player */}
            <div className="w-[90%] rounded-xl overflow-hidden">
              <video
                autoPlay
                controls
                className="object-cover rounded-xl w-full"
                height="60%"
                src={currentVideo.videoUrl}
                title="Video Player"
              />
            </div>

            {/* Video Details */}
            <div className="text-white">
              <h1 className="text-3xl font-bold">{currentVideo.title}</h1>
              <p
                className={`text-white ${
                  isExpanded ? "text-xl" : "text-xl line-clamp-2"
                }`}
              >
                {currentVideo.description}
              </p>
              <button
                className="text-blue-400 mt-2 hover:underline"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? "Show less" : "Read more"}
              </button>

              <div className="mt-2 text-sm text-gray-400">
                {currentVideo.views} • {currentVideo.duration}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-6 mt-4 text-3xl items-center">
                <button
                  onClick={() => {
                    setLiked(!liked);
                    if (!liked && disliked) setDisliked(false);
                  }}
                  className="flex items-center gap-2"
                >
                  {liked ? (
                    <AiFillLike className="text-blue-500" />
                  ) : (
                    <AiOutlineLike />
                  )}
                  <span className="text-lg">{liked ? "Liked" : "Like"}</span>
                </button>

                <button
                  onClick={() => {
                    setDisliked(!disliked);
                    if (!disliked && liked) setLiked(false);
                  }}
                  className="flex items-center gap-2"
                >
                  {disliked ? (
                    <AiFillDislike className="text-red-500" />
                  ) : (
                    <AiOutlineDislike />
                  )}
                  <span className="text-lg">
                    {disliked ? "Disliked" : "Dislike"}
                  </span>
                </button>

                <button
                  onClick={() => setSaved(!saved)}
                  className="flex items-center gap-2"
                >
                  {saved ? (
                    <BsBookmarkFill className="text-yellow-400" />
                  ) : (
                    <BsBookmark />
                  )}
                  <span className="text-lg">{saved ? "Saved" : "Save"}</span>
                </button>

                <button
                  onClick={() => setFavourite(!favourite)}
                  className="flex  items-center gap-2"
                >
                  {favourite ? (
                    <MdFavorite className="text-pink-500" />
                  ) : (
                    <MdFavoriteBorder />
                  )}
                  <span className="text-lg">
                    {favourite ? "Added" : "Favourite"}
                  </span>
                </button>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 mt-6">
                <img
                  src={currentVideo.imageUrl}
                  alt={currentVideo.author}
                  className="w-12 h-12 rounded-full"
                />
                <span className="text-lg">{currentVideo.author}</span>
              </div>
            </div>
          </div>

          {/* Sidebar "More Videos" */}
          <div className="w-[350px] h-[80vh] overflow-hidden pr-2  hover:overflow-y-scroll">
            <h2 className="text-xl font-semibold mb-4 text-white">
              More from {category.charAt(0).toUpperCase() + category.slice(1)}
            </h2>
            <div className="flex flex-col gap-4">
              {dataset
                .filter((video) => video.id.toString() !== id)
                .map((video) => (
                  <a
                    key={video.id}
                    href={`/video/${category}/${video.id}`}
                    className="flex gap-3 hover:bg-slate-700 p-2 rounded-lg transition"
                  >
                    {/* Thumbnail */}
                    <img
                      src={video.thumbnailUrl}
                      alt={video.title}
                      className="w-40 h-24 object-cover rounded-lg"
                    />
                    {/* Info */}
                    <div className="flex flex-col justify-between">
                      <p className="text-white font-medium text-sm line-clamp-2">
                        {video.description}
                      </p>
                      <span className="text-xs text-gray-400">
                        {video.author}
                      </span>
                      <span className="text-xs text-gray-400">
                        {video.views}
                      </span>
                    </div>
                  </a>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Play;
