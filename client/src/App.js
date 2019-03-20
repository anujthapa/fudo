import React, { Component } from "react"
import Header from "./components/Header/Header"
import Footer from "./components/footer/Footer"
import Index from "./components/Index/Index"
import About from "./components/about/About"
import Food from "./components/Food/Food"
import Signin from "./components/signin/Signin"
import Signup from "./components/signup/Signup"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store"
import "./App.scss"

class App extends Component {
 
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <Header />
            <Switch>
              <Route exact path="/" component={Index} />
              <Route path="/about" component={About} />
              <Route path="/food" component={Food} />
              <Route path="/signin" component={Signin} />
              <Route path="/signup" component={Signup} />
            </Switch>
          </Router>
          <Footer />
        </div>
      </Provider>
    )
  }
}

export default App
