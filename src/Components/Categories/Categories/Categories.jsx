import React from "react";
import CategorieItems from "../CategorieItems/CategorieItems.jsx";
import { CategorieData } from "../../../data/Data";
import styles from "../Categories/Categories.module.css";
export const Categories = () => {
  return (
    <>
      <div className={styles.Categorie}>
        {CategorieData.map((CateItems) => {
          return <CategorieItems key={CateItems.id} CateItems={CateItems} />;
        })}
      </div>
    </>
  );
};

export default Categories;
