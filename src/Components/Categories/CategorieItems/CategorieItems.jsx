import React from "react";
import styles from "./CategorieItems.module.css";
const CategorieItems = ({ CateItems }) => {
  return (
    <>
      <div
        className={styles.CategorieBackground}
        style={{ backgroundImage: `url(${CateItems.image})` }}
      >
        <h1 className={styles.Title}> {CateItems.title} </h1>
        <button className={styles.CategorieButton}>SHOP NOW</button>
      </div>
    </>
  );
};

export default CategorieItems;
