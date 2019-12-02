import React from "react"
import { shallow } from "enzyme"
import News from "../src/components/news-and-events"

describe("News component", () => {
  it("News renders without crashing", () => {
    const wrapper = shallow(<News />)
    expect(wrapper).toMatchSnapshot()
  })
})
