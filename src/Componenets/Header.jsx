import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaSun } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";

const Header = ({searchTerm, setSearchTerm}) => {
  const [darkMode, setDarkMode] = useState(false);

  // Apply/remove dark class to html
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <div className="">
      <div className="w-full py-5 flex items-center">
        <a href="/" className="font-[Teko] text-6xl text-white font-bold p-10">
          Hubstream
        </a>
        <span className="py-10 pl-80">
          <input
            className="w-[32rem] py-3 px-5 rounded-full outline-none focus:w-[40rem] duration-500 focus:text-xl"
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </span>
        <span
          className="pl-72 text-3xl cursor-pointer text-slate-100 dark:text-yellow-400"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <FaSun /> : <MdDarkMode />}
        </span>

        <span className="pl-10">
          <a href="/hubstream/user/profile">
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
          </a>
        </span>
      </div>
    </div>
  );
};

export default Header;
