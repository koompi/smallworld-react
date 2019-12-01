import React from "react"
import { shallow } from "enzyme"
import Doing from "../src/components/what-we-can-do"

describe("What we can do component", () => {
    it("What we can do renders without crashing", () => {
        const wrapper = shallow(<Doing/>)
        expect(wrapper).toMatchSnapshot()
    })
})