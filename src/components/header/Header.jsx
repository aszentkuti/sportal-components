import React from "react";
import DarkModeSwitch from "./darkModeSwitch/DarkModeSwitch";
import HamburgerMenu from "./hamburgerMenu/HamburgerMenu";
import Logo from "./logo/Logo";
import MenuItems from "./menuItems/MenuItems";
import SubMenuItems from "./subMenuItems/SubMenuItems";

function Header({ menuItems, subMenuItems }) {
  return (
    <header className="fixed w-full bg-gradient-to-r from-brand-red to-brand-orange flex flex-col z-20">
      <div className="flex pl-3">
        <Logo />
        <MenuItems items={menuItems} />
        <DarkModeSwitch />
        <HamburgerMenu items={menuItems} />
      </div>
      <SubMenuItems items={subMenuItems} />
    </header>
  );
}

export default Header;
