import React, { Component } from "react"
import { connect } from "react-redux"
import { PropTypes } from "prop-types"
import { withRouter } from "react-router-dom"
import { addReciepe } from "../../redux/action/foodAction"
class Addform extends Component {
  state = {
    name: "",
    ingridents: "",
    desc: "",
    type: "",
    process: []
  }
  saveSubmit = e => {
    e.preventDefault()
    const newFood = {
      name: this.state.name,
      ingridents: this.state.ingridents,
      desc: this.state.desc,
      type: this.state.type,
      process: this.state.process
    }
    console.log(newFood)
    this.props.addReciepe(newFood, this.props.history)
  }
  onChangeHandaler = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <form className="m-5" onSubmit={this.saveSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="Name">Name</label>
            <input
              type="text"
              className="form-control"
              id="Name"
              name="name"
              placeholder="Name of the dish"
              onChange={this.onChangeHandaler}
            />
          </div>
          <div className="form-group col-md-6">
            <label for="Indrignts">Ingridents</label>
            <input
              type="text"
              className="form-control"
              id="Indrignts"
              name="ingridents"
              placeholder="tomatoes sauce, garlic paste"
              onChange={this.onChangeHandaler}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputCity">Description</label>
            <input
              type="text"
              className="form-control"
              id="Desc"
              name="desc"
              placeholder="Description here "
              onChange={this.onChangeHandaler}
            />
          </div>
          <div className="form-group col-md-6">
            <label for="Indrignts">Type</label>
            <input
              type="text"
              className="form-control"
              id="type"
              name="type"
              placeholder="tomatoes sauce, garlic paste"
              onChange={this.onChangeHandaler}
            />
          </div>
        </div>
        <div className="form-group">
          <label for="Desc">Process</label>
          <textarea
            rows="4"
            cols="50"
            type="text"
            className="form-control"
            id="Process"
            name="process"
            placeholder="Please explain the process "
            onChange={this.onChangeHandaler}
          />
        </div>
        <div className="form-group">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-outline-success">
          Submit
        </button>
        <button type="button" className="btn btn-outline-warning m-1">
          Cancel
        </button>
      </form>
    )
  }
}
Addform.propTypes = {
  addReciepe: PropTypes.func.isRequired,
  foodmenu: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  foodmenu: state.auth
})
export default connect(
  mapStateToProps,
  { addReciepe }
)(withRouter(Addform))
