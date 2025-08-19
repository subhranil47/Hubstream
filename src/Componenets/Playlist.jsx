import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Playlist = () => {
  const [allvideos, setvideos] = useState([]);

  return (
    <div className="w-full h-full bg-slate-800">
      <Header />

      <div className="flex">
        <Sidebar />
      </div>
    </div>
  );
};

export default Playlist;
