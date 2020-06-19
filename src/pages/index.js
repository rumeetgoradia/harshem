import "./styles/index.scss"

import { Carousel, Container } from "react-bootstrap"
import React, { useEffect } from "react"

import { BorderedScrollLink } from "../components/styles/StyledClickables"
import Img from "gatsby-image/withIEPolyfill"
import Logo from "../images/logo/logo.inline.svg"
import { graphql } from "gatsby"

export default function Index({ setTitle, data }) {
  const { edges: heroImgs } = data.heroImgs

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
          <h1 style={{ position: "relative", zIndex: 903 }}>
            <span>Harshem</span> Family Practice
          </h1>
          <BorderedScrollLink
            to="landing-about"
            smooth="easeInOutCubic"
            className="--clear"
            style={{ position: "relative", zIndex: 903 }}
          >
            Learn More
          </BorderedScrollLink>
          <Logo className="landing-overlay__content__logo" />
        </Container>
      </div>
      <Container fluid>
        <Container>
          
        </Container>
      </Container>
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
  }
`
