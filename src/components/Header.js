import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../images/small.png"
import { Nav, Collapse, NavbarToggler, NavItem } from "reactstrap"
import { FaBars } from "react-icons/fa"

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)
  return (
    <div className="navbar navbar-expand-sm navMenu navbar-fixed-top ">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="logo" width="199" height="36" />
      </Link>

      <NavbarToggler className="fabars-icon" onClick={toggle}>
        <FaBars />
      </NavbarToggler>
      <Collapse navbar isOpen={isOpen}>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </NavItem>

          <NavItem>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/services" className="nav-link">
              Services
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/blog" className="nav-link">
              Blog
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </div>
  )
}
