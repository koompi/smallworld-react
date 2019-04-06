import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="hd sw-navbar">
      <div className="ui secondary container menu">
        <div className="menu left">
          <NavLink to="/home">
            <img
              src="/images/logo/sw-green.png"
              className="logonav"
              alt="SmallWorld"
            />
          </NavLink>
        </div>
        <div className="menu right asize">
          <NavLink to="/about" activeClassName="item active" className="item">
            About
          </NavLink>
          <NavLink
            to="/what-we-can-do"
            activeClassName="item active"
            className="item"
          >
            What We Can Do
          </NavLink>
          <NavLink
            to="/news-and-events"
            activeClassName="item active"
            className="item"
          >
            News & Events
          </NavLink>
          <NavLink
            to="/contact-us"
            activeClassName="item active"
            className="item"
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
