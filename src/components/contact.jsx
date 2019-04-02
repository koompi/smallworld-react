import React from "react";
import Navbar from "./layouts/navbar";

const Contact = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div>
        <div className="backcontact">
          <div className="ui container">
            <div className="ui stackable two column grid contact">
              <div className="column marginInformation">
                <h2>Request e-Consulting</h2>
                <form className="ui form">
                  <div className="field">
                    <label>Your Name</label>
                    <input type="text" name="yourName" placeholder />
                  </div>
                  <div className="field">
                    <label>Name of company</label>
                    <input type="text" name="companyName" placeholder />
                  </div>
                  <div className="field">
                    <label>Your position in company</label>
                    <input type="text" name="positionCompany" placeholder />
                  </div>
                  <div className="field">
                    <label>Business e-mail</label>
                    <input type="text" name="email" placeholder />
                  </div>
                  <div className="field">
                    <label>Phone</label>
                    <input type="text" name="email" placeholder />
                  </div>
                  <button
                    className="ui button right floated positive "
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              </div>
              <div className="column marginInformation">
                <h2>Frequently asked questions</h2>
                <div className="ui accordion">
                  <div className="title active">
                    <i className="dropdown icon" />
                    What is a dog?
                  </div>
                  <div className="content active">
                    <p className="transition visible">
                      A dog is a type of domesticated animal. Known for its
                      loyalty and faithfulness, it can be found as a welcome
                      guest in many households across the world.
                    </p>
                  </div>
                </div>
                <div className="ui accordion">
                  <div className="title">
                    <i className="dropdown icon" />
                    What is a dog?
                  </div>
                  <div className="content">
                    <p className="transition visible">
                      A dog is a type of domesticated animal. Known for its
                      loyalty and faithfulness, it can be found as a welcome
                      guest in many households across the world.
                    </p>
                  </div>
                </div>
                <div className="ui accordion">
                  <div className="title">
                    <i className="dropdown icon" />
                  </div>
                  <div className="content">
                    <p className="transition visible" />
                  </div>
                </div>
                <h5>
                  <i className />
                  Frequently asked questions
                </h5>
                <p>
                  What is it like to run a business in Estonia? How to benefit
                  from the e-solutions and the efficiency of our business
                  culture? What are the opportunities in specific sectors?
                </p>
                <p>
                  What is it like to run a business in Estonia? How to benefit
                  from the e-solutions and the efficiency of our business
                  culture? What are the opportunities in specific sectors?
                </p>
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
                      <h2>Fine Us</h2>
                      <p>
                        The Cambodia Investment Agency (EIA), a part of
                        Enterprise Cambodia, is a goverment agency promoting
                        foreign investments in Cambodia and assiting internal
                        components in finding business opportunities in Cambodia
                      </p>
                      <p>
                        What is it like to run a business in Estonia? How to
                        benefit from the e-solutions and the efficiency of our
                        business culture? What are the opportunities in specific
                        sectors?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column mapone">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.6815969291333!2d104.89086411397015!3d11.574668047118776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095176305bf04b%3A0x5029dc78a50975a0!2sSmallWorld+Venture!5e0!3m2!1skm!2skh!4v1549694899483"
                  style={{ width: "100%", height: "400px", border: "none" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
