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
            <NavDropdown.Item className="navbar__nav__dropdown__item">
              <Link
                to="/about"
                title="About Us"
                activeClassName="navbar__nav-link--active"
                className="navbar__nav__dropdown-link"
              >
                About Us
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item className="navbar__nav__dropdown__item">
              <Link
                to="/providers"
                title="Our Providers"
                activeClassName="navbar__nav__dropdown-link--active"
                className="navbar__nav__dropdown-link"
              >
                Our Providers
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item className="navbar__nav__dropdown__item">
              <Link
                to="/offices"
                title="Our Offices"
                activeClassName="navbar__nav__dropdown-link--active"
                className="navbar__nav__dropdown-link"
              >
                Our Offices
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item className="navbar__nav__dropdown__item">
              <Link
                to="/services"
                title="Our Services"
                activeClassName="navbar__nav__dropdown-link--active"
                className="navbar__nav__dropdown-link"
              >
                Our Services
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item className="navbar__nav__dropdown__item">
              <Link
                to="/insuranceplans"
                title="Accepted Insurance Plans"
                activeClassName="navbar__nav__dropdown-link--active"
                className="navbar__nav__dropdown-link"
              >
                Accepted Insurance Plans
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title="Patient"
            id="navbar__nav__dropdown__2"
            className="navbar__nav__dropdown"
          >
            <NavDropdown.Item className="navbar__nav__dropdown__item">
              <Link
                to="/registration"
                title="New Patient Registration"
                activeClassName="navbar__nav__dropdown-link--active"
                className="navbar__nav__dropdown-link"
              >
                New Patient Registration
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item className="navbar__nav__dropdown__item">
              <Link
                to="/appointment"
                title="Request an Appointment"
                activeClassName="navbar__nav__dropdown-link--active"
                className="navbar__nav__dropdown-link"
              >
                Request an Appointment
              </Link>
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
