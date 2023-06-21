import React from "react";
import Cart from "./assets/shopping_cart.svg";
import "./navbar.css";

function NavBar() {
  return (
    <div className="navbar">
      <div className="nav-options">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
      <div className="icon-holder">
        <div className="notif"></div>
        <img src={Cart} alt="shopping_cart" />
      </div>
    </div>
  );
}

export default NavBar;
