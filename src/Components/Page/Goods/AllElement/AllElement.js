import React from "react";
import styles from "./AllElement.module.css";
export default function AllElement({element}) {
  const {name, about, weight, amount, image, person, price} = element;
  return (
    <>
      <li className={styles.element}>
        <img
          src={image}
          alt="cushi"
          className={styles.image}
        />
        <div className={styles.wrapper}>
          <div className={styles.head}>
            <h2 className={styles.name}>{name}</h2>
            <p className={styles.about}>{about}</p>
            <span className={styles.weight}>{weight}</span>
            <span className={styles.amount}>{amount} шт.</span>
          </div>
          <div className={styles.block}><span className={styles.person}>{person}</span></div>
          <div className={styles.end}>
            <span className={styles.price}>{price}Р</span>
            <button className={styles.btn}>В КОРЗИНУ</button>
          </div>
        </div>
      </li>
      {/*<div className={styles.element}>*/}
      {/*  <img*/}
      {/*      src={"https://clipart-best.com/img/sushi/sushi-clip-art-5.png"}*/}
      {/*      alt="cushi"*/}
      {/*      className={styles.image}*/}
      {/*  />*/}
      {/*  <div className={styles.wrapper}>*/}
      {/*    <div className={styles.head}>*/}
      {/*      <h2 className={styles.name}>Сет токио</h2>*/}
      {/*      <p className={styles.about}>Какой то текст</p>*/}
      {/*      <span className={styles.weight}>637 гр</span>*/}
      {/*      <span className={styles.amount}>25 шт.</span>*/}
      {/*    </div>*/}
      {/*    <div className={styles.block}><span className={styles.person}>person</span></div>*/}
      {/*    <div className={styles.end}>*/}
      {/*      <span className={styles.price}>276Р</span>*/}
      {/*      <button className={styles.btn}>В КОРЗИНУ</button>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </>
  );
}
