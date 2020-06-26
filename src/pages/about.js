import React, { useEffect } from "react"
import { Col, Row } from "react-bootstrap"
import Hero from "../components/Hero"
import {
  InfoContainer,
  StyledParagraph,
} from "../components/styles/StyledContainer"
import content from "../data/content.json"
import Logo from "../images/logo/logo.inline.svg"
import "./styles/about.scss"

export default function About({ setTitle }) {
  useEffect(() => {
    setTitle("About")
  }, [setTitle])

  return (
    <div>
      <Hero title={"About Harshem Family Practice"} />
      <InfoContainer header="Welcome to Harshem Family Practice!">
        <Row id="about-intro">
          <Col xs={12} md={8}>
            {content.desc.map((descPar, index) => {
              return (
                <StyledParagraph
                  className={`${
                    index === content.desc.length - 1 ? "mb-0" : ""
                  }`}
                  key={`description-paragraph-${index}`}
                >
                  {descPar}
                </StyledParagraph>
              )
            })}
          </Col>
          <Col xs={12} md={4}>
            <Logo id="about-intro__logo" />
          </Col>
        </Row>
      </InfoContainer>
      <InfoContainer header="Our Mission" secondary>
        <StyledParagraph className="mb-0">{content.mission}</StyledParagraph>
      </InfoContainer>
    </div>
  )
}
