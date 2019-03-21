import React from "react"
import "./header.scss"
import { NavLink } from "react-router-dom"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { logOutUser } from "../../redux/action/authAction"
class Header extends React.Component {
  state = {
    active: false
  }
  changeClass = () => {}

  onLogoutclick = e => {
    e.preventDefault()
    this.props.logOutUser()
  }
  render() {
    const { isAuthenticated, user } = this.props.auth
    console.log(user.avatar)
    const authLinks = (
      <div className="header-main">
        <li>
          <NavLink className="navlink" exact to="/">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink" to="/food">
            FOOD
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink" to="/about">
            ABOUT US
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink" to="/signin">
            SIGN IN
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink" to="/signup">
            SIGN UP
          </NavLink>
        </li>
      </div>
    )
    const guestLinks = (
      <div className="header-main">
        <li>
          <NavLink className="navlink" exact to="/">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink" to="/food">
            FOOD
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink" to="/about">
            ABOUT US
          </NavLink>
        </li>
        <li>
          <a href="#" className="navlink" onClick={this.onLogoutclick}>
            <img
              className="rounded-circle"
              src={user.avatar}
              alt={user.name}
              style={{ width: "25px", marginRight: "5px" }}
            />
            LOGOUT
          </a>
        </li>
      </div>
    )
    return (
      <div className="header">
        <div className="header-top" />
        {isAuthenticated ? guestLinks : authLinks}
      </div>
    )
  }
}
Header.propType = {
  logOutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
  auth: state.auth
})
export default connect(
  mapStateToProps,
  { logOutUser }
)(Header)
