import React, { Component } from "react";
import Footer from "./layouts/footer";
import { Link } from "react-router-dom";
import Data from "../data/NewsAndEvents.json";
import { Helmet } from "react-helmet";

class Index extends Component {
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
      <div>
        <Helmet>
          <title>SmallWorld Venture | a homegrown startup community based in Phnom Penh</title>
        </Helmet>
        <div>
          <div
            className="backBanner"
            style={{
              backgroundImage: 'url("/images/banner.png")',
              height: "54vw"
            }}
          >
            <div>
              <div
                className={
                  this.state.toggleMenu ? "phone-background-navbar" : ""
                }
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
                    Works
                  </Link>
                  <Link to="/about" className="item">
                    News
                  </Link>
                  <Link to="/about" className="item">
                    Contact
                  </Link>
                </div>
              </div>
              <div className="hd">
                <div className="ui secondary container menu mobile only">
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
                <div className="ui secondary container menu mobile hidden">
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
                    <Link to="/about" className="item">
                      About
                    </Link>
                    <Link to="/what-we-can-do" className="item">
                      Works
                    </Link>
                    <Link to="/about" className="item">
                      News
                    </Link>
                    <Link to="/about" className="item">
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="ui container">
              <div className="bannerContent">
                <h2>SmallWorld Venture</h2>
                <p className="paragraph">
                  SmallWorld Venture is a homegrown startup community based in Phnom Penh.
                  We started as a collaborative workspace environtment back in 2011.
                  Present focus are in <b>Community Development</b>, <b> Seeds Investment</b>, <b>Venture Building and R&D, and Afforestation. </b>
                </p>
                <Link to="/about">
                  <button className="ui basic button btnLearnMore">
                    LEARN MORE
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="cvcolor">
            <div className="ui container margin-top">
              <div className="ui stackable four column grid">
                <div className="column">
                  <center>
                    <div className="newsDetailo">
                      <img
                        src="/images/blurb-1.png"
                        className="ui fluid image imageIndex"
                        alt="SmallWorld Venture"
                      />
                      <div className="shadowIndex">
                        <h4>Startup Community</h4>
                        <p>
                          Build startup community is 
                        </p>
                      </div>
                    </div>
                  </center>
                </div>
                <div className="column">
                  <center>
                    <div className="newsDetailo">
                      <img
                        src="/images/blurb-2.png"
                        alt="SmallWorld Venture"
                        className="ui fluid image imageIndex"
                      />
                      <div className="shadowIndex">
                        <h4>Seeds & Portfolio</h4>
                        <p>
                          Estonia’s Icefire: the fine art of financial
                          technology
                        </p>
                      </div>
                    </div>
                  </center>
                </div>
                <div className="column">
                  <center>
                    <div className="newsDetailo">
                      <img
                        src="/images/blurb-3.png"
                        className="ui fluid image imageIndex"
                        alt="SmallWorld Venture"
                      />
                      <div className="shadowIndex">
                        <h4>Venture Building</h4>
                        <p>
                          Estonia’s Icefire: the fine art of financial
                          technology
                        </p>
                      </div>
                    </div>
                  </center>
                </div>
                <div className="column">
                  <center>
                    <div className="newsDetailo">
                      <img
                        src="/images/blurb-4.png"
                        className="ui fluid image imageIndex"
                        alt="SmallWorld Venture"
                      />
                      <div className="shadowIndex">
                        <h4>Afforestation </h4>
                        <p>
                          Our hope to see
                        </p>
                      </div>
                    </div>
                  </center>
                </div>
              </div>
            </div>
          </div>
          <div className="backInformation">
            <div className="ui container">
              <div className="ui stackable two column grid">
                <div className="column">
                  <h1>Need More Information?</h1>
                  <p>
                    What is it like to run a business in Estonia? How to benefit
                    from the e-solutions and the efficiency of our business
                    culture? What are the opportunities in specific sectors?
                  </p>
                  <p>What is it like to run a business in Estonia?</p>
                  <Link to="/contact-us">
                    <button className="ui basic button btnInformation">
                      CONTACT US
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="ui container margin-buttons">
            <h2 className="newsAndEvent">Community Update</h2>
            <div className="ui stackable four column grid">
              {Data.map((data, index) => {
                return (
                  <div className="column" key={data.id}>
                    <div className="indexShadow">
                      <a className="newsDetail" href="https://medium.com/">
                        <img
                          src={data.image}
                          className="ui fluid image eventImage"
                          alt={data.title}
                        />
                        <div className="backgroundEvent">
                          <center>
                            <h3>{data.title}</h3>
                          </center>
                          <br />
                          <p>{data.description}</p>
                          <p className="badge">{data.tags}</p>
                        </div>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="ui container margin-buttons">
            <h2 className="newsAndEvent">KOOMPI News</h2>
            <div className="ui stackable four column grid">
              {Data.map((data, index) => {
                return (
                  <div className="column" key={data.id}>
                    <div className="indexShadow">
                      <a className="newsDetail" href="https://medium.com/">
                        <img
                          src={data.image}
                          className="ui fluid image eventImage"
                          alt={data.title}
                        />
                        <div className="backgroundEvent">
                          <center>
                            <h3>{data.title}</h3>
                          </center>
                          <br />
                          <p>{data.description}</p>
                          <p className="badge">{data.tags}</p>
                        </div>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
        <Footer />
      </div>
    );
  }
}

export default Index;
