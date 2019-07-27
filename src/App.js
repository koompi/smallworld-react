import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Index from "./components/index";
import AboutPage from "./components/about";
import WhatWeCanDo from "./components/what-we-can-do";
import Contact from "./components/contact";
import News from "./components/news-and-events";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class App extends Component {
  render() {
    window.scrollTo(0, 0);
    return (
      <div className="App">
        <TransitionGroup>
          <CSSTransition classNames="fade" key={window.location} timeout={200}>
            <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/home" component={Index} />
              <Route exact path="/about-us" component={AboutPage} />
              <Route exact path="/what-we-do" component={WhatWeCanDo} />
              <Route exact path="/news-and-events" component={News} />
              <Route exact path="/contact-us" component={Contact} />
              <Redirect to="/" component={Index} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

const styles = {};

styles.fill = {
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
};

styles.content = {
  ...styles.fill,
  top: "40px",
  textAlign: "center"
};

export default App;
