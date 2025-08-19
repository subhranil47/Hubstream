import React from 'react'
import Header from "../Header";
import Sidebar from "../Sidebar";
import style from "../../Datapage/Lifestyle.json"
import { Link } from 'react-router-dom';
import Mainpage from './Mainpage';

const Lifestyle = () => {
   return (
    <Mainpage
      title="Lifestyle Videos"
      videos={style}
      category="shopping"
    />
  );
};


export default Lifestyle