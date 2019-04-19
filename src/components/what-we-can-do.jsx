import React from "react";
import Navbar from "./layouts/navbar";
import Footer from "./layouts/footer";
import { Helmet } from "react-helmet";

const WhatWeCanDo = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>What We Do | SmallWorld Venture</title>
      </Helmet>
      <Navbar />
      <div>
        <div className="backAbout">
          <div className="ui container">
            <div className="ui stackable two column grid centerme">
              <div className="column nine wide">
                <div className="descTitle1">
                  <h1>Build Startup Community</h1>
                  <p>
                    Since its inception in 2011, SmallWorld has keep its focus
                    strong and sturdy on the idea of building a vibran startup
                    community in Phnom Penh. We build startup community by
                    partnering with other workspaces to offer more value and
                    make office space more accessible to early stage startup
                    teams and others alike.
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
              </div>
              <div className="column nine wide">
                <div className="descTitle1">
                  <h1>Seeds Investment</h1>
                  <p>
                    Seeds investment is one of the most important part of
                    building startup community. We have been working with dozen
                    of teams in the last 5 years. Since 2017, our focus is to
                    provide seeds to teams from the community, range from 5000
                    USD - 25,000 USD. The seed will be equity based, not a loan.
                    The goal is to invest up to 5 teams a year. The seeds
                    sometime co-invested by angel investors from Phnom Penh
                    Community.
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
                  <h1>Venture Building and R&D</h1>
                  <p>
                    In the pursuit for the greater good, the cornerstone of
                    SmallWorld mission is our Venture Building and R&D. The
                    projects which focus its attention on decentralized & P2P
                    Application, Tokenization projects, hardware & software,
                    robotic & automation, materials scient study.
                  </p>
                  <p>
                    Some idea become a venture and go to the market, for example
                    <a
                      href="https://koompi.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      KOOMPI
                    </a>
                    . In 2019, we hope to release a few more. Some of which are
                    GROOD and Zeetomic.
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
              </div>
              <div className="column nine wide">
                <div className="descTitle1">
                  <h1>Afforestation</h1>
                  <p>
                    This is our wildest dream. We would love to change our
                    generation forward, not only to become engineers but to be a
                    nature keeper. Economic challenge, we want to see our
                    generation forward become trees planter to make money as
                    oppose to the other way around. We want to start our
                    development around and with nature - not against it.
                  </p>
                  <p>
                    VitaminAir is one of the internal project that will take on
                    this challenge very serously in the year to come.
                  </p>
                  <p>
                    Part of the afforestation also, we hope we will start using
                    renewale energy and newable material, so we can keep the
                    earth clean and nice to live. Then, learn how to mine
                    none-renewble - not from earth, if we must, but from space.
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
