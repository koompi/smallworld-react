import React, { useEffect } from "react"
import { Helmet } from "react-helmet"
import Navbar from "./layouts/navbar"
import Footer from "./layouts/footer"
import useForm from "react-hook-form"
import Swal from "sweetalert2"
import axios from "axios"

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 5000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer)
    toast.addEventListener("mouseleave", Swal.resumeTimer)
  }
})

const Contact = () => {
  const { register, handleSubmit, watch, errors, reset } = useForm()

  const onSubmit = (data) => {
    // console.log(data);
    // https://mail.getgrood.com/api/form
    axios.post("http://localhost:4041/api/form", { ...data }).then(() => {
      Toast.fire({
        icon: "success",
        title: "Your message has been sent."
      })
    })
    reset()
  }

  return (
    <>
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
                <form className="ui form" onSubmit={handleSubmit(onSubmit)}>
                  <div className="field">
                    <label>Full Name</label>
                    <input
                      type="text"
                      name="fullname"
                      ref={register({ required: true })}
                    />
                    {errors.fullname && (
                      <span className="ui text-danger">
                        Full Name field is required
                      </span>
                    )}
                  </div>

                  <div className="field">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      ref={register({ required: true })}
                    />
                    {errors.email && (
                      <span className="ui text-danger">Email field is required</span>
                    )}
                  </div>

                  <div className="field">
                    <label>Message</label>
                    <textarea
                      cols="20"
                      rows="10"
                      name="message"
                      ref={register({ required: true })}
                    />
                    {errors.message && (
                      <span className="ui text-danger">
                        Message field is required
                      </span>
                    )}
                  </div>

                  <button className="ui button floated positive btnSubmit">
                    Submit
                  </button>
                </form>
              </div>
              <div className="column marginInformation">
                <h2>Our Office</h2>
                <div className="ui grid">
                  <div className="two wide column">
                    <center>
                      <img
                        src="/images/socialMedia/address.png"
                        className="ui image fluid"
                        alt="Address"
                      />
                    </center>
                  </div>
                  <div className="fourteen wide column">
                    <span className="contactFontSize">
                      #92 E1K, St.19m Doun Penh, Phnom Penh, Cambodia
                    </span>
                  </div>
                </div>
                <div className="ui grid">
                  <div className="two wide column">
                    <center>
                      <img
                        src="/images/socialMedia/email.png"
                        className="ui image fluid contactIcon"
                        alt="Address"
                      />
                    </center>
                  </div>
                  <div className="twelve wide column">
                    <span className="contactFontSize">
                      smallworldventure@gmail.com
                    </span>
                  </div>
                </div>
                <div className="ui grid">
                  <div className="two wide column">
                    <center>
                      <img
                        src="/images/socialMedia/telegram.png"
                        className="ui image fluid contactIcon"
                        alt="Email"
                      />
                    </center>
                  </div>
                  <div className="twelve wide column">
                    <span className="contactFontSize">
                      <a
                        href="https://t.me/smallworldventure"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        <p className="contactFontSize">t.me/smallworldventure</p>
                      </a>
                    </span>
                  </div>
                </div>
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
                        We look forward to welcome you at any working hour. Though,
                        most of the time there are someone at SmallWorld. There are
                        several startups in the same building, so make sure you know
                        who you are looking for. Otherwise, be prepare for a little
                        adventure.
                      </p>
                      <p>
                        Look at the map, between the street 600, 602, and 313! We
                        have a crazy idea. Maybe not too crazy, but we plan to
                        nurture to be a cozy little startup village, called TK
                        Trigon. Want to help us make it happen? Come walk around and
                        feel it yourself.
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
    </>
  )
}

export default Contact
