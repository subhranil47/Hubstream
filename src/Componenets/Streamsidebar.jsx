import React from 'react';
import { MdOutlineMenu,  } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { FaFire } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { IoMdArrowBack } from "react-icons/io";
import { MdHistoryToggleOff } from "react-icons/md";
import { MdPlaylistAdd } from "react-icons/md";
import { AiTwotoneLike } from "react-icons/ai";
import { FaMusic } from "react-icons/fa";
import { PiBooksBold } from "react-icons/pi";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { BsSunglasses } from "react-icons/bs";
import { SiYoutubegaming } from "react-icons/si";



const Streamsidebar = ({onClose}) => {
  return (
    <div>
      <div className="absolute inset-0 bg-opacity-40 mt-[60px] ml-24 z-[999]">
        <div className="w-[23rem] h-[66rem] py-4 mt-[3px] bg-slate-900">
          <span className="flex items-center">
            <button
              onClick={onClose}
              className="text-white text-5xl ml-3 rounded-full hover:bg-slate-600 px-2"
            >
              <IoMdArrowBack />
            </button>
            <h2 className="text-white text-5xl ml-14 font-[Teko] font-bold">
              Hubstream
            </h2>
          </span>
          <div className="grid gap-6 justify-center h-screen no-scrollbar overflow-scroll mt-14">
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
    </div>
  );
}

export default Streamsidebar