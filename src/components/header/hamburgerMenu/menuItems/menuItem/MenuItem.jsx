import React, { useState } from "react";

function MenuItem({ item }) {
  const [showChildren, setShowChildren] = useState(false);
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
                "transition-transform " +
                (showChildren ? "rotate-180" : "rotate-0")
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </button>
        )}
      </div>
      {item.children && showChildren && (
        <ul className="flex flex-col gap-1 pl-3 pb-3">
          {item.children.map((child) => (
            <li className="text-left">
              <a
                className="font-bold text-lg hover:text-brand-red transition-color duration-200"
                href={child.url}
              >
                {child.text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default MenuItem;
