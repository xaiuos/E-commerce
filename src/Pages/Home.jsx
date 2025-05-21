import React from "react";
import NavBar from "../Components/NavBar";
import Announcement from "../Components/Announcement";
import Slider from "../Components/Slider";
function Home() {
  return (
    <>
      <Announcement />
      <NavBar />
      <Slider />
    </>
  );
}

export default Home;
