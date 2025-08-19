import React from "react";
import { FaHome } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { IoIosSettings } from "react-icons/io";
import { MdHistoryToggleOff } from "react-icons/md";
import { FaFire } from "react-icons/fa";

import { IoMdArrowBack } from "react-icons/io";

import { MdPlaylistAdd } from "react-icons/md";
import { AiTwotoneLike } from "react-icons/ai";
import { FaMusic } from "react-icons/fa";
import { PiBooksBold } from "react-icons/pi";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { BsSunglasses } from "react-icons/bs";
import { SiYoutubegaming } from "react-icons/si";

const Sidebar = () => {
  return (
    <div>
      <div className="w-[20rem] py-5 px-10 border-r-[1px] border-r-slate-400 h-[60rem] overflow-x-auto whitespace-nowrap no-scrollbar hover:show-scrollbar">
        <div className="grid gap-6 justify-center">
          <a href="/">
            <span className="text-3xl text-white font-sans flex items-center gap-5 hover:bg-slate-700 py-5 px-5 rounded-2xl cursor-pointer">
              <FaHome />
              Home
            </span>
          </a>
          <a href="/hubstream/subscription">
            <span className="text-3xl text-white font-sans flex items-center gap-5 hover:bg-slate-700 py-5 px-5 rounded-2xl cursor-pointer">
              <ImBooks /> Subscriptions
            </span>
          </a>
          <a href="/hubstream/settings">
            <span className="text-3xl text-white font-sans flex items-center gap-5 hover:bg-slate-700 py-5 px-5 rounded-2xl cursor-pointer">
              <IoIosSettings />
              Settings
            </span>
          </a>

          <hr />
          {/* Explore options ===> */}
          <h2 className="text-white text-2xl">Explore</h2>
          <a href="/hubstream/trending">
            <span className="text-3xl text-white font-sans flex items-center gap-5 hover:bg-slate-700 py-5 px-5 rounded-2xl cursor-pointer">
              <FaFire />
              Trending
            </span>
          </a>
          <a href="/hubstream/music">
            <span className="text-3xl text-white font-sans flex items-center gap-5 hover:bg-slate-700 py-5 px-5 rounded-2xl cursor-pointer">
              <FaMusic />
              Music
            </span>
          </a>
          <a href="/hubstream/courses">
            <span className="text-3xl text-white font-sans flex items-center gap-5 hover:bg-slate-700 py-5 px-5 rounded-2xl cursor-pointer">
              <PiBooksBold />
              Courses
            </span>
          </a>
          <a href="/hubstream/shopping">
            <span className="text-3xl text-white font-sans flex items-center gap-5 hover:bg-slate-700 py-5 px-5 rounded-2xl cursor-pointer">
              <RiShoppingBag4Fill />
              Shopping
            </span>
          </a>
          <a href="/hubstream/lifestyle">
            <span className="text-3xl text-white font-sans flex items-center gap-5 hover:bg-slate-700 py-5 px-5 rounded-2xl cursor-pointer">
              <BsSunglasses />
              Lifestyle
            </span>
          </a>
          <a href="/hubstream/gaming">
            <span className="text-3xl text-white font-sans flex items-center gap-5 hover:bg-slate-700 py-5 px-5 rounded-2xl cursor-pointer">
              <SiYoutubegaming />
              Gaming
            </span>
          </a>

          <hr />
          {/* Settings ====> */}
          <a href="/hubstream/history">
            <span className="text-3xl text-white font-sans flex items-center gap-5 hover:bg-slate-700 py-5 px-5 rounded-2xl cursor-pointer">
              <MdHistoryToggleOff />
              History
            </span>
          </a>
          <a href="/user/playlist">
            <span className="text-3xl text-white font-sans flex items-center gap-5 hover:bg-slate-700 py-5 px-5 rounded-2xl cursor-pointer">
              <MdPlaylistAdd />
              Playlist
            </span>
          </a>
          <a href="/user/likedvideos">
            <span className="text-3xl text-white font-sans flex items-center gap-5 hover:bg-slate-700 py-5 px-5 rounded-2xl cursor-pointer">
              <AiTwotoneLike />
              Liked Videos
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
