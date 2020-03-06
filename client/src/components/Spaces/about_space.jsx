import React, { useState } from "react"
function AboutSpaces() {
  const [change, setchange] = useState({
    value: "about"
  })
  const handleChagne = (e) => {
    setchange({ value: e.target.value })
  }

  return (
    <div className="ui container">
      <div className="aboutSpaceHeight">
        <div class="ui stackable two column grid">
          <div className="five wide column">
            <select
              value={change.value}
              onChange={handleChagne}
              style={{
                background: "none",
                fontSize: "26px",
                height: "60px",
                border: "none",
                fontWeight: "700",
                marginTop: "-15px",
                color: "#015e98"
              }}
              multiple=""
              class="ui dropdown"
            >
              <option value="about">About Smallworld</option>
              <option value="SmallWorld-Realty">SmallWorld Realty</option>
              <option value="smallWorld-pteasboran">Smallworld PteasBoran</option>
            </select>
          </div>
          <div className="eleven wide column">
            {change.value === "about" ? (
              <React.Fragment>
                <p>
                  SmallWorld provides professional shared workspace and business
                  accelerator space where freelancers, newly forming and existing
                  enterprises can collaborate in a professional, productive, flexible
                  and innovative workspace with established experts.
                </p>
                <p>
                  SmallWorld Realty spaces are located and designed to be an integral
                  hub for the Southeast Asian business and startup community offering
                  the benefits you have come to expect from a full service provider.{" "}
                </p>
                <p>
                  We are all tied together with a professional scene that gives you
                  unlimited opportunities.
                </p>
              </React.Fragment>
            ) : null}
            {change.value === "SmallWorld-Realty" ? (
              <React.Fragment>
                <p>
                  If you are looking for a professional, corporate-style work space
                  in the heart of the city, SmallWorld Raintree might be your best
                  fit. We offer full-range services from high-speed wifi, utilities,
                  meeting room(s), and event spaces. What’s more? Most people know
                  where Raintree is so you don’t have to break a sweat giving
                  directions to your clients.
                </p>
              </React.Fragment>
            ) : null}
            {change.value === "smallWorld-pteasboran" ? (
              <React.Fragment>
                <p>
                  What if your team likes your space a little unconventional? We’d
                  like to introduce you to a more homely option. Small World Pteas
                  Boran offers multiple array of rooms to choose from, each of which
                  has its own charm. It isn’t your typical white-wall, glass-door
                  kind of room and maybe that is why your team might like it more!
                </p>
              </React.Fragment>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSpaces
