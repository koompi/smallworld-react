import React, { Component } from "react"
import axios from "axios"
import { Helmet } from "react-helmet"
import Footer from "./layouts/footer"
import Navbar from "./layouts/navbar"

function stripHtmlTags(str) {
  if (str === null || str === "") return false
  return str.replace(/<[^>]*>/g, "")
}

class News extends Component {
  constructor(props) {
    super(props)
    this.state = {
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

  render() {
    const { smallworld, koompi } = this.state
    return (
      <div>
        <Helmet>
          <title>News and Events</title>
          <meta name="description" content="Community Update, KOOMPI News" />
        </Helmet>
        <div>
          <Navbar />
          <br />
          <br />
          <div className="ui container margin-buttons">
            <h2 className="newsAndEvent">Community Update</h2>
            <div className="ui stackable three column equal height stretched grid">
              {smallworld.slice(0, 6).map((data) => {
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
                            {stripHtmlTags(`${data.content.substring(0, 110)}...`)}
                          </p>
                          <p className="badge">{data.author}</p>
                        </div>
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>
            <br /> <br />
            <center>
              <a
                href="https://medium.com/@smallworldvc"
                rel="noopener noreferrer"
                target="_blank"
              >
                <button
                  className="ui button floated positive btnSubmit"
                  type="submit"
                >
                  Load More
                </button>
              </a>
            </center>
          </div>
          <div className="ui container margin-buttons">
            <h2 className="newsAndEvent">KOOMPI News</h2>
            <div className="ui stackable three column equal height stretched grid">
              {koompi.slice(0, 6).map((data) => {
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
                            {stripHtmlTags(`${data.content.substring(0, 110)}...`)}
                          </p>
                          <p className="badge">{data.author}</p>
                        </div>
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>
            <br /> <br />
            <center>
              <a
                href="https://medium.com/@koompi"
                rel="noopener noreferrer"
                target="_blank"
              >
                <button
                  className="ui button floated positive btnSubmit"
                  type="submit"
                >
                  Load More
                </button>
              </a>
            </center>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default News
