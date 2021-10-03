import React from "react";
import styles from "./ElementRol.module.css";
import { NavLink } from "react-router-dom";
import sushi from "../../pageImages/sishi.png";
export default function ElementRol() {
  return (
    <>
      <NavLink to={"/41"} className={styles.rol}>
        <div className={styles.wrapper}>
          <img src={sushi} alt="sushi" className={styles.img} />
        </div>
        <span className={styles.text}>Роллы</span>
      </NavLink>

      <NavLink to={"/42"} className={styles.rol}>
        <div className={styles.wrapper}>
          <img src={sushi} alt="sushi" className={styles.img} />
        </div>
        <span className={styles.text}>Суши</span>
      </NavLink>

      <NavLink to={"/43"} className={styles.rol}>
        <div className={styles.wrapper}>
          <img src={sushi} alt="sushi" className={styles.img} />
        </div>
        <span className={styles.text}>Жаренные роллы</span>
      </NavLink>

      <NavLink to={"/44"} className={styles.rol}>
        <div className={styles.wrapper}>
          <img src={sushi} alt="sushi" className={styles.img} />
        </div>
        <span className={styles.text}>Запеченные роллы</span>
      </NavLink>
    </>
  );
}
