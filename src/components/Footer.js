import React from "react"
import { Row } from "reactstrap"
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"
import { Link } from "gatsby"
export const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <footer>
      <div className="container-fluid py-5">
        <Row className="text-center">
          <div className="col-md-4">
            <h5>Have Questions?</h5>

            <Link to="/contact" className="footer-links">
              Contact
            </Link>
            <br />
            <Link to="/blog" className="footer-links">
              News
            </Link>
          </div>
          <div className="col-md-4">
            <h5>Our Hours</h5>

            <p>Monday: 9am-10pm</p>
            <p>Tuesday: 9am-11pm</p>
            <p>Wednesday: 9am-11pm</p>
            <p>Thursday: 9am-11pm</p>
            <p>Friday: 9am-11pm</p>
            <p>Saturday: 10am-8pm</p>
          </div>
          <div className="col-md-4">
            <h5>Follow us</h5>

            <div className="d-flex justify-content-around">
              <span className="social-icons">
                <FaFacebook />
              </span>
              <span className="social-icons">
                <FaTwitter />
              </span>
              <span className="social-icons">
                <FaInstagram />
              </span>
            </div>
          </div>
          <div className="col-12 copy">
            <p>All Rights Reserved &copy; {date}</p>
          </div>
        </Row>
      </div>
    </footer>
  )
}
