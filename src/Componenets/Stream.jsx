import React from "react";
import Streamnavbar from "./Streamnavbar";
import Play from "./Play";


const Stream = () => {
  return (
    <div className="w-full min-h-screen bg-slate-800">
      <Streamnavbar/>
      <Play/>

    </div>
  );
};

export default Stream;
