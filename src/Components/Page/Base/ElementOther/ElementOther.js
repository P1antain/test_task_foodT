import React from "react";
import styles from "./ElementOther.module.css";
import tempua from './tempura_desktop.png'
import drink from './beverages_desktop.png'
import { NavLink } from "react-router-dom";

export default function ElementOther() {
  return (
    <>
      <NavLink to={"/41"} className={styles.rol}>
        <div className={styles.wrapper}>
          <img src={tempua} alt="sushi" className={styles.img} />
        </div>
        <span className={styles.text}>темпура</span>
      </NavLink>
      <NavLink to={"/41"} className={styles.rol}>
        <div className={styles.wrappers}>
          <img src={drink} alt="sushi" className={styles.img} />
        </div>
        <span className={styles.text}>напитки</span>
      </NavLink>
    </>
  );
}
