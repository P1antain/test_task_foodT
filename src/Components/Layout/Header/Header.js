import React from "react";
import styles from "./Header.module.css";
import Logo from "./Logo/Logo";
import Cabinet from "./Cabinet/Cabinet";
import About from "./About/About";
import Promo from "./Promo/Promo";
import Shop from "./Shop/Shop";
import Burger from "./Burger/Burger";
import { useLocation } from "react-router-dom";
import Menu from "./Menu/Menu";

export default function Header() {
  const location = useLocation();
  const renderElement =
    location.pathname !== "/" ? styles.menu_on : styles.menu_off;
  console.log(renderElement);
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.block}>
            <Burger />
          </div>
          <div className={styles.block}>
            <Logo />
            <Cabinet />
          </div>
          <div className={renderElement}>
            <Menu />
          </div>
          <div className={styles.block}>
            <About />
            <Promo />
            <Shop />
          </div>
        </nav>
      </header>
    </>
  );
}
