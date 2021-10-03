import React from "react";
import styles from "./Menu.module.css";
import { NavLink } from "react-router-dom";
export default function Menu() {
  return (
    <>
      <NavLink
        to={"/goods/sets"}
        className={styles.link}
        activeClassName={styles.linkActive}
      >
        Сеты
      </NavLink>
      <NavLink
        to={"/22"}
        className={styles.link}
        activeClassName={styles.linkActive}
      >
        Онигири
      </NavLink>
      <NavLink
        to={"/23"}
        className={styles.link}
        activeClassName={styles.linkActive}
      >
        Десерты
      </NavLink>
      <NavLink
        to={"/24"}
        className={styles.link}
        activeClassName={styles.linkActive}
      >
        Воки
      </NavLink>
      <NavLink
        to={"/25"}
        className={styles.link}
        activeClassName={styles.linkActive}
      >
        Поке и салаты
      </NavLink>
      <NavLink
        to={"/26"}
        className={styles.link}
        activeClassName={styles.linkActive}
      >
        Роллы
      </NavLink>
      <NavLink
        to={"/27"}
        className={styles.link}
        activeClassName={styles.linkActive}
      >
        Еще
      </NavLink>
    </>
  );
}
