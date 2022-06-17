import React from "react";
import MenuItem from "./menuItem/MenuItem";

function MenuItems({ items }) {
  return (
    <ul className="flex flex-col divide-y">
      {items.map((item, index) => (
        <MenuItem key={`sidebar-item-${index}`} item={item} />
      ))}
    </ul>
  );
}

export default MenuItems;
