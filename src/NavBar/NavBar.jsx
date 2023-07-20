import React from "react";
import "./NavBar.css";
import logo from "../images/logo.png";
import cartIcon from "../images/cartIcon.png";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">
          <img src={logo} alt="E-Commerce Logo" height="40" />
        </a>
      </div>
      <div className="search-box">
        <input
          className="search-input"
          type="text"
          placeholder="Search products"
        />
      </div>

      <ul className="navbar-menu">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/products">Products</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <button className="SignIn">SignUp</button>
      <div className="cart">
        <img src={cartIcon} alt="Cart" height="30" />
        <span className="cart-items-count">0</span>
      </div>
    </nav>
  );
}

export default NavBar;
