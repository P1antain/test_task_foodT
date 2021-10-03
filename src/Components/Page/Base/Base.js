import React from "react";
import styles from "./Base.module.css";
import ElementSet from "./ElementSet/ElementSet";
import ElementRol from "./ElementRol/ElementRol";
import ElementWok from "./ElementWok/ElementWok";
import ElementSoup from "./ElementSoup/ElementSoup";
import ElementOther from "./ElementOther/ElementOther";
import Mobile from "./Mobile/Mobile";

export default function Base() {
  return (
    <>
      <div className={styles.base}>
        <div className={styles.browsers}>
          <ElementSet />
        </div>
        <div className={styles.browsers}>
          <ElementRol />
        </div>
        <div className={styles.browsers}>
          <ElementWok />
        </div>
        <div className={styles.browsers}>
          <div className={styles.browsersBlock}>
            <ElementSoup />
          </div>
          <div className={styles.browsersBlock}>
            <ElementOther />
          </div>
        </div>
      </div>
      <div className={styles.baseMobile}>
        <Mobile />
      </div>
    </>
  );
}
