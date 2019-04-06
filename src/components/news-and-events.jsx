import React from "react";
import Footer from "./layouts/footer";
// import { Link } from "react-router-dom";
import Data from "../data/NewsAndEvents.json";
import { Helmet } from "react-helmet";
import Navbar from "./layouts/navbar";

const News = () => {
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
          <div className="ui stackable four column grid">
            {Data.map((data, News) => {
              return (
                <div className="column" key={data.id}>
                  <a className="newsDetail" href="/about">
                    <img
                      src={data.image}
                      className="ui fluid image"
                      alt={data.title}
                    />
                    <br />
                    <center>
                      <h3>{data.title}</h3>
                    </center>
                    <br />
                    <p>{data.description}</p>
                    <p>{data.tags}</p>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default News;
