"use client";

import React, { useContext } from "react";
import { BsFillSunFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
import styles from "./darkmodeToggle.module.css";
import { ThemeContext } from "@/app/context/ThemeContext";

const DarkmodeToggle = (props) => {
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <div
      className={`${styles.container} text-md`}
      onClick={() => {
        toggle();
        props.click();
      }}
    >
      <div
        className={`${styles.ball} ${mode === "dark" ? "ml-8" : "mr-5"}`}
        // style={mode === "dark" ? { left: "37px" } : { right: "37px" }}
      ></div>
      <div className="text-gray-100 ">
        <FaMoon />
      </div>
      <div className="text-yellow-500 text-lg">
        <FaSun />
      </div>
    </div>
  );
};

export default DarkmodeToggle;
