import React from "react";
import styles from "./ElementSet.module.css";
import { NavLink } from "react-router-dom";
import setImgAlt from "./sets_desktop.png";

export default function ElementSet() {
  return (
    <>
      <NavLink to={"goods/sets"} className={styles.set}>
        <div className={styles.wrapper}>
          <img src={setImgAlt} alt="" className={styles.img} />
        </div>
        <span className={styles.text}>сеты</span>
      </NavLink>
    </>
  );
}
