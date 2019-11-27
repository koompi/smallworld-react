import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import { Link } from "react-router-dom"

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggleMenu: false
    }
  }

  toggleMenuState = () => {
    this.setState({
      toggleMenu: !this.state.toggleMenu
    })
  }

  render() {
    const { toggleMenu } = this.state
    return (
      <>
        <div>
          <div className={toggleMenu ? "phone-background-navbar" : ""}>
            <div
              className={
                toggleMenu
                  ? "ui left demo vertical inverted labeled icon sidebar menu overlay visible mobile only slideIn"
                  : "ui left demo vertical inverted labeled icon sidebar menu overlay visible mobile only slideOut"
              }
              style={{}}
            >
              <Link to="/about-us" className="item">
                About
              </Link>
              <Link to="/what-we-do" className="item">
                Works
              </Link>
              <Link to="/news-and-events" className="item">
                News
              </Link>
              <Link to="/contact-us" className="item">
                Contact
              </Link>
            </div>
          </div>
          <div className="navbar-menu">
            <div className="ui secondary container menu mobile only mobile-navbar">
              <div className="menu left">
                <Link to="/">
                  <img
                    src="/images/logo/sw-green.png"
                    className="logonav"
                    alt="SmallWorld Venture"
                  />
                </Link>
              </div>
              <div className="menu right asize">
                <img
                  src={toggleMenu ? "/images/close.png" : "/images/menu.svg"}
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
              <NavLink to="/">
                <img
                  src="/images/logo/sw-green.png"
                  className="logonav"
                  alt="SmallWorld"
                />
              </NavLink>
            </div>
            <div className="menu right asize">
              <NavLink to="/about-us" activeClassName="item active" className="item">
                About
              </NavLink>
              <NavLink
                to="/what-we-do"
                activeClassName="item active"
                className="item"
              >
                Works
              </NavLink>
              <NavLink
                to="/news-and-events"
                activeClassName="item active"
                className="item"
              >
                News
              </NavLink>
              <NavLink
                to="/contact-us"
                activeClassName="item active"
                className="item"
              >
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Navbar
