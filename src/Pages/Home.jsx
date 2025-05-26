import React from "react";
import NavBar from "../Components/NavBar";
import Announcement from "../Components/Announcement";
import Slider from "../Components/Slider";
import Categories from "../Components/Categories/Categories";
import Product from "../Components/Product/Product";
import NewsLetter from "../Components/NewsLetter";
import Footer from "../Components/Footer";

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
