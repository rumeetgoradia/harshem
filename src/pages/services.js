import React, { useEffect } from "react"
import Hero from "../components/Hero"
import {
  MasonryInfo,
  StyledMasonry,
  StyledMasonryBox,
} from "../components/StyledMasonry"
import { InfoContainer } from "../components/styles/StyledContainer"
import services from "../data/services.json"

function Services({ setTitle }) {
  useEffect(() => {
    setTitle("Our Services")
  }, [setTitle])

  return (
    <>
      <Hero title="Our Services" />
      {services.map((category, categoryIndex) => {
        return (
          <InfoContainer
            key={`${category}-services`}
            header={category.category}
            secondary={categoryIndex % 2 === 1}
          >
            <StyledMasonry
              breakpointCols={MasonryInfo.breakpoints}
              className={MasonryInfo.className}
              columnClassName={MasonryInfo.columnClassName}
            >
              {category.services.map((service, serviceIndex) => {
                return (
                  <StyledMasonryBox key={`${category}-service-${serviceIndex}`}>
                    <h1>{service.service}</h1>
                    {service.notes ? <h2>{service.notes}</h2> : null}
                    {service.onlyAt ? <h3>{service.onlyAt} Only</h3> : null}
                  </StyledMasonryBox>
                )
              })}
            </StyledMasonry>
          </InfoContainer>
        )
      })}
    </>
  )
}

export default Services
