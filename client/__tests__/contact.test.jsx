import React from "react"
import { shallow } from "enzyme"
import Contact from "../src/components/contact"

describe("Contact component", () => {
    it("Contact renders", () => {
        const wrapper = shallow(<Contact/>)
        expect(wrapper).toMatchSnapshot()
    })
})