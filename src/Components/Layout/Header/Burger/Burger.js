import React from "react";
import styles from "./Burger.module.css";
import burgerBtn from "./burgerIcon.svg";
import BurgerMenu from "./BurgerMenu/BurgerMenu";

export default function Burger() {
  const [burger, setBurger] = React.useState(false);
  function openMobileMenu() {
    setBurger(!burger);
  }
  console.log(burger);
  return (
    <>
      <img
        src={burgerBtn}
        alt=""
        className={styles.burger}
        onClick={openMobileMenu}
      />
      <div
        className={`${styles.menu} ${burger ? styles.menu_open : ""}`}
        onClick={openMobileMenu}
      />
      <div className={`${styles.wrapper} ${burger ? styles.wrapper_open : ""}`}>
        <BurgerMenu closeMenu={openMobileMenu} />
      </div>
    </>
  );
}
