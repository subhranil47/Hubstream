import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Videos from "./Componenets/Videos";
import ShoppingData from "./Datapage/Shoppingpage.json";  
import HistoryData from "./Datapage/Historypage.json";
import GameData from "./Datapage/Gamepage.json";
import MusicData from "./Datapage/Music.json";
import LifestyleData from "./Datapage/Lifestyle.json";
import Play from "./Componenets/Play";
import Mainpage from "./Componenets/Pages/Mainpage";
import Profilepage from "./Componenets/Pages/Profilepage";
import Settingpage from "./Componenets/Pages/Settingspage";


function App() {
  return (
    <Router>
      <Routes>
        {/* Category Pages */}
        <Route path="/" element={<Mainpage />} />

        <Route
          path="/hubstream/shopping"
          element={<Videos category="shopping" videos={ShoppingData} />}
        />
        <Route
          path="/hubstream/history"
          element={<Videos category="history" videos={HistoryData} />}
        />
        <Route
          path="/hubstream/gaming"
          element={<Videos category="gaming" videos={GameData} />}
        />
        <Route
          path="/hubstream/music"
          element={<Videos category="music" videos={MusicData} />}
        />
        <Route
          path="/hubstream/lifestyle"
          element={<Videos category="lifestyle" videos={LifestyleData} />}
        />

        {/* Reusable Play Page */}
        <Route path={`/video/:category/:id`} element={<Play />} />
        <Route path="/hubstream/user/profile" element={<Profilepage/>} />
        <Route path="/hubstream/settings" element={<Settingpage/>}/>
        
        {/* Default Route */}
      </Routes>
    </Router>
  );
}

export default App;
