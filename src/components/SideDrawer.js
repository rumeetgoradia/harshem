import "./styles/SideDrawer.scss"

import { Link } from "gatsby"
import React from "react"

function SideDrawer({ show }) {
  return (
    <nav className={`side-drawer${show ? " side-drawer--show" : ""}`}>
      <ul>
        <li>
          <Link
            to="/"
            title="Home"
            activeClassName="side-drawer__nav-link--active"
            className="side-drawer__nav-link"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            title="About"
            activeClassName="side-drawer__nav-link--active"
            className="side-drawer__nav-link"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            title="Contact"
            activeClassName="side-drawer__nav-link--active"
            className="side-drawer__nav-link"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default SideDrawer
