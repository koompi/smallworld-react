import React, { useState, useCallback } from "react"
import Navbar from "./layouts/navbar"
import AboutSpaces from "./Spaces/about_space"
import Whysmallworldrealty from "./Spaces/why_smallworld_realty"
import Smallworldraintry from "./Spaces/small_world_raintree"
import SmallworldPteasBoran from "./Spaces/small_world_pteas_boran"
import Footer from "./layouts/footer"

import Gallery from "react-photo-gallery"
import Carousel, { Modal, ModalGateway } from "react-images"
import photos from "./photos.json"
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll"

function Realty() {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  return (
    <>
      <Navbar />
      <section className="bannerSection">
        <div className="ui container">
          <div class="ui stackable two column grid">
            <div class="seven wide column">
              <h2 className="spacesSectionOneTitle">
                Working community of professionals, creatives and artists
              </h2>
              <div>
                <h5 className="startFrom">Starting from</h5>
                <button className="ui button btnPrice">$99/month</button>
                <div>
                  <Link
                    to="aboutSpaceHeight"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <img
                      style={{ cursor: "pointer" }}
                      src="/images/download-arrow.svg"
                      alt=""
                      className="arrow_down"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div class="nine wide column">
              <img
                src="/images/spaces/smallworld_realty_banner.png"
                alt=""
                className="ui image fluid banner-realty"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <AboutSpaces />
      </section>
      <section>
        <div className="ui container">
          <Gallery photos={photos} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={photos.map((x) => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
      </section>
      <section>
        <Whysmallworldrealty />
      </section>
      {/* <section>
        <Smallworldraintry />
      </section>
      <section>
        <SmallworldPteasBoran />
      </section> */}
      {/* <section className="space-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7182637245687!2d104.91695171526824!3d11.57204344716677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951c496f2d0dd%3A0x4b66e87f6ff3eca4!2sSmallWorld%20Realty%20(Raintree)!5e0!3m2!1sen!2skh!4v1576049171896!5m2!1sen!2skh"
          style={{ width: "100%", height: "400px", border: "none" }}
          title="SmallWorld Venture Map"
        />
      </section> */}
      <section>
        <div className="mapsize">
          <div className="ui stackable two column grid">
            <div className="column back-contact-spaces">
              <div className="ui stackable two column grid">
                <div className="column" />
                <div className="column">
                  <div className="paddingsize">
                    <h2>Contact Us</h2>
                    <h3>Phone</h3>
                    <p>+855 (0) 17 669 881</p>
                    <p>+855 (0) 17 669 881</p>
                    <h3>Email</h3>
                    <p>realtysmallworld@gmail.com</p>
                    <h3>Location</h3>
                    <p>
                      RAINTREE: #299 Preah Ang Doung, Wat Phnom, Daun Penh, Phnom
                      Penh
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="column mapone">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7182637245687!2d104.91695171526824!3d11.57204344716677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951c496f2d0dd%3A0x4b66e87f6ff3eca4!2sSmallWorld%20Realty%20(Raintree)!5e0!3m2!1sen!2skh!4v1576049171896!5m2!1sen!2skh"
                style={{ width: "100%", height: "400px", border: "none" }}
                title="SmallWorld Venture Map"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Realty
