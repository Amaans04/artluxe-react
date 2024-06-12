import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import person from "../components/assets/download.png";

const Navbar = () => {

    const [menu,setMenu] = useState("shop");
  return (
    <nav className="navbar">
      <div className="nav-links">

        {/* SHOP Dropdown */}
        <div className="dropdown">
          <button className="dropbtn">SHOP</button>
          <div className="dropdown-content discover-dropdown">
            <div className="main-links">
              <li><a href="#">Shop All</a></li>
              <li><a href="#">New Arrivals</a></li>
              <li><a href="#">Best Sellers</a></li>
            </div>
            <div className="side-part">
              <h3 onClick={()=>{setMenu("holdalls")}}><Link to='/holdalls'>HOLDALLS</Link></h3>
              <li><a href="#">Weekender</a></li>
              <li><a href="#">Commuter</a></li>
              <li><a href="#">Suit Carrier Holdall</a></li>
              <li><a href="#">Cargo Range</a></li>
              <li><a href="#">The Trifold</a></li>
            </div>
            <div className="side-part">
              <h3 onClick={()=>{setMenu("dailycarry")}}><Link to='/dailycarry'>DAILY CARRY</Link></h3>
              <li><a href="#">Backpacks</a></li>
              <li><a href="#">Briefcases</a></li>
              <li><a href="#">Folios</a></li>
              <li><a href="#">Totes</a></li>
            </div>
            <div className="side-part">
              <h3 onClick={()=>{setMenu("accessories")}}> <Link to='/accessories'>ACCESSORIES</Link></h3>
              <li><a href="#">Watch Rolls</a></li>
              <li><a href="#">Wash Bags</a></li>
              <li><a href="#">Small Leather Goods</a></li>
              <li><a href="#">Desk Mats</a></li>
            </div>
          </div>
        </div>

        {/* DISCOVER Dropdown */}
        <div className="dropdown">
          <button className="dropbtn">DISCOVER</button>
          <div className="dropdown-content discover-dropdown">
            <div className="main-links">
              <li><a href="#">Our Company</a></li>
              <li><a href="#">Developers Side</a></li>
              <li><a href="#">Details</a></li>
              <li><a href="#">Extra</a></li>
            </div>
          </div>
        </div>

      </div>

      {/* Logo */}
      {/* <div className="logo" onClick={()=>{setMenu("shop")}} > <Link to='/'>ART LUXE</Link> </div>
       */}
       <div className="logo">ART LUXE</div>

      {/* Navigation Menu */}
      <div className="nav-menu">
        <div className="searchbox">
          <input type="text" placeholder="Search.." />
          <a href="#">
            <i className="fas fa-search"></i>
          </a>
        </div>

        <div className="currency-selector">
          <button>INR (₹)</button>
          <i className="fas fa-caret-down"></i>
        </div>

        <div className="nav-login-cart">
          <Link to='/login'><button>Login</button></Link>
          <Link to='/cart'><img src={person} alt="person icon" /></Link>
          
          <div className="nav-cart-count">0</div>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
