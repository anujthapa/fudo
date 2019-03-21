import React, { Component } from "react"
import Header from "./components/Header/Header"
import Footer from "./components/footer/Footer"
import Index from "./components/Index/Index"
import About from "./components/about/About"
import Food from "./components/Food/Food"
import Signin from "./components/signin/Signin"
import Signup from "./components/signup/Signup"
import Dashbaord from "./components/dashboard/Dashboard"
import Addform from "./components/dashboard/Addform"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import store from "./store"
import "./App.scss"
import setAuthToken from "./components/utlis/setAuthToken"
import jwt_decode from "jwt-decode"
import { setCurrentUser, logOutUser } from "./redux/action/authAction"
import { connect } from "react-redux"
import { getPost } from "./redux/action/foodAction"

if (localStorage.jwtToken) {
  //set tokan to Auth header
  setAuthToken(localStorage.jwtToken)
  //decode token to get user data
  const decoded = jwt_decode(localStorage.jwtToken)
  //set current user
  store.dispatch(setCurrentUser(decoded))

  //check for expire tokon
  const currentTime = Date.now() / 1000
  if (decoded.exp < currentTime) {
    store.dispatch(logOutUser())

    //clear current profile
    /* store.dispatch(clearCurrentProfile()) */

    //redirect to login
    window.location.href = "/login"
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/about" component={About} />
            <Route path="/food" component={Food} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route path="/dashboard" component={Dashbaord} />
            <Route path="/dashboard/add" component={Addform} />
          </Switch>
        </Router>
        <Footer />
      </div>
    )
  }
}

export default App
