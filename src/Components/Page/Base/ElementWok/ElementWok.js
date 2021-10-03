import React from "react";
import styles from "./ElementWok.module.css";
import { NavLink } from "react-router-dom";
import setImg from "../../pageImages/set.png";

export default function ElementWok() {
  return (
    <>
      <NavLink to={"/41"} className={styles.set}>
        <div className={styles.block}>
          <span className={styles.text}>Вок коструктор</span>
          <p className={styles.textHelp}>собери свой</p>
        </div>

        <div className={styles.wrapper}>
          <img src={setImg} alt="" className={styles.img} />
        </div>
      </NavLink>
    </>
  );
}
