import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./MenuItem.module.css";

export default function MenuItem({ to, img, text }) {
  return (
    <>
      <NavLink
        to={to}
        className={styles.item}
        activeClassName={styles.item_active}
      >
        <img src={img} alt={text} className={styles.img} />
        <p className={styles.text}>{text}</p>
      </NavLink>
    </>
  );
}
