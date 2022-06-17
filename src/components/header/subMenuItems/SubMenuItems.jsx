import React from "react";
import SubMenuItem from "./subMenuItem/SubMenuItem";

function SubMenuItems({ items }) {
  
  return (
    <div className="dark:bg-dark text-xs bg-[#faf6f8] flex ml-auto w-full justify-end divide-x divide-[#a0656526] border border-[#a0656526]">
      {items.map((item,index) => (
        <SubMenuItem key={`submenu-item-${index}`} item={item} />
      ))}
    </div>
  );
}

export default SubMenuItems;
