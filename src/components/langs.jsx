import React from "react"
import i18n from "../i18n"
import { withTranslation } from "react-i18next"

function LanguageToggle({ t }) {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    console.log(lng)
  }

  return (
    <div>
      <button onClick={() => changeLanguage("kh")}>kh</button>
      <button onClick={() => changeLanguage("en")}>en</button>
    </div>
  )
}

export default withTranslation()(LanguageToggle)
