import React, { Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import TextField from "../common/Textfield"
import Bottom from "../common/Button"
import Foodcard from "../Food/Foodcard"
import Addform from "./Addform"
import { NavLink } from "react-router-dom"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import {
  getCurrentProfile,
  clearCurrentProfile,
  setProfileLoading
} from "../../redux/action/profileAction"
import "./dashboard.scss"

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile()
  }
  render() {
    const { user } = this.props.auth
    return (
      <div className="dashboard">
        <div className="header">
          <div className="name">
            <h1>HI,{user.name}</h1>
          </div>
          <div className="menu">
            <NavLink to="dashboard/add">
              <Bottom text="ADD" />
            </NavLink>
          </div>
        </div>
        <Addform />
      </div>
    )
  }
}
Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  clearCurrentProfile: PropTypes.func.isRequired,
  setProfileLoading: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
})
export default connect(
  mapStateToProps,
  { getCurrentProfile, clearCurrentProfile, setProfileLoading }
)(Dashboard)
