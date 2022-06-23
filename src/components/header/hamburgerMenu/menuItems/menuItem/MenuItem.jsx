import React, { useState } from "react";
import ArrowDownIcon from "../../../../../icons/ArrowDownIcon";
import DropDown from "./DropDown";
import SpecialDropDown from "./SpecialDropDown";

function MenuItem({ item }) {
  const [showChildren, setShowChildren] = useState(item.special === true);
  const getDropDown = (item) => item.special ? <SpecialDropDown items={item.children} /> : <DropDown items={item.children}/>
  return (
    <li>
      <div className="flex w-full items-center cursor-pointer py-1 text-left">
        <a
          className="uppercase whitespace-nowrap font-bold text-2xl text-brand-red hover:underline"
          href={item.url}
        >
          {item.text}
        </a>
        {item.children && (
          <button
            onClick={() => setShowChildren(!showChildren)}
            className="flex justify-end w-full"
          >
            <div
              className={
                "dark:text-white transition-transform " +
                (showChildren ? "rotate-180" : "rotate-0")
              }
            >
              <ArrowDownIcon stroke="currentColor"/>
            </div>
          </button>
        )}
      </div>
      {item.children && showChildren && getDropDown(item)}
    </li>
  );
}

export default MenuItem;
