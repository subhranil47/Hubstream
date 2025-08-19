import React from 'react'
import Header from "../Header";
import Sidebar from "../Sidebar";
import Game from "../../Datapage/Gamepage.json"
import Mainpage from "./Mainpage";

const Gamepage = () => {
  return (
    <div className='flex '>
      <Header />
      <Sidebar />
      <Mainpage title="Game Videos" videos={Game} category="game" />
    </div>
  );
    
}

export default Gamepage