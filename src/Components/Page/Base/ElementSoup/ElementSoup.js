import React from "react";
import styles from "./ElementSoup.module.css";
import { NavLink } from "react-router-dom";
import setImg from "../../pageImages/set.png";

export default function ElementSoup() {
  return (
    <>
      <NavLink to={"/31"} className={styles.set}>
        <div className={styles.wrapper}>
          <img src={setImg} alt="" className={styles.img} />
        </div>
        <span className={styles.text}>Супы</span>
      </NavLink>
    </>
  );
}
