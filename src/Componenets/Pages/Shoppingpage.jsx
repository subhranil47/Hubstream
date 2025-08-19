import React from "react";
import CategoryPage from "./Mainpage";
import ShoppingData from "../../Datapage/Shoppingpage.json";
import Mainpage from "./Mainpage";

const Shoppingpage = () => {
  return (
    <Mainpage
      title="Shopping Videos"
      videos={ShoppingData}
      category="shopping"
    />
  );
};

export default Shoppingpage;
