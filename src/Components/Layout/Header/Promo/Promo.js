import React from "react";
import styles from "./Promo.module.css";
import { NavLink } from "react-router-dom";

export default function Promo() {
  return (
    <>
      <div className={styles.wrapper}>
        <button className={styles.promo}>
          <div className={styles.block}>
            <NavLink to={"#"} className={styles.link}>
              Икринки
            </NavLink>
            <div className={styles.bol} />
          </div>
        </button>
        <span className={styles.help}>
          Это кэшбэк от СушиСуши, которым можно оплачивать заказы
        </span>
      </div>
    </>
  );
}
