import React, { useState } from "react";
import ArrowDownIcon from "../../../../../icons/ArrowDownIcon";

function SpecialDropDown({ items }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    items && (
      <div
        className={`flex flex-col gap-1 pb-3 relative overflow-hidden pl-3 ${
          !isOpen ? "max-h-[400px]" : "pb-8"
        }`}
      >
        {items.map((column) => (
          <div className="mb-3">
            <a
              className="hover:text-brand-red transition-colors durations-300"
              href="összes"
            >
              <h2 className="dark:text-white font-semibold text-xl">{column.title}</h2>
            </a>
            <ul className="flex flex-col divide-y">
              {column.items.map((item) => (
                <li className="flex gap-3 items-center py-3">
                  <a href={item.url}>
                    <img
                      className="max-w-[28px] w-full"
                      src={item.image}
                      alt={item.text}
                    />
                  </a>
                  <div className="flex flex-col justify-center">
                    <a
                      className="hover:text-brand-red transition-colors durations-300"
                      href={item.url}
                    >
                      <h3 className="dark:text-white font-semibold text-md">{item.text}</h3>
                    </a>
                    {item.withTables && (
                      <div className="flex gap-2">
                        <a
                          className="hover:underline text-xs text-brand-red font-semibold"
                          href="/"
                        >
                          Csapatok
                        </a>
                        <span className="text-xs font-bold text-brand-red">
                          /
                        </span>
                        <a
                          className="hover:underline text-xs text-brand-red font-semibold"
                          href="/"
                        >
                          Eredmények
                        </a>
                        <span className="text-xs font-bold text-brand-red">
                          /
                        </span>
                        <a
                          className="hover:underline text-xs text-brand-red font-semibold"
                          href="/"
                        >
                          Táblák
                        </a>
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="transition-colors dark:hover:text-brand-red hover:text-brand-red dark:text-white absolute flex place-items-end justify-center pb-2 bottom-0 h-[50px] w-full dark:bg-dark-accent/90 bg-white/90 font-bold"
        >
          {isOpen ? "Kevesebb" : "Több"}
          <div
            className={
              "dark:text-inherit transition-transform ml-2 " +
              (isOpen ? "rotate-180" : "rotate-0")
            }
          >
            <ArrowDownIcon stroke={"currentColor"} />
          </div>
        </button>
      </div>
    )
  );
}

export default SpecialDropDown;
