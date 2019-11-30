import React from "react"
import { shallow } from "enzyme"
import About from "../src/components/about"

describe("About component", () => {
    it("about renders", () => {
        const wrapper = shallow(<About/>)
    })
})