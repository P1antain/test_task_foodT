import React from "react";
import styles from "./Social.module.css";
import { ReactComponent as Icon } from "../../../../images/soc.svg";
import { ReactComponent as Location } from "./pin.svg";
import { NavLink } from "react-router-dom";

export default function Social() {
  return (
    <>
      <Icon className={styles.icon} />
      <Icon className={styles.icon} />
      <Icon className={styles.icon} />
      <Icon className={styles.icon} />
      <Icon className={styles.icon} />
      <NavLink to={"/112"} className={styles.link}>
        <Location className={styles.map} />
        <span className={styles.text}>Ближайшие СушиСуши</span>
      </NavLink>
    </>
  );
}
