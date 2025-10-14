import React from "react";
import Announcement from "../../Components/Announcement/Announcement";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import Product from "../../Components/Product/Product/Product";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import style from "./ProductList.module.css";
const ProductList = () => {
  return (
    <>
      <Announcement />
      <NavBar />
      <h1 className={style.PLT}>Dresses</h1>
      <div className={style.FilterContainer}>
        <div className={style.Filter}>
          <div className={style.FilterText}>Filter :</div>
          <select>
            <option value="White">White</option>
            <option value="Black">Black</option>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
          </select>
          <select name="size">
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </div>
        <div className={style.Filter}>
          <div className={style.FilterText}>Sort :</div>
          <select name="sort">
            <option value="Newest">Newest</option>
            <option value="asc">Price (asc)</option>
            <option value="desc">Price (desc)</option>
          </select>
        </div>
      </div>
      <Product />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default ProductList;
