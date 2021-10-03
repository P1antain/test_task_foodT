import React from "react";
import styles from "./Mobile.module.css";
import sushiImg from "../../pageImages/sishi.png";
import { NavLink } from "react-router-dom";

export default function Mobile() {
  return (
    <>
      <NavLink to={"/211"} className={styles.link}>
        <img src={sushiImg} alt="sushi" className={styles.img} />
        <span className={styles.text}>роллы</span>
      </NavLink>
      <NavLink to={"goods/sets"} className={styles.link}>
        <img src={sushiImg} alt="sushi" className={styles.img} />
        <span className={styles.text}>сеты</span>
      </NavLink>
      <NavLink to={"/213"} className={styles.link}>
        <img src={sushiImg} alt="sushi" className={styles.img} />
        <span className={styles.text}>суши</span>
      </NavLink>
      <NavLink to={"/214"} className={styles.link}>
        <img src={sushiImg} alt="sushi" className={styles.img} />
        <span className={styles.text}>воки</span>
      </NavLink>
      <NavLink to={"/215"} className={styles.link}>
        <img src={sushiImg} alt="sushi" className={styles.img} />
        <span className={styles.text}>запеченные роллы</span>
      </NavLink>
    </>
  );
}
