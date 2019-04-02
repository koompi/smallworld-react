import React from "react";
import Navbar from "./layouts/navbar";
import Footer from "./layouts/footer";

const WhatWeCanDo = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div>
        <div className="backAbout">
          <div className="ui container">
            <div className="ui stackable two column grid centerme">
              <div className="column nine wide">
                <div className="descTitle1">
                  <h1>Building Startup Community</h1>
                  <p>
                    What is it like to run a business in Estonia? How to benefit
                    from the e-solutions and the efficiency of our business
                    culture? What are the opportunities in specific sectors?
                  </p>
                </div>
              </div>
              <div className="column seven wide">
                <div className="mobile">
                  <img src="/images/startup-com.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="backAbout">
          <div className="ui container">
            <div className="ui stackable two column grid centerme">
              <div className="column seven wide">
                <div className="mobileimg">
                  <img src="/images/investment.png" />
                </div>
                <div className="descTitle">
                  <h1>Investment Portfolio </h1>
                  <p>
                    What is it like to run a business in Estonia? How to benefit
                    from the e-solutions and the efficiency of our business
                    culture? What are the opportunities in specific sectors?
                  </p>
                  <a href="googlo.com">Read More...</a>
                </div>
              </div>
              <div className="column nine wide">
                <div className="descTitle1">
                  <h1>Investment Portfolio </h1>
                  <p>
                    What is it like to run a business in Estonia? How to benefit
                    from the e-solutions and the efficiency of our business
                    culture? What are the opportunities in specific sectors?
                  </p>
                  <button
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer"
                    }}
                  >
                    Read more...
                  </button>
                </div>
                <div className="mobileimg1">
                  <img src="/images/investment.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="backAbout">
          <div className="ui container">
            <div className="ui stackable two column grid centerme">
              <div className="column nine wide">
                <div className="descTitle1">
                  <h1>Internal Venture Building</h1>
                  <p>
                    What is it like to run a business in Estonia? How to benefit
                    from the e-solutions and the efficiency of our business
                    culture? What are the opportunities in specific sectors?
                  </p>
                  <button style={{ background: "none", border: "none" }}>
                    Read more...
                  </button>
                </div>
              </div>
              <div className="column seven wide">
                <div className="mobile">
                  <img src="/images/venture-building.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="backAbout">
          <div className="ui container">
            <div className="ui stackable two column grid centerme">
              <div className="column seven wide">
                <div className="mobileimg">
                  <img src="/images/reforest.png" />
                </div>
                <div className="descTitle">
                  <h1>Long-term Investment Reforest Cambodia</h1>
                  <p>
                    What is it like to run a business in Estonia? How to benefit
                    from the e-solutions and the efficiency of our business
                    culture? What are the opportunities in specific sectors?
                  </p>
                </div>
              </div>
              <div className="column nine wide">
                <div className="descTitle1">
                  <h1>Long-term Investment Reforest Cambodia</h1>
                  <p>
                    What is it like to run a business in Estonia? How to benefit
                    from the e-solutions and the efficiency of our business
                    culture? What are the opportunities in specific sectors?
                  </p>
                </div>
                <div className="mobileimg1">
                  <img src="/images/reforest.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default WhatWeCanDo;
