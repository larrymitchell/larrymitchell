import React from "react";
import Illustrations from "pages/Illustrations";
import Instagram from "images/instagram.png";
import styles from "./style.module.css";

export default [
  {
    name: "Illustrations",
    path: "/",
    component: Illustrations
  },
  {
    name: <img className={styles.icon} src={Instagram} alt="Instagram" />,
    path: "https://www.instagram.com/larry.mitchell/",
    inNavBar: true,
    isExternal: true
  }
];
