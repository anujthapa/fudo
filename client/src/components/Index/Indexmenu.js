import React from "react"

const Indexmenu = ({ link, alt, heading }) => {
  return (
    <div
      className="indexmenu"
      alt={alt}
      style={{ backgroundImage: "url(" + { link } + ")" }}
    >
      <div className="image">
        <img src={link} />
        <div className="content">
          <figure>
            <div>
              <span>{heading}</span>
              <span>Visit</span>
            </div>
          </figure>
        </div>
      </div>
    </div>
  )
}
export default Indexmenu
