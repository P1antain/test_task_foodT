import React from "react";
import styles from "./BurgerMenu.module.css";
import cabinetIcon from "./cabinet.svg";
import home from "./home.svg";
import menuIcon from "./menuItem.svg";
import soc from "../../../../../images/soc.svg";
import google from "../../../../../images/google-play-badge.png";
import { NavLink } from "react-router-dom";
import MenuItem from "./MenuItem/MenuItem";

export default function BurgerMenu({ closeMenu }) {
  return (
    <>
      <div className={styles.head}>
        <NavLink to={"/"} className={styles.logo} onClick={closeMenu}>
          <img src={home} alt="#" />
        </NavLink>
        <a href={"#"} className={styles.link}>
          Личный кабинет{" "}
          <img src={cabinetIcon} alt="#" className={styles.cabinet} />
        </a>
      </div>
      <div className={styles.block}>
        <div>
          <MenuItem to={"/goods/sets"} img={menuIcon} text={"Сеты"} />
          <MenuItem to={"/2"} img={menuIcon} text={"Десерты"} />
          <MenuItem to={"/3"} img={menuIcon} text={"Паке и салаты"} />
          <MenuItem to={"/4"} img={menuIcon} text={"Темпура"} />
          <MenuItem to={"/5"} img={menuIcon} text={"Десерты"} />
          <MenuItem to={"/6"} img={menuIcon} text={"Супы"} />
          <MenuItem to={"/7"} img={menuIcon} text={"Соусы"} />
        </div>
        <div>
          <MenuItem to={"/goods/sets"} img={menuIcon} text={"Сеты"} />
          <MenuItem to={"/9"} img={menuIcon} text={"Десерты"} />
          <MenuItem to={"/10"} img={menuIcon} text={"Паке и салаты"} />
          <MenuItem to={"/11"} img={menuIcon} text={"Темпура"} />
          <MenuItem to={"/12"} img={menuIcon} text={"Десерты"} />
          <MenuItem to={"/13"} img={menuIcon} text={"Супы"} />
          <MenuItem to={"/14"} img={menuIcon} text={"Соусы"} />
        </div>
      </div>
      <div className={styles.wrapper}>
        <MenuItem to={"/15"} img={menuIcon} text={"Выбрать город"} />
        <MenuItem to={"/16"} img={menuIcon} text={"О компании"} />
        <MenuItem to={"/17"} img={menuIcon} text={"Акции"} />
        <MenuItem to={"/18"} img={menuIcon} text={"Ближайшие СушиСуши"} />
        <MenuItem to={"/19"} img={menuIcon} text={"Вакансии"} />
        <MenuItem to={"/20"} img={menuIcon} text={"Отзывы"} />
        <MenuItem to={"/21"} img={menuIcon} text={"Контакты"} />
      </div>
      <div className={styles.social}>
        <a
          href={"https://vk.com"}
          target={"_blank"}
          className={styles.soc_link}
        >
          <img src={soc} alt="" className={styles.icon} />
        </a>
        <a
          href={"https://vk.com"}
          target={"_blank"}
          className={styles.soc_link}
        >
          <img src={soc} alt="" className={styles.icon} />
        </a>
        <a
          href={"https://vk.com"}
          target={"_blank"}
          className={styles.soc_link}
        >
          <img src={soc} alt="" className={styles.icon} />
        </a>
        <a
          href={"https://vk.com"}
          target={"_blank"}
          className={styles.soc_link}
        >
          <img src={soc} alt="" className={styles.icon} />
        </a>
        <a
          href={"https://vk.com"}
          target={"_blank"}
          className={styles.soc_link}
        >
          <img src={soc} alt="" className={styles.icon} />
        </a>
      </div>
      <div className={styles.download}>
        <a
          href={"https://vk.com"}
          target={"_blank"}
          className={styles.dow_link}
        >
          <img src={google} alt="google" className={styles.market} />
        </a>
        <a
          href={"https://vk.com"}
          target={"_blank"}
          className={styles.dow_link}
        >
          <img src={google} alt="google" className={styles.market} />
        </a>
      </div>
    </>
  );
}
