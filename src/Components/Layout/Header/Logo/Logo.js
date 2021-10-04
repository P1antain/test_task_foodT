import React from "react";
import logo from "./logo.png";
import styles from "./Logo.module.css";
import { useHistory } from "react-router-dom";

export default function Logo() {
  const history = useHistory();
  return (
    <>
      <img
        src={logo}
        alt={"logo"}
        className={styles.logo}
        onClick={() => {
          history.push("/");
        }}
      />
    </>
  );
}
