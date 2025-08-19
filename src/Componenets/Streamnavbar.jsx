import React from 'react'
import { useState, useEffect } from 'react';
import { FaSun } from 'react-icons/fa';
import { MdOutlineMenu } from "react-icons/md";
import Streamsidebar from "./Streamsidebar"


const Streamnavbar = () => {
 
  const [Sidebar, Showsidebar] = useState(false)
  
 

  return (
    <div>
      <div className="w-full py-5 flex items-center">
        <button onClick={() => {Showsidebar(true)}} className='ml-20 px-4 py-4 text-white text-4xl hover:bg-slate-600 rounded-full cursor-pointer'>
           <MdOutlineMenu/>
        </button>
        <label className="font-[Teko] text-6xl text-white font-bold p-10">
          Hubstream
        </label>
        <span className="py-10 pl-80">
          <input
            className="w-[32rem] py-3 px-5 rounded-full outline-none focus:text-xl duration-300"
            type="text"
            placeholder="Search..."
          />
        </span>
        <span className="ml-72 px-2 py-3 rounded-full text-3xl text-white hover:bg-slate-600">
          <FaSun onClick={() => {}} />
        </span>

        <span className="pl-10">
          <svg
            class="h-12 w-12 text-gray-300"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      </div>
      {Sidebar && <Streamsidebar onClose={() => {Showsidebar(false)}}/>}
    </div>
  );
}

export default Streamnavbar