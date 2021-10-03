import React from "react";
import styles from "./ElementOther.module.css";
import sushi from "../../pageImages/sishi.png";
import { NavLink } from "react-router-dom";

export default function ElementOther() {
  return (
    <>
      <NavLink to={"/41"} className={styles.rol}>
        <div className={styles.wrapper}>
          <img src={sushi} alt="sushi" className={styles.img} />
        </div>
        <span className={styles.text}>темпура</span>
      </NavLink>
      <NavLink to={"/41"} className={styles.rol}>
        <div className={styles.wrappers}>
          <img src={sushi} alt="sushi" className={styles.img} />
        </div>
        <span className={styles.text}>напитки</span>
      </NavLink>
    </>
  );
}
