import React from "react";
import styles from "./Footer.module.css";
import Social from "./Social/Social";
import FooterLinks from "./FooterLinks/FooterLinks";
import Issuer from "./Issuer/Issuer";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.block}>
          <Social />
        </div>
        <div className={styles.block}>
          <FooterLinks />
        </div>
        <div className={styles.block}>
          <Issuer />
        </div>
      </footer>
    </>
  );
}
