import React from "react"
import { shallow } from "enzyme"
import Navbar from "../src/components/layouts/navbar"

describe("Navbar component", () => {
  it("Navbar renders without crashing", () => {
    const wrapper = shallow(<Navbar />)
    expect(wrapper).toMatchSnapshot()
  })
})
