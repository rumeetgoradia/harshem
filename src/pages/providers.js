import React, { useEffect } from "react"
import { Col, Row } from "react-bootstrap"
import Hero from "../components/Hero"
import {
  InfoContainer,
  StyledParagraph,
} from "../components/styles/StyledContainer"

function Providers({ setTitle }) {
  useEffect(() => {
    setTitle("Our Providers")
  }, [setTitle])
  return (
    <>
      <Hero title="Our Providers" />
      <InfoContainer header="Dr. Rita U. Goradia, MDPC">
        <Row>
          <Col xs={12} md={7}>
            <StyledParagraph>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium quae suscipit fugiat delectus velit iste facere
              expedita nisi, iusto dolor repudiandae libero error debitis aut
              nemo beatae unde soluta rem repellendus omnis id provident
              adipisci architecto inventore. Suscipit ea incidunt quisquam illo
              dolores. Ducimus, sed deserunt dolorum labore nisi praesentium
              laborum sapiente repellendus ratione est dignissimos culpa
              consectetur esse repellat obcaecati vel cupiditate corrupti! Quas,
              debitis quos? Omnis, ea incidunt.
            </StyledParagraph>
          </Col>
          <Col xs={12} md={5}>
            IMG
          </Col>
        </Row>
      </InfoContainer>
      <InfoContainer header="Dr. Concepcion Dancel" secondary>
        <Row>
          <Col xs={12} md={7}>
            <StyledParagraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto odio saepe expedita dolore mollitia itaque quia nisi ad
              eveniet minus possimus rerum consectetur, ea aliquid eaque
              suscipit molestias inventore temporibus? Voluptate qui inventore
              doloremque, quod voluptatem ad vitae nostrum perspiciatis
              necessitatibus consequuntur! Unde maxime quasi veritatis odio
              accusamus excepturi rem.
            </StyledParagraph>
          </Col>
          <Col xs={12} md={5}>
            IMG
          </Col>
        </Row>
      </InfoContainer>
    </>
  )
}

export default Providers
