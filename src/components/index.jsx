import React from "react";
import Footer from "./layouts/footer";
import { Link } from "react-router-dom";
import Data from "../data/NewsAndEvents.json";

const Index = () => {
  return (
    <div>
      <div>
        <div
          className="backBanner"
          style={{
            backgroundImage: 'url("/images/banner.png")',
            height: "54vw"
          }}
        >
          <div>
            <div className="hd">
              <div className="ui secondary container menu computer only ">
                <div className="menu left">
                  <Link to="/home">
                    <img src="/images/logo/sw-green.png" className="logonav" />
                  </Link>
                </div>
                <div className="menu right asize">
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
            </div>
            <div className="imenu main">
              <i
                className="icon bars"
                style={{
                  color: "rgb(255, 255, 255)",
                  top: "0px",
                  width: "50px",
                  background: "none",
                  position: "absolute",
                  lineHeight: "50px",
                  border: "none",
                  height: "50px",
                  left: "0px"
                }}
              />
            </div>
          </div>
          <div className="ui container">
            <div className="bannerContent">
              <h2>SMALLWORLD Venture</h2>
              <p className="paragraph">
                SmallWorld as a collaborative workspace is a Cambodia's first
                homegrown startup community. SmallWorld is an idea and our ideas
                are grander than owning a physical space. Community | Startups
                Investment | R&D
              </p>
              <a href="#">
                <button className="ui basic button btnLearnMore">
                  LEARN MORE
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="cvcolor">
          <div className="ui container margin-top">
            <div className="ui stackable four column grid">
              <div className="column">
                <center>
                  <div className="newsDetailo">
                    <img src="/images/blurb-1.png" />
                    <h4>Buildings Startup Community</h4>
                    <p>
                      Estonia’s Icefire: the fine art of financial technology
                    </p>
                  </div>
                </center>
              </div>
              <div className="column">
                <center>
                  <div className="newsDetailo">
                    <img src="/images/blurb-2.png" />
                    <h4>Investment Portfolio</h4>
                    <p>
                      Estonia’s Icefire: the fine art of financial technology
                    </p>
                  </div>
                </center>
              </div>
              <div className="column">
                <center>
                  <div className="newsDetailo">
                    <img src="/images/blurb-3.png" />
                    <h4>Internal Venture Building</h4>
                    <p>
                      Estonia’s Icefire: the fine art of financial technology
                    </p>
                  </div>
                </center>
              </div>
              <div className="column">
                <center>
                  <div className="newsDetailo">
                    <img src="/images/blurb-4.png" />
                    <h4>Invest Long-term Reforest</h4>
                    <p>
                      Estonia’s Icefire: the fine art of financial technology
                    </p>
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
                <button className="ui basic button btnInformation">
                  CONTACT US
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="ui container margin-buttons">
          <h2 className="newsAndEvent">News &amp; Events</h2>
          <div className="ui stackable four column grid">
            {Data.map((data, index) => {
              return (
                <div className="column" key={data.id}>
                  <a className="newsDetail" href="#">
                    <img
                      src={data.image}
                      className="ui fluid image"
                      alt={data.title}
                    />
                    <br />
                    <center>
                      <h3>{data.title}</h3>
                    </center>
                    <br />
                    <p>{data.description}</p>
                    <p>{data.tags}</p>
                  </a>
                </div>
              );
            })}
            {/* <div className="column">
              <a className="newsDetail" href="#">
                <img
                  src="https://www.mlmgroup.com/wp-content/uploads/2017/03/services-buildings-mlm.jpg"
                  className="ui fluid image"
                />
                <h3>Estonia’s Icefire: the fine art of financial technology</h3>
                <p>News</p>
              </a>
            </div>
            <div className="column">
              <a className="newsDetail" href="#">
                <img
                  src="https://www.mlmgroup.com/wp-content/uploads/2017/03/services-buildings-mlm.jpg"
                  className="ui fluid image"
                />
                <h3>Estonia’s Icefire: the fine art of financial technology</h3>
                <p>News</p>
              </a>
            </div>
            <div className="column">
              <a className="newsDetail" href="#">
                <img
                  src="https://www.mlmgroup.com/wp-content/uploads/2017/03/services-buildings-mlm.jpg"
                  className="ui fluid image"
                />
                <h3>Estonia’s Icefire: the fine art of financial technology</h3>
                <p>News</p>
              </a>
            </div>
            <div className="column">
              <a className="newsDetail" href="#">
                <img
                  src="https://www.mlmgroup.com/wp-content/uploads/2017/03/services-buildings-mlm.jpg"
                  className="ui fluid image"
                />
                <h3>Estonia’s Icefire: the fine art of financial technology</h3>
                <p>News</p>
              </a>
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
