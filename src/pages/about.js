import React, { useEffect } from "react"

import Hero from "../components/Hero"

export default function About({ setTitle }) {
  useEffect(() => {
    setTitle("About")
  }, [setTitle])

  return (
    <div>
      <Hero title={"About Harshem Family Practice"} />
      <div style={{ background: "white", height: 1000 }} />
    </div>
  )
}
