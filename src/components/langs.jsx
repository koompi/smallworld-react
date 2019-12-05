import React from "react"
import { withTranslation } from "react-i18next"
import i18n from "../i18n"

function LanguageToggle() {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div>
      <button onClick={() => changeLanguage("kh")} type="button" className="item">
        Khmer
      </button>
      <button onClick={() => changeLanguage("en")} type="button" className="item">
        English
      </button>
    </div>
  )
}

export default withTranslation("translation")(LanguageToggle)
