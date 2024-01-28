// Footer.js

import React from "react";
import "./foot.css";

const Footer = () => {
  return (
    <footer className="fixed-bottom" id="foot">
      <div className="container-fluid" id="msg">
        <p>
          Create Lasting Memories in Spaces Adorned with Our Signature
          Furniture!!!
        </p>
      </div>
      <div className="row align-items-center">
        <div className="col-lg-2">
          {/* Logo */}
          <img
            src={require("../images/logo.png")}
            alt="Logo"
            height={150}
            width={150}
          />
        </div>

        <div className="col-lg-3">
          {/* Company Information */}
          <div className="widget">
            <div className="thb-widget-title">The Company</div>
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
        </div>

        <div className="col-lg-3">
          {/* Information */}
          <div className="widget">
            <div className="thb-widget-title">Information</div>
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

        <div className="col-lg-2">
          {/* Expanded Newsletter */}
          <div className="title">Let's Stay Connected</div>
          <div className="newsletter" style={{ width: "400px" }}>
            <p>
              As a valued member of Zeenat Interiors, we're excited to offer you
              exclusive discounts. Don't miss out on the chance to snag premium
              furniture at unbeatable prices!
            </p>
            <form>
              <div className="form-row">
                <div className="col-10">
                  <div className="form-group d-flex">
                    <input
                      type="email"
                      className="form-control form-control-sm"
                      id="email"
                      placeholder="Your Email"
                    />
                    <button type="submit" className="bn">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
