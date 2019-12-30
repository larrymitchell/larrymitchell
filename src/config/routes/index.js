import React from "react";
import Home from "pages/Home";
import Instagram from "images/instagram.png";
import styles from "./style.module.css";

export default [
  {
    name: "Home",
    path: "/",
    component: Home
  },
  {
    name: <img className={styles.icon} src={Instagram} alt="Instagram" />,
    path: "https://www.instagram.com/larry.mitchell/",
    inNavBar: true,
    isExternal: true
  }
];
