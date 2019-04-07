import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {
    toggleMenu: false
  };
  toggleMenuState = () => {
    this.setState({
      toggleMenu: !this.state.toggleMenu
    });
  };
  render() {
    return (
      <React.Fragment>
        <div>
          <div
            className={this.state.toggleMenu ? "phone-background-navbar" : ""}
          >
            <div
              className={
                this.state.toggleMenu
                  ? "ui left demo vertical inverted labeled icon sidebar menu overlay visible mobile only slideIn"
                  : "ui left demo vertical inverted labeled icon sidebar menu overlay visible mobile only slideOut"
              }
              style={{}}
            >
              <Link to="/about" className="item">
                About
              </Link>
              <Link to="/what-we-can-do" className="item">
                What We Can Do
              </Link>
              <Link to="/about" className="item">
                News & Events
              </Link>
              <Link to="/about" className="item">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="navbar-menu">
            <div className="ui secondary container menu mobile only mobile-navbar">
              <div className="menu left">
                <Link to="/home">
                  <img
                    src="/images/logo/sw-green.png"
                    className="logonav"
                    alt="SmallWorld Venture"
                  />
                </Link>
              </div>
              <div className="menu right asize">
                <img
                  src={
                    this.state.toggleMenu
                      ? "/images/close.png"
                      : "/images/menu.svg"
                  }
                  className="menu-icons"
                  height="30px"
                  alt=""
                  onClick={this.toggleMenuState}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="hd sw-navbar mobile hidden">
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
              <NavLink
                to="/about"
                activeClassName="item active"
                className="item"
              >
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
      </React.Fragment>
    );
  }
}

export default Navbar;
