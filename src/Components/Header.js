import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="marquee-container">
        <p className="marquee-text">
          Free shipping nationwide
        </p>
      </div>

      <nav className="navbar navbar-expand-lg  fixed">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dining
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Tables
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Chairs
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Cabinets
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Bedroom
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Beds
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Side tables
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Dressers
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Chest of Drawers
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Living
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Sofa
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Coffee Tables
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Mirrors
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Console
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Decor
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Mirrors
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Vases
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Wall Art
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <FontAwesomeIcon icon={faSearch} className="icon" />
        <FontAwesomeIcon icon={faUser} className="icon" />
        <FontAwesomeIcon icon={faHeart} className="icon" />
        <FontAwesomeIcon icon={faCartShopping} className="icon" />
      </nav>
    </div>
  );
};

export default Header;
