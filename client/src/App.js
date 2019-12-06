import React, { Suspense } from "react"
import { BrowserRouter as Router, Switch, Redirect, Route } from "react-router-dom"
import Index from "./components/index"
import AboutPage from "./components/about"
import WhatWeCanDo from "./components/what-we-can-do"
import Contact from "./components/contact"
import NewsComponent from "./components/news-and-events"
import Navbar from "./components/layouts/navbar"
import Footer from "./components/layouts/footer"

function App() {
  return (
    <Suspense fallback="loading">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/about-us" component={AboutPage} />
          <Route path="/what-we-do" component={WhatWeCanDo} />
          <Route path="/news-and-events" component={NewsComponent} />
          <Route path="/contact-us" component={Contact} />
          <Redirect to="/" component={Index} />
        </Switch>
        <Footer />
      </Router>
    </Suspense>
  )
}

export default App
