import React from "react"
import { Helmet } from "react-helmet"
import Navbar from "./layouts/navbar"
import Footer from "./layouts/footer"
import Member from "../data/member.json"
import Partner from "../data/partner.json"
import Portfolio from "../data/portfolio.json"

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us</title>
        <meta
          name="description"
          content="Founded in 2011 as SmallWorld Cambodia, we created a shared professional workspace where progressive young business minds could explore and pursue their aspirations while transforming ideas into reality."
        />
      </Helmet>
      <Navbar />
      <div>
        <div className="aboutsmall">
          <div className="ui container">
            <div className="ui stackable two column grid centerme">
              <div className="column">
                <h1>What is SmallWorld?</h1>
                <p>
                  Founded in 2011 as SmallWorld Cambodia, we created a shared
                  professional workspace where progressive young business minds could
                  explore and pursue their aspirations while transforming ideas into
                  reality.
                </p>
                <p>
                  After five years of steady growth, SmallWorld Cambodia reorganized
                  into SmallWorld Ventures to focus on venture building, information
                  technologies, and the environment.
                </p>
                <p>
                  Through equity investment partnerships, we're building a land-based
                  technical, business, and academic community based on natural
                  philosophy and ecologically sensitive practices.
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
                  <h1>Portfolios</h1>
                  <p>
                    We began experimenting with equity investment partnerships in
                    2013, and since then we've listed a few startup teams we're proud
                    to be partnered with from their inception.
                  </p>
                  <div className="ui three column grid">
                    {Portfolio.map((res) => {
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
                      )
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
              <h1>Board of Directors</h1>
              <p className="member_p">
                We're honored to have courageous and insightful business and
                community leaders to serve on our Board of Directors.
              </p>
              <div className="ui stackable five column grid">
                {Member.map((data) => {
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
                  )
                })}
              </div>
            </center>
          </div>
        </div>
        <div className="investorfooter">
          <div className="ui container">
            <center>
              <h1>Strategic Partners</h1>
              <p className="member_p">
                We're especially pleased to have built strategic partnerships with
                forward thinking leaders in the business world.
              </p>
              <div className="logome">
                <div className="ui three column grid">
                  {Partner.map((data) => {
                    return (
                      <div className="column logo" key={data.id}>
                        <a className="newsDetail ui small image" href={data.link}>
                          <img
                            src={data.image}
                            className="ui image"
                            alt={data.title}
                          />
                        </a>
                      </div>
                    )
                  })}
                </div>
              </div>
            </center>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage
