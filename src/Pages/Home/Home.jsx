import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Announcement from "../../Components/Announcement/Announcement";
import Slider from "../../Components/Slider/Slider";
import Categories from "../../Components/Categories/Categories/Categories";
import Product from "../../Components/Product/Product/Product";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import Footer from "../../Components/Footer/Footer";

function Home() {
  return (
    <>
      <Announcement />
      <NavBar />
      <Slider />
      <Categories />
      <Product />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default Home;
