import React from "react"
import "./footer.scss"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-dot">
        <h1>FUDO</h1>
      </div>

      <div className="copyright">
        &copy;anujthapa {new Date().getFullYear()}
      </div>
      <div className="socialmedia">
        <i className="fab fa-facebook" />
        <i className="fab fa-instagram" />
        <i className="fab fa-twitter" />
      </div>
      <div className="subscribe">
        <div className="login_bar">
          <span className="login" placeholder="xyz@gmail.com" />
          <span className="subscribe_button" onclick="subscribeOnClick()">
            subscribe
          </span>
        </div>
      </div>
    </div>
  )
}
export default Footer
