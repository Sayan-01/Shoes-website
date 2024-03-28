"use client";
import React, { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";

import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatagoryMenu, setShowCatagoryMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY) {
        setShow("-translate-y-[80px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]); //ata likhechi

  return (
    <header className={`w-full h-[50px] md:h-[80px] flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 bg-white ${show} `}>
      <Wrapper className={"flex justify-between items-center"}>
        {/* nike logo */}
        <Link href={"/"}>
          <img
            src="/logo.svg"
            className="w-[40px] md:w-[60px] "
          />
        </Link>
        {/* nike logo */}
        <Menu
          showCatagoryMenu={showCatagoryMenu}
          setShowCatagoryMenu={setShowCatagoryMenu}
        />
        {mobileMenu && (
          <MenuMobile
            setMobileMenu={setMobileMenu}
            showCatagoryMenu={showCatagoryMenu}
            setShowCatagoryMenu={setShowCatagoryMenu}
          />
        )}
        {/* 3 icons */}
        <div className="flex items-center gap-2 text-black ">
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex items-center justify-center hover:bg-black/[0.05] cursor-pointer relative ">
            <IoMdHeartEmpty className=" text-[19px] md:text-[24px] " />
            <div className=" h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full  bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px] ">
              6
            </div>
          </div>

          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex items-center justify-center hover:bg-black/[0.05] cursor-pointer relative ">
            <BsCart3 className=" text-[15px] md:text-[20px] " />
            <div className=" h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full  bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px] ">
              6
            </div>
          </div>

          {/* mobile icon */}

          <div className=" md:hidden w-8 md:w-12 h-8 md:h-12 rounded-full flex items-center justify-center hover:bg-black/[0.05] cursor-pointer relative -mr-2 ">
            {mobileMenu ? (
              <VscChromeClose
                className="text-[18px] "
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className="text-[22px] "
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>

          {/* mobile icon */}
        </div>
        {/* 3 icons */}
      </Wrapper>
    </header>
  );
};

export default Header;
