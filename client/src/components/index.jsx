import React, { Component } from "react"
import Footer from "./layouts/footer"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet"
import axios from "axios"
import Navbar from "./layouts/navbar"

import SmallWorldMission from "../data/mission.json"

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
        this.setState({
          koompi: res.data.items
        })
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
            <h2
              className="newsAndEvent"
              style={{
                marginTop: "60px"
              }}
            >
              Community Update
            </h2>
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
