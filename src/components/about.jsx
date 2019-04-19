import React, { Component } from "react";
import Navbar from "./layouts/navbar";
import Footer from "./layouts/footer";
import Member from "../data/member.json";
import Partner from "../data/partner.json";
import Portfolio from "../data/portfolio.json";
import { Helmet } from "react-helmet";

class AboutPage extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>About SmallWorld Venture</title>
        </Helmet>
        {console.log(this.state.koompi)}
        <Navbar />
        <div>
          <div className="aboutsmall">
            <div className="ui container">
              <div className="ui stackable two column grid centerme">
                <div className="column">
                  <h1>What is SmallWorld?</h1>
                  <p>
                    Founded in 2011 as SmallWorld Cambodia, a shared
                    professional workspace where young progressive individuals
                    could pursue their business aspirations and develop their
                    ideas a reality.
                  </p>
                  <p>
                    SmallWorld, reorganized to SmallWorld Venture in 2017, with
                    a focus on{" "}
                    <b>
                      building tech community, seeds stage investment, ventures
                      building, and afforestation{" "}
                    </b>{" "}
                    effort to be aligned with nature philosophy and the green
                    business movement.
                  </p>
                </div>
                <div className="column mobile hidden">
                  <div className="mobile">
                    <img
                      src="/images/banner-3.png"
                      alt="SmallWorld Venture"
                      className="imageAbout"
                    />
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
                    <img src="/images/banner-4.png" alt="SmallWorld Venture" />
                  </div>
                  <div className="descTitle">
                    <h1>Venture Building</h1>
                    <p>Add logo of startup, such as KOOMPI, Grood, Zeetomic</p>
                  </div>
                </div>
                <div className="column">
                  <div className="descTitle1">
                    <h1>Portfolio</h1>
                    <div className="ui three column grid">
                      {Portfolio.map(res => {
                        return (
                          <div className="column" key={res.id}>
                            <a
                              href={res.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src={res.logo}
                                className="ui image fluid"
                                alt={res.name}
                              />
                            </a>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="mobileimg1">
                    <img src="/images/banner-4.png" alt="SmallWorld Venture" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="backMember">
            <div className="ui container">
              <center>
                <h1>Board Members</h1>
                <p>
                  We are very honored and proud to have courageous and kind
                  people
                  <br />
                  to be our board of director
                </p>
                <div className="ui stackable five column grid">
                  {Member.map(data => {
                    return (
                      <div className="column" key={data.id}>
                        <img
                          src={data.image}
                          className="ui fluid image "
                          alt={data.name}
                        />
                        <h3>{data.name}</h3>
                        <span>{data.position}</span>
                        <br />
                        <span>{data.company}</span>
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
                <h1>Strategic Partners</h1>
                <p>
                  We are also proud to have forward thinkers and leaders in
                  their field <br />
                  as our strategic partners
                </p>
                <div className="logome">
                  <div className="ui three column grid">
                    {Partner.map(data => {
                      return (
                        <div className="column logo" key={data.id}>
                          <a
                            className="newsDetail ui small image"
                            href={data.link}
                          >
                            <img
                              src={data.image}
                              className="ui image"
                              alt={data.title}
                            />
                          </a>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </center>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default AboutPage;
