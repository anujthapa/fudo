import React from "react"

const Button = ({ onsubmit, text, classname }) => {
  return (
    <div>
      <button onsubmit={onsubmit} className={classname}>
        {text}
      </button>
    </div>
  )
}
export default Button
