import React, { Component } from "react";
import Navbar from "./layouts/navbar";
import { Helmet } from "react-helmet";
import Footer from "./layouts/footer";

class Contact extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Contac Us | SmallWorld Venture</title>
        </Helmet>
        <Navbar />
        <div>
          <div className="backcontact">
            <div className="ui container">
              <div className="ui stackable two column grid contact">
                <div className="column marginInformation">
                  <h2>Inquiries Request</h2>
                  <form className="ui form">
                    <div className="field">
                      <label>Name</label>
                      <input type="text" />
                    </div>

                    <div className="field">
                      <label>Email</label>
                      <input type="email" />
                    </div>

                    <div className="field">
                      <label>Message</label>
                      <textarea cols="20" rows="10" />
                    </div>

                    <button
                      className="ui button floated positive btnSubmit"
                      type="submit"
                    >
                      Submit
                    </button>
                  </form>
                </div>
                <div className="column marginInformation">
                  <h2>FAQ</h2>
                  <h4>Hello World</h4>
                  <p>This is hello world from SAN Vuthy.</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="mapsize">
              <div className="ui stackable two column grid">
                <div className="column backFineus">
                  <div className="ui stackable two column grid">
                    <div className="column" />
                    <div className="column">
                      <div className="paddingsize">
                        <h2>Trigon Startup Village</h2>
                        <p>
                          We look forward to welcome you at any working hour.
                          Though, most of the time there are someone at
                          SmallWorld. There are several startups in the same
                          building, so make sure you know who you are looking
                          for. Otherwise, be prepare for a little adventure.
                        </p>
                        <p>
                          Look at the map, between the street 600, 602, and 313!
                          We have a crazy idea. Maybe not too crazy, but we plan
                          to nurture to be a cozy little startup village, called
                          TK Trigon. Want to help us make it happen? Come walk
                          around and feel it yourself.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column mapone">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.6815969291333!2d104.89086411397015!3d11.574668047118776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095176305bf04b%3A0x5029dc78a50975a0!2sSmallWorld+Venture!5e0!3m2!1skm!2skh!4v1549694899483"
                    style={{ width: "100%", height: "400px", border: "none" }}
                    title="SmallWorld Venture Map"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Contact;
