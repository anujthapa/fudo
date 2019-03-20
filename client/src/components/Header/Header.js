import React from "react"
import "./header.scss"
import { NavLink } from "react-router-dom"
class Header extends React.Component {
  state = {
    active: false
  }
  changeClass = () => {}
  render() {
    return (
      <div className="header">
        <div className="header-top" />
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
      </div>
    )
  }
}
export default Header
