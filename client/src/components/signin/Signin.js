import React, { Component } from "react"
import Inputfield from "../common/Textfield"
import Button from "../common/Button"
import "./signin.scss"
import Video from "../utlis/Videos.mp4"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { loginUser } from "../../redux/action/authAction"

class Signin extends Component {
  state = { email: "", password: "" }
  ChangeHandaler = e => {
    const target = e.target
    const name = target.name
    const value = target.value
    this.setState({ [name]: value })
  }
  onSubmitHandaler = e => {
    e.preventDefault()
    const newUser = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.loginUser(newUser)
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard")
    }
  }
  render() {
    return (
      <div className="signin">
        <video src={Video} type="video/mp4" autoPlay loop />
        <div className="background" />
        <div className="content">
          <form onSubmit={this.onSubmitHandaler}>
            <span>
              <label>User name</label>
              <br />
              <Inputfield
                type="email"
                name="email"
                onChange={this.ChangeHandaler}
                value={this.state.name}
              />
            </span>
            <span>
              <label>Password</label>
              <br />
              <Inputfield
                type="Password"
                name="password"
                value={this.state.password}
                onChange={this.ChangeHandaler}
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
Signin.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
  auth: state.auth
})
export default connect(
  mapStateToProps,
  { loginUser }
)(Signin)
