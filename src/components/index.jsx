import React, { Component } from "react"
import Footer from "./layouts/footer"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet"
import axios from "axios"

function strip_html_tags(str) {
  if (str === null || str === "") return false
  else str = str.toString()
  return str.replace(/<[^>]*>/g, "")
}

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggleMenu: false,
      koompi: [],
      smallworld: []
    }
  }

  componentDidMount() {
    axios
      .get(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/koompi"
      )
      .then((res) => {
        this.setState({ koompi: res.data.items })
      })
    axios
      .get(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/smallworldvc"
      )
      .then((res) => {
        this.setState({
          smallworld: res.data.items
        })
      })
  }

  toggleMenuState = () => {
    this.setState({
      toggleMenu: !this.state.toggleMenu
    })
  }

  render() {
    return (
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
            <div>
              <div
                className={this.state.toggleMenu ? "phone-background-navbar" : ""}
              >
                <div
                  className={
                    this.state.toggleMenu
                      ? "ui left demo vertical inverted labeled icon sidebar menu overlay visible mobile only slideIn"
                      : "ui left demo vertical inverted labeled icon sidebar menu overlay visible mobile only slideOut"
                  }
                  style={{}}
                >
                  <Link to="/about-us" className="item">
                    About
                  </Link>
                  <Link to="/what-we-do" className="item">
                    Works
                  </Link>
                  <Link to="/news-and-events" className="item">
                    News
                  </Link>
                  <Link to="/contact-us" className="item">
                    Contact
                  </Link>
                </div>
              </div>
              <div className="hd">
                <div className="ui secondary container menu mobile only">
                  <div className="menu left">
                    <Link to="/">
                      <img
                        src="/images/logo/sw-green.png"
                        className="logonav"
                        alt="SmallWorld Venture"
                      />
                    </Link>
                  </div>
                  <div className="menu right asize">
                    <img
                      src={
                        this.state.toggleMenu
                          ? "/images/close.png"
                          : "/images/menu.svg"
                      }
                      className="menu-icons"
                      height="30px"
                      alt=""
                      onClick={this.toggleMenuState}
                    />
                  </div>
                </div>
                <div className="ui secondary container menu mobile hidden">
                  <div className="menu left">
                    <Link to="/">
                      <img
                        src="/images/logo/sw-green.png"
                        className="logonav"
                        alt="SmallWorld Venture"
                      />
                    </Link>
                  </div>
                  <div className="menu right asize">
                    <Link to="/about-us" className="item">
                      About
                    </Link>
                    <Link to="/what-we-do" className="item">
                      Works
                    </Link>
                    <Link to="/news-and-events" className="item">
                      News
                    </Link>
                    <Link to="/contact-us" className="item">
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            </div>
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
              <div className="ui four column doubling stackable grid">
                <div className="column ">
                  <center>
                    <div className="newsDetailo">
                      <img
                        src="/images/blurb-1.png"
                        className="imageIndex"
                        alt="SmallWorld Venture"
                      />
                      <div className="shadowIndex">
                        <h4>Startup Community</h4>
                        <p>
                          SmallWorld Ventures is committed to becoming the number one
                          catalyst for funding and assisting startups in Cambodia.
                        </p>
                        <br />
                        <br />
                        <br />
                        <br />
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
                        <h4>Seed Equity Investments</h4>
                        <p>
                          Seed Equity Investments are provided to promising startup
                          teams with projects ranging between 5,000 to 25,000 USD.
                        </p>
                        <br />
                        <br />
                        <br />
                        <br />
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
                        <h4>Venture Building</h4>
                        <p>
                          Smallworld Ventures has built an internal team of
                          technicians engaged in research and development projects
                          with an aim to spin off new ventures.
                        </p>
                        <br />
                        <br />
                        <br />
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
                        <h4>Ecovillage Development </h4>
                        <p>
                          At our rural ecovillage project, we're building a hands-on
                          learning, working, and living environment with a balance
                          among the natural world, education, economics, and
                          sustainable living practices.
                        </p>
                        <br />
                        <br />
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
                  <h1>Have some ideas for new venture?</h1>
                  <p>
                    We're looking for new approaches to problem solving and creating
                    business.Do you have an innovative idea for a startup venture?
                  </p>
                  <p>
                    Or maybe you have a skillset in mind that you want to develop as
                    you work within our existing SmallWorld venture.
                  </p>
                  <p>
                    We're open to discussing your own startup ideas, however
                    unconventional, regardless of age, gender, or nationality.
                  </p>
                  <p>Send us a message!</p>
                  <Link to="/contact-us">
                    <button className="ui basic button btnInformation">
                      CONTACT US
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="ui container margin-buttons">
            <h2 className="newsAndEvent">Community Update</h2>
            <div className="ui stackable three column equal height stretched grid">
              {this.state.smallworld.slice(0, 3).map((data, index) => {
                return (
                  <div className="column" key={data.title}>
                    <div className="shadowEvent">
                      <a
                        className="newsDetail"
                        href={data.guid}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {data.thumbnail.match(/[^/]+(jpg|png|gif|jpeg)$/) ? (
                          <div
                            style={{
                              backgroundImage: `url(${data.thumbnail})`,
                              height: "200px",
                              backgroundPosition: "center center",
                              backgroundSize: "cover"
                            }}
                          />
                        ) : (
                          <div
                            style={{
                              backgroundImage: `url("/images/default_img.png")`,
                              height: "200px",
                              backgroundPosition: "center center",
                              backgroundSize: "cover"
                            }}
                          />
                        )}

                        <div className="backgroundEvent">
                          <center>
                            <h3>{data.title}</h3>
                          </center>
                          <br />
                          <p>
                            {strip_html_tags(data.content.substring(0, 110) + "...")}
                          </p>
                          <p className="badge">{data.author}</p>
                        </div>
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="ui container margin-buttons">
            <h2 className="newsAndEvent">KOOMPI News</h2>
            <div className="ui stackable three column equal height stretched grid">
              {/* {console.log(this.state.smallworld)} */}
              {this.state.koompi.slice(0, 3).map((data, index) => {
                return (
                  <div className="column" key={data.title}>
                    <div className="shadowEvent">
                      <a className="newsDetail" href={data.guid}>
                        <div
                          style={{
                            backgroundImage: `url(${data.thumbnail})`,
                            height: "200px",
                            backgroundPosition: "center center",
                            backgroundSize: "cover"
                          }}
                        />
                        <div className="backgroundEvent">
                          <center>
                            <h3>{data.title}</h3>
                          </center>
                          <br />
                          <p>
                            {strip_html_tags(data.content.substring(0, 110) + "...")}
                          </p>
                          <p className="badge">{data.author}</p>
                        </div>
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Index
