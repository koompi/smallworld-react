import React from "react";
import Navbar from "./layouts/navbar";
import Footer from "./layouts/footer";
import Member from "../data/member.json";
import Partner from "../data/partner.json";

const AboutPage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div>
        <div>
          <div className="imenu">
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
        <div className="aboutsmall">
          <div className="ui container">
            <div className="ui stackable two column grid centerme">
              <div className="column">
                <h1>What is SmallWorld</h1>
                <p>
                  What is it like to run a business in Estonia? How to benefit
                  from the e-solutions and the efficiency of our business
                  culture? What are the opportunities in specific sectors?
                </p>
                <p>
                  What is it like to run a business in Estonia? How to benefit
                  from the e-solutions and the efficiency of our business
                  culture? What are the opportunities in specific sectors?
                </p>
              </div>
              <div className="column">
                <div className="mobile">
                  <img src="/images/banner-3.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="aboutsmall">
          <div className="ui container">
            <div className="ui stackable two column grid centerme">
              <div className="column">
                <div className="mobileimg">
                  <img src="/images/banner-4.png" />
                </div>
                <div className="descTitle">
                  <h1>Investment Portfolio</h1>
                  <p>
                    What is it like to run a business in Estonia? How to benefit
                    from the e-solutions and the efficiency of our business
                    culture? What are the opportunities in specific sectors?
                  </p>
                  <p>
                    What is it like to run a business in Estonia? How to benefit
                    from the e-solutions and the efficiency of our business
                    culture? What are the opportunities in specific sectors?
                  </p>
                </div>
              </div>
              <div className="column">
                <div className="descTitle1">
                  <h1>Investment Portfolio</h1>
                  <p>
                    What is it like to run a business in Estonia? How to benefit
                    from the e-solutions and the efficiency of our business
                    culture? What are the opportunities in specific sectors?
                  </p>
                  <p>
                    What is it like to run a business in Estonia? How to benefit
                    from the e-solutions and the efficiency of our business
                    culture? What are the opportunities in specific sectors?
                  </p>
                </div>
                <div className="mobileimg1">
                  <img src="/images/banner-4.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="backMember">
          <div className="ui container">
            <center>
              <h1>Our Board Member</h1>
              <p>
                During the past five years, smallworld has worked side-by-side
                <br />
                with emerging young business leaders, encouraging
              </p>
              <div className="ui stackable four column grid">
                {Member.map(data => {
                  return (
                    <div className="column">
                      <img
                        src={data.image}
                        className="ui fluid image "
                        alt={data.name}
                      />
                      <h3>{data.name}</h3>
                      <p>{data.position}</p>
                    </div>
                  );
                })}
              </div>
            </center>
          </div>
        </div>
        <div className="investorfooter">
          <div className="ui container">
            <center>
              <h1>Our Investor &amp; Partner</h1>
              <p>
                During the past five years, smallworld has worked side-by-side
                <br />
                with emerging young business leaders, encouraging
              </p>
              <div className="logome">
                <div className="ui three column grid">
                  {Partner.map(data => {
                    return (
                      <div className="column logo" key={data.id}>
                        <a className="newsDetail" href={data.link}>
                          <img
                            src={data.image}
                            className="ui image"
                            alt={data.title}
                          />
                        </a>
                      </div>
                    );
                  })}
                  {/* <div className="column logo">
                    <a className="newsDetail">
                      <img src="/images/doers-lgoo.png" className="ui image" />
                    </a>
                  </div>
                  <div className="column logo">
                    <a className="newsDetail">
                      <img src="/images/ISI_GROUP.png" className="ui image" />
                    </a>
                  </div>
                  <div className="column logo">
                    <a className="newsDetail">
                      <img src="/images/Sabay.png" className="ui image" />
                    </a>
                  </div> */}
                </div>
              </div>
            </center>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default AboutPage;
