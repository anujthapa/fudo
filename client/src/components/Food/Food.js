import React, { Component } from "react"
import Searchbar from "./Searchbar"
import Foodcard from "./Foodcard"

import "./food.scss"
import { connect } from "react-redux"
import { PropTypes } from "prop-types"
import { getPost } from "../../redux/action/foodAction"
import { data } from "../utlis/data"

class Food extends Component {
  render() {
    return (
      <div className="food">
        <div className="searchbar">
          <Searchbar />
        </div>
        <div className="foodcard">
          {data.map(item => (
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

export default Food
