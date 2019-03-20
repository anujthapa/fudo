import React from "react"

const Textfield = ({
  text,
  onclick,
  onhover,
  name,
  placeholder,
  type,
  onChange
}) => {
  return (
    <input
      className="search-text"
      onClick={onclick}
      onHover={onhover}
      placeholder={placeholder}
      name={name}
      type={type}
      onChange={onChange}
    />
  )
}
export default Textfield
