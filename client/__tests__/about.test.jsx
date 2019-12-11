import React from "react"
import { shallow } from "enzyme"
import AboutPage from "../src/components/about"
import { useTranslation } from "react-i18next"
import { I18n, I18nextProvider } from 'react-i18next';

const { t } = jest ? {t:s=>s} : useTranslation();
// https://github.com/i18next/react-i18next/issues/434

describe("About component", () => {
    it("about renders", () => {
        const wrapper = shallow(<AboutPage/>)
        expect(wrapper).toMatchSnapshot()
    })
})