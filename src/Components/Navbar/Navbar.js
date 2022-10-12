import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav class=" navbar navbar-expand-lg bg-light">
      <div class="container">
        <Link className="navbar-brand text-primary fw-bold" href="#">
          <h1>The Winning Team.</h1>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <NavLink className="nav-link fw-bold ms-5" to="home">
              Home
            </NavLink>
            <NavLink className="nav-link  fw-bold ms-5" to="statictics">
              Statistics
            </NavLink>
            <NavLink className="nav-link fw-bold ms-5" to="block">
              Block
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
