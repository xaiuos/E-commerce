import React from "react";
import NavBar from "../Components/NavBar";
import NewsLetter from "../Components/NewsLetter";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import "./Product.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
const SPFilterColor = ({ color }) => {
  return (
    <div className="SPFilterColor" style={{ backgroundColor: color }}></div>
  );
};
const Product = () => {
  return (
    <>
      <div className="SPContainer"></div>
      <NavBar></NavBar>
      <Announcement></Announcement>
      <div className="SPWrapper">
        <div className="SPIMGContainer">
          <div className="SPIMG">IMG</div>
        </div>
        <div className="SPInfoWrapper">
          <h1 className="SPTitle">T-Shirt</h1>
          <p className="SPDesc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
            eaque tempora amet aspernatur omnis distinctio, nulla facilis
            officia. Voluptatibus a recusandae dolores qui corporis repudiandae
            facilis, repellendus possimus nobis veniam!
          </p>
          <span className="SPPrice">20$</span>
          <div className="SPFilterContainer">
            <div className="SPFilter">
              <div className="SPFilterTitle">Color</div>
              <SPFilterColor color="red" />
              <SPFilterColor color="pink" />
              <SPFilterColor color="violet" />
            </div>
            <div className="SPFilter">
              <div className="SPFilterTitle">Size</div>
              <select className="SPFilterSizeOptionContainer">
                <option className="SPFilterSize">XS</option>
                <option className="SPFilterSize">S</option>
                <option className="SPFilterSize">M</option>
                <option className="SPFilterSize">L</option>
              </select>
            </div>
          </div>
          <div className="SPAddWrapper">
            <div className="SPAddWrapper">
              <RemoveIcon />
              <div className="Ammount">1</div>
              <AddIcon />
            </div>
            <button className="AddButton">Add to Cart</button>
          </div>
        </div>
      </div>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </>
  );
};

export default Product;
