import React, { useEffect } from "react"
import { Col, Row } from "react-bootstrap"
import Hero from "../components/Hero"
import {
  InfoContainer,
  StyledParagraph,
} from "../components/styles/StyledContainer"
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
            <StyledParagraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              culpa temporibus repudiandae veniam ratione ea cupiditate illum
              repellat provident, distinctio fugiat amet autem officia error
              deleniti! Temporibus cum tempora suscipit tenetur quibusdam
              ratione, eaque veritatis? Facilis quidem veniam facere quibusdam
              obcaecati ipsam, ut et dignissimos animi aliquid iste odit alias
              distinctio quae at reiciendis libero explicabo nesciunt commodi
              numquam aperiam dolorum eos illum voluptatum! Aliquid totam
              dolores debitis quaerat sint error blanditiis eius! Similique non
              dolores, ut odit minima eos ad qui neque aspernatur, nihil sunt
              dignissimos natus voluptatem ipsam atque sequi suscipit esse
              aliquam?
            </StyledParagraph>
            <StyledParagraph>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
              labore illum aperiam. Veniam quae amet ratione explicabo harum,
              similique voluptatibus voluptatum quos rem fugiat fugit
              necessitatibus. Illo dicta error laboriosam suscipit porro quod
              exercitationem inventore impedit dolorum, aliquam pariatur numquam
              soluta distinctio? Laborum, officiis facilis.
            </StyledParagraph>
          </Col>
          <Col xs={12} md={4}>
            <Logo id="about-intro__logo" />
          </Col>
        </Row>
      </InfoContainer>
      <InfoContainer header="Our Mission" secondary>
        <StyledParagraph>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet ea
          tempora ut? Nam quam iste perferendis, magni corrupti nisi pariatur.
        </StyledParagraph>
      </InfoContainer>
    </div>
  )
}
