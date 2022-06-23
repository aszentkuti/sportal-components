import React, { useEffect, useRef } from "react";
import CloseIcon from "../../../../icons/CloseIcon";
import SearchIcon from "../../../../icons/SearchIcon";
import MenuItems from "../menuItems/MenuItems";

function Sidebar({ items, isSideBarVisible, setSideBarVisible, children }) {
  const sideBar = useRef();

  useEffect(() => {
    if (isSideBarVisible) {
      sideBar.current.classList.remove("animate-slide-out-to-right");
      sideBar.current.classList.add("animate-slide-in-from-right");
    } else if (
      sideBar.current.classList.contains("animate-slide-in-from-right")
    ) {
      sideBar.current.classList.remove("animate-slide-in-from-right");
      sideBar.current.classList.add("animate-slide-out-to-right");
    }
  }, [isSideBarVisible]);

  return (
    <>
      <div
        ref={sideBar}
        className="flex flex-col fixed dark:bg-dark-accent bg-white max-w-xs w-full right-0 h-full translate-x-full z-50 overflow-y-auto"
      >
        <div className="flex w-full relative">
          <div className="absolute text-brand-red left-2 top-2">
            <SearchIcon stroke="#e01b2f" />
          </div>
          <form className="flex w-full" action="search">
            <input
              placeholder="Keresés"
              className="pl-11 pr-3 w-full bg-[#f5f0f3] outline-0 transition-color duration-300 focus:border-b-brand-red border-b dark:text-white dark:bg-dark dark:border-dark-accent dark:focus:border-b-brand-red"
              type="text"
              name="q"
            />
          </form>
          <button
            onClick={() => setSideBarVisible(false)}
            className="bg-brand-red p-3 self-end hover:bg-brand-orange transition-colors duration-300"
          >
            <CloseIcon />
          </button>
        </div>
        <div className="p-4 flex flex-col gap-4">{children}</div>
      </div>
      {isSideBarVisible && (
        <div
          onClick={() => setSideBarVisible(false)}
          className="fixed w-full h-full inset-0 dark:bg-black/60 bg-black/30 z-40"
        ></div>
      )}
    </>
  );
}

export default Sidebar;
