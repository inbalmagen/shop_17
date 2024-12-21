import React from "react";

function Navbar() {
  return (
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle"
            data-toggle="collapse"
            data-target="#myNavbar"
          >
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="http://www.google.com">
            Logo
          </a>
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
          <ul class="nav navbar-nav">
            <li class="active">
              <a href="http://www.google.com">Home</a>
            </li>
            <li>
              <a href="http://www.google.com">Products</a>
            </li>
            <li>
              <a href="http://www.google.com">Deals</a>
            </li>
            <li>
              <a href="http://www.google.com">Stores</a>
            </li>
            <li>
              <a href="http://www.google.com">Contact</a>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li>
              <a href="http://www.google.com">
                <span class="glyphicon glyphicon-user"></span> Your Account
              </a>
            </li>
            <li>
              <a href="http://www.google.com">
                <span class="glyphicon glyphicon-shopping-cart"></span> Cart
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
