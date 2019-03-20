import React from "react"
import Textfield from "../common/Textfield"
import Button from "../common/Button"

const Searchbar = () => {
  return (
    <div className="searchbar">
      <Textfield placeholder="Enter food you want" type="text" />
      <Textfield placeholder="Enter country you want" type="text" />
      <Textfield placeholder="Enter country you want" type="text" />
      <Button classname="btn btn-danger" onSubmit="submit" text="Search" />
    </div>
  )
}
export default Searchbar
