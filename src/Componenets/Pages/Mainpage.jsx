import React, { useState } from "react";
import Header from "../Header";
import Feed from "../Feed";

const Mainpage = ({ videos, category }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="w-full min-h-screen bg-slate-800">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Feed videos={videos} category={category} searchTerm={searchTerm} />
    </div>
  );
};

export default Mainpage;
