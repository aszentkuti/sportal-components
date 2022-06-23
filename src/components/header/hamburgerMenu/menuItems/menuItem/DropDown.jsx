import React from "react";

function DropDown({ items }) {
  return (
    <ul className="flex flex-col gap-1 pl-3 pb-3">
      {items.map((item) => (
        <li className="text-left">
          <a
            className="font-semibold text-lg dark:text-white dark:hover:text-brand-red hover:text-brand-red transition-color duration-200"
            href={item.url}
          >
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default DropDown;
