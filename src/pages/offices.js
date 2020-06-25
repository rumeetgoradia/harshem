import { graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import React, { useEffect } from "react"
import { Col, Row } from "react-bootstrap"
import { FaFax, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"
import Hero from "../components/Hero"
import {
  InfoContainer,
  StyledParagraph,
} from "../components/styles/StyledContainer"
import offices from "../data/offices.json"
import "./styles/offices.scss"

function Offices({ setTitle, data }) {
  const { edges: officeImgs } = data.officeImgs
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

  useEffect(() => {
    setTitle("Our Offices")
  }, [setTitle])
  return (
    <div id="offices">
      <Hero title="Our Offices" />
      {offices.map((office, index) => {
        const officeImgsArr = officeImgs.filter(
          officeImg => officeImg.node.name === office.shortName
        )
        return (
          <InfoContainer
            header={office.office}
            secondary={index % 2 === 1}
            key={office.office}
          >
            <Row className="office">
              <Col xs={12} lg={6}>
                <Img
                  alt={`Harshem Family Practice — ${office.office} Office`}
                  fluid={officeImgsArr[0].node.childImageSharp.fluid}
                  className="office__img"
                  objectFit="contain"
                />
              </Col>
              <Col xs={12} lg={{ offset: 1, span: 4 }}>
                <Row xs={1} md={2} lg={1} className="office__info-container">
                  <Col className="mt-2 office__info-container__info">
                    <StyledParagraph>
                      <FaPhoneAlt />
                      <span>{office.phone}</span>
                    </StyledParagraph>
                    <StyledParagraph>
                      <FaFax />
                      <span>{office.fax}</span>
                    </StyledParagraph>
                    <StyledParagraph>
                      <a
                        href={office.googleMaps}
                        target="__blank"
                        title={`Directions to ${office.office} office (Google Maps)`}
                      >
                        <FaMapMarkerAlt />
                        <span>{office.addressLine1}</span>
                        <br />
                        <span className="second-line">
                          {office.addressLine2}
                        </span>
                      </a>
                    </StyledParagraph>
                  </Col>
                  <Col className="mt-2 office__info-container__info">
                    {days.map((day, index) => {
                      return (
                        <StyledParagraph
                          style={{ marginBottom: ".25rem" }}
                          key={`${office.office} Office ${day} Hours`}
                        >
                          <strong
                            style={{
                              fontWeight: 500,
                              textTransform: "uppercase",
                            }}
                          >
                            {day}:{" "}
                          </strong>
                          {office.hours[index]}
                        </StyledParagraph>
                      )
                    })}
                  </Col>
                </Row>
              </Col>
            </Row>
          </InfoContainer>
        )
      })}
    </div>
  )
}

export default Offices

export const query = graphql`
  query {
    officeImgs: allFile(
      sort: { order: ASC, fields: name }
      filter: { relativeDirectory: { regex: "/office/" } }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
          name
        }
      }
    }
  }
`
