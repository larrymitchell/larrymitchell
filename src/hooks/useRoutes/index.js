import React, { useMemo } from "react";
import Illustrations from "pages/Illustrations";
import About from "pages/About";
import Instagram from "images/instagram.png";
import styles from "./style.module.css";

const useRoutes = () =>
  useMemo(
    () => [
      {
        name: "Illustrations",
        path: "/",
        component: Illustrations
      },
      {
        name: "About",
        path: "/about",
        component: About
      },
      {
        name: <img className={styles.icon} src={Instagram} alt="Instagram" />,
        path: "https://www.instagram.com/larry.mitchell/",
        inNavBar: true,
        isExternal: true
      }
    ],
    []
  );

export default useRoutes;
