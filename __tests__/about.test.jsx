import React from "react"
import { shallow } from "enzyme"
import AboutPage from "../src/components/about"

describe("About component", () => {
    it("about renders", () => {
        const wrapper = shallow(<AboutPage/>)
        expect(wrapper).toMatchSnapshot()
    })
})