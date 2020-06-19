import "./styles/DrawerToggle.scss"

import React from "react"

function DrawerToggle({ handleToggleClick, open, isScrolled }) {
  return (
    <button className="toggle-button" onClick={handleToggleClick}>
      <div
        className={`toggle-button__line${
          open ? " toggle-button__line--open" : ""
        }${isScrolled ? " toggle-button__line--scrolled" : ""}`}
      />
    </button>
  )
}

export default DrawerToggle
