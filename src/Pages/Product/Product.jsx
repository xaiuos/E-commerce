import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import Announcement from "../../Components/Announcement/Announcement";
import Footer from "../../Components/Footer/Footer";
import style from "./Product.module.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
const SPFilterColor = ({ color }) => {
  return (
    <div
      className={style.SPFilterColor}
      style={{ backgroundColor: color }}
    ></div>
  );
};
const Product = () => {
  return (
    <>
      <div className={style.SPContainer}></div>
      <NavBar></NavBar>
      <Announcement></Announcement>
      <div className={style.SPWrapper}>
        <div className={style.SPIMGContainer}>
          <div className={style.SPIMG}>
            <img
              src="https://i5.walmartimages.com/seo/Gildan-Heavy-Cotton-T-Shirt-5000-Violet-Size-M_2d7b52f4-26fd-4fe7-af07-1a10df07411b_1.a9e710e05a65dc21fd0ef707f319672f.jpeg?odnHeight=573&odnWidth=573&odnBg=FFFFFF"
              alt=""
              srcset=""
            />
          </div>
        </div>
        <div className={style.SPInfoWrapper}>
          <h1 className={style.SPTitle}>T-Shirt</h1>
          <p className={style.SPDesc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
            eaque tempora amet aspernatur omnis distinctio, nulla facilis
            officia. Voluptatibus a recusandae dolores qui corporis repudiandae
            facilis, repellendus possimus nobis veniam!
          </p>
          <span className={style.SPPrice}>20$</span>
          <div className={style.SPFilterContainer}>
            <div className={style.SPFilter}>
              <div className={style.SPFilterTitle}>Color</div>
              <SPFilterColor color="red" />
              <SPFilterColor color="pink" />
              <SPFilterColor color="violet" />
            </div>
            <div className={style.SPFilter}>
              <div className={style.SPFilterTitle}>Size</div>
              <select className={style.SPFilterSizeOptionContainer}>
                <option className={style.SPFilterSize}>XS</option>
                <option className={style.SPFilterSize}>S</option>
                <option className={style.SPFilterSize}>M</option>
                <option className={style.SPFilterSize}>L</option>
              </select>
            </div>
          </div>
          <div className={style.SPAddWrapper}>
            <div className={style.SPAddWrapper}>
              <RemoveIcon />
              <div className={style.Ammount}>1</div>
              <AddIcon />
            </div>
            <button className={style.AddButton}>Add to Cart</button>
          </div>
        </div>
      </div>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </>
  );
};

export default Product;
