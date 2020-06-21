import "./styles/DrawerToggle.scss"

import React from "react"

function DrawerToggle({ handleToggleClick }) {
  return (
    <button className="toggle-button" onClick={handleToggleClick}>
      <div className={`toggle-button__line`} />
    </button>
  )
}

export default DrawerToggle
