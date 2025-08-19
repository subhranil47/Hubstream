import React from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Trending from "../../Datapage/Trendingdata.json";

const Trendingpage = () => {
  return (
    <div className="w-full h-full bg-slate-800">
      <Header />
      <div className='flex'>
        <Sidebar />
        <div className="px-32">
          <div className="w-full h-screen overflow-x-auto no-scrollbar py-5 px-10 gap-10 grid grid-cols-3">
            {Trending.map((items) => (
              <a className="cursor-pointer" href="/video/:id">
                <div className="grid mt-10">
                  <span className="w-[24rem] h-52  rounded-xl">
                    <img
                      className="bg-cover rounded-xl"
                      id="img"
                      draggable="false"
                      class="style-scope rounded-xl yt-img-shadow"
                      alt=""
                      src={items.url}
                    />
                  </span>
                  <span className="text-white pt-3">
                    <p className="text-xl">{items.Description}</p>
                    <p>{items.Rating}</p>
                    {items.views}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trendingpage