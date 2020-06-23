import "./styles/Header.scss"

import { Nav, NavDropdown, Navbar } from "react-bootstrap"

import { Link } from "gatsby"
import Logo from "../images/logo/logo.inline.svg"
import React from "react"
import { useEffect } from "react"
import { useState } from "react"

// import DrawerToggle from "./DrawerToggle"

function NavToggle({ open }) {
  return (
    <div className="toggle-button">
      <div
        className={`toggle-button__line${
          open ? " toggle-button__line--open" : ""
        }`}
      />
    </div>
  )
}

function Header() {
  const [isScrolled, setScrolled] = useState(window.scrollY > 75)
  const [isExpanded, setExpanded] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleScroll = () => {
    const bodyScrollTop =
      document.documentElement.scrollTop || document.body.scrollTop
    setScrolled(bodyScrollTop > 75 || window.scrollY > 75)
  }

  return (
    <Navbar
      expand="md"
      className={`navbar${isScrolled ? " navbar--scrolled" : ""}${
        isExpanded ? " navbar--expanded" : ""
      }`}
      id="navbar"
      expanded={isExpanded}
      onSelect={() => setExpanded(false)}
    >
      <Navbar.Brand id="navbar__brand">
        <Link to="/" id="navbar__brand__link">
          <Logo />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="navbar__nav"
        id="navbar__toggler"
        onClick={() => setExpanded(prev => !prev)}
      >
        <NavToggle open={isExpanded} />
      </Navbar.Toggle>
      <Navbar.Collapse id="navbar__nav">
        <Nav className="ml-auto">
          <Link
            to="/"
            title="Home"
            activeClassName="navbar__nav__link--active"
            className="navbar__nav__link"
          >
            Home
          </Link>
          <NavDropdown
            title="Information"
            id="navbar__nav__dropdown__1"
            className="navbar__nav__dropdown"
          >
            <NavDropdown.Item
              as={Link}
              to="/about"
              title="About Us"
              activeClassName="navbar__nav__dropdown__link--active"
              className="navbar__nav__dropdown__link"
            >
              About Us
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/providers"
              title="Our Providers"
              activeClassName="navbar__nav__dropdown__link--active"
              className="navbar__nav__dropdown__link"
            >
              Our Providers
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/offices"
              title="Our Offices"
              activeClassName="navbar__nav__dropdown__link--active"
              className="navbar__nav__dropdown__link"
            >
              Our Offices
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/services"
              title="Our Services"
              activeClassName="navbar__nav__dropdown__link--active"
              className="navbar__nav__dropdown__link"
            >
              Our Services
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/insuranceplans"
              title="Accepted Insurance Plans"
              activeClassName="navbar__nav__dropdown__link--active"
              className="navbar__nav__dropdown__link"
            >
              Accepted Insurance Plans
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title="Patient"
            id="navbar__nav__dropdown__2"
            className="navbar__nav__dropdown"
          >
            <NavDropdown.Item
              as={Link}
              to="/registration"
              title="New Patient Registration"
              activeClassName="navbar__nav__dropdown__link--active"
              className="navbar__nav__dropdown__link"
            >
              New Patient Registration
            </NavDropdown.Item>

            <NavDropdown.Item
              as={Link}
              to="/appointment"
              title="Request an Appointment"
              activeClassName="navbar__nav__dropdown__link--active"
              className="navbar__nav__dropdown__link"
            >
              Request an Appointment
            </NavDropdown.Item>
          </NavDropdown>
          <Link
            to="/contact"
            title="Contact Us"
            activeClassName="navbar__nav__link--active"
            className="navbar__nav__link"
          >
            Contact Us
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
