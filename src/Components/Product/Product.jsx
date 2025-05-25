import React from "react";
import ProductItems from "./ProductItems";
import { ProductItemsList } from "../../data/Data";
import "./Product.css";
function Product() {
  return (
    <>
      <div className="Product-Container">
        {ProductItemsList.map((Product) => {
          return <ProductItems key={Product.id} Product={Product} />;
        })}
      </div>
    </>
  );
}

export default Product;
