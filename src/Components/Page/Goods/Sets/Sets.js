import React from "react";
import styles from "./Sets.module.css";
import jsonData from "../../../../Utils/set.json";
import AllElement from "../AllElement/AllElement";
export default function Sets() {
  const pasingDate = jsonData.nomination.element;
  const nameCategories = jsonData.nomination.name;

  return (
    <>
        <h1 className={styles.header}>{nameCategories}</h1>
      <ul className={styles.sets}>
        {pasingDate.map((elem) => {
          return (
            <AllElement
              element={elem}
              key={elem.id}
            />
          );
        })}
      </ul>
    </>
  );
}
