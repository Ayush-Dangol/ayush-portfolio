"use client";

import Image from "next/image";
import styles from "./page.module.css";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Contact from "@/components/contact/Contact";
import { useEffect, useRef, useState, useContext } from "react";
import { BsChevronDown } from "react-icons/bs";
import { ThemeContext } from "@/app/context/ThemeContext";

export default function Home() {
  const { mode } = useContext(ThemeContext);

  // Refs for scrolling to sections
  const sectionOneRef = useRef(null);
  const sectionTwoRef = useRef(null);
  const sectionThreeRef = useRef(null);
  const sectionFourRef = useRef(null);
  const [reference, setReference] = useState(sectionOneRef);
  // Function to handle scrolling to a specific section
  // const scrollToSection = (ref) => {
  //   if (ref === sectionOneRef) {
  //     setReference(sectionTwoRef);
  //   } else if (ref === sectionTwoRef) {
  //     setReference(sectionThreeRef);
  //   } else if (ref === sectionThreeRef) {
  //     setReference(sectionFourRef);
  //   } else if (ref === sectionFourRef) {
  //     setReference(sectionOneRef);
  //   }
  // };

  // useEffect(() => {
  //   reference.current.scrollIntoView({
  //     behavior: "smooth",
  //   });
  // }, [reference]);
  const messages = ["Hey there", "Welcome to my page"];
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timer;

    if (currentText !== "Welcome to my page") {
      if (currentText === "Hey there") {
        setTimeout(() => {
          if (isTyping) {
            // Typing effect for each letter
            if (currentText.length < messages[currentMessageIndex].length) {
              timer = setTimeout(() => {
                setCurrentText((prevText) =>
                  messages[currentMessageIndex].slice(0, prevText.length + 1)
                );
              }, 80); // Adjust the typing speed (in milliseconds)
            } else {
              // Finished typing, wait for 2 seconds, then start erasing
              setIsTyping(false);

              // If we typed "Hey there", wait for 5 seconds before typing the next message
              if (currentText === "Hey there") {
                timer = setTimeout(() => {
                  setIsTyping(true);
                }, 1000);
              } else {
                timer = setTimeout(() => {
                  setIsTyping(true);
                }, 1000);
              }
            }
          } else {
            // Erasing effect, remove each letter one by one
            if (currentText.length > 0) {
              timer = setTimeout(() => {
                setCurrentText((prevText) =>
                  prevText.slice(0, prevText.length - 1)
                );
              }, 100); // Adjust the erasing speed (in milliseconds)
            } else {
              // Finished erasing, move to the next message
              setIsTyping(true);

              // If we are on the last message, stop the animation
              if (currentMessageIndex === messages.length - 1) {
                clearTimeout(timer);
                setCurrentMessageIndex(0);
                setCurrentText("");
              } else {
                setCurrentMessageIndex((prevIndex) => prevIndex + 1);
              }
            }
          }
        }, 200);
      } else {
        if (isTyping) {
          // Typing effect for each letter
          if (currentText.length < messages[currentMessageIndex].length) {
            timer = setTimeout(() => {
              setCurrentText((prevText) =>
                messages[currentMessageIndex].slice(0, prevText.length + 1)
              );
            }, 150); // Adjust the typing speed (in milliseconds)
          } else {
            // Finished typing, wait for 2 seconds, then start erasing
            setIsTyping(false);

            // If we typed "Hey there", wait for 5 seconds before typing the next message
            if (currentText === "Hey there") {
              timer = setTimeout(() => {
                setIsTyping(true);
              }, 20);
            } else {
              timer = setTimeout(() => {
                setIsTyping(true);
              }, 200);
            }
          }
        } else {
          // Erasing effect, remove each letter one by one
          if (currentText.length > 0) {
            timer = setTimeout(() => {
              setCurrentText((prevText) =>
                prevText.slice(0, prevText.length - 1)
              );
            }, 100); // Adjust the erasing speed (in milliseconds)
          } else {
            // Finished erasing, move to the next message
            setIsTyping(true);

            // If we are on the last message, stop the animation
            if (currentMessageIndex === messages.length - 1) {
              clearTimeout(timer);
              setCurrentMessageIndex(0);
              setCurrentText("");
            } else {
              setCurrentMessageIndex((prevIndex) => prevIndex + 1);
            }
          }
        }
      }
    } else {
      setIsTyping(false);
    }

    return () => clearTimeout(timer);
  }, [currentText, currentMessageIndex, isTyping]);
  return (
    <div className={`home-container relative ${styles.wrapper}`}>
      {/* Click to scroll to Section 1 */}
      {/* <div
        id="clickToScrollToSectionOne"
        className={styles.scroll_down}
        onClick={() => scrollToSection(reference)}
      >
        <BsChevronDown />
      </div> */}

      {/* Section 1 */}
      <section
        ref={sectionOneRef}
        className={`${styles.section} ${styles.home} px-5 flex  gap-32`}
        id="home"
      >
        <div className={`text-8xl font-bold ${styles.title}`}>
          {}
          <div className={styles.typewriterText}>
            {currentText}
            <span
              className={`${styles.cursor} ${
                !isTyping ? "bg-transparent" : "bg-gray-300"
              }`}
            />
          </div>
          <a href="/cv/ayush_cv.pdf">
            <button
              className={`${styles.cvBtn} ${
                currentText !== "Welcome to my page" ? "hide-btn" : ""
              }`}
            >
              Download CV
            </button>
          </a>
        </div>
        <div className={styles.img}>
          <Image src="/images/hi2.png" width={350} height={300} alt="hi" />
        </div>
      </section>

      {/* Section 2 */}
      <section
        ref={sectionTwoRef}
        id={`about`}
        className={`${mode} ${styles.section}`}
      >
        <About />
      </section>

      {/* Section 3 */}
      <section
        ref={sectionThreeRef}
        id={`skills`}
        className={`${mode} ${styles.section}`}
      >
        <Skills />
      </section>

      {/* Section 4 */}
      <section
        ref={sectionFourRef}
        id={`contact`}
        className={`${mode} ${styles.section}`}
      >
        <Contact />
      </section>
    </div>
  );
}
