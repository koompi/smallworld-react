import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="ft-background">
        <div className="ui container">
          <div className="footer">
            <div className="ui stackable four column grid">
              <div className="column">
                <div className="ftsize">
                  <a href="#">
                    <p>Opportunities</p>
                  </a>
                  <a href="#">
                    <p>News &amp; events</p>
                  </a>
                  <a href="#">
                    <p>Useful links</p>
                  </a>
                  <a href="#">
                    <p>Contac Us</p>
                  </a>
                </div>
              </div>
              <div className="column">
                <a href="#">
                  <p>Tern &amp; Condition</p>
                </a>
                <a href="#">
                  <p>Policy Uses</p>
                </a>
                <a href="#">
                  <p>Legal System</p>
                </a>
              </div>
              <div className="column" />
              <div className="column">
                <a href="#">
                  <div className="ui header footerIcon">
                    <img
                      className="ui image  footerIcon"
                      src="/images/socialMedia/telegram.svg"
                    />
                    <div className="content ">Telegram</div>
                  </div>
                </a>
                <a href="#">
                  <div className="ui header footerIcon">
                    <img
                      className="ui image  footerIcon"
                      src="/images/socialMedia/facebook.svg"
                    />
                    <div className="content ">Facebook</div>
                  </div>
                </a>
                <a href="#">
                  <div className="ui header footerIcon">
                    <img
                      className="ui image  footerIcon"
                      src="/images/socialMedia/twitter.svg"
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
