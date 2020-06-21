import "./styles/index.scss"

import { Carousel, Col, Container, Row } from "react-bootstrap"
import { FaFax, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"
import { FiMapPin, FiPhone } from "react-icons/fi"
import {
  InfoContainer,
  StyledParagraph,
} from "../components/styles/StyledContainer"
import React, { useEffect } from "react"

import { BorderedLink } from "../components/styles/StyledClickables"
import Img from "gatsby-image/withIEPolyfill"
import Logo from "../images/logo/logo.inline.svg"
import { graphql } from "gatsby"
import offices from "../data/offices.json"

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
        {/* <Row
          className="mb-3 d-flex align-items-center"
          style={{ flexDirection: "column" }}
        >
          <Col xs={12} className="text-center">
            <p className="mb-2">
              <FaPhoneAlt />
              <span>{office.phone}</span>
              <br />
              <FaFax />
              <span>{office.fax}</span>
            </p>
          </Col>
          <Col xs={12} className="text-center">
            <p className="mb-2">
              <FaMapMarkerAlt />
              <span>{office.addressLine1}</span>
              <br />
              <span className="second-line">{office.addressLine2}</span>
            </p>
          </Col>
        </Row>
        <div className="office-card__content__hours">
          <h3 className="mb-1">
            <em>Hours</em>
          </h3>
          <div className="office-card__content__hours__timings">
            {days.map((day, index) => {
              return (
                <p key={`${office.office} Office ${day} Hours`}>
                  <strong>{day}: </strong>
                  {office.hours[index]}
                </p>
              )
            })}
          </div>
        </div> */}
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
          <h2>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
            numquam commodi eligendi nostrum qui quaerat veritatis! Laboriosam
            id beatae hic!
          </h2>
          {/* <BorderedScrollLink
            to="landing-about"
            smooth="easeInOutCubic"
            className="--clear"
            style={{
              position: "relative",
              zIndex: 903,
              display: "inline-block",
              margin: "0 auto 0 0",
              fontSize: "1.5rem",
            }}
          >
            Learn More
          </BorderedScrollLink> */}
          <Logo className="landing-overlay__content__logo" />
        </Container>
      </div>
      <Container fluid className="landing-contact d-flex align-items-center">
        <Container>
          <Row className="d-flex align-items-center">
            <Col xs={12} md={8}>
              <Row
                xs={1}
                sm={2}
                className="landing-contact__office-info-container"
              >
                <Col className="landing-contact__office-info-container__office-info ">
                  <h6 className="mb-1">Rahway</h6>
                  <div className="d-flex">
                    <p className="mr-3">
                      <FiMapPin />
                      <span>1003 St. Georges Ave.</span>
                      <br />
                      <span className="second-line">Rahway, NJ 07065</span>
                    </p>
                    <p>
                      <FiPhone />
                      <span>(732) 388-3006</span>
                    </p>
                  </div>
                </Col>
                <Col className="landing-contact__office-info-container__office-info">
                  <h6 className="mb-1">Elizabeth</h6>
                  <div className="d-flex">
                    <p className="mr-3">
                      <FiMapPin />
                      <span>700 N. Broad St.</span>
                      <br />
                      <span className="second-line">Elizabeth, NJ 07208</span>
                    </p>
                    <p>
                      <FiPhone />
                      <span>(908) 469-1500</span>
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col className="text-center" xs={12} md={4}>
              <BorderedLink to="/contact" style={{ display: "block" }}>
                Contact Us
              </BorderedLink>
            </Col>
          </Row>
        </Container>
      </Container>
      <InfoContainer header="About Us">
        <>
          <StyledParagraph>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
            facere dolore fugit sunt vel quis, numquam excepturi. Provident,
            facilis libero dicta amet quia maiores ratione neque praesentium non
            culpa ipsa assumenda ducimus quas suscipit deserunt laborum dolorem
            repudiandae. Maxime cum neque quibusdam voluptatum laborum nemo
            optio illum fuga error consequuntur.
          </StyledParagraph>
          <StyledParagraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            quod aspernatur neque deleniti ex obcaecati possimus maxime eius
            ducimus iste accusantium eaque quos praesentium officiis illum,
            vitae molestias a ratione? Nisi reiciendis corporis similique amet
            eligendi, ut nostrum necessitatibus aut. Necessitatibus magnam autem
            rerum quo distinctio minima fugit fuga mollitia temporibus ea animi
            illum aut officiis magni laudantium amet dolores, excepturi
            provident labore. Quo possimus odit ipsum architecto rerum vel, quas
            sunt modi, magni fugiat, unde itaque aperiam?
          </StyledParagraph>
          <StyledParagraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            sed quibusdam minus temporibus maiores consequuntur! Quo et totam,
            non possimus deserunt tenetur iusto aliquam odio recusandae
            consectetur adipisci officiis. Nobis odio repellendus officiis
            dolore quo! Pariatur, sapiente quas. Similique aliquid eaque nulla
            quibusdam dolores quam, iste cumque debitis labore dignissimos
            voluptatum sequi sit quaerat aperiam est nostrum. Sequi cum fuga
            impedit dolor. Vel veritatis laudantium repellat recusandae
            accusantium!
          </StyledParagraph>
        </>
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
            fluid(maxHeight: 800) {
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
