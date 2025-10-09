import React from "react";
import style from "./ProductItems.module.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
const ProductItems = ({ Product }) => {
  return (
    <>
      <div className={style.ProductImageContainer}>
        <div className={style.Circle}></div>
        <img src={Product.image} alt="" />
        <div className={style.Icons}>
          <div className={style.ShoppingCartIcon}>
            <ShoppingCartOutlinedIcon />
          </div>
          <div className={style.SearchIcon}>
            <SearchOutlinedIcon />
          </div>
          <div className={style.HearIcon}>
            <FavoriteBorderOutlinedIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItems;
