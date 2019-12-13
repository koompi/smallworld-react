import React, { useState, useCallback } from "react"
import Navbar from "./layouts/navbar"
import AboutSpaces from "./Spaces/about_space"
import WorkingSpace from "./Spaces/working_space"
import ContactSpace from "./Spaces/contact_space"
import Footer from "./layouts/footer"

import Gallery from "react-photo-gallery"
import Carousel, { Modal, ModalGateway } from "react-images"
import photos from "./photos.json"

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
                Working community of professionals, creatives and artises
              </h2>
              <div>
                <h5 className="startFrom">Starting from</h5>
                <button className="ui button btnPrice">$99/month</button>
                <div>
                  <img
                    src="/images/download-arrow.svg"
                    alt=""
                    className="arrow_down"
                  />
                </div>
              </div>
            </div>
            <div class="nine wide column">
              <img
                src="/images/spaces/smallworld_realty_banner.png"
                alt=""
                className="ui image fluid"
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
        <WorkingSpace />
      </section>
      <section>
        <ContactSpace />
      </section>
      <section className="space-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7182637245687!2d104.91695171526824!3d11.57204344716677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951c496f2d0dd%3A0x4b66e87f6ff3eca4!2sSmallWorld%20Realty%20(Raintree)!5e0!3m2!1sen!2skh!4v1576049171896!5m2!1sen!2skh"
          style={{ width: "100%", height: "400px", border: "none" }}
          title="SmallWorld Venture Map"
        />
      </section>
      <Footer />
    </>
  )
}

export default Realty
