import React from "react"
import { shallow } from "enzyme"
import App from "../src/App"
import toJson from 'enzyme-to-json'; //added this line


describe("App component", () => {
  
  it("App renders without crashing", () => {
    const wrapper = shallow(<App/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  
})
