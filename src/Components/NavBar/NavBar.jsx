import React from "react";
import style from "./NavBar.module.css";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
const NavBar = () => {
  return (
    <div className={style.NavBar}>
      <div className={style.FirstSide}>
        <div className={style.Language}>EN</div>
        <div className={style.SearchContainer}>
          <input></input>
          <SearchIcon />
        </div>
      </div>

      <div className={style.SecondSide}>XAI.</div>
      <div className={style.ThirdSide}>
        <div>Register</div>
        <div>Login</div>
        <div>
          <Badge badgeContent={4} color="secondary">
            <ShoppingCartOutlinedIcon color="white" />
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
