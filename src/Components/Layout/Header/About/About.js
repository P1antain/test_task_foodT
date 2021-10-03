import React from "react";
import styles from "./About.module.css";
import { NavLink } from "react-router-dom";

export default function About() {
  return (
    <>
      <ul className={styles.about}>
        <li className={styles.item}>
          <NavLink to={"/"} className={styles.link}>
            О компании
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to={"#"} className={styles.link}>
            Условия доставки
          </NavLink>
        </li>
        <li className={styles.item}>
          <a href={"#"} className={styles.link}>
            Пользовательское соглашение
          </a>
        </li>
      </ul>
    </>
  );
}
