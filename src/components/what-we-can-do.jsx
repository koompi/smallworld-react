import React from "react";
import Navbar from "./layouts/navbar";
import Footer from "./layouts/footer";
import { Helmet } from "react-helmet";

const WhatWeCanDo = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>What We Can Do | SmallWorld Venture</title>
      </Helmet>
      <Navbar />
      <div>
        <div className="backAbout">
          <div className="ui container">
            <div className="ui stackable two column grid centerme">
              <div className="column nine wide">
                <div className="descTitle1">
                  <h1>Building Startup Community</h1>
                  <p>
                    As we grow as a community, we seeks to nurture aspiring the
                    business minded youth. The main goal is to train talented
                    artisans in critical thinking skills to unleash their own
                    potential.
                  </p>
                </div>
              </div>
              <div className="column seven wide">
                <div className="mobile">
                  <img
                    src="/images/startup-com.png"
                    alt="SmallWorld Venture"
                    className="ui fluid image"
                  />
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
                  <img
                    src="/images/investment.png"
                    alt="SmallWorld Venture"
                    className="ui fluid image"
                  />
                </div>
                <div className="descTitle">
                  <h1>Investment Portfolio </h1>
                  <p>
                    SmallWorld with reserved resources is designated to invest
                    in the external startups with support from angel & seeds
                    funders. While, working on the main mission to develop and
                    support the potential projects within the internal ventures
                    startups & teams
                  </p>
                </div>
              </div>
              <div className="column nine wide">
                <div className="descTitle1">
                  <h1>Investment Portfolio </h1>
                  <p>
                    SmallWorld with reserved resources is designated to invest
                    in the external startups with support from angel & seeds
                    funders. While, working on the main mission to develop and
                    support the potential projects within the internal ventures
                    startups & teams
                  </p>
                </div>
                <div className="mobileimg1">
                  <img
                    src="/images/investment.png"
                    alt="SmallWorld Venture"
                    className="ui fluid image"
                  />
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
                    R&D projects in the pursuit for the greater good, the
                    cornerstone of SmallWorld mission. Aim to generate and
                    design technology that can improve and challenge the daily
                    interaction with our community.
                  </p>
                </div>
              </div>
              <div className="column seven wide">
                <div className="mobile">
                  <img
                    src="/images/venture-building.png"
                    alt="SmallWorld Venture"
                    className="ui fluid image"
                  />
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
                  <img
                    src="/images/reforest.png"
                    alt="SmallWorld Venture"
                    className="ui fluid image"
                  />
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
                  <img src="/images/reforest.png" alt="SmallWorld Venture" />
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
