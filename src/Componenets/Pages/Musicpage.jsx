import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Music from "../../Datapage/Music.json";
import Mainpage from "./Mainpage";

const Musicpage = () => {

  const [searchTerm, setSearchTerm] = React.useState("");
  return (
    <div className="flex flex-col h-screen bg-gray-900">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 bg-gray-900 overflow-y-auto">
          <Mainpage
            title="Music Page"
            videos={Music}
            category="music"
            searchTerm={searchTerm}
          />
        </div>
      </div>
    </div>
  );
};

export default Musicpage;
