import React from "react"
import { Helmet } from "react-helmet"
import { useTranslation } from "react-i18next"
import Navbar from "./layouts/navbar"
import Footer from "./layouts/footer"

// data
import Member from "../data/member.json"
import Partner from "../data/partner.json"
import Portfolio from "../data/portfolio.json"

const AboutPage = () => {
  const { t } = useTranslation()
  return (
    <>
      <Helmet>
        <title>{t("about.aboutTitle")}</title>
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
                <h1>{t("about.whatIsSmallworld")}</h1>
                <p>{t("about.founded")}</p>
                <p>{t("about.fiveYears")}</p>
                <p>{t("about.equityInvestment")}</p>
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
                  <h1>{t("about.ventureBuilding")}</h1>
                  <p>{t("about.logoStartup")}</p>
                </div>
              </div>
              <div className="column">
                <div className="descTitle1">
                  <h1>{t("about.portfolios")}</h1>
                  <p>{t("about.experimenting")}</p>
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
              <h1>{t("about.boardDirectors")}</h1>
              <p className="member_p">{t("about.directorIntroMessage")}</p>
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
              <h1>{t("about.strategicPartners")}</h1>
              <p className="member_p">{t("about.strategicPartnersMsg")}</p>
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
