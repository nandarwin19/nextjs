"use client";

import Link from "next/link";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-gray-600 w-full">
      <div className="max-width py-3 flex items-center justify-between">
        <Link href="/" className={styles.logo}>
          Logo
        </Link>
        <div className="hidden laptop:flex items-center gap-5">
          <Links />
        </div>
        <div
          className=" laptop:hidden text-3xl px-3  cursor-pointer tablet:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <IoClose /> : <AiOutlineMenu />}
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute z-[9999] tablet:hidden top-16 shadow-2xl rounded-lg p-4 py-10 right-5 bg-[#141414] w-[50%] flex items-center justify-center gap-3 flex-col">
          <Links />
        </div>
      )}
    </div>
  );
};

export default Navbar;
