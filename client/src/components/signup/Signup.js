import React, { Component } from "react"
import Inputfield from "../common/Textfield"
import Button from "../common/Button"
import "./signup.scss"
import Video from "../utlis/Videos.mp4"

class Signup extends Component {
  state = { name: "", password: "", password1: "", email: "" }
  ChangeHandaler = e => {
    const target = e.target
    const name = target.name
    const value = target.value
    this.setState({ [name]: value })
  }
  render() {
    return (
      <div className="signup">
        <video src={Video} type="video/mp4" autoPlay loop />
        <div className="background" />
        <div className="content">
          <span>
            <label>User name</label>
            <br />
            <Inputfield
              type="text"
              name="name"
              onChange={this.ChangeHandaler}
            />
          </span>
          <span>
            <label>Email</label>
            <br />
            <Inputfield
              type="text"
              name="email"
              onChange={this.ChangeHandaler}
            />
          </span>
          <span>
            <label>Password</label>
            <br />
            <Inputfield
              type="Password"
              name="password"
              onChange={this.ChangeHandaler}
            />
          </span>
          <span>
            <label>Password</label>
            <br />
            <Inputfield
              type="Password"
              name="password1"
              onChange={this.ChangeHandaler}
            />
          </span>
          <span>
            <Button text="Sign In" />
          </span>
        </div>
      </div>
    )
  }
}

export default Signup
