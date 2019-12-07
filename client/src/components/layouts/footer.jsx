import React from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import SocialLink from "../../data/socialLinks.json"

const Footer = () => {
  const { t } = useTranslation()
  return (
    <>
      <div className="ft-background">
        <div className="ui container">
          <div className="footer">
            <div className="ui stackable four column grid">
              <div className="column">
                <div className="ftsize">
                  <Link to="/news-and-events">
                    <p>{t("footer.about")}</p>
                  </Link>
                  <Link to="/what-we-do">
                    <p>{t("footer.work")}</p>
                  </Link>
                  <Link to="/news-and-events">
                    <p>{t("footer.news")}</p>
                  </Link>
                  <Link to="/contact-us">
                    <p>{t("footer.contact")}</p>
                  </Link>
                </div>
              </div>
              <div className="column" />
              <div className="column" />
              <div className="column">
                {SocialLink.map((data) => {
                  return (
                    <a href={data.link} key={data.id}>
                      <div className="ui header footerIcon">
                        <img
                          className="ui image  footerIcon"
                          src={data.srcImage}
                          alt={data.alt}
                        />
                        <div className="content ">{data.name}</div>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>
            <div className="ui stackable four column grid centerme">
              <div className="column" />
              <div className="column" />
              <div className="column" />
              <div className="column">
                <center>
                  <img
                    src="/images/logo/Logo_SW_Gray.png"
                    className="imgfooter"
                    alt="SmallWorld"
                  />
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
