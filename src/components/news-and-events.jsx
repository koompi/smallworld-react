import React, { Component } from "react";
import Footer from "./layouts/footer";
import { Helmet } from "react-helmet";
import Navbar from "./layouts/navbar";
import axios from "axios";

function strip_html_tags(str) {
  if (str === null || str === "") return false;
  else str = str.toString();
  return str.replace(/<[^>]*>/g, "");
}

class News extends Component {
  state = {
    toggleMenu: false,
    koompi: [],
    smallworld: []
  };
  componentDidMount() {
    // fetch(
    //   "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@smallworldventure"
    // )
    //   .then(res => res.json())
    //   .then(data => {
    //     // Fillter the array
    //     const res = data.items; //This is an array with the content. No feed, no info about author etc..
    //     this.setState({ smallworld: res });
    //     // const posts = res.filter(item => item.categories.length > 0); // That's the main trick* !
    //   });
    axios
      .get(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@koompi"
      )
      .then(res => {
        this.setState({ koompi: res.data.items });
      });
    axios
      .get(
        "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40smallworldventure"
      )
      .then(res => {
        this.setState({
          smallworld: res.data.items
        });
      });
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>SmallWorld Venture</title>
        </Helmet>
        <div>
          <Navbar />
          <br />
          <br />
          <div className="ui container margin-buttons">
            <h2 className="newsAndEvent">Community Update</h2>
            <div className="ui stackable three column grid">
              {this.state.smallworld.slice(0, 6).map((data, index) => {
                return (
                  <div className="column" key={data.title}>
                    <div className="indexShadow">
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
                            {strip_html_tags(
                              data.content.substring(0, 110) + "..."
                            )}
                          </p>
                          <p className="badge">{data.author}</p>
                        </div>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="ui container margin-buttons">
            <h2 className="newsAndEvent">KOOMPI News</h2>
            <div className="ui stackable three column grid">
              {console.log(this.state.smallworld)}
              {this.state.koompi.slice(0, 6).map((data, index) => {
                return (
                  <div className="column" key={data.title}>
                    <div className="indexShadow">
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
                            {strip_html_tags(
                              data.content.substring(0, 110) + "..."
                            )}
                          </p>
                          <p className="badge">{data.author}</p>
                        </div>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default News;
