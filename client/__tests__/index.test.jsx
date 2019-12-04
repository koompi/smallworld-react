import React from "react"
import { shallow } from "enzyme"
import Index from "../src/components/index"

describe("Index component", () => {
    it("Index renders without crashing", () => {
        const wrapper = shallow(<Index/>)
        expect(wrapper).toMatchSnapshot()
    })
})