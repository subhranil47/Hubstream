import React from 'react'

import Historydata from "../../Datapage/Historypage.json";
import Mainpage from "./Mainpage";

const Historypage = () => {
  return <Mainpage title="History Videos" videos={Historydata} category="history" />;
}

export default Historypage