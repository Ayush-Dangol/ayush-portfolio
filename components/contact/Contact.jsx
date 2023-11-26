"use client";

import React, { useState, useContext } from "react";
import styles from "./contact.module.css";
import { ThemeContext } from "@/app/context/ThemeContext";

const Contact = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
  });

  const { mode } = useContext(ThemeContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const sendMail = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          value,
        }),
      });

      if (response.ok) {
        // Show success message
        alert("Message sent successfully!");

        // Clear the form data
        setValue({
          name: "",
          email: "",
          phone: "",
          topic: "",
          message: "",
        });
      } else {
        // Handle error responses
        alert("Error sending message. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Error sending message. Please try again later.");
    }
  };

  return (
    <div>
      <h1 className="text-7xl text-center py-2 pb-5 mb-10 heading">
        Contact Me
      </h1>
      <div className={`${mode} contactForm ${styles.contactContainer}`}>
        <form action="" className={styles.form} onSubmit={sendMail}>
          <div className="w-full flex gap-5 flex-wrap">
            <span className={styles.inputContainer}>
              <input
                type="text"
                name="name"
                id="name"
                className={styles.formField}
                placeholder="Full Name"
                value={value.name}
                required
                onChange={handleChange}
              />
              <label className={styles.formLabel} htmlFor="name">
                Full Name
              </label>
            </span>
            <span className={styles.inputContainer}>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
                className={styles.formField}
                value={value.email}
                onChange={handleChange}
              />
              <label className={styles.formLabel} htmlFor="email">
                Email
              </label>
            </span>
          </div>
          <div className="w-full flex gap-5 flex-wrap">
            <span className={styles.inputContainer}>
              <input
                type="text"
                name="topic"
                className={styles.formField}
                value={value.topic}
                required
                placeholder="Topic"
                onChange={handleChange}
              />
              <label className={styles.formLabel} htmlFor="topic">
                Topic
              </label>
            </span>
            <span className={styles.inputContainer}>
              <input
                type="number"
                name="phone"
                value={value.phone}
                className={styles.formField}
                placeholder="Phone"
                onChange={handleChange}
              />
              <label className={styles.formLabel} htmlFor="phone">
                Phone
              </label>
            </span>
          </div>

          <span className="flex flex-col w-full ">
            <label htmlFor="message" className="mb-1 ml-3">
              Message
            </label>
            <textarea
              name="message"
              id=""
              rows="10"
              required
              value={value.message}
              className={styles.message}
              onChange={handleChange}
            ></textarea>
          </span>
          <button
            type="submit"
            className={`${mode} submitBtn ${styles.submit}`}
          >
            <span>Send Message</span>
          </button>
        </form>
        {/* Additional content */}
      </div>
    </div>
  );
};

export default Contact;
