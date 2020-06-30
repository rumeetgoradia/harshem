import React, { useEffect } from "react"
import Hero from "../components/Hero"
import {
  MasonryInfo,
  StyledMasonry,
  StyledMasonryBox,
} from "../components/StyledMasonry"
import {
  InfoContainer,
  StyledParagraph,
} from "../components/styles/StyledContainer"
import plans from "../data/plans.json"

function Plans({ setTitle }) {
  useEffect(() => {
    setTitle("Accepted Insurance Plans")
  }, [setTitle])

  return (
    <>
      <Hero title="Accepted Insurance Plans" />
      <InfoContainer header="Insurance Plans">
        <StyledParagraph>
          We participate with most insurance plans as listed below.
        </StyledParagraph>
        <StyledMasonry
          breakpointCols={MasonryInfo.breakpoints}
          className={MasonryInfo.className}
          columnClassName={MasonryInfo.columnClassName}
        >
          {plans.map((plan, index) => {
            return (
              <StyledMasonryBox key={`plan-${index}`}>
                <h1>{plan.plan}</h1>
                {plan.notes ? <h2>{plan.notes}</h2> : null}
              </StyledMasonryBox>
            )
          })}
        </StyledMasonry>
      </InfoContainer>
    </>
  )
}

export default Plans
