import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import useForm from "react-hook-form"
import Swal from "sweetalert2"
import axios from "axios"
import { useTranslation } from "react-i18next"

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
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, errors, reset } = useForm()

  const onSubmit = async (data) => {
    // console.log(data);
    // https://mail.getgrood.com/api/form
    await setTimeout(() => {
      setLoading(false)
    }, 3000)

    await axios
      .post("https://mail.smallworldventure.com/api/form", { ...data })
      .then(() => {
        Toast.fire({
          icon: "success",
          title: "Your message has been sent."
        })
      })
    reset()
  }

  const { t } = useTranslation()
  return (
    <>
      <Helmet>
        <title>{t("contact.contactTitle")}</title>
      </Helmet>
      <div>
        <div className="backcontact">
          <div className="ui container">
            <div className="ui stackable two column grid contact">
              <div className="column marginInformation">
                <h2>{t("contact.inquiries")}</h2>
                <form className="ui form" onSubmit={handleSubmit(onSubmit)}>
                  <div className={errors.fullname ? "field error" : "field"}>
                    <label>Full Name</label>
                    <input
                      type="text"
                      name="fullname"
                      ref={register({ required: true })}
                    />
                    {errors.fullname && (
                      <span className="ui text-danger">
                        {t("contact.nameErrorMsg")}
                      </span>
                    )}
                  </div>

                  <div className={errors.email ? "field error" : "field"}>
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      ref={register({ required: true })}
                    />
                    {errors.email && (
                      <span className="ui text-danger">
                        {t("contact.emailErrorMsg")}
                      </span>
                    )}
                  </div>

                  <div className={errors.message ? "field error" : "field"}>
                    <label>Message</label>
                    <textarea
                      cols="20"
                      rows="10"
                      name="message"
                      ref={register({ required: true })}
                    />
                    {errors.message && (
                      <span className="ui text-danger">
                        {t("contact.messageErrorMsg")}
                      </span>
                    )}
                  </div>

                  <button
                    className="ui button floated positive btnSubmit"
                    disabled={
                      errors.fullname || errors.email || errors.message || loading
                        ? true
                        : false
                    }
                  >
                    {loading ? "Loading ..." : "Submit"}
                    type="submit" >
                  </button>
                </form>
              </div>
              <div className="column marginInformation">
                <h2>{t("contact.ourOffice")}</h2>
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
                      <a
                        href="https://goo.gl/maps/9qBKccPdT81iKQYa9"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        #92 E1K, St.19m Doun Penh, Phnom Penh, Cambodia
                      </a>
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
                      <a
                        href="mailto:smallworldventure@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        smallworldventure@gmail.com
                      </a>
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
                      <h2>{t("contact.trigonStartup")}</h2>
                      <p>{t("contact.trigonMessage")}</p>
                      <p>{t("contact.locationTrigon")}</p>
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
    </>
  )
}

export default Contact
