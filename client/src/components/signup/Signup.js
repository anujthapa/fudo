import React, { Component } from "react"
import Inputfield from "../common/Textfield"
import Button from "../common/Button"
import "./signup.scss"
import { withRouter } from "react-router-dom"
import Video from "../utlis/Videos.mp4"
import { connect } from "react-redux"
import { registerUser } from "../../redux/action/authAction"
import PropTypes from "prop-types"

class Signup extends Component {
  state = { name: "", password: "", password1: "", email: "" }
  ChangeHandaler = e => {
    const target = e.target
    const name = target.name
    const value = target.value
    this.setState({ [name]: value })
  }
  onSubmitHandaler = e => {
    e.preventDefault()
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password1: this.state.password1
    }
    this.props.registerUser(newUser, this.props.history)
  }
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard")
    }
  }
  render() {
    return (
      <div className="signup">
        <video src={Video} type="video/mp4" autoPlay loop />
        <div className="background" />
        <div className="content">
          <form onSubmit={this.onSubmitHandaler}>
            <span>
              <label>User name</label>
              <br />
              <Inputfield
                type="text"
                name="name"
                onChange={this.ChangeHandaler}
                value={this.state.name}
              />
            </span>
            <span>
              <label>Email</label>
              <br />
              <Inputfield
                type="text"
                name="email"
                onChange={this.ChangeHandaler}
                value={this.state.email}
              />
            </span>
            <span>
              <label>Password</label>
              <br />
              <Inputfield
                type="Password"
                name="password"
                onChange={this.ChangeHandaler}
                value={this.state.password}
              />
            </span>
            <span>
              <label>Password</label>
              <br />
              <Inputfield
                type="Password"
                name="password1"
                onChange={this.ChangeHandaler}
                value={this.state.password1}
              />
            </span>
            <span>
              <Button text="Sign In" type="submit" />
            </span>
          </form>
        </div>
      </div>
    )
  }
}
Signup.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Signup))
