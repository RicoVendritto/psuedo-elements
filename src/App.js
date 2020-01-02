import React, { Component } from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";

//Customer components
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Contact from "./components/Contact";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/home" render={() => <Main />} />
          <Route path="/about" render={() => <About />} />
          <Route path="/contact" render={() => <Contact />} />
          <Route path="/" render={() => <Main />} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
