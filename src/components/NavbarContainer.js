import React, { useState } from "react"

import Backdrop from "./Backdrop"
import Navbar from "./Navbar"
import SideDrawer from "./SideDrawer"

function NavbarContainer() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)

  const handleToggleClick = () => {
    setSideDrawerOpen(!sideDrawerOpen)
  }

  const handleBackdropClick = () => {
    setSideDrawerOpen(false)
  }

  return (
    <>
      <Navbar handleToggleClick={handleToggleClick} open={sideDrawerOpen} />
      <SideDrawer show={sideDrawerOpen} />
      <Backdrop onClick={handleBackdropClick} show={sideDrawerOpen} />
    </>
  )
}

export default NavbarContainer
