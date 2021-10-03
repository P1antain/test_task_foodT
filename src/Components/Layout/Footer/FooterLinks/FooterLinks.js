import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./FooterLinks.module.css";

export default function FooterLinks() {
  return (
    <>
      <NavLink to={"/123"} className={styles.link}>
        Акции
      </NavLink>
      <NavLink to={"/125"} className={styles.link}>
        Вакансии
      </NavLink>
      <NavLink to={"/124"} className={styles.link}>
        Франшиза
      </NavLink>
      <NavLink to={"/126"} className={styles.link}>
        Отзывы
      </NavLink>
      <NavLink to={"/127"} className={styles.link}>
        Политика обработки персональных данных
      </NavLink>
      <a href={"#"} className={styles.mobile}>
        Пользовательское соглашение
      </a>
    </>
  );
}
