import React, { Component } from "react"
import Searchbar from "./Searchbar"
import Foodcard from "./Foodcard"

import "./food.scss"
import { connect } from "react-redux"
import { PropTypes } from "prop-types"
import { getData } from "../../redux/action/indexAction"

class Food extends Component {
  componentWillMount() {
    this.props.getData()
  }
  render() {
    return (
      <div className="food">
        <div className="searchbar">
          <Searchbar />
        </div>
        <div className="foodcard">
          {this.props.index.map(item => (
            <Foodcard
              img={item.img}
              heading={item.name}
              ingredients={item.indrignts.map(item => item + ",")}
              desc={item.desc}
              process={item.process.map(item => (
                <li>{item}</li>
              ))}
              alt={item.alt}
            />
          ))}
        </div>
      </div>
    )
  }
}
Food.propTypes = {
  index: PropTypes.object.isRequired,
  getData: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
  index: state.index.foodmenu
})
export default connect(
  mapStateToProps,
  { getData }
)(Food)
