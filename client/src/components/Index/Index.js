import React from "react"
import IndexMenu from "./Indexmenu"
import "./index.scss"
import { PropTypes } from "prop-types"
import { connect } from "react-redux"
import { getPost } from "../../redux/action/foodAction"
import { data } from "../utlis/data"
class Index extends React.Component {
  render() {
    console.log(this.props.index)
    return (
      <div className="index">
        <div className="index-slider">
          <div id="slider">
            <figure>
              {data.map(item => (
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

          <IndexMenu link={data[0].img} heading="Breakfast" />
          <IndexMenu link={data[2].img} heading="Lunch" />
          <IndexMenu link={data[3].img} heading="Dinner" />
        </div>
      </div>
    )
  }
}

export default Index
