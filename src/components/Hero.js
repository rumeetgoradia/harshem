import "./styles/Hero.scss"

import { Carousel, Container } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"

import Img from "gatsby-image/withIEPolyfill"
import Logo from "../images/logo/logo.inline.svg"
import React from "react"

export default function Hero({ title }) {
  const data = useStaticQuery(graphql`
    query {
      heroImgs: allFile(
        sort: { order: ASC, fields: name }
        filter: { relativeDirectory: { regex: "/background/" } }
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
  `)
  const { edges: heroImgs } = data.heroImgs
  console.log(heroImgs)
  return (
    <>
      <Carousel
        controls={false}
        indicators={false}
        keyboard={false}
        touch={false}
        pause={false}
        className="hero-img-carousel"
        id="hero-img-carousel"
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
                objectPosition="50% 75%"
              />
            </Carousel.Item>
          )
        })}
      </Carousel>
      <div className="hero-overlay">
        <Container fluid className="hero-overlay__content">
          <h1>{title}</h1>
          <Logo className="hero-overlay__content__logo" />
        </Container>
      </div>
    </>
  )
}
