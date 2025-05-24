import React from "react";
import NavBar from "../Components/NavBar";
import Announcement from "../Components/Announcement";
import Slider from "../Components/Slider";
import Categories from "../Components/Categories/Categories";
function Home() {
  return (
    <>
      <Announcement />
      <NavBar />
      <Slider />
      <Categories />
    </>
  );
}

export default Home;
