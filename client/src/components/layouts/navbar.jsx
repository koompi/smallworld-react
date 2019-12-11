import React, { Component } from "react"
import { Link, NavLink } from "react-router-dom"
import NavbarData from "../../data/navbar.json"

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggleMenu: false
    }
    this.toggleMenuState = this.toggleMenuState.bind(this)
  }

  toggleMenuState() {
    const { toggleMenu } = this.state
    this.setState({
      toggleMenu: !toggleMenu
    })
  }

  render() {
    const { toggleMenu } = this.state
    return (
      <>
        <div>
          <div
            className={toggleMenu ? "mobile_background" : ""}
            onClick={() => {
              this.setState({ toggleClick: false })
            }}
          ></div>
          <div
            className={
              toggleMenu
                ? "ui left demo vertical inverted labeled icon sidebar menu overlay visible mobile only slideIn"
                : "ui left demo vertical inverted labeled icon sidebar menu overlay visible mobile only slideOut"
            }
          >
            <div className="navbar_slider">
              {NavbarData.map((data) => {
                return (
                  <NavLink
                    to={data.link}
                    activeClassName="item active"
                    className="item"
                    key={data.id}
                  >
                    {data.title}
                  </NavLink>
                )
              })}
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

        <div
          className="hd sw-navbar mobile hidden"
          style={
            window.location.pathname === "/"
              ? { backgroundColor: "#015e9800" }
              : { backgroundColor: "#015e98" }
          }
        >
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
              {NavbarData.map((data) => {
                return (
                  <NavLink
                    to={data.link}
                    activeClassName="item active"
                    className="item"
                    key={data.id}
                  >
                    {data.title}
                  </NavLink>
                )
              })}
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Navbar
