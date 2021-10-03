import React from "react";
import styles from "./Issuer.module.css";
import visa from "./visa.svg";
import google from "../../../../images/google-play-badge.png";
import { NavLink } from "react-router-dom";

export default function Issuer() {
  return (
    <>
      <img src={visa} alt="#" className={styles.issuers} />
      <img src={visa} alt="#" className={styles.issuers} />
      <NavLink to={"/21"} className={styles.link}>
        <img src={google} alt="#" className={styles.img} />
      </NavLink>
      <NavLink to={"/22"} className={styles.link}>
        <img src={google} alt="#" className={styles.img} />
      </NavLink>
    </>
  );
}
