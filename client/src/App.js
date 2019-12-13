import React, { Suspense } from "react"
import { BrowserRouter as Router, Switch, Redirect, Route } from "react-router-dom"
import Index from "./components/index"
import AboutPage from "./components/about"
import WhatWeCanDo from "./components/what-we-can-do"
import Contact from "./components/contact"
import News from "./components/news-and-events"
import "./App.css"
import Realty from "./components/realty"
import SnowStorm from "react-snowstorm"

function App() {
  return (
    <Suspense fallback="Loading ...">
      <SnowStorm />
      <Router>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/about-us" component={AboutPage} />
          <Route exact path="/what-we-do" component={WhatWeCanDo} />
          <Route exact path="/news-and-events" component={News} />
          <Route exact path="/contact-us" component={Contact} />
          <Route exact path="/sw-realty" component={Realty} />
          <Route exact path="/spaces" component={Realty} />
          <Redirect to="/" component={Index} />
        </Switch>
      </Router>
    </Suspense>
  )
}

export default App
