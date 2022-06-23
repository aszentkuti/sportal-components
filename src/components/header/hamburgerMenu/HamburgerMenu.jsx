import React, { useState } from "react";
import HamburgerIcon from "../../../icons/HamburgerIcon";
import MenuItems from "./menuItems/MenuItems";
import LiveEvent from "./sidebar/LiveEvent";
import Sidebar from "./sidebar/Sidebar";

function HamburgerMenu({ items, tags }) {
  const [isSideBarVisible, setSideBarVisible] = useState(false);

  return (
    <>
      <button
        onClick={() => setSideBarVisible(true)}
        className="text-white font-medium px-3 hover:bg-brand-red transition-colors duration-300 uppercase"
      >
        <div className="flex gap-2">
          <HamburgerIcon />
          <span>Menu</span>
        </div>
      </button>
      <Sidebar
        items={items}
        isSideBarVisible={isSideBarVisible}
        setSideBarVisible={setSideBarVisible}
      >
        <LiveEvent title={"Livescores"} />
        <MenuItems items={items} />
        {tags && (
          <div className="flex gap-3 flex-wrap">
            {tags.map((tag) => (
              <a
                className="uppercase text-brand-red hover:underline underline-offset-4 text-md"
                href={tag.url}
              >
                {tag.text}
              </a>
            ))}
          </div>
        )}
      </Sidebar>
    </>
  );
}

export default HamburgerMenu;
