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
                    Since 2011, SmallWorld has remained focused on their vision
                    of building a vibrant startup community in Phnom Penh
                    through partnering with other area workspace groups to offer
                    greater value and accessibility to early stage startup teams
                    and entrepreneurs.
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
                  <h1>Seed Equity Investments</h1>
                  <p>
                    Seed Equity Investments are used to form equity investment
                    partnerships which serve as the foundation for building a
                    strong startup community. <br />
                    <br /> During our formative years we've gained insightful
                    experience by working with dozens of innovative startups and
                    we now provide Seed Equity Investments for five new startup
                    teams each year. <br />
                    <br /> With a funding range between 5,000 to 25,000 USD per
                    team, our Seed Equity Investments are not loans, but equity
                    based investments. <br />
                    <br /> Local co-investor equity participation is encouraged
                    and generated through seminars and presentations within the
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
                  <h1>Venture Building</h1>
                  <p>
                    Our branded KOOMPI system is one among several exciting
                    ventures in our portfolio. <br /> <br />
                    We've produced a practical, affordable, and effective
                    entry-level notebook designed for future engineers,
                    inventors, organizers, developers, and freethinkers. <br />
                    <br />
                    The KOOMPI notebook computer is a slim, elegant, high-end,
                    portable, personal productivity environment designed to
                    perform well at work, school, or with managing any small
                    business. <br />
                    <br />
                    Powering the KOOMPI notebook is KOSMOS, which is our own
                    version of the popular open-source Linux operating system,
                    with KramaOS specifically tailored for the Cambodian
                    marketplace.
                  </p>
                  <h1>Research and Development</h1>
                  <p>
                    The cornerstone of SmallWorld Ventures is to promote Venture
                    Building with a key focus on Research and Development (R&D).{" "}
                    <br />
                    <br />
                    We're engaged in both hardware and software R&D projects
                    related to decentralized peer-to-peer applications,
                    tokenization, robotics, artificial intelligence, and
                    automation. <br />
                    <br />
                    Beyond hardware and software, we're building an all natural
                    outdoor learning, living, work, and play environment using
                    industrial hemp and bamboo design as the fundamental basis
                    for production.
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
                  <h1>Environmental Stewardship</h1>
                  <p>
                    Environmental stewardship means the responsible use and
                    protection of our natural resources through conservation and
                    sustainable practice. <br />
                    <br />
                    We strive to be aware and knowledgeable of the natural world
                    around us and to do as little as possible to negatively
                    impact that world.
                    <br />
                    <br />
                    VitaminAir is our planned ecovillage project located on 100+
                    hectares of rural land 100 kilometers east of Phnom Penh
                    beneath Phnom Pich Nil near the base of the Dâmrei
                    Mountains.
                    <br />
                    <br />
                    At our VitaminAir project and the surrounding protected
                    areas, we are directly engaged in small scale agriculture
                    and reforestation, along with nature and wildlife
                    preservation programs.
                    <br />
                    <br />
                    In addition, we are creating a hands-on learning, working
                    and living environment with an appropriate balance among
                    economic opportunity, environmental protection, and
                    sustainable living practices.
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
