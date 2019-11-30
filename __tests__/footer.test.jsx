import React from "react"
import { shallow } from "enzyme"
import Footer from "../src/components/layouts/footer"

describe("Footer component", () => {
    it("Footer renders without crashing", () => {
        const wrapper = shallow(<Footer/>)
        expect(wrapper).toMatchSnapshot()
    })
})