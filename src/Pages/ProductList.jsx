import React from "react";
import Announcement from "../Components/Announcement";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Product from "../Components/Product/Product";
import "./ProductList.css";
import NewsLetter from "../Components/NewsLetter";
const ProductList = () => {
  return (
    <>
      <Announcement />
      <NavBar />
      <h1 className="PLT">Dresses</h1>
      <div className="FilterContainer">
        <div className="Filter">
          <div className="FilterText">Filter Products:</div>
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
        <div className="Filter">
          <div className="FilterText">Sort Products:</div>
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
