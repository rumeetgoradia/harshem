// 490512

import "bootstrap/dist/css/bootstrap.min.css"

import NavbarContainer from "../components/NavbarContainer"
import React from "react"
import SEO from "../components/seo"
import { createGlobalStyle } from "styled-components"
import { useState } from "react"

require("typeface-roboto")

const GlobalStyle = createGlobalStyle`
	:root {
		--primary: rgb(95, 18, 37);
		--secondary: rgb(128, 113, 95);
		--base: rgb(223, 219, 210);
		--black: rgb(3,25,38);
		--white: rgb(251, 249, 255);
		--primary-text-shadow: 0 0 4px rgba(95, 18, 37, 0.75);
		--black-text-shadow: 0 0 2px rgba(3,25,38, 0.5);
	}

	html, 
	body {
		height: 100%;
	}
	
  	body {
	    color: var(--black);
		background-color: var(--white);
		font-family: "Roboto", sans-serif;
		font-weight: 400;
  	}
`

export default ({ children }) => {
  const [title, setTitle] = useState("")

  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, { setTitle })
  )

  return (
    <>
      <GlobalStyle />
      <SEO title={title} />
      {/* <NavbarContainer /> */}
      {childrenWithProps}
    </>
  )
}
