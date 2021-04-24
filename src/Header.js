import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class Header extends React.Component {
  render() {
    return (
      <>
      {/* <div class="nav-wrapper">
  <div class="grad-bar"></div>
  <nav class="navbar">
    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/Bluestar_%28bus_company%29_logo.svg/1280px-Bluestar_%28bus_company%29_logo.svg.png" alt="Company Logo"/>
    <div class="menu-toggle" id="mobile-menu">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </div>
    <ul class="nav no-search">
      <li class="nav-item"><a href="#">Home</a></li>
      <li class="nav-item"><a href="#">About</a></li>
      <li class="nav-item"><a href="#">Work</a></li>
      <li class="nav-item"><a href="#">Careers</a></li>
      <li class="nav-item"><a href="#">Contact Us</a></li>
      <i class="fas fa-search" id="search-icon"></i>
      <input class="search-input" type="text" placeholder="Search.."/>
    </ul>
  </nav>
  </div>
  */}
    <header>
    <div id="header-inner">
      <a href="#" id="logo"></a>
      <nav>
        <a href="#" id="menu-icon"></a>
          <ul>
             <li><a href="home" class="current">Home</a></li>
             <li><a href="skill">Skills</a></li>
             <li><a href="port">Portfolio</a></li>
             <li><a href="#">Our team</a></li>
             <li><a href="contact">Contact</a></li>
          </ul>
      </nav>
    </div>
  </header> 



          </>
    );
  }
}
