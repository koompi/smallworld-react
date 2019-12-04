import React from "react"
import { Helmet } from "react-helmet"
import { useTranslation } from "react-i18next"
import Navbar from "./layouts/navbar"
import Footer from "./layouts/footer"

const WhatWeCanDo = () => {
  const { t } = useTranslation()
  return (
    <>
      <Helmet>
        <title>{t("whatWeCanDo.whatWeCanDoTitle")}</title>
        <meta
          name="description"
          content="Startup Community, Seed Equity Investments, Venture Building, Research and Development, Environmental Stewardship"
        />
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
                  <h1>{t("whatWeCanDo.startupCommunity")}</h1>
                  <p>{t("whatWeCanDo.smallworldVision")}</p>
                </div>
              </div>
              <div className="column seven wide">
                <div className="mobile">
                  <img
                    src="/images/startup-com.png"
                    alt="SmallWorld Venture"
                    className="ui image fluid"
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
                    className=" imageCenter"
                  />
                </div>
              </div>
              <div className="column nine wide">
                <div className="descTitle1">
                  <h1>{t("whatWeCanDo.seedEquity")}</h1>
                  <p>{t("whatWeCanDo.seedEquityText")}</p>
                </div>
                <div className="mobileimg1">
                  <img
                    src="/images/investment.png"
                    alt="SmallWorld Venture"
                    className=" imageCenter"
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
                  <h1>{t("whatWeCanDo.ventureBuilding")}</h1>
                  <p>{t("whatWeCanDo.ventureBuildingText")}</p>
                  <h1>{t("whatWeCanDo.researchDev")}</h1>
                  <p>{t("whatWeCanDo.researchDevText")}</p>
                </div>
              </div>
              <div className="column seven wide">
                <div className="mobile">
                  <img
                    src="/images/venture-building.png"
                    alt="SmallWorld Venture"
                    className=" imageCenter"
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
                    className=" imageCenter"
                  />
                </div>
              </div>
              <div className="column nine wide">
                <div className="descTitle1">
                  <h1>{t("whatWeCanDo.envStewardship")}</h1>
                  <p>{t("whatWeCanDo.envStewardshipText")}</p>
                </div>
                <div className="mobileimg1">
                  <img
                    src="/images/reforest.png"
                    alt="SmallWorld Venture"
                    className="imageCenter"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default WhatWeCanDo
