"use client";

import React, { useState, useContext } from "react";
import DarkmodeToggle from "../darkmodeToggle/DarkmodeToggle";
import { ThemeContext } from "@/app/context/ThemeContext";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineLine } from "react-icons/ai";
const Header = () => {
  const [show, setShow] = useState(false);
  const handleCloseMenu = () => {
    setShow(false);
  };
  const { mode } = useContext(ThemeContext);
  return (
    <header className={`${mode} header ${show ? "header-mobile" : ""} `}>
      <nav className="w-full flex justify-between items-center px-4 header-nav">
        {/* <h1 className="text-4xl title-name">AYUSH DANGOL</h1> */}
        <Image
          src={
            mode === "dark"
              ? "/images/logo-light-white.png"
              : "/images/logo-black.png"
          }
          width={350}
          height={250}
          alt="logo"
          className={`logo`}
        />

        <div
          className={`header-hamburger ${mode}`}
          onClick={() => {
            setShow((prev) => !prev);
          }}
        >
          <hr className={show ? `cross-left` : ""} />
          <hr className={show ? "opacity-0" : ""} />
          <hr className={show ? `cross-right` : ""} />
        </div>
        <div className={`links  ${show ? "links-mobile" : ""}`}>
          <DarkmodeToggle click={handleCloseMenu} />
          <Link
            href={`#home`}
            className="header-link"
            onClick={handleCloseMenu}
          >
            Home
          </Link>
          <Link
            href={`#about`}
            className="header-link"
            onClick={handleCloseMenu}
          >
            About
          </Link>
          <Link
            href={`#skills`}
            className="header-link"
            onClick={handleCloseMenu}
          >
            Skills
          </Link>
          <Link
            href={`#contact`}
            className="header-link"
            onClick={handleCloseMenu}
          >
            Contact
          </Link>
          {/* <button>Sign In</button> */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
