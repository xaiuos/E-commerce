import React from "react";
import ProductItems from "../ProductItems/ProductItems";
import { ProductItemsList } from "../../../data/Data";
import style from "./Product.module.css";
function Product() {
  return (
    <>
      <div className={style.ProductContainer}>
        {ProductItemsList.map((Product) => {
          return <ProductItems key={Product.id} Product={Product} />;
        })}
      </div>
    </>
  );
}

export default Product;
