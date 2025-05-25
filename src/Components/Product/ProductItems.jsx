import React from "react";
import "./ProductItems.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
const ProductItems = ({ Product }) => {
  return (
    <>
      <div className="Product-Image-Container">
        <div className="Circle"></div>
        <img src={Product.image} alt="" />
        <div className="Icons">
          <div className="ShoppingCartIcon">
            <ShoppingCartOutlinedIcon />
          </div>
          <div className="SearchIcon">
            <SearchOutlinedIcon />
          </div>
          <div className="HearIcon">
            <FavoriteBorderOutlinedIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItems;
