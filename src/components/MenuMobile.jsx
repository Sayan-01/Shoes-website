"use client";
import Link from "next/link";
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

const MenuMobile = ({ showCatagoryMenu, setShowCatagoryMenu, setMobileMenu }) => {
  return (
    <ul className=" md:hidden flex flex-col absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t font-bold text-black">
      {data.map((item) => {
        return (
          <div key={item.id}>
            {item?.subMenu ? (
              <li
                className=" cursor-pointer py-4 px-5 flex border-b flex-col relative "
                onClick={() => setShowCatagoryMenu(!showCatagoryMenu)}
              >
                <div className="flex justify-between items-center">
                  {item.name}
                  <BsChevronDown size={14} />
                </div>
                {showCatagoryMenu && (
                  <ul className="bg-zinc-900/[0.05] -mx-5 mt-4 -mb-4 ">
                    {subMenuData.map((sub) => {
                      return (
                        <Link
                          href={"/"}
                          key={sub.id}
                          onClick={() => {
                            setShowCatagoryMenu(false);
                            setMobileMenu(false);
                          }} //ai onclick ta lagano holo jate subcatagorite click korle showCatagory menu ta close hoy jay
                        >
                          <li className=" py-4 px-8 border-t flex justify-between">
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
                className=" py-4 px-5 border-b"
              >
                <Link
                  href={item?.url}
                  onClick={() => setMobileMenu(false)}
                >
                  {item.name}
                </Link>
              </li>
            )}
          </div>
        );
      })}
    </ul>
  );
};

export default MenuMobile;
