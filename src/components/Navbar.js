import "./styles/Navbar.scss"

import DrawerToggle from "./DrawerToggle"
import { Link } from "gatsby"
import Logo from "../images/logo/logo.inline.svg"
import React from "react"
import { useEffect } from "react"
import { useState } from "react"

function Navbar({ handleToggleClick, open }) {
  const [isScrolled, setScrolled] = useState(window.scrollY > 75)

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
    <header
      className={`navbar${isScrolled ? " navbar--scrolled" : ""}${
        open ? " navbar--open" : ""
      }`}
    >
      <nav className="navbar__navigation">
        <div className="navbar__brand">
          <Link to="/" className="navbar__brand__link">
            <Logo />
          </Link>
        </div>
        <div className="navbar__spacer"></div>
        <div
          className={`navbar__toggler${open ? " navbar__toggler--open" : ""}`}
        >
          <DrawerToggle
            handleToggleClick={handleToggleClick}
            open={open}
            isScrolled={isScrolled}
          />
        </div>
        <div
          className={`navbar__nav-items${
            isScrolled ? " navbar__nav-items--scrolled" : ""
          }`}
        >
          <ul>
            <li>
              <Link
                to="/"
                title="Home"
                activeClassName="navbar__nav-link--active"
                className="navbar__nav-link"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                title="About"
                activeClassName="navbar__nav-link--active"
                className="navbar__nav-link"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                title="Contact"
                activeClassName="navbar__nav-link--active"
                className="navbar__nav-link"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
