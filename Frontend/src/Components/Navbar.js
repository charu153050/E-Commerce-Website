import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <div className="">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand">
              <img
                src={require("./Assets/1.png")}
                alt=""
                width="30"
                height="24"
                className="d-inline-block align-text-top"
              />
              Cosmetics World
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link " aria-current="page">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contactus" className="nav-link">
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/aboutus" className="nav-link">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/addproduct" className="nav-link">
                    Add Product
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Log Out</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
