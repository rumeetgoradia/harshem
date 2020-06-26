import { graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import React, { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import Hero from "../components/Hero"
import {
  InfoContainer,
  StyledParagraph,
} from "../components/styles/StyledContainer"
import providers from "../data/providers.json"

// const StyledProviderImg = styled(Img)`
//   img,
//   picture {
//     border-radius: 50%;
//     max-height: 160px;
//     width: auto;
//     border: 5px solid var(--secondary);
//     transition: border-color 0.3s linear;
//     &:hover {
//       border-color: var(--primary);
//     }
//   }
// `

function Providers({ setTitle, data }) {
  const { edges: providerImgs } = data.providerImgs
  const [hovered, setHovered] = useState(-1)

  useEffect(() => {
    setTitle("Our Providers")
  }, [setTitle])

  return (
    <>
      <Hero title="Our Providers" />
      {providers.map((provider, index) => {
        // const providerImgsArr = providerImgs.filter(
        //   providerImg => providerImg.node.name === provider.shortName
        // )
        const providerImgsArr = providerImgs
        return (
          <InfoContainer
            header={provider.name}
            secondary={index % 2 === 1}
            key={`provider-${index}`}
          >
            <Row
              className="provider"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(-1)}
            >
              <Col xs={12} md={8}>
                <StyledParagraph>{provider.bio}</StyledParagraph>
              </Col>
              <Col
                xs={12}
                md={4}
                className="text-center"
                style={{ height: 160 }}
              >
                <Img
                  alt={`Harshem Family Practice — ${provider.name}`}
                  fixed={providerImgsArr[0].node.childImageSharp.fixed}
                  objectFit="cover"
                  objectPosition="50% 50%"
                  className="provider__img"
                  style={{ width: 160, height: 160, textAlign: "center" }}
                  imgStyle={{
                    borderRadius: "50%",
                    border: `5px solid ${
                      hovered === index ? "var(--primary)" : "var(--secondary)"
                    }`,
                    transition: "border-color 0.3s linear",
                  }}
                />
              </Col>
            </Row>
          </InfoContainer>
        )
      })}
    </>
  )
}

export default Providers

export const query = graphql`
  query {
    providerImgs: allFile(
      sort: { order: ASC, fields: name }
      filter: { relativeDirectory: { regex: "/doctor/" } }
    ) {
      edges {
        node {
          childImageSharp {
            fixed(width: 400) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
          name
        }
      }
    }
  }
`
