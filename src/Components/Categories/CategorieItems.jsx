import React from "react";
import "./CategorieItems.css";
const CategorieItems = ({ CateItems }) => {
  return (
    <>
      <div
        className="Categorie-Background"
        style={{ backgroundImage: `url(${CateItems.image})` }}
      >
        <h1 className="Title">{CateItems.title}</h1>
        <button>SHOP NOW</button>
      </div>
    </>
  );
};

export default CategorieItems;
