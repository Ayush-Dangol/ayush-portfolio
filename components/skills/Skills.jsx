import Image from "next/image";
import React, { useContext } from "react";
import { ThemeContext } from "@/app/context/ThemeContext";
import styles from "./skills.module.css";

const skillList = [
  "HTML",
  "CSS",
  "JS",
  "BOOTSTRAP",
  "REACT",
  "RESPONSIVE",
  "TAILWIND",
  "NEXT-JS",
];

const Skills = () => {
  const { mode } = useContext(ThemeContext);
  return (
    <div>
      <h1 className="text-7xl text-center py-2 pb-5 mb-10 heading">Skills</h1>
      <div className={styles.skills}>
        {skillList.map((item) => {
          return (
            <span className="flex flex-col justify-center items-center cursor-pointer w-60">
              <div className={styles.imgContainer}>
                <Image
                  src={`/icons/${item}.png`}
                  fill
                  className={`grayscale hover:grayscale-0 `}
                  id={item}
                  alt="skills"
                />
              </div>

              <h1 className="font-bold mt-4">
                {item === "NEXT-JS" ? "NEXT.JS" : item}
              </h1>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
