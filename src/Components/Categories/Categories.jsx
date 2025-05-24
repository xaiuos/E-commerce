import React from "react";
import CategorieItems from "../Categories/CategorieItems";
import { CategorieData } from "../../data/Data";
import "./Categories.css";
export const Categories = () => {
  return (
    <>
      <div className="Categorie">
        {CategorieData.map((CateItems) => {
          return <CategorieItems key={CateItems.id} CateItems={CateItems} />;
        })}
      </div>
    </>
  );
};

export default Categories;
