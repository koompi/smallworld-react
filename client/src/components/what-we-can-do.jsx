import React from "react"
import { Helmet } from "react-helmet"
import { useTranslation } from "react-i18next"

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
                  <p>{t("whatWeCanDo.seedFormative")}</p>
                  <p>{t("whatWeCanDo.seedFund")}</p>
                  <p>{t("whatWeCanDo.seedPartication")}</p>
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
                  <p>{t("whatWeCanDo.ventureKoompi")}</p>
                  <p>{t("whatWeCanDo.ventureProduct")}</p>
                  <p>{t("whatWeCanDo.ventureDescProduct")}</p>
                  <p>{t("whatWeCanDo.ventureKoompiGoal")}</p>
                  <h1>{t("whatWeCanDo.researchDev")}</h1>
                  <p>{t("whatWeCanDo.researchDevText")}</p>
                  <p>{t("whatWeCanDo.researchEngagment")}</p>
                  <p>{t("whatWeCanDo.researchFundamentals")}</p>
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
                  <p>{t("whatWeCanDo.envIntro")}</p>
                  <p>{t("whatWeCanDo.envStrive")}</p>
                  <p>{t("whatWeCanDo.envVitamineAir")}</p>
                  <p>{t("whatWeCanDo.envVitamineAirProject")}</p>
                  <p>{t("whatWeCanDo.envAdditionalItems")}</p>
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
    </>
  )
}

export default WhatWeCanDo
