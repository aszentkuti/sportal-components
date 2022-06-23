import React, { useState } from "react";
import DropDown from "./DropDown";
import SpecialDropDown from "./SpecialDropDown";

function MenuItem({ item }) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="self-center relative flex  h-full  hover:bg-brand-red transition-colors duration-300"
    >
      <a
        className="whitespace-nowrap text-white font-bold text-sm px-4 flex h-full w-full items-center grow uppercase tracking-[1px] overflow-hidden"
        href={item.url}
      >
        {item.text}
      </a>
      {item.children && item.special ? (
        <SpecialDropDown items={item.children} show={isHovering} />
      ) : (
        <DropDown items={item.children} show={isHovering} />
      )}
    </div>
  );
}

export default MenuItem;
