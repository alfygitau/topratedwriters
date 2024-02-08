import React from "react";
import "./Navigation.css";
import { NavLink, useNavigate } from "react-router-dom";
import SettingsPhoneIcon from "@mui/icons-material/SettingsPhone";

const Navigation = () => {
  const navigateTo = useNavigate();

  return (
    <div className="main-navigation-container">
      <div className="main-navigation">
        <div className="nav-content">
          <div className="logo">
            <div className="navbar-image">
              <img
                src="https://icon-library.com/images/security-icon-png/security-icon-png-2.jpg"
                alt="logo"
              />
            </div>
            <span>Deluxe Essays</span>
          </div>
          <div className="links">
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/about-us">About Us</NavLink>
            <NavLink to="/reviews">Reviews</NavLink>
            <NavLink to="/pricing">Pricing</NavLink>
            <NavLink to="/sample-papers">Samples</NavLink>
            <NavLink to="/contact-us">Contact Us</NavLink>
            <NavLink to="/faq">FAQ</NavLink>
          </div>
          <div className="auth">
            <div>
              <SettingsPhoneIcon />
            </div>
            <a className="button-order">Order Now</a>
            <a className="button-login" href="/login">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
