import React from "react"

const Foodcard = ({ img, desc, heading, process, ingredients, alt }) => {
  return (
    <div className="card">
      <div className="image ">
        <img src={img} alt={alt} />
      </div>
      <div className="content">
        <h1>{heading}</h1>
        <h4>{ingredients}</h4>
        <p>{desc}</p>
        <button
          class="btn btn-sm btn-primary"
          type="button"
          data-toggle="collapse"
          data-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          see more
        </button>
        <div class="collapse" id="collapseExample">
          <div class="card card-body">
            <ul key="item">{process}</ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Foodcard
