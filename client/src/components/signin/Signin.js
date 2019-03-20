import React, { Component } from "react"
import Inputfield from "../common/Textfield"
import Button from "../common/Button"
import "./signin.scss"
import Video from "../utlis/Videos.mp4"

class Signin extends Component {
  state = { name: "", password: "" }
  ChangeHandaler = e => {
    const target = e.target
    const name = target.name
    const value = target.value
    this.setState({ [name]: value })
  }
  render() {
    return (
      <div className="signin">
        <video src={Video} type="video/mp4" autoPlay loop />
        <div className="background" />
        <div className="content">
          <span>
            <label>User name</label>
            <br />
            <Inputfield
              type="text"
              name="username"
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
            <Button text="Sign In" type="submit" />
          </span>
        </div>
      </div>
    )
  }
}
export default Signin
