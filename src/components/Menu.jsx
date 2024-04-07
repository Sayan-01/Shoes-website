'use client'
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Categories", subMenu: true },
  { id: 4, name: "Contact", url: "/contact" },
];

const subMenuData = [
  { id: 1, name: "Jordan", doc_count: 11 },
  { id: 2, name: "Sneakers", doc_count: 8 },
  { id: 3, name: "Running shoes", doc_count: 64 },
  { id: 4, name: "Football shoes", doc_count: 107 },
];

const Menu = ({ showCatagoryMenu, setShowCatagoryMenu }) => {
  return (
    <ul className=" hidden md:flex items-center gap-8 font-medium text-black">
      {data.map((item) => {
        return (
          <div key={item.id}>
            {item?.subMenu ? (
              <li
                className=" cursor-pointer flex items-center gap-2 relative"
                onMouseEnter={() => setShowCatagoryMenu(true)}
                onMouseLeave={() => setShowCatagoryMenu(false)}
              >
                {item.name}
                <BsChevronDown size={14} />
                {showCatagoryMenu && (
                  <ul className="bg-white absolute top-6 left-0 min-w-[250px] px-1 py-1 text-black shadow-lg ">
                    {subMenuData.map((sub) => {
                      return (
                        <Link
                          href={`/catagory/${sub.name}`}
                          key={sub.id}
                          onClick={() => setShowCatagoryMenu(false)} //ai onclick ta lagano holo jate subcatagorite click korle showCatagory menu ta close hoy jay
                        >
                          <li className=" h-12 flex justify-between items-center px-3 hover:bg-zinc-900/[0.09] rounded-md ">
                            {sub.name}
                            <span className=" opacity-50 text-sm">24</span>
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <li
                key={item.id}
                className=" cursor-pointer"
              >
                <Link href={item?.url}>{item.name}</Link>
              </li>
            )}
          </div>
        );
      })}
    </ul>
  );
};

export default Menu;
