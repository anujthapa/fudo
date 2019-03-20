import React from "react"

const ImageSilder = ({ link, alt }) => {
  return (
    <div className="image-silder">
      <img src={link} alt={alt} />
    </div>
  )
}
export default ImageSilder
