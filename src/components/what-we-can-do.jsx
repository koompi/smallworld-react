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
          <br />
          <br />
          <div className="ui container">
            <div className="ui stackable two column grid centerme">
              <div className="column nine wide">
                <div className="descTitle1">
                  <h1>Startup Community</h1>
                  <p>
                    Since our inception in 2011, SmallWorld has remained focused
                    on their vision of building a strong, sturdy and vibrant
                    startup community in Phnom Penh by partnering with other
                    workspaces to offer greater value and accessibility to early
                    stage startup teams and entrepreneurs.
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
                  <h1>Seed Capital Investments</h1>
                  <p>
                    Seed Capital Investments are the most important ingredient
                    for building a strong startup community. <br /> <br />{" "}
                    During our formative years, we gained insightful experience
                    working with dozen of innovative startups, and now provide
                    Seed Capital Investments for five new startup teams each
                    year. <br />
                    <br />
                    With a funding range between 5 to 25 thousand US dollars per
                    team, our Seed Capital Investments are not a loan, but
                    equity based. <br />
                    <br /> Local co-investor equity participation is encouraged
                    and generated through seminars and presentations to the
                    greater Phnom Penh business community.
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
                    SmallWorld mission is our Venture Building and R&D.
                  </p>
                  <p>
                    The projects which focus its attention on decentralized &
                    P2P Application, Tokenization projects, hardware & software,
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
                    Not to be confused with Reforestation, Afforestation is the
                    establishment of a forest or stand of trees (forestation) in
                    an area where there was no previous tree cover.
                  </p>
                  <p>
                    We directly engage in programs of afforestation to create
                    forests, increase carbon capture and sequestration, and help
                    to improve biodiversity.
                  </p>
                  <p>
                    This is our wildest dream. We would love to change our
                    generation forward, not only to become engineers but to be a
                    nature keeper.
                  </p>
                  <p>
                    Economic challenge, we want to see our generation forward
                    become trees planter to make money as oppose to the other
                    way around.
                  </p>
                  <p>
                    We want to start our development around and with nature -
                    not against it.
                  </p>
                  <p>
                    VitaminAir is one of the internal project that will take on
                    this challenge very serously in the year to come.
                  </p>
                  <p>
                    Part of the afforestation also, we hope we will start using
                    renewale energy and newable material, so we can keep the
                    earth clean and nice to live.
                  </p>
                  <p>
                    Then, learn how to mine none-renewble - not from earth, if
                    we must, but from space.
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
