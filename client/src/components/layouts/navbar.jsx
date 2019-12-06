import React, { Component } from "react"
import { Link, NavLink } from "react-router-dom"
import { withTranslation } from "react-i18next"
import LanguageToggle from "../langs"

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggleMenu: false
    }
  }

  toggleMenuState = () => {
    const { toggleMenu } = this.state
    this.setState({ toggleMenu: !toggleMenu })
  }

  render() {
    const { toggleMenu } = this.state
    const { t } = this.props
    return (
      <>
        <div className="nav">
          <div className={toggleMenu ? "phone-background-navbar" : ""}>
            <div
              className={
                toggleMenu
                  ? "ui left demo vertical inverted labeled icon sidebar menu overlay visible mobile only slideIn"
                  : "ui left demo vertical inverted labeled icon sidebar menu overlay visible mobile only slideOut"
              }
            >
              <NavLink to="/about-us" className="item">
                {t("navbar.about")}
              </NavLink>
              <NavLink to="/what-we-do" className="item">
                {t("navbar.works")}
              </NavLink>
              <NavLink to="/news-and-events" className="item">
                {t("navbar.news")}
              </NavLink>
              <NavLink to="/contact-us" className="item">
                {t("navbar.contact")}
              </NavLink>
              <LanguageToggle />
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
                  role="presentation"
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
                {t("navbar.about")}
              </NavLink>
              <NavLink
                to="/what-we-do"
                activeClassName="item active"
                className="item"
              >
                {t("navbar.works")}
              </NavLink>
              <NavLink
                to="/news-and-events"
                activeClassName="item active"
                className="item"
              >
                {t("navbar.news")}
              </NavLink>
              <NavLink
                to="/contact-us"
                activeClassName="item active"
                className="item"
              >
                {t("navbar.contact")}
              </NavLink>
              <LanguageToggle />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default withTranslation()(Navbar)
