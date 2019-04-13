import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="ft-background">
        <div className="ui container">
          <div className="footer">
            <div className="ui stackable four column grid">
              <div className="column">
                <div className="ftsize">
                  <Link to="/news-and-events">
                    <p>News &amp; events</p>
                  </Link>
                  <Link to="/contact-us">
                    <p>Contac Us</p>
                  </Link>
                </div>
              </div>
              <div className="column" />
              <div className="column" />
              <div className="column">
                <a href="telegram">
                  <div className="ui header footerIcon">
                    <img
                      className="ui image  footerIcon"
                      src="/images/socialMedia/telegram.svg"
                      alt="SmallWorld-Venture"
                    />
                    <div className="content ">Telegram</div>
                  </div>
                </a>
                <a href="https://www.facebook.com/smallworldventure/">
                  <div className="ui header footerIcon">
                    <img
                      className="ui image  footerIcon"
                      src="/images/socialMedia/facebook.svg"
                      alt="SmallWorld-Venture Facebook"
                    />
                    <div className="content ">Facebook</div>
                  </div>
                </a>
                <a href="https://twitter.com/smallworldvc">
                  <div className="ui header footerIcon">
                    <img
                      className="ui image  footerIcon"
                      src="/images/socialMedia/twitter.svg"
                      alt="SmallWorld Twitter"
                    />
                    <div className="content ">Twitter</div>
                  </div>
                </a>
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
    </React.Fragment>
  );
};

export default Footer;
