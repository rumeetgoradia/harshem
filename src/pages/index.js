import { graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import React, { useEffect } from "react"
import { Carousel, Col, Container, Row } from "react-bootstrap"
import { FaFax, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"
import { FiMapPin, FiPhone } from "react-icons/fi"
import { BorderedLink } from "../components/styles/StyledClickables"
import {
  InfoContainer,
  StyledParagraph,
} from "../components/styles/StyledContainer"
import content from "../data/content.json"
import offices from "../data/offices.json"
import Logo from "../images/logo/logo.inline.svg"
import "./styles/index.scss"

function OfficeCard({ office, officeImg }) {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  return (
    <div className="office-card mx-auto">
      <div className="office-card__img-container">
        <Img
          alt={`Harshem Family Practice — ${office.office} Office`}
          fluid={officeImg.node.childImageSharp.fluid}
          className="office-card__img-container__img"
          objectFit="contain"
        />
      </div>
      <div className="office-card__content">
        <h1 className="mb-3">{office.office}</h1>
        <Row xs={1} sm={2} md={1} lg={2}>
          <Col className="office-card__content__ph-add">
            <p className="mb-2">
              <FaPhoneAlt />
              <span>{office.phone}</span>
            </p>
            <p className="mb-2">
              <FaFax />
              <span>{office.fax}</span>
            </p>
            <p className="mb-2">
              <FaMapMarkerAlt />
              <span>{office.addressLine1}</span>
              <br />
              <span className="second-line">{office.addressLine2}</span>
            </p>
          </Col>
          <Col className="office-card__content__hours">
            <div className="office-card__content__hours__info">
              {days.map((day, index) => {
                return (
                  <p key={`${office.office} Office ${day} Hours`}>
                    <strong>{day}: </strong>
                    {office.hours[index]}
                  </p>
                )
              })}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default function Index({ setTitle, data }) {
  const { edges: heroImgs } = data.heroImgs
  const { edges: officeImgs } = data.officeImgs

  useEffect(() => {
    setTitle("")
  }, [setTitle])

  return (
    <>
      <Carousel
        controls={false}
        indicators={false}
        keyboard={false}
        touch={false}
        pause={false}
        className="hero-img-carousel"
      >
        {heroImgs.map((heroImg, index) => {
          return (
            <Carousel.Item
              key={`hero-img-${index}`}
              className="hero-img-carousel__item"
            >
              <Img
                alt="Harshem Family Practice"
                fluid={heroImg.node.childImageSharp.fluid}
                className="hero-img-carousel__item__img"
                objectFit="cover"
                objectPosition="50% 100%"
              />
            </Carousel.Item>
          )
        })}
      </Carousel>
      <div className="landing-overlay">
        <Container fluid className="landing-overlay__content">
          <h1>
            <span>Harshem</span> Family Practice
          </h1>
          <h2>{content.mission}</h2>
          <Logo className="landing-overlay__content__logo" />
        </Container>
      </div>
      <Container fluid className="landing-contact d-flex align-items-center">
        <Container>
          <Row className="d-flex align-items-center">
            <Col xs={12} lg={8}>
              <Row
                xs={1}
                md={2}
                className="landing-contact__office-info-container"
              >
                {offices.map((office, index) => {
                  return (
                    <Col
                      className="landing-contact__office-info-container__office-info"
                      key={`quick-office-${index}`}
                    >
                      <h6 className="mb-1">{office.office}</h6>
                      <div className="d-flex">
                        <p className="mr-3">
                          <FiMapPin />
                          <span>{office.addressLine1}</span>
                          <br />
                          <span className="second-line">
                            {office.addressLine2}
                          </span>
                        </p>
                        <p>
                          <FiPhone />
                          <span>{office.phone}</span>
                        </p>
                      </div>
                    </Col>
                  )
                })}
              </Row>
            </Col>
            <Col className="text-center" xs={12} lg={4}>
              <BorderedLink to="/appointment" style={{ display: "block" }}>
                Request an Appointment
              </BorderedLink>
            </Col>
          </Row>
        </Container>
      </Container>
      <InfoContainer header="About Us">
        <StyledParagraph className="mb-0">{content.desc[0]}</StyledParagraph>
      </InfoContainer>
      <InfoContainer secondary header="Our Offices">
        <Row xs={1} md={2} style={{ marginBottom: "-1rem" }}>
          {offices.map((office, index) => {
            const officeImgArr = officeImgs.filter(
              officeImg => officeImg.node.name === office.shortName
            )
            return (
              <Col key={`office-card-${index}`}>
                <OfficeCard office={office} officeImg={officeImgArr[0]} />
              </Col>
            )
          })}
        </Row>
      </InfoContainer>
    </>
  )
}

export const query = graphql`
  query {
    heroImgs: allFile(
      sort: { order: ASC, fields: name }
      filter: { relativePath: { regex: "/background/" } }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxHeight: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
    officeImgs: allFile(
      sort: { order: ASC, fields: name }
      filter: { relativePath: { regex: "/office/" } }
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
