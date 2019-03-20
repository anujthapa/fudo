import React from "react"
import IndexMenu from "./Indexmenu"
import "./index.scss"
import { PropTypes } from "prop-types"
import { connect } from "react-redux"
import { getData } from "../../redux/action/indexAction"

class Index extends React.Component {
  componentWillMount() {
    this.props.getData()
  }
  render() {
    console.log(this.props.index)
    return (
      <div className="index">
        <div className="index-slider">
          <div id="slider">
            <figure>
              {this.props.index.map(item => (
                <img src={item.img} />
              ))}
            </figure>
          </div>
          <div className="slider-hero" />
        </div>

        <div className="index-menu">
          <div className="heading">
            <h1>Our Menu</h1>
          </div>
        </div>
      </div>
    )
  }
}
Index.propTypes = {
  index: PropTypes.object.isRequired,
  getData: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
  index: state.index.foodmenu
})

export default connect(
  mapStateToProps,
  { getData }
)(Index)
