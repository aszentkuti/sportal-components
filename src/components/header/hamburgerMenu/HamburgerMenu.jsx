import React, { useEffect, useRef, useState } from "react";
import MenuItems from "./menuItems/MenuItems";

function HamburgerMenu({ items }) {
  const [isSideBarVisible, setSideBarVisible] = useState(false);
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
      <button
        onClick={() => setSideBarVisible(true)}
        className="text-white font-medium px-3 hover:bg-brand-red transition-colors duration-300 uppercase"
      >
        <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <span>Menu</span>
        </div>
      </button>
      {/* sidebar */}
      <div
        ref={sideBar}
        className="flex flex-col fixed bg-white max-w-xs w-full right-0 h-full translate-x-full z-30"
      >
        <div className="flex w-full relative">
          {/* search icon */}
          <div className="absolute text-brand-red left-2 top-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              width="28"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          {/* search bar */}
          <form className="flex w-full" action="search">
            <input
              placeholder="Keresés"
              className="pl-11 pr-3 w-full bg-[#f5f0f3] outline-0 focus:border-b-brand-red border-b"
              type="text"
              name="q"
            />
          </form>
          {/* close button */}
          <button
            onClick={() => setSideBarVisible(false)}
            className="bg-brand-red p-3 self-end"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="p-4 flex flex-col gap-4">
          {/* livescore */}
          <a
            href="/"
            className="bg-gradient-to-r from-brand-red to-brand-orange flex gap-3 items-center px-3 py-2 rounded-lg"
          >
            <div className="relative">
              <span className="absolute animate-ping block w-3 h-3 bg-lime-500 rounded-full"></span>
              <span className="block w-3 h-3 bg-lime-500 rounded-full"></span>
            </div>
            <span className="font-bold uppercase text-white text-lg tracking-wide">
              Livescore
            </span>
          </a>
          <MenuItems items={items} />
        </div>
      </div>
      {isSideBarVisible && (
        <div
          onClick={() => setSideBarVisible(false)}
          className="fixed w-full h-full inset-0 bg-black/30 z-10"
        ></div>
      )}
    </>
  );
}

export default HamburgerMenu;
