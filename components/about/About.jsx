"use client";

import Image from "next/image";
import { useContext, useEffect, useRef, useState } from "react";

import Me from "@/public/images/me.png";
import styles from "./about.module.css";
import { ThemeContext } from "@/app/context/ThemeContext";

const aboutMe = [
  {
    title: "Name",
    data: "Ayush Dangol",
  },
  { title: "Phone", data: "9377449613" },
  { title: "Address", data: "2439 Zink RD, Fairborn" },
  { title: "Email", data: "dangolice@gmail.com" },
  { title: "DOB", data: "2001/01/31" },

  { title: "Experience", data: "1 year" },
  { title: "Degree", data: "BSc (Hons) Computer Networking and IT Security" },
];

const About = () => {
  const { mode } = useContext(ThemeContext);
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div ref={aboutRef}>
      <h1 className="text-7xl text-center py-2 pb-5 mb-10 heading">About Me</h1>
      <div
        className={`${styles.abtContainer} ${
          isVisible ? styles.animateIn : ""
        }`}
      >
        <div className={`${styles.imgContainer}`}>
          <div className={`${mode} aboutImg ${styles.img}`}>
            <Image src={Me} fill />
          </div>
        </div>

        <div className={`text-justify text-lg  ${styles.abtRight}`}>
          <div className={styles.gridContainer}>
            {aboutMe.map((item) => {
              return (
                <div
                  className={` gap-1 leading-10 ${
                    item.title === "Degree" ? "col-span-2 min-w-full" : ""
                  } ${item.title === "Email" ? "min-w-full " : ""}`}
                >
                  <span className={`font-bold mr-2 `}>{item.title}:</span>
                  <span className="w-max">{item.data}</span>
                </div>
              );
            })}
          </div>
          <div className="w-3/4">
            Solution-driven front-end developer adept at contributing to highly
            collaborative work environment and finding solutions. With
            experience in developing consumer-focused websites using HTML, CSS,
            JavaScript and React. Excited to pursue new companies to grow my
            skills and tackle web development challenges
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
