import React from 'react'

const Settingslider = () => {
  return (
    <div>
      <div className="w-[16rem] py-5 px-10  h-[60rem] overflow-x-auto whitespace-nowrap no-scrollbar hover:show-scrollbar">
        <span className="text-4xl text-center text-slate-300">Settings</span>
        <div className="grid gap-12 justify-center pt-20 text-2xl text-slate-300">
          <a href="/hubstream/accountsettings">
            <span className="hover:bg-slate-400 py-3 px-2 rounded-xl">
              Account Settings
            </span>
          </a>
          <a href="/hubstream/Notifications">
            <span className="hover:bg-slate-400 py-3 px-2 rounded-xl">
              Notifications
            </span>
          </a>
          <a href="/hubstream/Privacy">
            <span className="hover:bg-slate-400 py-3 px-2 rounded-xl">
              Privacy
            </span>
          </a>
          <a href="/hubstream/Uploads">
            <span className="hover:bg-slate-400 py-3 px-2 rounded-xl">
              Uploads
            </span>
          </a>
          <a href="/hubstream/Moresettings">
            <span className="hover:bg-slate-400 py-3 px-2 rounded-xl">
              More Settings
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Settingslider