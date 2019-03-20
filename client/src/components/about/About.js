import React from "react"
import "./about.scss"
import { Link } from "react-router-dom"

const About = () => {
  return (
    <div className="container">
      <div className="title">ABOUT US</div>
      <h2 className="description">
        We provide a wide range of Food reciepe. Its free and abaliable for
        everyone. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Aliquam accusantium saepe delectus atque a dicta quos pariatur expedita
        ad quisquam?Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Sunt, odio! Magni deleniti aperiam autem consectetur quam blanditiis
        veniam. Illo consequuntur quas praesentium dolorem nesciunt provident
        nostrum alias quo voluptas. Corrupti molestias facilis, ducimus
        obcaecati quidem iusto esse eos cupiditate deserunt
      </h2>
      <div className="row">
        <div className="col-3">
          <span>Portfolio</span>
          <Link to="#">
            <i
              className="fa fa-briefcase fa-5x animated fadeIn"
              aria-hidden="true"
            />
          </Link>
        </div>
        <div className="col-3">
          <span>Services</span>
          <Link to="#">
            <i className="fa fa-cogs fa-5x" aria-hidden="true" />
          </Link>
        </div>
        <div className="col-3">
          <span>Contact</span>
          <Link to="#">
            <i className="fa fa-globe fa-5x" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  )
}
export default About
