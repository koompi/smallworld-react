import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Index from "./components/index";
import AboutPage from "./components/about";
import WhatWeCanDo from "./components/what-we-can-do";
import Contact from "./components/contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/home" component={Index} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/what-we-can-do" component={WhatWeCanDo} />
          <Route exact path="/contact-us" component={Contact} />
        </Switch>
      </div>
    );
  }
}

export default App;
