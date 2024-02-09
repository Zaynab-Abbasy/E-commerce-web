// Footer.js

import React from "react";
import "./foot.css";

const Footer = () => {
  return (
    <footer className="fixed-bottom" id="foot">
      <div id="msg">
        <p>Create Lasting Memories in Spaces Adorned with Our Signature Furniture!!!</p>
      </div>
      <div className="row align-items-start">
        <div className="col-lg-2 logo-container">
          {/* Logo */}
          <img
            className="logo"
            src={require("../images/logo.png")}
            alt="Logo"
            
          />
        </div>

        <div className="col-lg-5">
          {/* Company Information */}
          <div className="title">The Company</div>
          <ul>
            <li>
              <a href="#" title="About us" className="ab">
                About Us
              </a>
            </li>
            <li>
              <a href="#" title="Help" className="ab">
                Help
              </a>
            </li>
            <li>
              <a href="#" title="Blog" className="ab">
                Blog
              </a>
            </li>
            <li>
              <a href="#" title="Privacy policy" className="ab">
                Privacy policy
              </a>
            </li>
          </ul>
        </div>

        <div className="col-lg-5">
          {/* Information */}
          <div className="title">Information</div>
          <ul>
            <li>
              <a href="#" title="Terms" className="ab">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" title="FAQs" className="ab">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" title="Contact Us" className="ab">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" title="Store Locator" className="ab">
                Store Locator
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
