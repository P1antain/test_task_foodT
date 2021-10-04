import React from "react";
import styles from "./ElementRol.module.css";
import { NavLink } from "react-router-dom";
import sushi from "../../pageImages/sishi.png";
import sushiImg from './rolls_desktop.png'
import sushiImg1 from './sushi_desktop.png'
import sushiImg2 from './fried_rolls_desktop.png'
import sushiImg3 from './baked_rolls_desktop.png'
export default function ElementRol() {
  return (
    <>
      <NavLink to={"/41"} className={styles.rol}>
        <div className={styles.wrapper}>
          <img src={sushiImg} alt="sushi" className={styles.img} />
        </div>
        <span className={styles.text}>Роллы</span>
      </NavLink>

      <NavLink to={"/42"} className={styles.rol}>
        <div className={styles.wrapper}>
          <img src={sushiImg1} alt="sushi" className={styles.img} />
        </div>
        <span className={styles.text}>Суши</span>
      </NavLink>

      <NavLink to={"/43"} className={styles.rol}>
        <div className={styles.wrapper}>
          <img src={sushiImg2} alt="sushi" className={styles.img} />
        </div>
        <span className={styles.text}>Жаренные роллы</span>
      </NavLink>

      <NavLink to={"/44"} className={styles.rol}>
        <div className={styles.wrapper}>
          <img src={sushiImg3} alt="sushi" className={styles.img} />
        </div>
        <span className={styles.text}>Запеченные роллы</span>
      </NavLink>
    </>
  );
}
