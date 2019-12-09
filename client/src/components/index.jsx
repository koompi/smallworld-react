import React from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { Helmet } from "react-helmet"
import axios from "axios"
import Navbar from "./layouts/navbar"

import SmallWorldMission from "../data/mission.json"
import News from "./news-and-events"

const Index = () => {
  const { t } = useTranslation()
  return (
    <div>
      <Helmet>
        <title>{t("index.smallworldTitle")}</title>
        <meta
          name="description"
          content="Homegrown Startup Community. We began in 2011 by providing a collaborative workspace environment for entrepreneurs, and then quickly moved forward raising investment capital to fund new startup projects."
        />
      </Helmet>
      <div>
        <Helmet>
          <title>
            SmallWorld Venture | Homegrown startup community based in Phnom Penh
          </title>
          <meta
            name="description"
            content="Homegrown Startup Community. We began in 2011 by providing a collaborative workspace environment for entrepreneurs, and then quickly moved forward raising investment capital to fund new startup projects."
          />
        </Helmet>
        <div>
          <div
            className="backBanner"
            style={{
              backgroundImage: 'url("/images/banner.png")',
              height: "54vw"
            }}
          >
            <Navbar />
            <div className="ui container">
              <div className="bannerContent">
                <h3>
                  <span>{"<"}</span> {"Homegrown Startup Community"}{" "}
                  <span>{"/>"}</span>
                </h3>
                <p className="paragraph">
                  We began in 2011 by providing a collaborative workspace environment
                  for entrepreneurs, and then quickly moved forward raising
                  investment capital to fund new startup projects.
                </p>
                <p className="paragraph">
                  With a variety of research and development projects in motion
                  today, we're involved in startup venture building through community
                  supported seed equity investments, together with rural ecovillage
                  development and long-term land management.
                </p>
                <Link to="/about-us">
                  <button className="ui basic button btnLearnMore">
                    LEARN MORE
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="cvcolor">
            <div className="ui container margin-top">
              <div className="ui stackable four column equal height stretched grid">
                {/* Loop SmallWorld Mission from mission.json */}
                {SmallWorldMission.map((data) => {
                  return (
                    <div className="column" key={data.id}>
                      <div className="newsDetailo">
                        <center>
                          <img
                            src={data.image}
                            className="imageIndex"
                            alt={data.title}
                          />
                        </center>
                        <div className="shadowIndex">
                          <h4>{data.title}</h4>
                          <p>{data.desc}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
        <div
          className="backBanner"
          style={{
            backgroundImage: 'url("/images/banner.png")',
            height: "54vw"
          }}
        >
          <div className="ui container">
            <div className="bannerContent">
              <h3>
                <span>{"<"}</span>
                {t("index.indexTitle")}
                <span>{"/>"}</span>
              </h3>
              <p className="paragraph">{t("index.providing")}</p>
              <p className="paragraph">{t("index.varietyResearchDev")}</p>
              <Link to="/about-us">
                <button className="ui basic button btnLearnMore" type="button">
                  {t("index.learnMoreBtn")}
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="cvcolor">
          <div className="ui container margin-top">
            <div className="ui four column equal height grid">
              <div className="column ">
                <center>
                  <div className="newsDetailo">
                    <img
                      src="/images/blurb-1.png"
                      className="imageIndex"
                      alt="SmallWorld Venture"
                    />
                    <div className="shadowIndex">
                      <h4>{t("index.startupCommunity")}</h4>
                      <p>{t("index.committed")}</p>
                    </div>
                  </div>
                </center>
              </div>

              <div className="column">
                <center>
                  <div className="newsDetailo">
                    <img
                      src="/images/blurb-2.png"
                      alt="SmallWorld Venture"
                      className="imageIndex"
                    />
                    <div className="shadowIndex">
                      <h4>{t("index.seedEquityInvestments")}</h4>
                      <p>{t("index.seedInvestments")}</p>
                    </div>
                  </div>
                </center>
              </div>
              <div className="column">
                <center>
                  <div className="newsDetailo">
                    <img
                      src="/images/blurb-3.png"
                      className="imageIndex"
                      alt="SmallWorld Venture"
                    />
                    <div className="shadowIndex">
                      <h4>{t("index.ventureBuilding")}</h4>
                      <p>{t("index.internalTeam")}</p>
                    </div>
                  </div>
                </center>
              </div>
              <div className="column">
                <center>
                  <div className="newsDetailo">
                    <img
                      src="/images/blurb-4.png"
                      className="imageIndex"
                      alt="SmallWorld Venture"
                    />
                    <div className="shadowIndex">
                      <h4>{t("index.ecovillageDev")}</h4>
                      <p>{t("index.ecovillage")}</p>
                    </div>
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
                <h1>{t("index.ventureIdeas")}</h1>
                <p>{t("index.problemSolving")}</p>
                <p>{t("index.skillset")}</p>
                <p>{t("index.openStartup")}</p>
                <p>{t("index.sendMsg")}</p>
                <Link to="/contact-us">
                  <button className="ui basic button btnInformation" type="button">
                    {t("index.contact")}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <News />
      </div>
    </div>
  )
}

export default Index
