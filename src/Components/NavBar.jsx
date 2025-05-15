import React from "react";
import "./NavBar.css";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="FirstSide">
        <div className="Language">EN</div>
        <div className="SearchContainer">
          <input></input>
          <SearchIcon />
        </div>
      </div>

      <div className="SecondSide">XAI.</div>
      <div className="ThirdSide">
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
